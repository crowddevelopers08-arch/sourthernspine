import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

/**
 * ✅ Prisma singleton (prevents "too many connections" in Next.js dev)
 */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

interface LeadData {
  name: string;
  phone: string;
  email?: string;
  treatment?: string;
  procedure?: string;
  message?: string;
  city?: string;
  age?: string;
  pincode?: string;
  test?: string;
  source?: string;
  formName?: string;
  consent?: boolean;
  status?: string;
  // Southern Spine specific fields
  appointmentType?: string;
  condition?: string;
  preferredDate?: string;
  preferredTime?: string;
}

function logEnvironmentStatus() {
  console.log("🔍 Environment Check:", {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL ? "***SET***" : "❌ NOT SET",
    TELECRM_API_URL: process.env.TELECRM_API_URL ? "***SET***" : "❌ NOT SET",
    TELECRM_API_KEY: process.env.TELECRM_API_KEY ? "***SET***" : "❌ NOT SET",
  });
}

/**
 * ✅ Normalize phone for TeleCRM
 * - If 10 digits → assume India and prefix 91
 * - If already starts with 91 and 12 digits → keep
 */
function normalizePhoneForTeleCRM(phone: string) {
  const digits = (phone || "").replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  return digits; // keep whatever format (e.g., already includes country code)
}

/**
 * ✅ Decide if TeleCRM truly created/updated a lead
 * We ONLY mark synced=true if TeleCRM returns strong evidence.
 */
function isTelecrmConfirmed(data: any) {
  if (!data) return false;

  // common patterns from CRMs
  if (Array.isArray(data.modifiedLeadIds) && data.modifiedLeadIds.length > 0) return true;
  if (Array.isArray(data.leadIds) && data.leadIds.length > 0) return true;
  if (data.leadId || data.id || data.LeadID) return true;

  const status = String(data.status || "").toLowerCase();
  if (status === "created" || status === "updated" || status === "success") return true;

  // "Accepted" is NOT confirmation (usually queued / async)
  if (String(data.result || "").toLowerCase() === "accepted") return false;

  return false;
}

/**
 * ✅ Save lead to DB
 */
async function saveLeadToDatabase(leadData: LeadData, telecrmResult?: any) {
  console.log("💾 Saving lead to database:", {
    formName: leadData.formName,
    name: leadData.name,
    phone: leadData.phone,
    email: leadData.email,
    // For Southern Spine, appointmentType becomes treatment/procedure
    treatment: leadData.treatment || leadData.test || leadData.appointmentType,
  });

  // Store appointmentType in treatment field for Southern Spine
  const treatmentField = leadData.treatment || leadData.test || leadData.appointmentType || null;
  const procedureField = leadData.procedure || leadData.test || leadData.appointmentType || null;

  const lead = await prisma.lead.create({
    data: {
      name: leadData.name,
      phone: leadData.phone,
      email: leadData.email || null,
      treatment: treatmentField,
      procedure: procedureField,
      message: leadData.message || null,
      city: leadData.city || null,
      age: leadData.age || null,
      pincode: leadData.pincode || null,
      consent: !!leadData.consent,
      source: leadData.source || null,
      formName: leadData.formName || "Website Leads",
      status: leadData.status || "new",

      // ✅ Only true when TeleCRM confirmed
      telecrmSynced: !!telecrmResult?.synced,
      telecrmId: telecrmResult?.leadId || telecrmResult?.id || telecrmResult?.LeadID || null,
    },
  } as any);

  console.log("✅ Lead saved to database:", { 
    id: lead.id, 
    formName: lead.formName, 
    name: lead.name, 
    phone: lead.phone,
    treatment: lead.treatment
  });
  return lead;
}

/**
 * ✅ Send to TeleCRM
 * NOTE: We keep TELECRM_API_URL configurable.
 * IMPORTANT: We only return synced=true when creation/update is confirmed.
 */
async function sendToTeleCRM(leadData: LeadData) {
  if (!process.env.TELECRM_API_URL || !process.env.TELECRM_API_KEY) {
    console.log("ℹ️ TeleCRM not configured, skipping external sync");
    return null;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  const phone = normalizePhoneForTeleCRM(leadData.phone);

  // ✅ Start minimal (most stable). Add extra info as notes.
  const telecrmPayload: any = {
    fields: {
      phone,
      name: leadData.name,
      email: leadData.email || "",
    },
    actions: [],
  };

  // Add form-specific notes
  const systemNotes = [];

  // Form name note
  systemNotes.push(`Form Name: ${leadData.formName || "Website Leads"}`);

  // Treatment/Appointment type note
  if (leadData.formName === 'southernspine' && leadData.appointmentType) {
    systemNotes.push(`Appointment Type: ${leadData.appointmentType}`);
  } else if (leadData.treatment || leadData.test) {
    systemNotes.push(`Treatment Requested: ${leadData.treatment || leadData.test || "Not specified"}`);
  }

  // Southern Spine specific notes
  if (leadData.formName === 'southernspine') {
    if (leadData.condition) systemNotes.push(`Medical Condition: ${leadData.condition}`);
    if (leadData.preferredDate) systemNotes.push(`Preferred Date: ${leadData.preferredDate}`);
    if (leadData.preferredTime) systemNotes.push(`Preferred Time: ${leadData.preferredTime}`);
  }

  // Common notes for all forms
  if (leadData.pincode) systemNotes.push(`Pincode: ${leadData.pincode}`);
  if (leadData.message) systemNotes.push(`Message: ${leadData.message}`);
  if (leadData.city) systemNotes.push(`City: ${leadData.city}`);
  if (leadData.age) systemNotes.push(`Age: ${leadData.age}`);
  systemNotes.push(`Consent Given: ${leadData.consent ? "Yes" : "No"}`);
  systemNotes.push(`Source: ${leadData.source || "Not specified"}`);

  // Convert notes to TeleCRM actions
  telecrmPayload.actions = systemNotes.map(text => ({
    type: "SYSTEM_NOTE",
    text
  }));

  console.log("📤 Sending to TeleCRM:", {
    endpoint: process.env.TELECRM_API_URL,
    formName: leadData.formName,
    payloadPreview: { ...telecrmPayload, fields: { ...telecrmPayload.fields, phone: "***REDACTED***" } },
  });

  try {
    const res = await fetch(process.env.TELECRM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TELECRM_API_KEY}`,
        Accept: "application/json",
        "X-Client-ID": "nextjs-website-integration",
        "X-Form-Type": leadData.formName || "general",
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    // 204 means "no content" — but still not giving a lead id
    if (res.status === 204) {
      console.log("✅ TeleCRM: 204 No Content (cannot confirm lead id)");
      return {
        synced: false, // ❗ don't lie — we can't confirm lead exists in UI
        statusCode: 204,
        result: "NoContent",
        note: "TeleCRM returned 204, no body. Cannot confirm lead creation without a verify API.",
      };
    }

    const text = await res.text();

    if (!text.trim()) {
      console.warn("⚠️ TeleCRM empty response body");
      return { synced: false, statusCode: res.status, note: "Empty response from TeleCRM" };
    }

    // if HTML comes back, it's usually an error page / auth issue
    if (text.trim().startsWith("<!DOCTYPE") || text.trim().startsWith("<html")) {
      console.warn("⚠️ TeleCRM returned HTML (likely error page)");
      return {
        synced: false,
        statusCode: res.status,
        note: "TeleCRM returned HTML error page",
        preview: text.substring(0, 250),
      };
    }

    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      console.warn("⚠️ TeleCRM returned non-JSON response:", text.substring(0, 300));
      return {
        synced: false,
        statusCode: res.status,
        note: "Non-JSON response from TeleCRM",
        preview: text.substring(0, 300),
      };
    }

    const confirmed = res.ok && isTelecrmConfirmed(data);

    console.log("📊 TeleCRM response parsed:", {
      status: res.status,
      ok: res.ok,
      confirmed,
      sample: data,
    });

    return {
      ...data,
      synced: confirmed, // ✅ only true if confirmed
      statusCode: res.status,
      leadId: data?.leadId || data?.id || data?.LeadID || null,
      note:
        confirmed
          ? "TeleCRM lead confirmed"
          : "TeleCRM accepted request but did not confirm lead creation (may be queued / filtered / rejected).",
    };
  } catch (err: any) {
    clearTimeout(timeout);
    console.warn("⚠️ TeleCRM submission failed:", { message: err?.message || String(err) });
    return { synced: false, note: "TeleCRM fetch failed", error: err?.message || String(err) };
  }
}

/**
 * ✅ POST /api/leads
 */
export async function POST(request: NextRequest) {
  logEnvironmentStatus();

  let data: Partial<LeadData> = {};

  try {
    data = await request.json();

    console.log("📨 Received lead submission:", {
      formName: data.formName,
      name: data.name,
      phoneMasked: data.phone ? data.phone.substring(0, 3) + "****" + data.phone.substring(Math.max(0, data.phone.length - 3)) : "N/A",
      appointmentType: data.appointmentType,
      email: data.email,
    });

    if (!data.name || !data.phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields", details: "Please provide name and phone number" },
        { status: 400 }
      );
    }

    const validatedData = data as LeadData;

    // ✅ TeleCRM sync (optional)
    let telecrmResponse: any = null;
    if (process.env.TELECRM_API_URL && process.env.TELECRM_API_KEY) {
      console.log("🚀 Attempting TeleCRM sync...");
      telecrmResponse = await sendToTeleCRM(validatedData);
    } else {
      console.log("⏭️ TeleCRM not configured, skipping sync");
    }

    // ✅ Save to DB (mandatory)
    const dbLead = await saveLeadToDatabase(validatedData, telecrmResponse);

    const responseData = {
      success: true,
      leadId: dbLead.id,
      databaseSaved: true,
      telecrmSynced: !!telecrmResponse?.synced,
      telecrmResponse,
      timestamp: new Date().toISOString(),
      formName: validatedData.formName || "Website Leads",
      message: "Thank you! We have received your request and will contact you soon.",
    };

    console.log("✅ Final response:", {
      leadId: dbLead.id,
      telecrmSynced: !!telecrmResponse?.synced,
      telecrmId: telecrmResponse?.leadId || telecrmResponse?.id || null,
    });

    return NextResponse.json(responseData, { status: 200 });
  } catch (error: any) {
    console.error("❌ Lead submission error:", { message: error?.message || String(error) });
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process your request",
        details: "Please try again or contact support",
        referenceId: `ERR-${Date.now()}`,
        formName: data?.formName || "Website Leads",
      },
      { status: 500 }
    );
  }
}

/**
 * ✅ GET /api/leads
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status");
    const formName = searchParams.get("formName");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "100", 10);
    const skip = (page - 1) * limit;

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { treatment: { contains: search, mode: "insensitive" } },
        { message: { contains: search, mode: "insensitive" } },
        { pincode: { contains: search, mode: "insensitive" } },
        { city: { contains: search, mode: "insensitive" } },
      ];
    }

    if (status && status !== "all") where.status = status;
    if (formName && formName !== "all") where.formName = formName;

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({ 
        where, 
        orderBy: { createdAt: "desc" }, 
        skip, 
        take: limit 
      }),
      prisma.lead.count({ where }),
    ]);

    return NextResponse.json(
      {
        success: true,
        leads: leads.map((lead: any) => ({
          id: lead.id,
          name: lead.name,
          phone: lead.phone,
          email: lead.email,
          treatment: lead.treatment,
          procedure: lead.procedure,
          message: lead.message,
          city: lead.city,
          age: lead.age,
          pincode: lead.pincode,
          consent: lead.consent,
          source: lead.source,
          formName: lead.formName,
          status: lead.status,
          telecrmSynced: lead.telecrmSynced,
          telecrmId: lead.telecrmId,
          createdAt: lead.createdAt.toISOString(),
          updatedAt: lead.updatedAt.toISOString(),
        })),
        pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leads", details: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

/**
 * ✅ PATCH /api/leads/[id] - Update lead status
 */
export async function PATCH(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const leadId = url.pathname.split('/').pop();
    
    if (!leadId) {
      return NextResponse.json(
        { success: false, error: "Lead ID is required" },
        { status: 400 }
      );
    }

    const data = await request.json();
    
    // Validate status
    const validStatuses = ['new', 'contacted', 'scheduled', 'converted', 'lost'];
    if (data.status && !validStatuses.includes(data.status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status value" },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.update({
      where: { id: leadId },
      data: {
        ...(data.status && { status: data.status }),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      lead: {
        id: lead.id,
        name: lead.name,
        status: lead.status,
        updatedAt: lead.updatedAt.toISOString(),
      }
    }, { status: 200 });
  } catch (error: any) {
    console.error("Error updating lead:", error);
    
    // Handle Prisma errors
    if (error.code === 'P2025') {
      return NextResponse.json(
        { success: false, error: "Lead not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "Failed to update lead", details: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
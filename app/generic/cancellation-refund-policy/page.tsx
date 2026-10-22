import type { Metadata } from "next";
import { ReceiptText } from "lucide-react";
import LegalPage from "@/component/legal/legal-page";
import { refundSections } from "@/component/legal/content";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Southern Spine",
  description: "How to reschedule or cancel a Southern Spine appointment and when refunds apply.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      basePath="/generic"
      current="refund"
      title="Cancellation & Refund Policy"
      intro="How to reschedule or cancel your appointment, and when a refund applies for consultations, sessions and packages."
      icon={ReceiptText}
      sections={refundSections}
    />
  );
}

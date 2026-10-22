import type { Metadata } from "next";
import { FileText } from "lucide-react";
import LegalPage from "@/component/legal/legal-page";
import { termsSections } from "@/component/legal/content";

export const metadata: Metadata = {
  title: "Terms & Conditions | Southern Spine",
  description: "Terms for using the Southern Spine website and booking consultations and treatment in Hyderabad.",
};

export default function TermsPage() {
  return (
    <LegalPage
      basePath=""
      current="terms"
      title="Terms & Conditions"
      intro="These terms explain how appointments, pricing, treatment and use of this website work at Southern Spine, Hyderabad."
      icon={FileText}
      sections={termsSections}
    />
  );
}

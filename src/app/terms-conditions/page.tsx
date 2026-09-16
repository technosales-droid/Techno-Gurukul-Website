import LegalPageMain from "@/components/main/LegalPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | TechnoGurukul",
};

export default function TermsPage() {
  return <LegalPageMain title="Terms & Conditions" />;
}

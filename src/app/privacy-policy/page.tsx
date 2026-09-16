import LegalPageMain from "@/components/main/LegalPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TechnoGurukul",
};

export default function PrivacyPolicyPage() {
  return <LegalPageMain title="Privacy Policy" />;
}

import ComingSoonMain from "@/components/main/ComingSoonMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | TechnoGurukul",
  description: "Apply for the next Digital Marketing Professional Program batch at TechnoGurukul, Nashik.",
};

export default function AdmissionsPage() {
  return (
    <ComingSoonMain
      title="Admissions"
      description="Enquire, understand, choose, begin — the 4-step admissions flow is being built next."
    />
  );
}

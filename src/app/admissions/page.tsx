import AdmissionsPageMain from "@/components/main/AdmissionsPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | TechnoGurukul",
  description:
    "Apply for the next Digital Marketing Professional Program batch at TechnoGurukul, Nashik.",
};

export default function AdmissionsPage() {
  return <AdmissionsPageMain />;
}

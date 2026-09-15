import ComingSoonMain from "@/components/main/ComingSoonMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | TechnoGurukul",
  description: "Answers to common questions about the TechnoGurukul Digital Marketing Program.",
};

export default function FaqPage() {
  return (
    <ComingSoonMain
      title="FAQs"
      description="Answers about the program, admissions and learning model are being added here next."
    />
  );
}

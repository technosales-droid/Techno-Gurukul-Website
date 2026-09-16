import FaqPageMain from "@/components/main/FaqPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | TechnoGurukul",
  description:
    "Answers to common questions about the TechnoGurukul Digital Marketing Program.",
};

export default function FaqPage() {
  return <FaqPageMain />;
}

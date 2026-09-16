import CurriculumPageMain from "@/components/main/CurriculumPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum | TechnoGurukul",
  description:
    "Everything you need to think, create, launch and measure — the full TechnoGurukul digital marketing curriculum.",
};

export default function CurriculumPage() {
  return <CurriculumPageMain />;
}

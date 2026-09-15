import TeamMain from "@/components/main/TeamMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Team | Eduan - School, University & Online Education Next.js Template",
  description: "Eduan is a modern Next.js template for schools, universities, online courses, and eLearning platforms.",
};
export default function Home() {
  return <TeamMain />;
}

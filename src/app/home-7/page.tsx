import HomeSevenMain from "@/components/main/HomeSevenMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Seven | Eduan - School, University & Online Education Next.js Template",
  description: "Eduan is a modern Next.js template for schools, universities, online courses, and eLearning platforms.",
};

export default function Home() {
  return <HomeSevenMain />;
}

import AboutPageMain from "@/components/main/AboutPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | TechnoGurukul",
  description:
    "TechnoGurukul is a skill development academy based in Nashik, Maharashtra, built around practical, real-world learning.",
};

export default function AboutPage() {
  return <AboutPageMain />;
}

import HomeMain from "@/components/main/HomeMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechnoGurukul — Practical Digital Marketing Academy, Nashik",
  description:
    "TechnoGurukul is a practical digital marketing academy in Nashik where students learn by working on real campaigns, real businesses and real marketing challenges.",
};

export default function Home() {
  return <HomeMain />;
}

import HowWeTeachPageMain from "@/components/main/HowWeTeachPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Teach Digital Marketing | TechnoGurukul Nashik",
  description:
    "Discover TechnoGurukul's practical learning methodology for digital marketing, including real projects, client exposure, campaigns, collaboration and mentorship.",
};

export default function HowWeTeachPage() {
  return <HowWeTeachPageMain />;
}

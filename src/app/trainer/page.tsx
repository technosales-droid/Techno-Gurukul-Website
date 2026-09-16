import TrainerPageMain from "@/components/main/TrainerPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trainer | TechnoGurukul",
  description: "Learn from Ebrahim Shakir, Director & Lead Trainer at TechnoGurukul.",
};

export default function TrainerPage() {
  return <TrainerPageMain />;
}

import CareerPathsPageMain from "@/components/main/CareerPathsPageMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Paths | TechnoGurukul",
  description:
    "Where digital marketing can take you — employment, freelancing or entrepreneurship.",
};

export default function CareerPathsPage() {
  return <CareerPathsPageMain />;
}

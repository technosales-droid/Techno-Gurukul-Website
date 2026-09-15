import ComingSoonMain from "@/components/main/ComingSoonMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | TechnoGurukul",
  description:
    "The Digital Marketing Professional Program at TechnoGurukul — practical, industry-oriented training in Nashik.",
};

export default function ProgramsPage() {
  return (
    <ComingSoonMain
      title="Programs"
      description="The Digital Marketing Professional Program page is being built next — duration, curriculum and outcomes will live here."
    />
  );
}

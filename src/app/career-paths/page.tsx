import ComingSoonMain from "@/components/main/ComingSoonMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Paths | TechnoGurukul",
  description:
    "Where digital marketing can take you — employment, freelancing or entrepreneurship.",
};

export default function CareerPathsPage() {
  return (
    <ComingSoonMain
      title="Career Paths"
      description="Get Hired, Go Freelance, or Build Your Business — the three career directions page is being built next."
    />
  );
}

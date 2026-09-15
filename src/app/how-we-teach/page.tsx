import ComingSoonMain from "@/components/main/ComingSoonMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Teach | TechnoGurukul",
  description:
    "TechnoGurukul's practical learning methodology — real projects, client exposure and mentorship.",
};

export default function HowWeTeachPage() {
  return (
    <ComingSoonMain
      title="How We Teach"
      description="Our teaching methodology — the 60% doing / 25% thinking / 15% tools model — is being built next."
    />
  );
}

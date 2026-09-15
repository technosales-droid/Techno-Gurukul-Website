import SignUpMain from "@/components/main/SignUpMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Sign Up | Eduan - School, University & Online Education Next.js Template",
  description: "Eduan is a modern Next.js template for schools, universities, online courses, and eLearning platforms.",
};
export default function Home() {
  return <SignUpMain />;
}

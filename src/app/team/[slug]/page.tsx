import TeamDetailMain from "@/components/main/TeamDetailMain";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Team Details | Eduan - School, University & Online Education Next.js Template",
  description: "Eduan is a modern Next.js template for schools, universities, online courses, and eLearning platforms.",
};
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <TeamDetailMain slug={slug} />;
}

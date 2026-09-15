import type { Metadata } from "next";
import BlogDetailMain from "@/components/main/BlogDetailMain";

export const metadata: Metadata = {
  title:
    "Blog Details | Eduan - School University elearning and Online education website Next.js Template",
  description: "Developed by Azizur Rahman",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  return <BlogDetailMain slug={slug} />;
}

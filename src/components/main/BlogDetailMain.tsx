"use client";
import { useMemo } from "react";
import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainLayout from "@/components/layout/MainLayout";
import { blogPosts } from "@/data";
import ErrorSection from "@/components/error/ErrorSection";

interface Props {
  slug: string;
}

const BlogDetailMain = ({ slug }: Props) => {
  const currentIndex = useMemo(
    () => blogPosts.findIndex((post) => post.slug === slug),
    [slug]
  );

  const blogInfo = useMemo(
    () => (currentIndex !== -1 ? blogPosts[currentIndex] : null),
    [currentIndex]
  );

  return (
    <MainLayout>
      <BreadcrumbSection title={blogInfo ? "Blog Details" : "404"} />
      {blogInfo ? (
        <BlogDetailSection blogInfo={blogInfo} currentIndex={currentIndex} />
      ) : (
        <ErrorSection />
      )}
    </MainLayout>
  );
};

export default BlogDetailMain;

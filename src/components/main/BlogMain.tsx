import BlogMainArea from "@/components/blog/BlogMainArea";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainLayout from "@/components/layout/MainLayout";

const BlogMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Blog Grid" />
      <BlogMainArea />
    </MainLayout>
  );
};

export default BlogMain;

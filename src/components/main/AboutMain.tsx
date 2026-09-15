import AboutSection from "@/components/about/AboutSection";
import BlogSection2 from "@/components/blog/BlogSection2";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainLayout from "@/components/layout/MainLayout";
import TeamSection from "@/components/team/TeamSection";

const AboutMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="About Us" />
      <AboutSection />
      <TeamSection />
      <BlogSection2 />
    </MainLayout>
  );
};

export default AboutMain;

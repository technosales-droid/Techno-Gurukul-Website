import AboutSection from "@/components/about/AboutSection";
import BannerSection from "@/components/banner/BannerSection";
import BlogSection from "@/components/blog/BlogSection";
import BrandSection from "@/components/brands/BrandSection";
import CategorySection from "@/components/category/CategorySection";
import CounterSection from "@/components/counter/CounterSection";
import CourseSection from "@/components/course/CourseSection";
import EventSection from "@/components/event/EventSection";
import MainLayout from "@/components/layout/MainLayout";
import TestimonySection from "@/components/testimony/TestimonySection";

const HomeOneMain = () => {
  return (
    <MainLayout>
      <BannerSection />
      <BrandSection style="pt-115" />
      <CategorySection />
      <CourseSection />
      <AboutSection />
      <EventSection />
      <TestimonySection />
      <CounterSection />
      <BlogSection />
    </MainLayout>
  );
};

export default HomeOneMain;

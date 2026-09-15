import AboutSection4 from "@/components/about/AboutSection4";
import BannerSection4 from "@/components/banner/BannerSection4";
import BlogSection4 from "@/components/blog/BlogSection4";
import CategorySection4 from "@/components/category/CategorySection4";
import CourseSection4 from "@/components/course/CourseSection4";
import CtaSection from "@/components/cta/CtaSection";
import CtaSection3 from "@/components/cta/CtaSection3";
import FaqSection from "@/components/faq/FaqSection";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection2 from "@/components/header/HeaderSection2";
import MobileMenuModal from "@/components/modal/MobileMenuModal";
import TestimonySection from "@/components/testimony/TestimonySection";

const HomeFourMain = () => {
  return (
    <>
      <HeaderSection2 variant />
      <main>
        <BannerSection4 />
        <AboutSection4 />
        <CategorySection4 />
        <CourseSection4 />
        <CtaSection3 />
        <FaqSection />
        <TestimonySection variant />
        <BlogSection4 />
        <CtaSection style="h4_cta-area" />
      </main>
      <FooterSection style="h4_footer-area" whiteLogo />
      {/* Modal */}
      <MobileMenuModal />
    </>
  );
};

export default HomeFourMain;

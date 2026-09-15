import AboutSection3 from "@/components/about/AboutSection3";
import BannerSection3 from "@/components/banner/BannerSection3";
import BlogSection3 from "@/components/blog/BlogSection3";
import CategorySection3 from "@/components/category/CategorySection3";
import AdmissionSection from "@/components/admission/AdmissionSection";
import CourseSection3 from "@/components/course/CourseSection3";
import CtaSection from "@/components/cta/CtaSection";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection3 from "@/components/header/HeaderSection3";
import MobileMenuModal from "@/components/modal/MobileMenuModal";
import TeamSection2 from "@/components/team/TeamSection2";
import TestimonySection2 from "@/components/testimony/TestimonySection2";

const HomeThreeMain = () => {
  return (
    <>
      <HeaderSection3 />
      <main>
        <BannerSection3 />
        <AboutSection3 />
        <CategorySection3 />
        <CourseSection3 />
        <AdmissionSection />
        <TeamSection2 />
        <TestimonySection2 />
        <BlogSection3 />
        <CtaSection style="h3_cta-area" />
      </main>
      <FooterSection style="h3_footer-area" whiteLogo />
      {/* Modal */}
      <MobileMenuModal />
    </>
  );
};

export default HomeThreeMain;

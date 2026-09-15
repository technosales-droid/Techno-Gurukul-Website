import AboutSection5 from "@/components/about/AboutSection5";
import AdmissionSection2 from "@/components/admission/AdmissionSection2";
import BannerSection6 from "@/components/banner/BannerSection6";
import BlogSection5 from "@/components/blog/BlogSection5";
import BrandSection from "@/components/brands/BrandSection";
import CampusSection from "@/components/campus/CampusSection";
import CourseSection5 from "@/components/course/CourseSection5";
import CtaSection4 from "@/components/cta/CtaSection4";
import EventSection2 from "@/components/event/EventSection2";
import FooterSection2 from "@/components/footer/FooterSection2";
import HeaderSection3 from "@/components/header/HeaderSection3";
import MobileMenuModal from "@/components/modal/MobileMenuModal";
import PricingSection2 from "@/components/pricing/PricingSection2";
import ResearchSection from "@/components/research/ResearchSection";
import TeamSection2 from "@/components/team/TeamSection2";
import TestimonySection3 from "@/components/testimony/TestimonySection3";

const HomeSixMain = () => {
  return (
    <>
      <HeaderSection3 variant="style-3" />
      <main>
        <BannerSection6 />
        <AboutSection5 />
        <CourseSection5 />
        <ResearchSection />
        <AdmissionSection2 />
        <PricingSection2 />
        <CampusSection />
        <EventSection2 variant />
        <TeamSection2 variant />
        <BlogSection5 variant />
        <TestimonySection3 />
        <BrandSection variant style="h6_brand-area pt-120 pb-120" />
        <CtaSection4 />
      </main>
      <FooterSection2 logo="/assets/img/logo/logo.png" />
      {/* Modal */}
      <MobileMenuModal />
    </>
  );
};

export default HomeSixMain;

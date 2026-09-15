import AboutSection2 from "@/components/about/AboutSection2";
import BannerSection2 from "@/components/banner/BannerSection2";
import BlogSection2 from "@/components/blog/BlogSection2";
import CategorySection2 from "@/components/category/CategorySection2";
import CounterSection from "@/components/counter/CounterSection";
import CourseSection2 from "@/components/course/CourseSection2";
import CtaSection from "@/components/cta/CtaSection";
import CtaSection2 from "@/components/cta/CtaSection2";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection2 from "@/components/header/HeaderSection2";
import MobileMenuModal from "@/components/modal/MobileMenuModal";
import VideoModal from "@/components/modal/VideoModal";
import PricingSection from "@/components/pricing/PricingSection";
import TeamSection from "@/components/team/TeamSection";

const HomeTwoMain = () => {
  return (
    <>
      <HeaderSection2 />
      <main>
        <BannerSection2 />
        <CounterSection style="pt-120 pb-110" />
        <CategorySection2 />
        <CourseSection2 />
        <AboutSection2 />
        <VideoModal />
        <CtaSection2 />
        <PricingSection />
        <TeamSection />
        <BlogSection2 />
        <CtaSection />
      </main>
      <FooterSection style="h2_footer-area" whiteLogo />
      {/* Modals */}
      <MobileMenuModal />
    </>
  );
};

export default HomeTwoMain;

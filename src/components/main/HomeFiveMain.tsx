import AboutSection4 from "@/components/about/AboutSection4";
import BannerSection5 from "@/components/banner/BannerSection5";
import BlogSection5 from "@/components/blog/BlogSection5";
import CategorySection5 from "@/components/category/CategorySection5";
import CourseSection from "@/components/course/CourseSection";
import CtaSection from "@/components/cta/CtaSection";
import EventSection2 from "@/components/event/EventSection2";
import FeatureSection from "@/components/feature/FeatureSection";
import FooterSection from "@/components/footer/FooterSection";
import HeaderSection3 from "@/components/header/HeaderSection3";
import MobileMenuModal from "@/components/modal/MobileMenuModal";
import VideoModal from "@/components/modal/VideoModal";
import TeamSection3 from "@/components/team/TeamSection3";
import VideoSection from "@/components/video/VideoSection";

const HomeFiveMain = () => {
  return (
    <>
      <HeaderSection3 variant="style-2" />
      <main>
        <BannerSection5 />
        <FeatureSection />
        <CategorySection5 />
        <CourseSection variant />
        <AboutSection4 variant />
        <VideoSection />
        <TeamSection3 style="pt-135 pb-140" />
        <EventSection2 />
        <BlogSection5 />
        <CtaSection style="h5_cta-area" />
      </main>
      <FooterSection style="h5_footer-area" whiteLogo />
      {/* Modal */}
      <VideoModal />
      <MobileMenuModal />
    </>
  );
};

export default HomeFiveMain;

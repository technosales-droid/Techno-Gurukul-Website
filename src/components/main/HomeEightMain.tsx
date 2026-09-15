import HeaderSection5 from "../header/HeaderSection5";
import MobileMenuModal from "../modal/MobileMenuModal";
import VideoModal from "../modal/VideoModal";
import BannerSection8 from "../banner/BannerSection8";
import CategorySection6 from "../category/CategorySection6";
import AboutSection7 from "../about/AboutSection7";
import CounterSection3 from "../counter/CounterSection3";
import CourseSection6 from "../course/CourseSection6";
import CareerSection from "../career/CareerSection";
import TeamSection4 from "../team/TeamSection4";
import TestimonySection4 from "../testimony/TestimonySection4";
import BlogSection6 from "../blog/BlogSection6";
import InstagramSection from "../socials/InstagramSection";
import BrandSection from "../brands/BrandSection";
import CtaSection4 from "../cta/CtaSection4";
import FooterSection2 from "../footer/FooterSection2";

const HomeEightMain = () => {
  return (
    <>
      <HeaderSection5 />
      <main>
        <BannerSection8 />
        <CategorySection6 />
        <AboutSection7 />
        <CounterSection3 />
        <CourseSection6 />
        <CareerSection />
        <TeamSection4 />
        <TestimonySection4 />
        <BlogSection6 />
        <InstagramSection />
        <BrandSection variant style="h6_brand-area pt-120" />
        <CtaSection4 style="pt-120" />
      </main>
      <FooterSection2
        logo="/assets/img/logo/logo-violet.png"
        style="h8_footer-area"
      />
      {/* Modal */}
      <MobileMenuModal />
      <VideoModal />
    </>
  );
};

export default HomeEightMain;

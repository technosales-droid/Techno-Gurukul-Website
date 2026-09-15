import AboutSection8 from "../about/AboutSection8";
import BannerSection10 from "../banner/BannerSection10";
import CategorySection7 from "../category/CategorySection7";
import CourseSection7 from "../course/CourseSection7";
import CtaSection5 from "../cta/CtaSection5";
import HeaderSection4 from "../header/HeaderSection4";
import MobileMenuModal from "../modal/MobileMenuModal";
import TeamSection3 from "../team/TeamSection3";
import EventSection3 from "../event/EventSection3";
import TestimonySection6 from "../testimony/TestimonySection6";
import BrandSection from "../brands/BrandSection";
import BlogSection8 from "../blog/BlogSection8";
import ContactSection from "../contact/ContactSection";
import CounterSection4 from "../counter/CounterSection4";
import FooterSection2 from "../footer/FooterSection2";

const HomeTenMain = () => {
  return (
    <>
      <HeaderSection4 variant />
      <main>
        <BannerSection10 />
        <AboutSection8 />
        <CategorySection7 />
        <CourseSection7 />
        <CtaSection5 />
        <TeamSection3 style="pt-115 pb-120" />
        <EventSection3 />
        <TestimonySection6 />
        <BrandSection style="h6_brand-area pb-120" variant />
        <BlogSection8 />
        <ContactSection />
        <CounterSection4 />
      </main>
      <FooterSection2
        logo="/assets/img/logo/logo-violet.png"
        style="h10_footer-area"
        noCta
      />
      {/* Modal */}
      <MobileMenuModal />
    </>
  );
};

export default HomeTenMain;

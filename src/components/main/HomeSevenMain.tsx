import MobileMenuModal from "../modal/MobileMenuModal";
import HeaderSection4 from "../header/HeaderSection4";
import BannerSection7 from "../banner/BannerSection7";
import AboutSection6 from "../about/AboutSection6";
import VideoModal from "../modal/VideoModal";
import ProgramSection from "../program/ProgramSection";
import ApplySection from "../admission/ApplySection";
import CounterSection2 from "../counter/CounterSection2";
import CampusSection from "../campus/CampusSection";
import PricingSection2 from "../pricing/PricingSection2";
import ScholarshipSection from "../scholarship/ScholarshipSection";
import BlogSection5 from "../blog/BlogSection5";
import EventSection from "../event/EventSection";
import TeamSection2 from "../team/TeamSection2";
import TestimonySection3 from "../testimony/TestimonySection3";
import CtaSection4 from "../cta/CtaSection4";
import FooterSection2 from "../footer/FooterSection2";

const HomeSevenMain = () => {
  return (
    <>
      <HeaderSection4 />
      <main>
        <BannerSection7 />
        <AboutSection6 />
        <ProgramSection />
        <ApplySection />
        <CounterSection2 />
        <CampusSection />
        <PricingSection2 />
        <ScholarshipSection />
        <BlogSection5 variant />
        <EventSection variant />
        <TeamSection2 variant />
        <TestimonySection3 />
        <CtaSection4 style="pt-120" />
      </main>
      <FooterSection2 logo="/assets/img/logo/logo-red.png" />
      {/* Modal */}
      <MobileMenuModal />
      <VideoModal />
    </>
  );
};

export default HomeSevenMain;

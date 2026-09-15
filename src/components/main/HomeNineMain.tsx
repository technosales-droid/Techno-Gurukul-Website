
import MobileMenuModal from "../modal/MobileMenuModal";
import HeaderSection6 from "../header/HeaderSection6";
import BannerSection9 from "../banner/BannerSection9";
import FaqSection2 from "../faq/FaqSection2";
import ChooseUsSection from "../choose/ChooseUsSection";
import TeamSection5 from "../team/TeamSection5";
import TestimonySection5 from "../testimony/TestimonySection5";
import BlogSection7 from "../blog/BlogSection7";
import CtaSection4 from "../cta/CtaSection4";
import FooterSection2 from "../footer/FooterSection2";

const HomeNineMain = () => {
  return (
    <>
      <HeaderSection6 />
      <main>
        <BannerSection9 />
        <FaqSection2 />
        <ChooseUsSection />
        <TeamSection5 />
        <TestimonySection5 />
        <BlogSection7 />
        <CtaSection4 style="pt-90 h9_cta-area" />
      </main>
      <FooterSection2
        logo="/assets/img/logo/logo-blue.png"
        style="h9_footer-area"
      />
      {/* Modal */}
      <MobileMenuModal />
    </>
  );
};

export default HomeNineMain;

import HeroSection from "@/components/hero/HeroSection";
import PracticalLearningSection from "@/components/practical-learning/PracticalLearningSection";
import WhyTechnoGurukulSection from "@/components/why-technogurukul/WhyTechnoGurukulSection";
import ApproachSection from "@/components/approach/ApproachSection";
import CareerDirectionsSection from "@/components/career-directions/CareerDirectionsSection";
import ClosingCtaSection from "@/components/closing-cta/ClosingCtaSection";
import MainLayout from "@/components/layout/MainLayout";

/**
 * Homepage — matches the approved TechnoGurukul Web Copy document's
 * exact 6-section structure: Hero, Knowing-vs-Doing, Why
 * TechnoGurukul, Learning Philosophy, Career Options, Closing CTA.
 *
 * ProgramsSection (Task 1.4) and HowWeTeachSection (Task 1.6) are no
 * longer rendered here — they weren't part of the document's
 * homepage spec. Kept as unused reference; ProgramsSection's panel
 * is reused on the /programs page itself, where its content (program
 * facts) actually belongs.
 */
const HomeMain = () => {
  return (
    <MainLayout>
      <HeroSection />
      <PracticalLearningSection />
      <WhyTechnoGurukulSection />
      <ApproachSection />
      <CareerDirectionsSection />
      <ClosingCtaSection />
    </MainLayout>
  );
};

export default HomeMain;

import HeroSection from "@/components/hero/HeroSection";
import PracticalLearningSection from "@/components/practical-learning/PracticalLearningSection";
import ProgramsSection from "@/components/programs/ProgramsSection";
import MainLayout from "@/components/layout/MainLayout";

/**
 * Homepage is being rebuilt section-by-section (Task 1.x series).
 * Only the approved Navbar + Hero + this section are active right
 * now — the old Eduan CTA band and footer are intentionally hidden
 * until their own tasks. See src/components/main/HomeOneMain.tsx for
 * the original template homepage this replaced (kept as reference,
 * no longer rendered from any route).
 */
const HomeMain = () => {
  return (
    <MainLayout showCta={false} showFooter={false}>
      <HeroSection />
      <PracticalLearningSection />
      <ProgramsSection />
    </MainLayout>
  );
};

export default HomeMain;

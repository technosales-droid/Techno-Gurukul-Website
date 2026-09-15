import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainLayout from "@/components/layout/MainLayout";
import TeamSection from "@/components/team/TeamSection";

const TeamMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Our Professor" />
      <TeamSection variant />
    </MainLayout>
  );
};

export default TeamMain;

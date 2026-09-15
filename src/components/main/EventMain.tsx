import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainEventSection from "@/components/event/MainEventSection";
import MainLayout from "@/components/layout/MainLayout";

const EventMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Upcoming Events" />
      <MainEventSection />
    </MainLayout>
  );
};

export default EventMain;

import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CourseMainSection from "@/components/course/CourseMainSection";
import MainLayout from "@/components/layout/MainLayout";
const CourseOneMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Courses" />
      <CourseMainSection />
    </MainLayout>
  );
};

export default CourseOneMain;

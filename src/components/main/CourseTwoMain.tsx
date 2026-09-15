import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CourseMainSection from "@/components/course/CourseMainSection";
import MainLayout from "@/components/layout/MainLayout";

const CourseTwoMain = () => {
  return (
    <MainLayout>
      <BreadcrumbSection title="Courses" />
      <CourseMainSection variant />
    </MainLayout>
  );
};

export default CourseTwoMain;

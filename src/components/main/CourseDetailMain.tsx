"use client";
import ErrorSection from "@/components/error/ErrorSection";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import CourseDetailSection from "@/components/course/CourseDetailSection";
import MainLayout from "@/components/layout/MainLayout";
import { useMemo } from "react";
import { courses } from "@/data";
interface Props {
  slug: string;
}
const CourseDetailMain = ({ slug }: Props) => {
  const currentIndex = useMemo(
    () => courses.findIndex((item) => item.slug === slug),
    [slug]
  );

  const courseInfo = useMemo(
    () => (currentIndex !== -1 ? courses[currentIndex] : null),
    [currentIndex]
  );
  return (
    <MainLayout>
      <BreadcrumbSection title={courseInfo ? "Course Details" : "404"} />
      {courseInfo ? (
        <CourseDetailSection courseInfo={courseInfo} />
      ) : (
        <ErrorSection />
      )}
    </MainLayout>
  );
};

export default CourseDetailMain;

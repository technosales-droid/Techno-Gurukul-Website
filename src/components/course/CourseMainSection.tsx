"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const SubjectSelect = dynamic(() => import("../utils/SubjectSelect"), {
  ssr: false,
});

import { useCustomContext } from "@/context/context";
import CourseSearchForm from "../form/CourseSearchForm";
import CoursePaginationSection from "./CoursePaginationSection";
import CourseListSection from "./CourseListSection";

interface Props {
  variant?: boolean;
}

const CourseMainSection = ({ variant }: Props) => {
  const { filteredCourses, currentPage, handleCategoryChange, category } =
    useCustomContext();

  const ITEMS_PER_PAGE = variant ? 6 : 8;

  // Memoize the pagination slice to prevent unnecessary array operations
  const paginatedCourses = useMemo(() => {
    return filteredCourses.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [filteredCourses, currentPage, ITEMS_PER_PAGE]);

  return (
    <section className="innerPage_course-area pt-120 pb-90">
      <div className="container">
        {/* Top filter row */}
        <div className="innerPage_course-top mb-30">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 col-md-4">
              <div className="innerPage_course-left mb-20">
                <p>
                  Showing {paginatedCourses.length} of {filteredCourses.length}{" "}
                  results
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-md-8">
              <div className="innerPage_course-right mb-20">
                <div className="innerPage_course-category">
                  <SubjectSelect
                    variant
                    value={category}
                    onChange={handleCategoryChange}
                  />
                </div>
                <div className="innerPage_course-search">
                  <CourseSearchForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course grid */}
        <CourseListSection
          paginatedCourses={paginatedCourses}
          variant={variant ? true : false}
        />

        {/* Pagination */}
        <CoursePaginationSection ITEMS_PER_PAGE={ITEMS_PER_PAGE} />
      </div>
    </section>
  );
};

export default CourseMainSection;

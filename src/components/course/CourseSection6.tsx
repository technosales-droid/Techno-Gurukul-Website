"use client";
import { useState } from "react";
import CourseSectionSixContent from "./CourseSectionSixContent";
import Image from "next/image";
import { homeEightCourses } from "@/data";

const CourseSection6 = () => {
  const [isActiveAccordion, setIsActiveAccordion] = useState<number>(1);
  const toggleAccordion = (id: number) => {
    setIsActiveAccordion(id);
  };
  return (
    <section className="h8_course-area pt-130 pb-120 ">
      <Image
        width={185}
        height={50}
        src="/assets/img/course/9/shape.png"
        alt="img"
        className="h8_course-shape"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="section-area-8">
              <h2 className="section-title mb-0">Our Featured Courses</h2>
            </div>
          </div>
        </div>
        <div className="h8_course-active pt-50">
          <div className="h8_course-wrap horizontal-accordion">
            {homeEightCourses.map((course) => (
              <div
                className={`h8_course-item h8_course_common ${isActiveAccordion === course.id ? "expand" : "small"
                  } h8_item_${course.id}`}
                key={course.id}
              >
                <CourseSectionSixContent
                  id={course.id}
                  title={course.title}
                  toggleAccordion={toggleAccordion}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection6;

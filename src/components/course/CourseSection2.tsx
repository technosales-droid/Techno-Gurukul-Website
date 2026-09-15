"use client";
import { useState } from "react";
import CourseContents2 from "./CourseContents2";
import Image from "next/image";

const courseCategories = ["all", "web", "marketing", "lifestyle", "graphic"];

const CourseSection2 = () => {
  const [activeCourse, setActiveCourse] = useState<string>("all");

  const toggleCourse = (course: string) => {
    setActiveCourse(course);
  };

  return (
    <section className="h2_course-area pt-110 pb-120 overflow-hidden">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-5 col-lg-6">
            <div className="section-area-2">
              <h2 className="section-title mb-50">
                Browse Our <br /> Exclusive{" "}
                <span>
                  Courses{" "}
                  <Image
                    width={178}
                    height={9}
                    src="/assets/img/banner/2/line.png"
                    alt="img"
                  />
                </span>
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="h2_course-tab mb-40">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                {courseCategories.map((course) => (
                  <li className="nav-item" role="presentation" key={course}>
                    <button
                      className={`nav-link ${activeCourse === course ? "active" : ""
                        }`}
                      onClick={() => toggleCourse(course)}
                    >
                      {course === "all"
                        ? "See All"
                        : course.charAt(0).toUpperCase() + course.slice(1)}
                      {course === "all" && <span>New</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h2_course-wrap">
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`ar-tab-pane ${activeCourse === "all" ? "active" : ""
                }`}
            >
              <CourseContents2 />
            </div>
            <div
              className={`ar-tab-pane ${activeCourse === "web" ? "active" : ""
                }`}
            >
              <CourseContents2 />
            </div>
            <div
              className={`ar-tab-pane ${activeCourse === "marketing" ? "active" : ""
                }`}
            >
              <CourseContents2 />
            </div>
            <div
              className={`ar-tab-pane ${activeCourse === "lifestyle" ? "active" : ""
                }`}
            >
              <CourseContents2 />
            </div>
            <div
              className={`ar-tab-pane ${activeCourse === "graphic" ? "active" : ""
                }`}
            >
              <CourseContents2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection2;

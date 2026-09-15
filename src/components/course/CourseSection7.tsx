"use client";
import { useState } from "react";
import CourseSectionSevenTabpane from "./CourseSectionSevenTabpane";
const courseCategories = ["all", "web", "marketing", "lifestyle", "graphic"];
const CourseSection7 = () => {
  const [activeCourse, setActiveCourse] = useState<string>("all");

  const toggleCourse = (course: string) => {
    setActiveCourse(course);
  };

  return (
    <section className="h10_course-area pt-130 pb-110">
      <div className="container">
        <div className="row align-items-end mb-10">
          <div className="col-xl-5 col-lg-6">
            <div className="section-area-10 mb-40">
              <h2 className="section-title mb-0">
                Explore Our Popular Courses
              </h2>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="h10_course-tab mb-30">
              <ul className="nav nav-pills">
                {courseCategories.map((course) => (
                  <li className="nav-item" role="presentation" key={course}>
                    <button
                      className={`nav-link ${
                        activeCourse === course ? "active" : ""
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
        <div className="h10_course-wrap overflow-hidden">
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`ar-tab-pane ${
                activeCourse === "all" ? "active" : ""
              }`}
            >
              <CourseSectionSevenTabpane />
            </div>
            <div
              className={`ar-tab-pane ${
                activeCourse === "web" ? "active" : ""
              }`}
            >
              <CourseSectionSevenTabpane />
            </div>
            <div
              className={`ar-tab-pane ${
                activeCourse === "marketing" ? "active" : ""
              }`}
            >
              <CourseSectionSevenTabpane />
            </div>
            <div
              className={`ar-tab-pane ${
                activeCourse === "lifestyle" ? "active" : ""
              }`}
            >
              <CourseSectionSevenTabpane />
            </div>
            <div
              className={`ar-tab-pane ${
                activeCourse === "graphic" ? "active" : ""
              }`}
            >
              <CourseSectionSevenTabpane />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection7;

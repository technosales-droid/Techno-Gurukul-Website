"use client";
import { useState } from "react";
import CourseContents3 from "./CourseContents3";

const CourseSection3 = () => {
  const [activeCourse, setActiveCourse] = useState<string>("all");

  const toggleCourse = (course: string) => {
    setActiveCourse(course);
  };

  return (
    <section className="h3_course-area pt-135 pb-110 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-area-3 text-center mb-40">
              <span className="section-subtitle">Top Popular Courses</span>
              <h2 className="section-title mb-0">Explore Featured Courses</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="h3_course-tab mb-40">
              <ul className="nav nav-pills">
                {["all", "trending", "featured", "web", "popular"].map(
                  (course) => (
                    <li className="nav-item" key={course}>
                      <button
                        className={`nav-link ${
                          activeCourse === course ? "active" : ""
                        }`}
                        onClick={() => toggleCourse(course)}
                      >
                        {course === "all"
                          ? "See All"
                          : course.charAt(0).toUpperCase() + course.slice(1)}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="h3_course-wrap">
          <div className="tab-content">
            <div
              className={`ar-tab-pane ${
                activeCourse === "all" ? "active" : ""
              }`}
            >
              <CourseContents3 />
            </div>
            <div
              className={`ar-tab-pane ${
                activeCourse === "trending" ? "active" : ""
              }`}
            >
              <CourseContents3 />
            </div>
            <div
              className={`ar-tab-pane ${
                activeCourse === "featured" ? "active" : ""
              }`}
            >
              <CourseContents3 />
            </div>
            <div
              className={`ar-tab-pane ${
                activeCourse === "web" ? "active" : ""
              }`}
            >
              <CourseContents3 />
            </div>
            <div
              className={`ar-tab-pane ${
                activeCourse === "popular" ? "active" : ""
              }`}
            >
              <CourseContents3 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection3;

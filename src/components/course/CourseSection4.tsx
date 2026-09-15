"use client";
import { useState } from "react";
import CourseContents4 from "./CourseContents4";

const CourseSection4 = () => {
  const courseTabs = ["all", "trending", "featured", "web", "popular"];

  const [activeCourse, setActiveCourse] = useState<string>("all");

  const toggleCourse = (course: string) => {
    setActiveCourse(course);
  };

  return (
    <section className="h4_course-area pt-135 pb-110 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-area-3 mb-40">
              <h2 className="section-title mb-0">Featured Courses</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="h4_course-tab mb-40">
              <ul className="nav nav-pills">
                {courseTabs.map((course) => (
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
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h4_course-wrap">
          <div className="tab-content">
            {courseTabs.map((course) => (
              <div
                key={course}
                className={`ar-tab-pane ${
                  activeCourse === course ? "active" : ""
                }`}
              >
                <CourseContents4 />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection4;

"use client";
import { useState } from "react";
import CourseContents from "./CourseContents";
interface Props {
  variant?: boolean;
}
const CourseSection = ({ variant }: Props) => {
  const [activeCourse, setActiveCourse] = useState<string>("all");
  const toggleCourse = (course: string) => {
    setActiveCourse(course);
  };

  return (
    <section
      className={`course-area ${
        variant ? "h5_course-area" : ""
      } overflow-hidden`}
    >
      <div className={variant ? "" : "container-fluid container-custom-1 p-0"}>
        <div
          className={`course-wrap  ${
            variant ? "pt-130 pb-110" : "pt-120 pb-90"
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="course-section-area text-center">
                  <div
                    className={
                      variant
                        ? "section-area-5 text-center"
                        : "section-area section-area-top"
                    }
                  >
                    {variant ? (
                      <h2 className="section-title mb-30">
                        Explore Featured Courses
                      </h2>
                    ) : (
                      <>
                        <span className="section-subtitle">
                          Featured Courses
                        </span>
                        <h2 className="section-title mb-20">
                          Explore Featured Courses
                        </h2>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <div className={`course-tab ${variant ? "h5_course-tab" : ""}`}>
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
                              : course.charAt(0).toUpperCase() +
                                course.slice(1)}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="course-inner">
              <div className="tab-content">
                <div
                  className={`ar-tab-pane ${
                    activeCourse === "all" ? "active" : ""
                  }`}
                >
                  <CourseContents variant={variant ? true : false} />
                </div>
                <div
                  className={`ar-tab-pane ${
                    activeCourse === "trending" ? "active" : ""
                  }`}
                >
                  <CourseContents variant={variant ? true : false} />
                </div>
                <div
                  className={`ar-tab-pane ${
                    activeCourse === "featured" ? "active" : ""
                  }`}
                >
                  <CourseContents variant={variant ? true : false} />
                </div>
                <div
                  className={`ar-tab-pane ${
                    activeCourse === "web" ? "active" : ""
                  }`}
                >
                  <CourseContents variant={variant ? true : false} />
                </div>
                <div
                  className={`ar-tab-pane ${
                    activeCourse === "popular" ? "active" : ""
                  }`}
                >
                  <CourseContents variant={variant ? true : false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;

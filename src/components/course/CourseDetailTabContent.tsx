"use client";
import { useState } from "react";
import CourseOverviewTabpane from "./CourseOverviewTabpane";
import CourseCurriculumTabpane from "./CourseCurriculumTabpane";
import CourseInstructorTabpane from "./CourseInstructorTabpane";
import CourseReviewTabpane from "./CourseReviewTabpane";

const tabs = [
  {
    key: "overview",
    label: "Overview",
    icon: "fa-solid fa-bookmark",
    component: <CourseOverviewTabpane />,
  },
  {
    key: "curriculum",
    label: "Curriculum",
    icon: "fa-thin fa-box",
    component: <CourseCurriculumTabpane />,
  },
  {
    key: "instructor",
    label: "Instructor",
    icon: "fa-thin fa-user",
    component: <CourseInstructorTabpane />,
  },
  {
    key: "reviews",
    label: "Reviews",
    icon: "fa-thin fa-message-dots",
    component: <CourseReviewTabpane />,
  },
];

const CourseDetailTabContent = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <div className="course_details-tab-button">
        <ul className="nav nav-pills">
          {tabs.map((tab) => (
            <li className="nav-item" key={tab.key}>
              <button
                className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="course_details-tab-content">
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className={`tab-pane fade ${
                activeTab === tab.key ? "show active" : ""
              }`}
            >
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseDetailTabContent;

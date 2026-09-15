"use client";
import { useState } from "react";

const curriculumData = [
  {
    id: 1,
    title: "Greetings and introduction",
    items: [
      { title: "Getting Started", duration: "04:00" },
      { title: "WP Theme Development", duration: "04:00" },
    ],
  },
  {
    id: 2,
    title: "Lesson 1",
    items: [
      { title: "Getting Started", duration: "04:00" },
      { title: "WP Theme Development", duration: "04:00" },
    ],
  },
  {
    id: 3,
    title: "Lesson 2",
    items: [
      { title: "Getting Started", duration: "04:00" },
      { title: "WP Theme Development", duration: "04:00" },
    ],
  },
  {
    id: 4,
    title: "Lesson 3",
    items: [
      { title: "Getting Started", duration: "04:00" },
      { title: "WP Theme Development", duration: "04:00" },
    ],
  },
  {
    id: 5,
    title: "Lesson 4",
    items: [
      { title: "Getting Started", duration: "04:00" },
      { title: "WP Theme Development", duration: "04:00" },
    ],
  },
];

const CourseCurriculumTabpane = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="course_details-curriculum">
      <h4 className="course_details-content-title mb-15">Course Curriculum</h4>
      <p className="mb-25">
        Curabitur tempus tincidunt tellus ac placerat. Nullam non libero nisi.
        Fusce congue est eget nisl tristique ornare. Vestibulum id massa felis.
        Nullam vehicula bibendum nulla eu vulputate. Aenean fringilla tortor ut
        laoreet congue magna, a viverra turpis consectetur porta.
      </p>

      <div className="accordion">
        {curriculumData.map((lesson, index) => (
          <div className="accordion-item" key={lesson.id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${activeAccordion === index ? "active" : "collapsed"
                  }`}
                onClick={() => toggleAccordion(index)}
              >
                {lesson.title}
              </button>
            </h2>
            <div
              className={`accordion-collapse ar-accordion-collapse ${activeAccordion === index ? "show" : ""
                }`}
            >
              <div className="accordion-body">
                <ul>
                  {lesson.items.map((item, i) => (
                    <li key={i}>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                        {item.title}
                      </a>
                      <span>
                        {item.duration}
                        <i className="fa-light fa-lock-keyhole"></i>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculumTabpane;

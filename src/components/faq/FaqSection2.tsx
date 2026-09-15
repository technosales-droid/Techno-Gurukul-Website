"use client";
import { courseFaqData } from "@/data";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  link: string;
  image: string;
  lessons: number;
  students: number;
  hours: number;
  description: string;
  originalPrice: number;
  salePrice: number;
}

interface AccordionItemProps {
  course: Course;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  course,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" onClick={onToggle}>
          <Image width={40} height={40} src={course.image} alt="img" />
          {course.title}
        </button>
      </h2>
      <div className={`ar-accordion-body-container ${isOpen ? "show" : ""}`}>
        <div className="accordion-body">
          <ul>
            <li>
              <i className="fa-light fa-book-blank"></i>
              {course.lessons} Lessons
            </li>
            <li>
              <i className="fa-light fa-user-group"></i>
              {course.students} Students
            </li>
            <li>
              <i className="fa-light fa-clock"></i>
              {course.hours} Hours
            </li>
          </ul>
          <p>{course.description}</p>
          <div className="accordion-body-bottom">
            <span>
              <del>${course.originalPrice}</del>${course.salePrice}.00
            </span>
            <Link href={course.link}>
              More Details
              <i className="fa-regular fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection2: React.FC = () => {
  const [openItems, setOpenItems] = useState<number>(1); // First item open by default

  const handleToggle = (id: number) => {
    setOpenItems(id);
  };

  // Split courses into two columns
  const leftColumnCourses = courseFaqData.slice(
    0,
    Math.ceil(courseFaqData.length / 2)
  );
  const rightColumnCourses = courseFaqData.slice(
    Math.ceil(courseFaqData.length / 2)
  );

  return (
    <section className="h9_faq-area pt-115 pb-105">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-area-9 text-center mb-40">
              <span className="section-subtitle">Top Popular Courses</span>
              <h2 className="section-title mb-0">Explore Featured Courses</h2>
            </div>
          </div>
        </div>
        <div className="h9_faq-content">
          <div className="accordion" id="Expp">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                {leftColumnCourses.map((course) => (
                  <AccordionItem
                    key={course.id}
                    course={course}
                    isOpen={openItems === course.id ? true : false}
                    onToggle={() => handleToggle(course.id)}
                  />
                ))}
              </div>
              <div className="col-xl-6 col-lg-6">
                {rightColumnCourses.map((course) => (
                  <AccordionItem
                    key={course.id}
                    course={course}
                    isOpen={openItems === course.id ? true : false}
                    onToggle={() => handleToggle(course.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection2;

import { courses } from "@/data";

import Link from "next/link";
import Image from "next/image";

const CourseSectionSevenTabpane = () => {
  return (
    <div className="row">
      {courses.slice(0, 6).map((course) => (
        <div className="col-xl-4 col-lg-6 col-md-6" key={course.id}>
          <div className="h10_course-item mb-30">
            <div className="h10_course-item-top">
              <div className="h10_course-item-img">
                <Link href={`/course/${course.slug}`}>
                  <Image width={410} height={210} src={course.img} alt="img" />
                </Link>
                <div className="h10_course-item-img-price">
                  <span>{course.price.current}</span>
                </div>
              </div>
              <div className="h10_course-content">
                <div className="d-flex flex-wrap align-items-center gap-25 mb-3">
                  <div className="h10_course-content-tag">
                    <a href="#">{course.category}</a>
                  </div>
                  <div className="h10_course-content-rating">
                    <ul>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                      </li>
                    </ul>
                    <span>(4.8 Rating)</span>
                  </div>
                </div>
                <div className="h10_course-content-info">
                  <ul>
                    <li>
                      <i className="fa-light fa-book-blank"></i>
                      {course.lessons} Lessons
                    </li>
                    <li>
                      <i className="fa-light fa-user-group"></i>
                      {course.students} Students
                    </li>
                  </ul>
                </div>
                <h5 className="h10_course-content-title">
                  <Link href={`/course/${course.slug}`}>{course.title}</Link>
                </h5>
                <div className="h10_course-content-btn">
                  <Link href={`/course/${course.slug}`}>
                    View Course
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSectionSevenTabpane;

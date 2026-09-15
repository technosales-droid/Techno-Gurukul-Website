import { courses } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CourseContents4 = () => {
  return (
    <div className="row">
      {courses.slice(0, 3).map((course) => (
        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
          <div className="h4_course-item mb-30">
            <div className="h4_course-item-top">
              <div className="h4_course-item-img">
                <Link href={`/course/${course.slug}`}>
                  <Image
                    width={410}
                    height={210}
                    src={course.img}
                    alt={course.title}
                  />
                </Link>
              </div>
              <div className="h4_course-content">
                <div className="h4_course-content-tag">
                  <Link href="/course">{course.category}</Link>
                </div>
                <div className="h4_course-content-price">
                  <span>{course.price.current}</span>
                </div>
                <div className="h4_course-content-info">
                  <ul>
                    <li>
                      <i className="fa-light fa-book-blank"></i>{" "}
                      {course.lessons}
                    </li>
                    <li>
                      <i className="fa-light fa-user-group"></i>{" "}
                      {course.students}
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i> 20 Hours
                    </li>
                  </ul>
                </div>
                <h5 className="h4_course-content-title">
                  <Link href={`/course/${course.slug}`}>{course.title}</Link>
                </h5>
                <div className="h4_course-content-rating">
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
                <div className="h4_course-content-btn">
                  <Link href={`/course/${course.slug}`}>
                    View Course <i className="fa-light fa-arrow-right"></i>
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

export default CourseContents4;

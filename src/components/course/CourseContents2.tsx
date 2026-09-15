import Link from "next/link";
import { courses } from "@/data";
import Image from "next/image";

const CourseContents2 = () => {
  return (
    <div className="row">
      {courses.slice(0, 6).map((course) => (
        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
          <div className="h2_course-item mb-30">
            <div className="h2_course-item-img">
              <Link href={`/course/${course.slug}`}>
                <Image width={410} height={210} src={course.img} alt="img" />
              </Link>
            </div>
            <div className="h2_course-content">
              <div className="h2_course-content-top">
                <div className="h2_course-rating">
                  <ul>
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-star"></i>
                      </li>
                    ))}
                  </ul>
                  <span>(03 Reviews)</span>
                </div>
                <div className="h2_course-save">
                  <a href="#">
                    <i className="fa-thin fa-bookmark"></i>
                  </a>
                </div>
              </div>
              <h5 className="h2_course-content-title">
                <Link href={`/course/${course.slug}`}>{course.title}</Link>
              </h5>
              <div className="h2_course-content-info">
                <span>
                  <i className="fa-thin fa-book-blank"></i>
                  {course.lessons} Lessons
                </span>
                <span>
                  <i className="fa-thin fa-user-group"></i>
                  {course.students} Students
                </span>
              </div>
              <p className="h2_course-content-text">
                Through a combination of lectures, readings and discussions
                students.
              </p>
              <div className="h2_course-content-author">
                <div className="h2_course-author-img">
                  <Image
                    width={40}
                    height={40}
                    src={course.authorImage}
                    alt="img"
                  />
                </div>
                <div className="h2_course-author-info">
                  <span>
                    By <a href="#">{course.authorName}</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="h2_course-content-bottom">
              <div className="h2_course-bottom-price">
                <span>
                  <del>{course.price.old}</del>
                  {course.price.current}
                </span>
              </div>
              <div className="h2_course-bottom-btn">
                <Link href={`/course/${course.slug}`}>
                  More Details
                  <i className="fa-light fa-arrow-right"></i>
                  <i className="fa-light fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContents2;

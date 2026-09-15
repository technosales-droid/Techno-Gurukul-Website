
import Link from "next/link";
import Image from "next/image";
import { CourseDataType } from "@/types";
interface Props {
  paginatedCourses: CourseDataType[];
  variant?: boolean;
}
const CourseListSection = ({ paginatedCourses, variant }: Props) => {
  return (
    <div className="row">
      {paginatedCourses.length !== 0 ? (
        paginatedCourses.map((course) =>
          variant ? (
            <div className="col-xl-4 col-lg-6 col-md-6" key={course.id}>
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
          ) : (
            <div className="col-xxl-3 col-lg-4 col-md-6" key={course.id}>
              <div className="course-item mb-30">
                <div className="course-img">
                  <Image width={410} height={210} src={course.img} alt="img" />
                </div>
                <div className="course-content">
                  <div className="course-content-top">
                    <div className="course-top-icon">
                      <Image
                        width={course.iconWidth}
                        height={course.iconHeight}
                        src={course.icon}
                        alt="img"
                      />
                    </div>
                    <div className="course-top-title">
                      <h6>{course.university}</h6>
                    </div>
                  </div>
                  <h5 className="course-content-title">
                    <Link href={`/course/${course.slug}`}>{course.title}</Link>
                  </h5>
                  <div className="course-content-bottom">
                    <div className="course-bottom-info">
                      <span>
                        <i className="fa-thin fa-book-blank"></i>
                        {course.lessons}
                      </span>
                      <span>
                        <i className="fa-thin fa-user-group"></i>
                        {course.students}
                      </span>
                    </div>
                    <div className="course-bottom-price">
                      <span>
                        <del>{course.price.old}</del>
                        {course.price.current}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover-content">
                  <div className="course-hover-content-top">
                    <div className="course-top-icon">
                      <Image
                        width={course.iconWidth}
                        height={course.iconHeight}
                        src={course.icon}
                        alt="img"
                      />
                    </div>
                    <div className="course-top-title">
                      <h6>{course.university}</h6>
                    </div>
                  </div>
                  <h5 className="course-hover-content-title">
                    <Link href={`/course/${course.slug}`}>{course.title}</Link>
                  </h5>
                  <p className="course-hover-content-text">
                    {course.hover.text}
                  </p>
                  <ul className="course-hover-content-list">
                    {course.hover.points.map((point, idx) => (
                      <li key={idx}>
                        <i className="fa-thin fa-check"></i>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="course-hover-content-btn">
                    <div className="course-hover-cart-btn">
                      <a href="#" className="theme-btn course-btn">
                        Add to Cart
                      </a>
                    </div>
                    <div className="course-hover-fav-btn">
                      <a href="#">
                        <i className="fa-thin fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <h3>No Course matches the description!</h3>
      )}
    </div>
  );
};

export default CourseListSection;

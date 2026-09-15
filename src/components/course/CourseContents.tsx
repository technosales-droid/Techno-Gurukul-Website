import Link from "next/link";
import { courses } from "@/data";
import Image from "next/image";
interface Props {
  variant?: boolean;
}
const CourseContents = ({ variant }: Props) => {
  return (
    <div className="row">
      {courses.slice(0, 8).map((course) => (
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
              <p className="course-hover-content-text">{course.hover.text}</p>
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
                  <a
                    href="#"
                    className={`theme-btn course-btn ${variant ? "theme-btn-5" : ""
                      }`}
                  >
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
      ))}
    </div>
  );
};

export default CourseContents;

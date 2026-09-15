import { courses } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CourseContents3 = () => {
  return (
    <div className="row">
      {courses.slice(0, 3).map((course) => (
        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
          <div className="h3_course-item mb-30">
            <div className="h3_course-item-top">
              <div className="h3_course-item-img">
                <Link href={`/course/${course.slug}`}>
                  <Image width={410} height={210} src={course.img} alt="img" />
                </Link>
                <div className="h3_course-item-tag">
                  <Link href="/course">{course.category}</Link>
                </div>
                <div className="h3_course-item-save">
                  <a href="#">
                    <i className="fa-light fa-bookmark"></i>
                  </a>
                </div>
              </div>
              <div className="h3_course-content">
                <div className="h3_course-content-info">
                  <ul>
                    <li>
                      <i className="fa-light fa-book-blank"></i>{" "}
                      {course.lessons} Lessons
                    </li>
                    <li>
                      <i className="fa-light fa-user-group"></i>{" "}
                      {course.students} Students
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i> 23 Hours
                    </li>
                  </ul>
                </div>
                <h5 className="h3_course-content-title">
                  <Link href={`/course/${course.slug}`}>{course.title}</Link>
                </h5>
                <div className="h3_course-content-price">
                  <span>
                    <del>{course.price.old}</del> {course.price.current}
                  </span>
                  <h5>Free</h5>
                </div>
              </div>
            </div>
            <div className="h3_course-item-bottom">
              <div className="h3_course-item-author">
                <div className="h3_course-item-author-img">
                  <Image
                    width={34}
                    height={34}
                    src={course.authorImage}
                    alt="img"
                  />
                </div>
                <div className="h3_course-item-author-info">
                  <span>
                    By <a href="#">{course.authorName}</a>
                  </span>
                </div>
              </div>
              <div className="h3_course-item-rating">
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
                <span>(25)</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContents3;

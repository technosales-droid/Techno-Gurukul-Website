import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data";

const PopularCoursesSidebar = () => {
  return (
    <div className="blog_details-widget">
      <h4 className="blog_details-widget-title">Popular Courses</h4>
      {courses.slice(0, 3).map((course) => (
        <div className="blog_details-widget-course" key={course.id}>
          <div className="blog_details-course-img">
            <Link href={`/course/${course.slug}`} className="popular-course-img">
              <Image width={410} height={210} src={course.img} alt="img" />
            </Link>
          </div>
          <div className="blog_details-course-info">
            <h6>
              <Link href={`/course/${course.slug}`}>
                {" "}
                {course.title.length > 38
                  ? `${course.title.slice(0, 38)}...`
                  : course.title}
              </Link>
            </h6>
            <Link href={`/course/${course.slug}`} className="inner-course-rate">
              Free
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCoursesSidebar;

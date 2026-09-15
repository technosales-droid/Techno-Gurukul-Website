import Link from "next/link";
import type { CourseDataType } from "@/types";
interface Props {
  courseInfo: CourseDataType;
}
const CourseSidebar = ({ courseInfo }: Props) => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="course_details-sidebar mb-60">
        <div className="course_details-price">
          <del>{courseInfo.price.old}</del>
          <h2>{courseInfo.price.current}</h2>
        </div>
        <div className="course_details-list">
          <ul>
            <li>
              <span>
                <i className="fa-thin fa-clock"></i>Duration
              </span>
              <span>15 Weeks</span>
            </li>
            <li>
              <span>
                <i className="fa-thin fa-user-group"></i>Students
              </span>
              <span>354</span>
            </li>
            <li>
              <span>
                <i className="fa-thin fa-file-lines"></i>Lessons
              </span>
              <span>42</span>
            </li>
            <li>
              <span>
                <i className="fa-thin fa-chart-line-up"></i>Skill Level
              </span>
              <span>Beginner</span>
            </li>
            <li>
              <span>
                <i className="fa-thin fa-language"></i>Language
              </span>
              <span>English</span>
            </li>
            <li>
              <span>
                <i className="fa-thin fa-user"></i>Instructor
              </span>
              <span>Dylan Meringue</span>
            </li>
            <li>
              <span>
                <i className="fa-thin fa-percent"></i>Pass Percentage
              </span>
              <span>84%</span>
            </li>
            <li>
              <span>
                <i className="fa-thin fa-calendar-days"></i>Deadline
              </span>
              <span>24 November 2025</span>
            </li>
          </ul>
          <div className="course_details-sidebar-btn">
            <Link
              href="/sign-up"
              className="course-btn theme-btn theme-btn-big"
            >
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;

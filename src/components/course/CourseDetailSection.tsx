import CourseDetailTabContent from "./CourseDetailTabContent";
import CourseSidebar from "./CourseSidebar";
import type { CourseDataType } from "@/types";
import Link from "next/link";
import Image from "next/image";
interface Props {
  courseInfo: CourseDataType;
}
const CourseDetailSection = ({ courseInfo }: Props) => {
  return (
    <section className="course_details-area pt-120 pb-60">
      <div className="container">
        <div className="course_details-img">
          <Image width={1290} height={570} src={courseInfo.detailImg} alt="img" />
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="course_details-wrap mb-55">
              <div className="course_details-top mb-60">
                <h3 className="course_details-title">{courseInfo.title}</h3>
                <div className="course_details-meta">
                  <div className="course_details-meta-left">
                    <div className="course_details-author">
                      <div className="course_details-author-img">
                        <Image
                          width={40}
                          height={40}
                          src={courseInfo.authorImage}
                          alt="img"
                        />
                      </div>
                      <div className="course_details-author-info">
                        <span>Teacher</span>
                        <h5>
                          <Link href="/team">{courseInfo.authorName}</Link>
                        </h5>
                      </div>
                    </div>
                    <div className="course_details-category">
                      <span>Categories</span>
                      <h5>
                        <a href="#">Online Teaching</a>
                      </h5>
                    </div>
                    <div className="course_details-rating">
                      <span>Review</span>
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
                    </div>
                  </div>
                  <div className="course_details-meta-right">
                    <a href="#" className="theme-btn theme-btn-medium">
                      Free
                    </a>
                  </div>
                </div>
              </div>
              <CourseDetailTabContent />
            </div>
          </div>
          <CourseSidebar courseInfo={courseInfo} />
        </div>
      </div>
    </section>
  );
};

export default CourseDetailSection;

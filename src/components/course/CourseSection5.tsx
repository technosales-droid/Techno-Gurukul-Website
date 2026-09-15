import { homeSixCoursePrograms } from "@/data";

import Link from "next/link";
import Image from "next/image";

const CourseSection5 = () => {
  return (
    <section className="h6_program-area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-area-6 text-center mb-55">
              <h2 className="section-title mb-15">Academics Program</h2>
              <p className="section-text">
                Preparing students to make meaningful contributions to society
                as <br /> engaged citizens and leaders in a complex world
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {homeSixCoursePrograms.map((program) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={program.id}>
              <div className="h6_program-item mb-30">
                <div className="h6_program-item-img w_img">
                  <Image
                    width={410}
                    height={447}
                    src={program.image}
                    alt={program.title}
                  />
                </div>
                <div className="h6_program-item-content">
                  <div className="h6_program-item-content-info">
                    <h4 className="h6_program-item-content-info-title">
                      <Link href={program.link}>{program.title}</Link>
                    </h4>
                    <Link
                      href={program.link}
                      className="h6_program-item-content-info-link"
                    >
                      Read More<i className="fa-light fa-arrow-up-right"></i>
                    </Link>
                  </div>
                  <div className="h6_program-item-content-icon">
                    <program.icon />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection5;

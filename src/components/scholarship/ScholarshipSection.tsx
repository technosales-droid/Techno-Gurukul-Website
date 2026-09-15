
import Image from "next/image";
import Link from "next/link";

const ScholarshipSection = () => {
  return (
    <section className="h7_scholarship-area fix">
      <div className="container">
        <div className="h7_scholarship-img">
          <Image
            width={1290}
            height={659}
            src="/assets/img/scholarship/7/1.jpg"
            alt="img"
          />
        </div>
      </div>
      <div className="h7_scholarship-wrap">
        <div className="container p-relative">
          <div className="h7_scholarship-title">
            <h1>
              <span className="wow slideInLeft" data-wow-duration="2s">
                Scholarship
              </span>
              <span
                className="wow slideInRight scholar-bottom"
                data-wow-duration="2s"
                data-wow-delay=".1s"
              >
                Programs
              </span>
            </h1>
          </div>
          <div className="h7_scholarship-content">
            <p>
              At Kempbelle University, we prepare you to launch your career by
              providing a supportive, creative, and professional environment
            </p>
            <Link href="/contact">
              Financial Aid <i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;

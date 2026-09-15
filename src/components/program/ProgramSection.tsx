
import MarqueeSection from "../marquee/MarqueeSection";
import Link from "next/link";

const ProgramSection = () => {
  return (
    <section className="h7_program-area pb-90 fix">
      <MarqueeSection
        marqueeTexts={[
          "Campus Academics Programs",
          "Campus Academics Programs",
        ]}
        containerClass="program-text-wrap mb-55"
        textContainerClass="program-text-ticker"
        headerClass="h7_program-title"
      />
      <div className="container">
        <div className="h7_program-wrap">
          <div className="row g-0">
            <div className="col-xl-4 col-lg-4">
              <div className="h7_program-item">
                <h3 className="h7_program-item-title">undergraduate</h3>
                <p>
                  Our undergraduate programs tailored meet the unique needs of
                  adult learners. Whether seeking to advance in your current
                  career,
                </p>
                <div className="h7_program-item-list">
                  <a href="#">
                    Major Program <i className="fa-light fa-arrow-right"></i>
                  </a>
                  <a href="#">
                    Minors Program <i className="fa-light fa-arrow-right"></i>
                  </a>
                </div>
                <span className="h7_program-item-time">
                  <i className="fa-light fa-clock"></i> Online + Onsite
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="h7_program-item h7_program-item2">
                <h3 className="h7_program-item-title">Graduate</h3>
                <p>
                  Our undergraduate programs tailored meet the unique needs of
                  adult learners. Whether seeking to advance in your current
                  career,
                </p>
                <ul className="h7_program-item-list2">
                  <li>Business & Administration</li>
                  <li>Biotechnology</li>
                  <li>Corporate Finance</li>
                  <li>Major in Economics</li>
                  <li>Public Administration</li>
                </ul>
                <span className="h7_program-item-time">
                  <i className="fa-light fa-clock"></i> Online + Onsite
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="h7_program-item">
                <h3 className="h7_program-item-title">Online Education</h3>
                <p>
                  Our undergraduate programs tailored meet the unique needs of
                  adult learners. Whether seeking to advance in your current
                  career,
                </p>
                <div className="h7_program-item-list">
                  <a href="#">
                    Undergraduate Programs{" "}
                    <i className="fa-light fa-arrow-right"></i>
                  </a>
                  <a href="#">
                    Graduate Programs{" "}
                    <i className="fa-light fa-arrow-right"></i>
                  </a>
                </div>
                <span className="h7_program-item-time">
                  <i className="fa-light fa-clock"></i> Online + Onsite
                </span>
              </div>
            </div>
          </div>
          <Link href="/about" className="h7_program-more-icon">
            More
            <span>
              <i className="fa-light fa-arrow-up"></i>
              <i className="fa-light fa-arrow-up"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

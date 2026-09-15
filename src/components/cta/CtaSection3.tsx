import CountUp from "../utils/CountUp";
import Image from "next/image";

const CtaSection3 = () => {
  return (
    <section className="h4_education-area pt-130 pb-110">
      <Image
        width={355}
        height={222}
        src="/assets/img/education/4/shape-1.png"
        alt="img"
        className="h4_education-shape-1"
      />
      <Image
        width={366}
        height={210}
        src="/assets/img/education/4/shape-2.png"
        alt="img"
        className="h4_education-shape-2"
      />
      <Image
        width={865}
        height={770}
        src="/assets/img/education/4/bg.jpg"
        alt="img"
        className="h4_education-img"
      />

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-12">
            <div className="h4_education-wrap mr-50">
              <div className="section-area-4 mb-60 section-white-4">
                <h2 className="section-title mb-15">
                  Learn Your Best Education Culture with....
                </h2>
                <p className="section-text">
                  Maecenas Felis Tellus, dictum sed fermentum vel, various
                  condiment dolour donec aliquot, denim ut auctor molestee, era
                  elite pharetra masa.
                </p>
              </div>
              <div className="h4_education-content">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="h4_education-item">
                      <div className="h4_education-item-icon">
                        <i className="fa-light fa-thumbs-up"></i>
                      </div>
                      <div className="h4_education-item-info">
                        <CountUp
                          className=""
                          value={52}
                          spanClassName="odometer count_two"
                          suffix="k"
                        />
                        <p>Project Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="h4_education-item">
                      <div className="h4_education-item-icon">
                        <i className="fa-light fa-clipboard-user"></i>
                      </div>
                      <div className="h4_education-item-info">
                        <CountUp
                          className=""
                          value={197}
                          spanClassName="odometer count_two"
                          suffix="+"
                        />
                        <p>Team Members</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="h4_education-item">
                      <div className="h4_education-item-icon">
                        <i className="fa-light fa-users"></i>
                      </div>
                      <div className="h4_education-item-info">
                        <CountUp
                          className=""
                          value={38}
                          spanClassName="odometer count_two"
                          suffix="k"
                        />
                        <p>Trusted Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="h4_education-item">
                      <div className="h4_education-item-icon">
                        <i className="fa-light fa-star-shooting fa-rotate-180"></i>
                      </div>
                      <div className="h4_education-item-info">
                        <CountUp
                          className=""
                          value={24}
                          spanClassName="odometer count_two"
                          suffix="+"
                        />
                        <p>Years of Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection3;

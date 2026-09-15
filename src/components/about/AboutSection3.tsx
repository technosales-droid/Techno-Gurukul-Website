import Image from "next/image";
import Link from "next/link";

const AboutSection3 = () => {
  return (
    <section className="h3_about-area pt-140 pb-90">
      <Image
        width={63}
        height={45}
        src="/assets/img/about/3/shape-5.png"
        alt="img"
        className="h3_about-top-shape"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="h3_about-img mb-50">
              <div className="h3_about-inner-img w_img mr-50">
                <Image
                  width={580}
                  height={616}
                  src="/assets/img/about/3/1.png"
                  alt="img"
                />
              </div>
              <div className="h3_about-img-shape d-none d-sm-block">
                <Image
                  width={61}
                  height={44}
                  className="h3_about-img-shape-1"
                  src="/assets/img/about/3/shape-1.png"
                  alt="img"
                />
                <Image
                  width={126}
                  height={56}
                  className="h3_about-img-shape-2"
                  src="/assets/img/about/3/shape-2.png"
                  alt="img"
                />
                <Image
                  width={77}
                  height={44}
                  className="h3_about-img-shape-3"
                  src="/assets/img/about/3/shape-3.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="h3_about-wrap mr-65 mb-50">
              <Image
                width={34}
                height={34}
                src="/assets/img/about/3/shape-4.png"
                alt="img"
                className="h3_about-wrap-shape"
              />
              <div className="section-area-3 mb-35 small-section-area-3">
                <span className="section-subtitle">Know About Us</span>
                <h2 className="section-title mb-25">
                  This Stage Focuses on The Development Young Children Usually
                  Between.
                </h2>
                <p className="section-text">
                  Maecenas Felis Tellus, dictum sed fermentum vel, various
                  condiment dolour donec aliquot denim ut auctor molestee, era
                  elite pharetra masa.
                </p>
              </div>
              <div className="h3_about-content mb-35">
                <div className="row">
                  <div className="col-sm-6">
                    <span>
                      <i className="fa-regular fa-check"></i>Access Lifetime any
                      devices
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <span>
                      <i className="fa-regular fa-check"></i>Free for Student
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <span>
                      <i className="fa-regular fa-check"></i>No Credit Card
                      Required
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <span>
                      <i className="fa-regular fa-check"></i>30 Days Trial
                    </span>
                  </div>
                </div>
              </div>
              <div className="h3_about-button">
                <Link
                  href="/about"
                  className="theme-btn theme-btn-medium theme-btn-3"
                >
                  More Details<i className="fa-light fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;

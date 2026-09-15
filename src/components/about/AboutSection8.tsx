
import Link from "next/link";
import Image from "next/image";

const AboutSection8 = () => {
  return (
    <section className="h10_about-area pt-120 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="h10_about-img mr-25">
              <Image
                width={130}
                height={115}
                src="/assets/img/about/10/img-shape.png"
                alt="img"
                className="h10_about-img-shape d-none d-md-block"
              />
              <Image
                width={43}
                height={51}
                src="/assets/img/about/10/shape-1.png"
                alt="img"
                className="h10_about-img-shape-1 d-none d-md-block"
              />
              <Image
                width={605}
                height={605}
                src="/assets/img/about/10/1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="h10_about-content ml-35">
              <Image
                width={65}
                height={37}
                src="/assets/img/about/10/shape-2.png"
                alt="img"
                className="h10_about-shape-2"
              />
              <h2 className="h10_about-content-title">
                Discover Our Kids Education Story & Mission
              </h2>
              <div className="h10_about-content-inner">
                <h5>Play As You Learn</h5>
                <p>
                  There are many variations passages Lorem Ipsum available, but
                  majority have suffered alteration in some form, by injected
                  randomized words which don't look even slightly believable.
                </p>
              </div>
              <div className="h10_about-count">
                <div className="h10_about-count-item">
                  <h3>06+</h3>
                  <span>Years experience</span>
                </div>
                <div className="h10_about-count-item">
                  <h3>7k+</h3>
                  <span>Students each year</span>
                </div>
                <div className="h10_about-count-item">
                  <h3>24+</h3>
                  <span>Award Wining</span>
                </div>
              </div>
              <div className="h10_about-bottom">
                <div className="h10_about-admin">
                  <Image
                    width={55}
                    height={55}
                    src="/assets/img/about/7/admin.jpg"
                    alt="img"
                  />
                  <div className="h10_about-admin-info">
                    <h5>Hugh Millie-Yate</h5>
                    <span>Vice Principal</span>
                  </div>
                </div>
                <div className="h10_about-bottom-btn">
                  <Link href="/about">
                    <span className="inner-btn">
                      <i className="fa-light fa-arrow-up"></i>
                    </span>
                    <span className="inner-text">More About Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection8;

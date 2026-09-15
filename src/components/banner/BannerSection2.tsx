import Image from "next/image";
import BannerSearchForm from "../form/BannerSearchForm";

const BannerSection2 = () => {
  return (
    <section className="h2_banner-area">
      <div className="h2_single-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="h2_banner-content">
                <div className="section-area-2 mb-45 ">
                  <h1 className="section-title">
                    World's Best Online Platform{" "}
                    <span>
                      Eduan.{" "}
                      <Image
                        width={215}
                        height={11}
                        src="/assets/img/banner/2/line.png"
                        alt="img"
                      />
                    </span>
                  </h1>
                  <p className="section-text">
                    Through a combination of lectures, readings, and
                    discussions, students will gain a solid foundation in
                    educational psychology.
                  </p>
                </div>
                <BannerSearchForm />
                <span className="h2_banner-content-text">
                  Have any questions ? <a href="#">Get Free Example</a>
                </span>
                <div className="h2_banner-tutor">
                  <div className="h2_banner-tutor-img">
                    <div className="h2_banner-inner-img">
                      <Image
                        width={45}
                        height={45}
                        src="/assets/img/banner/2/tutor-1.png"
                        alt="img"
                      />
                    </div>
                    <div className="h2_banner-inner-img">
                      <Image
                        width={45}
                        height={45}
                        src="/assets/img/banner/2/tutor-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="h2_banner-inner-img">
                      <Image
                        width={45}
                        height={45}
                        src="/assets/img/banner/2/tutor-3.png"
                        alt="img"
                      />
                    </div>
                    <div className="h2_banner-inner-img">
                      <Image
                        width={45}
                        height={45}
                        src="/assets/img/banner/2/tutor-4.png"
                        alt="img"
                      />
                      <span>2k+</span>
                    </div>
                  </div>
                  <div className="h2_banner-tutor-text">
                    <span>More Than</span>
                    <span>2k+ Tutors</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block">
              <div className="h2_banner-right pl-80">
                <div className="h2_banner-img">
                  <Image
                    width={550}
                    height={530}
                    src="/assets/img/banner/2/banner-bg.png"
                    alt="img"
                    priority={true}
                  />
                </div>
                <div className="h2_banner-right-shape">
                  <Image
                    width={34}
                    height={34}
                    className="h2_banner-shape-1"
                    src="/assets/img/banner/2/shape_1.png"
                    alt="img"
                  />
                  <div className="inner-shpae-1">
                    <Image
                      width={118}
                      height={71}
                      className="h2_banner-shape-2"
                      src="/assets/img/banner/2/shape_2.png"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="h2_banner-meta">
                  <div className="h2_banner-meta-info">
                    <span>Popular Course</span>
                    <h5>Start Learning Today!!</h5>
                  </div>
                  <div className="h2_banner-meta-rating">
                    <span>
                      <i className="fa-solid fa-star"></i>4.5 (3.4k Reviews)
                    </span>
                    <h5>Congratulations</h5>
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

export default BannerSection2;

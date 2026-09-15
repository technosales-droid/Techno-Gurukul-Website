import Image from "next/image";
import BannerSearchForm2 from "../form/BannerSearchForm2";

const BannerSection3 = () => {
  return (
    <section className="h3_banner-area">
      <div className="h3_single-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-12">
              <div className="h3_banner-content">
                <div className="section-area-3 mb-45 ">
                  <span className="section-subtitle">
                    🏆 The Leader in Online Learning
                  </span>
                  <h1 className="section-title">
                    Choose <span>3400+</span> Online
                    <span>Video</span> Courses With New Additions.
                  </h1>
                  <p className="section-text">
                    Through a combination of lectures, readings, and
                    discussions, students.
                  </p>
                </div>
                <BannerSearchForm2 />
                <Image
                  width={76}
                  height={71}
                  className="h3_banner-content-shape-1"
                  src="/assets/img/banner/3/shape-1.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 d-none d-lg-block">
              <div className="h3_banner-right">
                <div className="h3_banner-img">
                  <Image
                    width={590}
                    height={815}
                    src="/assets/img/banner/3/banner-img.png"
                    alt="img"
                    priority={true}
                  />
                </div>
                <div className="h3_banner-right-shape">
                  <div className="inner-shpae-1">
                    <Image
                      width={63}
                      height={45}
                      className="h3_banner-shape-2"
                      src="/assets/img/banner/3/shape-2.png"
                      alt="img"
                    />
                  </div>
                  <Image
                    width={61}
                    height={45}
                    className="h3_banner-shape-1"
                    src="/assets/img/banner/3/shape-3.png"
                    alt="img"
                  />
                </div>
                <div className="h3_banner-meta">
                  <div className="h3_banner-meta-info">
                    <span>Popular Course</span>
                    <h5>Start Learning Today!!</h5>
                  </div>
                  <div className="h3_banner-meta-rating">
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

export default BannerSection3;

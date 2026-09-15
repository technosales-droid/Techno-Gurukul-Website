import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="banner-area">
      <div className="single-banner container-fluid container-custom-1 p-0">
        <Image
          width={12}
          height={12}
          className="banner-top-shape-1"
          src="/assets/img/banner/1/1.png"
          alt="img"
        />
        <Image
          width={20}
          height={20}
          className="banner-top-shape-2"
          src="/assets/img/banner/1/3.png"
          alt="img"
        />
        <Image
          width={30}
          height={30}
          className="banner-top-shape-3"
          src="/assets/img/banner/1/5.png"
          alt="img"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5 col-md-8">
              <div className="banner-content">
                <div className="section-area">
                  <span className="section-subtitle">
                    Online Learning Platform
                  </span>
                  <h1 className="section-title">
                    Master The Skills Drive Your{" "}
                    <span>
                      Career.{" "}
                      <Image
                        width={225}
                        height={12}
                        src="/assets/img/banner/1/line.png"
                        alt="img"
                      />
                    </span>
                  </h1>
                  <p className="section-text">
                    Through a combination of lectures, readings, and
                    discussions, students <br /> will gain a solid foundation in
                    educational psychology.
                  </p>
                  <Link href="/course" className="theme-btn theme-btn-big">
                    View All Course
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 d-none d-lg-block">
              <div className="banner-right">
                <div className="banner-img">
                  <Image
                    width={675}
                    height={625}
                    src="/assets/img/banner/1/banner-img.png"
                    alt="img"
                    priority={true}
                  />
                </div>
                <div className="banner-meta">
                  <div className="banner-inner-meta banner-meta-info">
                    <Image
                      width={79}
                      height={78}
                      className="inner-img"
                      src="/assets/img/banner/1/info_icon.png"
                      alt="img"
                    />
                    <div className="banner-inner-info">
                      <div className="banner-info-img">
                        <Image
                          width={45}
                          height={45}
                          src="/assets/img/banner/1/author.jpg"
                          alt="img"
                        />
                        <span className="banner-info-icon">
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="banner-info-text">
                        <h5>Brian Cumin</h5>
                        <p>
                          “Lorem ipsum dolorous rises various <br /> qualm
                          quique id dam connecter easum <br /> commode
                          impediment”.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="banner-inner-meta banner-meta-rating">
                    <span>
                      <i className="fa-solid fa-star"></i>4.5 (3.4k Reviews)
                    </span>
                    <h5>Congratulations</h5>
                  </div>
                </div>
                <div className="banner-right-shape">
                  <Image
                    width={320}
                    height={320}
                    className="banner-shape-1"
                    src="/assets/img/banner/1/shape_1.png"
                    alt="img"
                  />
                  <Image
                    width={17}
                    height={16}
                    className="banner-shape-2"
                    src="/assets/img/banner/1/2.png"
                    alt="img"
                  />
                  <Image
                    width={14}
                    height={14}
                    className="banner-shape-4"
                    src="/assets/img/banner/1/4.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

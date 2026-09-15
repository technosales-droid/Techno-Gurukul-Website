
import Link from "next/link";
import Image from "next/image";

const BannerSection10 = () => {
  return (
    <section className="h10_banner-area">
      <div
        className="h10_single-banner bg-default"
        data-background="/assets/img/banner/10/bg.jpg"
      >
        <Image
          width={35}
          height={36}
          src="/assets/img/banner/10/shape-1.png"
          alt="Not Found"
          className="h10_banner-shape-1 d-none d-xxl-block"
        />
        <Image
          width={49}
          height={48}
          src="/assets/img/banner/10/shape-2.png"
          alt="Not Found"
          className="h10_banner-shape-2 d-none d-xl-block"
        />
        <Image
          width={36}
          height={32}
          src="/assets/img/banner/10/shape-3.png"
          alt="Not Found"
          className="h10_banner-shape-3 d-none d-xl-block"
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="h10_banner-content mb-60 mb-lg-0">
                <h1 className="h10_banner-content-title">
                  Fun & Educational Adventures{" "}
                  <span>
                    for Kids{" "}
                    <Image
                      width={211}
                      height={11}
                      src="/assets/img/banner/1/line.png"
                      alt="img"
                    />
                  </span>
                </h1>
                <p className="h10_banner-content-text">
                  Discover a world of interactive lessons, exciting games, and
                  captivating <br /> stories, all carefully crafted to make
                  learning an enjoyable.
                </p>
                <div className="h10_banner-content-btn mb-60">
                  <Link
                    href="/course"
                    className="theme-btn theme-btn-10 theme-btn-10-white"
                  >
                    Start Learning<i className="fa-light fa-arrow-right"></i>
                  </Link>
                  <Link
                    href="/about"
                    className="theme-btn theme-btn-10 theme-btn-10-transparent"
                  >
                    Learn More<i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="h10_banner-bottom-info">
                  <span>
                    <i className="fa-brands fa-youtube"></i>4k Video Class
                  </span>
                  <span>
                    <i className="fa-light fa-users"></i>18k Total Student
                  </span>
                  <span>
                    <i className="fa-light fa-file-lines"></i>Complete
                    Graduation
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="h10_banner-right pl-110">
                <Image
                  width={62}
                  height={52}
                  src="/assets/img/banner/10/shape-4.png"
                  alt="Not Found"
                  className="h10_banner-shape-4 d-none d-md-block"
                />
                <Image
                  width={78}
                  height={91}
                  src="/assets/img/banner/10/shape-5.png"
                  alt="Not Found"
                  className="h10_banner-shape-5 d-none d-md-block"
                />
                <Image
                  width={61}
                  height={55}
                  src="/assets/img/banner/10/shape-6.png"
                  alt="Not Found"
                  className="h10_banner-shape-6 d-none d-md-block"
                />
                <div className="h10_banner-img">
                  <Image
                    width={574}
                    height={542}
                    src="/assets/img/banner/10/11.png"
                    alt="img"
                    priority={true}
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

export default BannerSection10;

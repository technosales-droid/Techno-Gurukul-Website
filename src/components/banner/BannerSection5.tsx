import Image from "next/image";
import BannerSearchForm4 from "../form/BannerSearchForm4";

const BannerSection5 = () => {
  return (
    <section className="h5_banner-area">
      <div className="h5_single-banner">
        <div className="h5_banner-bg w_img d-none d-lg-block">
          <Image
            width={850}
            height={1080}
            src="/assets/img/banner/5/bg.jpg"
            alt="img"
            priority={true}
          />
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="h2_banner-content h5_banner-content">
                <div className="section-area-2 mb-45 ">
                  <h1 className="section-title">
                    Better Education for a Beautiful{" "}
                    <span>
                      World.{" "}
                      <Image
                        width={204}
                        height={10}
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
                <BannerSearchForm4 />
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
          </div>
        </div>
        <div className="h5_banner-contact">
          <div className="h5_banner-contact-item">
            <div className="h5_banner-contact-item-top">
              <i className="fa-light fa-location-dot"></i>
              <span>Address</span>
            </div>
            <p>Hilton Conference Centre</p>
          </div>
          <div className="h5_banner-contact-item">
            <div className="h5_banner-contact-item-top">
              <i className="fa-light fa-mobile-notch"></i>
              <span>Phone</span>
            </div>
            <p>+123 548 6458 50</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection5;

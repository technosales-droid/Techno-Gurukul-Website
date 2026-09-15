"use client";
import Link from "next/link";
import { useCustomContext } from "@/context/context";
import Image from "next/image";

const AboutSection2 = () => {
  const { openVideoModal } = useCustomContext();
  return (
    <section className="h2_about-area pt-120 pb-70">
      <Image
        width={12}
        height={12}
        src="/assets/img/about/2/shape-5.png"
        alt="img"
        className="h2_about-top-shape"
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="h2_about-img mb-50">
              <div className="h2_about-inner-img">
                <Image
                  width={330}
                  height={390}
                  src="/assets/img/about/2/1.jpg"
                  alt="img"
                  className="h2_inner-img"
                />
                <Image
                  width={330}
                  height={390}
                  src="/assets/img/about/2/shape-4.png"
                  alt="img"
                  className="h2_inner-img-shape"
                />
              </div>
              <div className="h2_about-inner-img2">
                <Image
                  width={330}
                  height={390}
                  src="/assets/img/about/2/2.jpg"
                  alt="img"
                />
                <div className="h2_about-img-button">
                  <a
                    className="popup-video"
                    role="button"
                    onClick={openVideoModal}
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="h2_about-rating d-none d-sm-block">
                <span>
                  <i className="fa-solid fa-star"></i>4.5 (3.4k Reviews)
                </span>
                <h5>Congratulations</h5>
              </div>
              <div className="h2_about-img-shape d-none d-sm-block">
                <Image
                  width={234}
                  height={73}
                  className="h2_about-shape-1"
                  src="/assets/img/about/2/shape-1.png"
                  alt="img"
                />
                <Image
                  width={14}
                  height={14}
                  className="h2_about-shape-2"
                  src="/assets/img/about/2/shape-2.png"
                  alt="img"
                />
                <Image
                  width={17}
                  height={16}
                  className="h2_about-shape-3"
                  src="/assets/img/about/2/shape-3.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-10 mb-50">
            <div className="section-area-2 mb-35">
              <h2 className="section-title mb-20">
                Education Instructors Play Crucial Role in Shaping The Lives of
                Their{" "}
                <span>
                  Students{" "}
                  <Image
                    width={194}
                    height={10}
                    src="/assets/img/banner/2/line.png"
                    alt="img"
                  />
                </span>
              </h2>
              <p className="section-text">
                Maecenas Felis Tellus, dictum sed fermentum vel, various
                condiment dolour. Donec aliquot, denim ut auctor molestee, era
                elite pharetra masa, at impediment eros qualm sed libero. Sed
                arco lorem, rut rum.
              </p>
            </div>
            <div className="h2_about-button">
              <Link href="/about" className="theme-btn theme-btn-medium">
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;

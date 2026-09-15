"use client";

import { useCustomContext } from "@/context/context";
import Link from "next/link";
import Image from "next/image";

const BannerSection8 = () => {
  const { openVideoModal } = useCustomContext();
  return (
    <section className="h8_banner-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="h8_banner-content mb-60 mb-lg-0">
              <span className="h8_banner-content-subtitle">
                All The best Platform
              </span>
              <h1 className="h8_banner-content-title">
                Best Online <span> Courses & Upgrade </span> Your Skills
              </h1>
              <p className="h8_banner-content-text">
                Choose from 85,000 online video courses additions published
                Every <br /> month & upgrade your skills. Get started with us.
              </p>
              <div className="h8_banner-content-btn">
                <Link href="/course" className="theme-btn theme-btn-8">
                  Explore All Classes<i className="fa-light fa-arrow-right"></i>
                </Link>
                <a
                  className="h8_banner-play popup-video"
                  role="button"
                  onClick={openVideoModal}
                >
                  <span>
                    <i className="fa-solid fa-play"></i>
                  </span>{" "}
                  Watch Our Video
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="h8_banner-img">
              <Image
                width={650}
                height={589}
                src="/assets/img/banner/8/1.png"
                alt="img"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection8;

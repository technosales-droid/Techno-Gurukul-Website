"use client";
import { bannerSlides } from "@/data";
import Link from "next/link";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSlider = () => {
  return (
    <Swiper
      className="banner_6_active"
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      loop
      speed={1000}
      effect={"fade"}
      autoplay={{
        delay: 5000,
      }}
      navigation={{
        nextEl: ".banner_6-swiper-next",
        prevEl: ".banner_6-swiper-prev",
      }}
      modules={[Pagination, Autoplay, Navigation, EffectFade]}
    >
      {bannerSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h6_single-banner bg-default"
            style={
              {
                "--post-image-url": `url('${slide.backgroundImage}')`,
              } as React.CSSProperties
            }
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-7 col-xl-8">
                  <div className="h6_banner-content">
                    <span className="h6_banner-content-subtitle">
                      <i className="fa-thin fa-graduation-cap"></i>{" "}
                      {slide.subtitle}
                    </span>
                    <h1
                      className="h6_banner-content-title"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    ></h1>
                    <p
                      className="h6_banner-content-text"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    ></p>
                    <Link
                      href={slide.link}
                      className="header-btn theme-btn theme-btn-medium theme-btn-6"
                    >
                      {slide.linkText}
                      <i className="fa-light fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="h6_banner-navigation">
        <div className="banner_6-swiper-prev">
          <i className="fa-thin fa-angle-left"></i>
        </div>
        <div className="banner_6-swiper-next">
          <i className="fa-thin fa-angle-right"></i>
        </div>
      </div>
    </Swiper>
  );
};

export default BannerSlider;

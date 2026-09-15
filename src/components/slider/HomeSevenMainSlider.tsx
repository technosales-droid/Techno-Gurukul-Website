"use client";
import { homeSevenBannerSlides } from "@/data";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSevenMainSlider = ({
  thumbsSwiper,
}: {
  thumbsSwiper: SwiperType | null;
}) => {
  return (
    <section className="slider-area fix">
      <Swiper
        className="h7_slider-active"
        speed={1000}
        effect={"fade"}
        navigation={{
          prevEl: ".h7_slider-prev",
          nextEl: ".h7_slider-next",
        }}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[Navigation, EffectFade, Thumbs]}
      >
        {homeSevenBannerSlides.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h7_single-banner bg-default"
              style={
                {
                  "--post-image-url-2": `url('${item.bgImg}')`,
                } as React.CSSProperties
              }
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-8 col-md-11">
                    <div className="h7_banner-content">
                      <h1
                        className="h7_banner-content-title"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></h1>
                      <p className="h7_banner-content-text">{item.desc}</p>
                      <div className="h7_banner-content-btn">
                        <Link href="/contact" className="theme-btn theme-btn-7">
                          Apply Now<i className="fa-light fa-arrow-right"></i>
                        </Link>
                        <Link
                          href="/about"
                          className="theme-btn theme-btn-7 theme-btn-7-yellow"
                        >
                          Learn More
                          <i className="fa-light fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="h7_slider-navigation d-none d-md-grid">
          <div className="h7_slider-prev">
            <i className="fa-regular fa-arrow-down-left"></i>
          </div>
          <div className="h7_slider-next">
            <i className="fa-regular fa-arrow-up-right"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default HomeSevenMainSlider;

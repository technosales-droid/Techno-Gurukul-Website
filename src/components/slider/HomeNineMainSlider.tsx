"use client";
import { homeNineBannerSlideData } from "@/data";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeNineMainSlider = ({
  thumbsSwiper,
}: {
  thumbsSwiper: SwiperType | null;
}) => {
  return (
    <section className="slider-area fix">
      <Swiper
        className="h9_slider-active"
        speed={1000}
        effect={"fade"}
        autoplay={{
          delay: 5000,
        }}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[EffectFade, Thumbs, Autoplay]}
      >
        {homeNineBannerSlideData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h9_single-banner"
              style={{
                backgroundImage: `url(${item.bgImg})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-7 col-lg-8 col-md-11">
                    <div className="h9_banner-content">
                      <span className="h9_banner-content-subtitle">
                        {item.subTitle}
                      </span>
                      <h1 className="h9_banner-content-title">{item.title}</h1>
                      <p
                        className="h9_banner-content-text"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></p>
                      <div className="h9_banner-content-btn">
                        <Link href="/course" className="theme-btn theme-btn-9">
                          More Details
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
      </Swiper>
    </section>
  );
};

export default HomeNineMainSlider;

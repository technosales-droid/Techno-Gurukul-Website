"use client";
import { homeNineBannerSlideData } from "@/data";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";
import { Thumbs, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeNineThumbSlider = ({
  onSwiper,
}: {
  onSwiper: (swiper: SwiperType) => void;
}) => {
  return (
    <section className="h9_slider-thumb">
      <Swiper
        className="h9_slider-active-nav"
        onSwiper={onSwiper}
        spaceBetween={0}
        slidesPerView={1}
        freeMode={true}
        watchSlidesProgress={true}
        breakpoints={{
          550: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
        modules={[FreeMode, Thumbs]}
      >
        {homeNineBannerSlideData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`h9_slider-thumb-item ${
                item.thumbBgStyle ? item.thumbBgStyle : ""
              }`}
            >
              <div className="h9_slider-thumbs-icon">
                <item.thumbIcon />
              </div>
              <div className="h9_slider-thumbs-info">
                <h4>{item.thumbTitle}</h4>
                <Link href="/about">
                  Read More<i className="fa-regular fa-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeNineThumbSlider;

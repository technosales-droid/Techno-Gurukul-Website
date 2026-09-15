"use client";
import { homeSevenBannerSlides } from "@/data";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";
import { Thumbs, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSevenThumbSlider = ({
  onSwiper,
}: {
  onSwiper: (swiper: SwiperType) => void;
}) => {
  return (
    <section className="h7_slider-thumb">
      <Swiper
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
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
        modules={[FreeMode, Thumbs]}
        className="h7_slider-active-nav"
      >
        {homeSevenBannerSlides.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="h7_slider-thumb-item"
              style={
                {
                  "--post-image-url-3": `url('${item.thumbIconBg}')`,
                } as React.CSSProperties
              }
            >
              <div className="h7_slider-thumbs-icon">
                <item.thumbIcon />
              </div>
              <div className="h7_slider-thumbs-info">
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

export default HomeSevenThumbSlider;

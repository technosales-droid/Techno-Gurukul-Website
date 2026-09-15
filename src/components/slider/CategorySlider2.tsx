"use client";
import { homeEightCategoryData } from "@/data";
import Link from "next/link";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CategorySlider2 = () => {
  return (
    <Swiper
      className="h8_category-active pt-50 pb-50"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={{
        nextEl: ".h8_category-prev",
        prevEl: ".h8_category-next",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
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
          slidesPerView: 5,
        },
      }}
      modules={[Navigation]}
    >
      {homeEightCategoryData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="h8_category-item">
            <span className="h8_category-icon">
              <i className={item.iconClass}></i>
            </span>
            <h4 className="h8_category-title">
              <Link href={item.link}>{item.title}</Link>
            </h4>
            <p className="h8_category-text">{item.courseCount}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider2;

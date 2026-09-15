"use client";
import Link from "next/link";
import Image from "next/image";
import { homeOneCategories } from "@/data";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CategorySlider = () => {
  return (
    <Swiper
      className="category-active pb-60"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      loopAdditionalSlides={1}
      slidesPerGroup={1}
      navigation={{
        nextEl: ".category-next",
        prevEl: ".category-prev",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        1400: {
          slidesPerView: 4,
          slidesPerGroup: 1,
        },
      }}
      modules={[Navigation]}
    >
      {homeOneCategories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="category-item">
            <div className="category-img">
              <Image
                width={400}
                height={300}
                src={category.image}
                alt={category.title}
              />
            </div>
            <div className="category-content">
              <h5>
                <Link href="/course">{category.title}</Link>
              </h5>
              <p>
                <Link href="/course">
                  {category.items} Items
                  <i className="fa-light fa-arrow-right"></i>
                  <i className="fa-light fa-arrow-right"></i>
                </Link>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySlider;

"use client";
import { brandImages } from "@/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider = () => {
  return (
    <Swiper
      className="brand-active"
      slidesPerView={1}
      spaceBetween={30}
      loop
      autoplay={{
        delay: 1500,
      }}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      }}
      modules={[Autoplay]}
    >
      {brandImages.map((img) => (
        <SwiperSlide key={img.id}>
          <div className="brand-item">
            <a href="#">
              <Image
                width={img.width}
                height={img.height}
                src={img.hover}
                alt="img"
                className="brand-hover-img"
              />
              <Image
                width={img.width}
                height={img.height}
                src={img.main}
                alt="img"
                className="brand-main-img"
              />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSlider;

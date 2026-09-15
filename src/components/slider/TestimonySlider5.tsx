"use client";
import { homeTenTestimonials } from "@/data";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import Image from "next/image";

const TestimonySlider5 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const handleThumbsSwiper = (swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={2000}
        navigation={{
          nextEl: ".h10_testimonial-prev",
          prevEl: ".h10_testimonial-next",
        }}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[Thumbs, Navigation]}
        className="h10_testimonial-active"
      >
        {homeTenTestimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h10_testimonial-item">
              <blockquote>
                <p>{item.testimony}</p>
                <div className="quote-admin-inner">
                  <h5>{item.name}</h5>
                  <span>{item.position}</span>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
        <div className="h10_testimonial-navigation">
          <div className="h10_testimonial-prev">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
                fill="currentColor"
              />
              <path
                d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="h10_testimonial-next">
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 8L2 0.5L0.950001 1.55L7.4 8L0.950001 14.45L2 15.5L9.5 8Z"
                fill="currentColor"
              />
              <path
                d="M9.5 8L2 0.5L0.950001 1.55L7.4 8L0.950001 14.45L2 15.5L9.5 8Z"
                fill="currentColor"
                fillOpacity="0.8"
              />
            </svg>
          </div>
        </div>
      </Swiper>
      <div className="h10_testimonial-thumb-wrap">
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          allowTouchMove={false}
          speed={2000}
          onSwiper={handleThumbsSwiper}
          freeMode={true}
          modules={[FreeMode, Thumbs]}
          className="h10_testimonial-thumbs"
        >
          {homeTenTestimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={`h10_testimonial-admin h10_testimonial-admin-${item.id}`}
              >
                <Image width={60} height={60} src={item.thumbImg} alt="img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TestimonySlider5;

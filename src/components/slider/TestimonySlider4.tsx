"use client";
import { homeNineTestimonials } from "@/data";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const TestimonySlider4 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const handleThumbsSwiper = (swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  };
  return (
    <>
      <Swiper
        className="h9_testimonial-active"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={2000}
        pagination={{
          el: ".h9_testimonial-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".h9_testimonial-prev",
          prevEl: ".h9_testimonial-next",
        }}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[Thumbs, Pagination, Navigation]}
      >
        {homeNineTestimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h9_testimonial-item">
              <p>{item.testimony}</p>
              <h6>
                {item.name}
                <span>{item.location}</span>
              </h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h9_testimonial-thumb-wrap mt-90">
        <Swiper
          className="h9_testimonial-thumbs"
          spaceBetween={30}
          slidesPerView={3}
          allowTouchMove={false}
          speed={2000}
          onSwiper={handleThumbsSwiper}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {homeNineTestimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h9_testimonial-img">
                <Image width={80} height={80} src={item.thumbImg} alt="img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TestimonySlider4;

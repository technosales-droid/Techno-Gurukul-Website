"use client";
import { testimonials } from "@/data";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const TestimonySlider2 = () => {
  return (
    <Swiper
      className="h3_testimonial-active"
      slidesPerView={2}
      slidesPerGroup={1}
      spaceBetween={30}
      loop={true}
      speed={2000}
      navigation={{
        nextEl: ".h3_testimonial-prev",
        prevEl: ".h3_testimonial-next",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        576: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        992: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1400: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1800: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      }}
      modules={[Navigation]}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="h3_testimonial-item">
            <div className="h3_testimonial-item-content">
              <p>{testimonial.content}</p>
              <Image
                width={144}
                height={120}
                src="/assets/img/testimonial/3/quote.png"
                alt="Quote Icon"
                className="quote"
              />
            </div>
            <div className="h3_testimonial-item-author">
              <Image
                width={65}
                height={65}
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="h3_testimonial-item-author-info">
                <h5>{testimonial.name}</h5>
                <span>{testimonial.position}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonySlider2;

"use client";
import { testimonials } from "@/data";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const TestimonySlider = () => {
  return (
    <Swiper
      className="testimonial-active pb-80"
      slidesPerView={1}
      spaceBetween={30}
      loop
      speed={2000}
      scrollbar={{ el: ".testimonial-scrollbar", draggable: true }}
      navigation={{
        nextEl: ".event-prev",
        prevEl: ".event-next",
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
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
        1800: {
          slidesPerView: 5,
        },
      }}
      modules={[Scrollbar, Navigation]}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="testimonial-item">
            <div className="testimonial-top">
              <div className="testimonial-admin">
                <div className="testimonial-admin-img">
                  <Image width={40} height={40} src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-admin-info">
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.position}</span>
                </div>
              </div>
              <div className="testimonial-rating">
                <ul>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <li key={i}>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonySlider;

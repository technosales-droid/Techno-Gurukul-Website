"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonySlider3 = () => {
  return (
    <Swiper
      className="h6_testimonial-active"
      slidesPerView={2}
      spaceBetween={30}
      loop
      speed={2000}
      navigation={{
        nextEl: ".h6_testimonial-prev",
        prevEl: ".h6_testimonial-next",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
        1800: {
          slidesPerView: 1,
        },
      }}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className="h6_testimonial-item">
          <blockquote>
            <p>
              One aspect that truly stood out for me was the research
              opportunities. Eduan University has state-of-the-art labs and
              facilities, and I had the chance to work on cutting-edge research
              projects alongside professors.
            </p>
            <div className="quote-admin">
              <div className="quote-admin-inner">
                <h5>William Board</h5>
                <span>Student Eduan Univesity</span>
              </div>
            </div>
          </blockquote>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h6_testimonial-item">
          <blockquote>
            <p>
              One aspect that truly stood out for me was the research
              opportunities. Eduan University has state-of-the-art labs and
              facilities, and I had the chance to work on cutting-edge research
              projects alongside professors.
            </p>
            <div className="quote-admin">
              <div className="quote-admin-inner">
                <h5>William Board</h5>
                <span>Student Eduan Univesity</span>
              </div>
            </div>
          </blockquote>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h6_testimonial-item">
          <blockquote>
            <p>
              One aspect that truly stood out for me was the research
              opportunities. Eduan University has state-of-the-art labs and
              facilities, and I had the chance to work on cutting-edge research
              projects alongside professors.
            </p>
            <div className="quote-admin">
              <div className="quote-admin-inner">
                <h5>William Board</h5>
                <span>Student Eduan Univesity</span>
              </div>
            </div>
          </blockquote>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonySlider3;

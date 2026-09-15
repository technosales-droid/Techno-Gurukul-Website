"use client";
import Link from "next/link";
import Image from "next/image";
import { events } from "@/data";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const EventSlider = () => {
  return (
    <Swiper
      className="event-active pb-80"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      slidesPerGroup={1}
      loopAdditionalSlides={1}
      navigation={{
        nextEl: ".event-next",
        prevEl: ".event-prev",
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
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
      }}
      modules={[Navigation]}
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <div className="event-item">
            <div className="event-img">
              <Link href={`/event/${event.slug}`}>
                <Image width={410} height={270} src={event.img} alt="img" />
              </Link>
            </div>
            <div className="event-content">
              <div className="event-content-meta">
                <span>
                  <i className="fa-thin fa-location-dot"></i>
                  {event.location}
                </span>
                <span>
                  <i className="fa-thin fa-clock"></i>
                  {event.time}
                </span>
              </div>
              <h5 className="event-content-title">
                <Link href={`/event/${event.slug}`}>{event.title}</Link>
              </h5>
              <Link href="/sign-up" className="t-theme-btn theme-btn event-btn">
                Get Ticket
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventSlider;

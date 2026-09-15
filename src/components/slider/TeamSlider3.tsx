"use client";
import { teamMembers } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";

const TeamSlider3 = () => {
  return (
    <Swiper
      className="teacher-active-8"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      speed={2000}
      navigation={{
        nextEl: ".h8_teacher-prev",
        prevEl: ".h8_teacher-next",
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
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
      }}
      modules={[Navigation]}
    >
      {teamMembers.slice(0, 8).map((teamMember) => (
        <SwiperSlide key={teamMember.id}>
          <div className="h8_teacher-item">
            <div className="h8_teacher-img w_img">
              <Image width={410} height={470} src={teamMember.image} alt={teamMember.name} />
              <div className="h8_teacher-social">
                <span className="share">
                  <i className="fa-light fa-share-nodes"></i>
                </span>
                <ul>
                  {teamMember.socials.map((social, i) => (
                    <li key={i}>
                      <a href={social.link}>
                        <i className={`fa-brands ${social.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="h8_teacher-content">
              <h5 className="h8_teacher-content-title">
                <Link href={`/team/${teamMember.slug}`}>{teamMember.name}</Link>
              </h5>
              <span>{teamMember.role}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider3;

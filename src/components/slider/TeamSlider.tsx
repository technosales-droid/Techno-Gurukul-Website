"use client";
import { teamMembers } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  variant?: boolean;
}

const TeamSlider = ({ variant }: Props) => {
  return (
    <>
      <Swiper
        className={`${
          variant ? "teacher-active-6" : "teacher-active"
        } overflow-hidden`}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={2000}
        pagination={{
          el: ".teacher-pagination",
          clickable: true,
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
        modules={[Pagination]}
      >
        {teamMembers.slice(0, 6).map((teamMember) => (
          <SwiperSlide key={teamMember.id}>
            <div className="h3_teacher-item mb-25">
              <div className="h3_teacher-img w_img">
                <Image
                  width={410}
                  height={470}
                  src={teamMember.image}
                  alt={teamMember.name}
                />
                <div className="h3_teacher-social">
                  <ul>
                    {teamMember.socials.map((social, index) => (
                      <li key={index}>
                        <a href={social.link}>
                          <i className={`fa-brands ${social.icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <span className="share">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
              <div className="h3_teacher-content">
                <h5 className="h3_teacher-content-title">
                  <Link href={`/team/${teamMember.slug}`}>{teamMember.name}</Link>
                </h5>
                <span>{teamMember.role}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="teacher-pagination mt-45"></div>
    </>
  );
};

export default TeamSlider;

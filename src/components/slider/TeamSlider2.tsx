"use client";
// import { homeFiveTeamMembersData } from "@/data";
import { homeFiveTeamMembersData } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const TeamSlider2 = () => {
  return (
    <Swiper
      className="teacher-active-5"
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
      {homeFiveTeamMembersData.map((teamMember) => (
        <SwiperSlide key={teamMember.id}>
          <div className="h5_teacher-item mb-25">
            <div className="h5_teacher-img w_img">
              <Image
                width={410}
                height={570}
                src={teamMember.image}
                alt={teamMember.name}
              />
              <div className="h5_teacher-social">
                <ul>
                  <li>
                    <a href={teamMember.socials.facebook}>
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href={teamMember.socials.twitter}>
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={teamMember.socials.linkedin}>
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h5_teacher-content">
              <h5 className="h5_teacher-content-title">
                <Link href={`/team/${teamMember.slug}`}>{teamMember.name}</Link>
              </h5>
              <span>{teamMember.role}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="teacher-pagination mt-45"></div>
    </Swiper>
  );
};

export default TeamSlider2;

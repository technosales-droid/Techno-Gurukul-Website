"use client";
import { homeNineTeamMembersData } from "@/data";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";

const TeamSlider4 = () => {
  return (
    <Swiper
      className="teacher-active-9"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      speed={2000}
      pagination={{
        el: ".h9_teacher-pagination",
        clickable: true,
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
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
    >
      {homeNineTeamMembersData.map((teamMember) => (
        <SwiperSlide key={teamMember.id}>
          <div className="h9_teacher-item mb-30">
            <div className="h9_teacher-img">
              <Image width={410} height={530} src={teamMember.image} alt={teamMember.name} />
            </div>
            <div className="h9_teacher-content">
              <h5 className="h9_teacher-content-title">
                <Link href={`/team/${teamMember.slug}`}>{teamMember.name}</Link>
              </h5>
              <span>{teamMember.role}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="h9_teacher-pagination mt-50"></div>
    </Swiper>
  );
};

export default TeamSlider4;

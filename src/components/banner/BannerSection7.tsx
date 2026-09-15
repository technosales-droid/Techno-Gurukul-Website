"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import dynamic from "next/dynamic";

const HomeSevenMainSlider = dynamic(
  () => import("../slider/HomeSevenMainSlider"),
  {
    ssr: false,
  }
);
const HomeSevenThumbSlider = dynamic(
  () => import("../slider/HomeSevenThumbSlider"),
  {
    ssr: false,
  }
);

const BannerSection7 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const handleThumbsSwiper = (swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  };

  return (
    <>
      <HomeSevenMainSlider thumbsSwiper={thumbsSwiper} />
      <HomeSevenThumbSlider onSwiper={handleThumbsSwiper} />
    </>
  );
};

export default BannerSection7;

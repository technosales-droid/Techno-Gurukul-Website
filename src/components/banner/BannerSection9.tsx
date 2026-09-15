"use client";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import dynamic from "next/dynamic";

const HomeNineMainSlider = dynamic(
  () => import("../slider/HomeNineMainSlider"),
  {
    ssr: false,
  }
);
const HomeNineThumbSlider = dynamic(
  () => import("../slider/HomeNineThumbSlider"),
  {
    ssr: false,
  }
);

const BannerSection9 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const handleThumbsSwiper = (swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  };
  return (
    <>
      <HomeNineMainSlider thumbsSwiper={thumbsSwiper} />
      <HomeNineThumbSlider onSwiper={handleThumbsSwiper} />
    </>
  );
};

export default BannerSection9;

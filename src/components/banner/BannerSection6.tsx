"use client";
import dynamic from "next/dynamic";

const BannerSlider = dynamic(() => import("../slider/BannerSlider"), {
  ssr: false,
});

const BannerSection6 = () => {
  return (
    <section className="h6_banner-area">
      <BannerSlider />
    </section>
  );
};

export default BannerSection6;

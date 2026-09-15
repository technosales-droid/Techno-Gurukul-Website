"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogPosts } from "@/data";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const BlogSlider = () => {
  return (
    <Swiper
      className="blog-active-8 pb-80 pt-30"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      speed={2000}
      navigation={{
        nextEl: ".h8_blog-prev",
        prevEl: ".h8_blog-next",
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
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation]}
    >
      {blogPosts.slice(0, 6).map((post) => (
        <SwiperSlide>
          <div className="h8_blog-item" key={post.id}>
            <div className="h8_blog-item-img w_img">
              <Link href={`/blog/${post.slug}`}>
                <Image width={410} height={250} src={post.image} alt="img" />
              </Link>
            </div>
            <div className="h8_blog-item-content">
              <h4 className="h8_blog-item-content-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="h8_blog-item-content-btn"
              >
                Explore More<i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSlider;

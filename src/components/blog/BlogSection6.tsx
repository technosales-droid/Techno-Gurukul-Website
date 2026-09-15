"use client";
import dynamic from "next/dynamic";

const BlogSlider = dynamic(() => import("../slider/BlogSlider"), {
  ssr: false,
});

const BlogSection6 = () => {
  return (
    <section className="h8_blog-area pt-110 pb-30">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-8">
            <div className="section-area-8 mb-20">
              <span className="section-subtitle">Our Blogs</span>
              <h2 className="section-title mb-0">Have a Look on Our News</h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="h8_blog-navigation mb-30">
              <div className="h8_blog-prev">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7H1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="h8_blog-next">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 1L13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <BlogSlider />
      </div>
    </section>
  );
};

export default BlogSection6;

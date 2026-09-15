import { blogPosts } from "@/data";

import Link from "next/link";
import Image from "next/image";

const BlogSection8 = () => {
  return (
    <section className="h10_blog-area pt-120 pb-110">
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-md-9">
            <div className="section-area-3 mb-30">
              <h2 className="section-title mb-0">Read Our Latest News</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="h4_category-section-button mb-40 text-md-end">
              <Link
                href="/blog"
                className="theme-btn theme-btn-10 h10_blog-btn"
              >
                View All Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.slice(0, 3).map((post) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={post.id}>
              <div className="h4_blog-item mb-30">
                <div className="h4_blog-img">
                  <Link href={`/blog/${post.slug}`}>
                    <Image width={410} height={240} src={post.image} alt="img" />
                  </Link>
                  <a href="#" className="h4_blog-img-meta">
                    {post.category}
                  </a>
                </div>
                <div className="h4_blog-content">
                  <div className="h4_blog-content-meta">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                  <h5 className="h4_blog-content-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h5>
                  <p>Maecenas Felis Tellus, dictum sed fermentum......</p>
                  <Link href={`/blog/${post.slug}`} className="h4_blog-btn">
                    Read More<i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection8;

import Link from "next/link";
import { blogPosts } from "@/data";
import Image from "next/image";

const BlogSection = () => {
  const horizontalBlogPosts = blogPosts.slice(0, 2);
  const verticalBlogPost = blogPosts[2];

  return (
    <section className="blog-area pt-140 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="testimonial-section-area text-center">
              <div className="section-area mb-55 section-area-top">
                <span className="section-subtitle">Our Blog</span>
                <h2 className="section-title mb-20">Our Latest Articles</h2>
                <p className="section-text">
                  Through a combination of lectures, readings, discussions,
                  students will gain a solid foundation in educational
                  psychology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="blog-wrap">
              {horizontalBlogPosts.map((post) => (
                <div className="blog-item blog-item-h mb-30" key={post.id}>
                  <div className="blog-img">
                    <Link href={`/blog/${post.slug}`}>
                      <Image width={410} height={240} src={post.image} alt="img" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-content-meta">
                      <span>
                        <i className="fa-thin fa-user"></i> {post.author}
                      </span>
                      <span>
                        <i className="fa-thin fa-clock"></i> {post.date}
                      </span>
                    </div>
                    <h5 className="blog-content-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h5>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="theme-btn blog-btn t-theme-btn"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-4 col-lg-4">
            {verticalBlogPost && (
              <div className="blog-item blog-item-v mb-30">
                <div className="blog-img">
                  <Link href={`/blog/${verticalBlogPost.slug}`}>
                    <Image
                      width={410}
                      height={240}
                      src={verticalBlogPost.image}
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-content-meta">
                    <span>
                      <i className="fa-thin fa-user"></i> {verticalBlogPost.author}
                    </span>
                    <span>
                      <i className="fa-thin fa-clock"></i> {verticalBlogPost.date}
                    </span>
                  </div>
                  <h5 className="blog-content-title">
                    <Link href={`/blog/${verticalBlogPost.slug}`}>
                      {verticalBlogPost.title}
                    </Link>
                  </h5>
                  <Link
                    href={`/blog/${verticalBlogPost.slug}`}
                    className="theme-btn blog-btn t-theme-btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

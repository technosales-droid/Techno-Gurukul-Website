import Link from "next/link";
import { blogPosts } from "@/data";
import Image from "next/image";

const BlogSection2 = () => {
  return (
    <section className="h2_blog-area pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-area-2 mb-50 text-center h2_blog-section-area">
              <h2 className="section-title mb-30">
                Our Latest{" "}
                <span>
                  Articles{" "}
                  <Image
                    width={168}
                    height={9}
                    src="/assets/img/banner/2/line.png"
                    alt="img"
                  />
                </span>
              </h2>
              <p className="section-text">
                Through a combination of lectures, readings, discussions,
                students will gain a solid foundation in educational psychology.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {blogPosts.slice(0, 3).map((post) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={post.id}>
              <div className="h2_blog-item mb-30">
                <div className="h2_blog-img">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      width={410}
                      height={240}
                      src={post.image}
                      alt={post.title}
                    />
                  </Link>
                </div>
                <div className="h2_blog-content">
                  <div className="h2_blog-content-meta">
                    <span>
                      <i className="fa-thin fa-user"></i> {post.author}
                    </span>
                    <span>
                      <i className="fa-thin fa-clock"></i> {post.date}
                    </span>
                  </div>
                  <h5 className="h2_blog-content-title">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection2;

import Link from "next/link";
import { blogPosts } from "@/data";
import Image from "next/image";

const BlogSection3 = () => {
  return (
    <section className="h3_blog-area pt-135 pb-110">
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-md-9">
            <div className="section-area-3 mb-30">
              <span className="section-subtitle">Meet Our Mentors</span>
              <h2 className="section-title mb-0">Read Our Latest News</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="h3_category-section-button mb-40 text-md-end">
              <Link
                href="/blog"
                className="theme-btn theme-btn-medium theme-btn-3"
              >
                View All Blog<i className="fa-light fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {blogPosts.slice(0, 3).map((post) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={post.id}>
              <div className="h3_blog-item mb-30">
                <div className="h3_blog-img">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      width={410}
                      height={240}
                      src={post.image}
                      alt={post.title}
                    />
                  </Link>
                  <Link href="/blog" className="h3_blog-img-meta">
                    {post.category}
                  </Link>
                </div>
                <div className="h3_blog-content">
                  <div className="h3_blog-content-meta">
                    <span>
                      <i className="fa-thin fa-clock"></i>
                      {post.date}
                    </span>
                    <span>
                      <i className="fa-thin fa-user"></i>
                      {post.author}
                    </span>
                  </div>
                  <h5 className="h3_blog-content-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h5>
                  <p>
                    Proin venenatis tincidunt ligula, in cursus neque volutpat
                    et. Nam ut nibh porta.
                  </p>
                  <Link href={`/blog/${post.slug}`} className="h3_blog-btn">
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

export default BlogSection3;

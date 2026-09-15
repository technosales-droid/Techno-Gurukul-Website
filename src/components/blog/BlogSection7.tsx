import { blogPosts } from "@/data";
import Link from "next/link";


const BlogSection7 = () => {
  return (
    <section className="h9_blog-area pt-115">
      <div className="container">
        <div className="row align-items-end mb-20">
          <div className="col-md-9">
            <div className="section-area-9 mb-20">
              <span className="section-subtitle">Latest News</span>
              <h2 className="section-title mb-0">Our Latest Articles</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="h5_category-section-button mb-30 text-md-end">
              <Link href="/blog" className="theme-btn theme-btn-9">
                View All Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.slice(0, 3).map((post) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={post.id}>
              <div className="h9_blog-item mb-30">
                <div className="h9_blog-content">
                  <div className="h9_blog-content-meta">
                    <Link href="/blog" className="h9_blog-content-meta-tag">
                      Blog
                    </Link>
                    <span>{post.date}</span>
                  </div>
                  <h5 className="h9_blog-content-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h5>
                  <p>
                    Maecenas Felis Tellus, dictum sed pharetra fermentum......
                  </p>
                  <Link href={`/blog/${post.slug}`} className="h9_blog-btn">
                    <svg
                      width="19"
                      height="12"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9998 5.60059L1 5.60059"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 1.00058L17.8399 5.81971L13 10.6396"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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

export default BlogSection7;

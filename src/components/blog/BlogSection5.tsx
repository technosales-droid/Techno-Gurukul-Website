import { blogPosts } from "@/data";
import Link from "next/link";
interface Props {
  variant?: boolean;
}
const BlogSection5 = ({ variant }: Props) => {
  return (
    <section
      className={`h5_blog-area ${
        variant ? "h6_blog-area pt-115 pb-90" : "pt-135 pb-110"
      }`}
    >
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-md-9">
            <div
              className={`${
                variant ? "section-area-6" : "section-area-5"
              } mb-30`}
            >
              <span className="section-subtitle">Latest News</span>
              <h2 className="section-title mb-0">Our Latest Articles</h2>
            </div>
          </div>
          <div className="col-md-3">
            <div className="h5_category-section-button mb-40 text-md-end">
              <Link
                href="/blog"
                className="theme-btn theme-btn-medium theme-btn-5"
              >
                View All Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={post.id}>
              <div
                className={`h5_blog-item ${
                  variant && index === 0 ? "active" : ""
                } mb-30`}
              >
                <div className="h5_blog-content">
                  <div className="h5_blog-content-meta">
                    <Link href="/blog" className="h5_blog-content-meta-tag">
                      {post.category}
                    </Link>
                    <span>{post.date}</span>
                  </div>
                  <h5 className="h5_blog-content-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h5>
                  <p>
                    Maecenas Felis Tellus, dictum sed pharetra fermentum......
                  </p>
                  <Link href={`/blog/${post.slug}`} className="h5_blog-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="m506.134 241.843-.018-.019-104.504-104c-7.829-7.791-20.492-7.762-28.285.068-7.792 7.829-7.762 20.492.067 28.284L443.558 236H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h423.557l-70.162 69.824c-7.829 7.792-7.859 20.455-.067 28.284 7.793 7.831 20.457 7.858 28.285.068l104.504-104 .018-.019c7.833-7.818 7.808-20.522-.001-28.314z"
                        fill="currentColor"
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

export default BlogSection5;

import Link from "next/link";
import { blogPosts } from "@/data";
import Image from "next/image";

const RecentBlogs = () => {
  return (
    <div className="blog_details-widget">
      <h4 className="blog_details-widget-title">Recent Posts</h4>
      {blogPosts.slice(0, 3).map((post) => (
        <div className="blog_details-widget-post" key={post.id}>
          <div className="blog_details-post-img">
            <Link href={`/blog/${post.slug}`} className="recent-blog-post-img">
              <Image width={410} height={240} src={post.image} alt="img" />
            </Link>
          </div>
          <div className="blog_details-post-info">
            <span>
              <i className="fa-thin fa-clock"></i> {post.date}
            </span>
            <h6>
              <Link href={`/blog/${post.slug}`}>
                {post.title.length > 38
                  ? `${post.title.slice(0, 38)}...`
                  : post.title}
              </Link>
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentBlogs;

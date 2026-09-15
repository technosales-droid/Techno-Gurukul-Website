import BlogSidebar from "./BlogSidebar";
import type { BlogPostType } from "@/types";
import BlogDetailInfo from "./BlogDetailInfo";
import Image from "next/image";

interface Props {
  blogInfo: BlogPostType;
  currentIndex: number;
}
const BlogDetailSection = ({ blogInfo, currentIndex }: Props) => {
  return (
    <section className="blog_details-area pt-120 pb-80">
      <div className="container">
        <div className="blog_details-img">
          <Image width={1290} height={570} src={blogInfo.detailImg} alt="img" />
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <BlogDetailInfo
              title={blogInfo.title}
              author={blogInfo.author}
              currentIndex={currentIndex}
            />
          </div>
          <BlogSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;

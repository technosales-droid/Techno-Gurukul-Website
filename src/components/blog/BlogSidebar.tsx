import RecentBlogs from "./RecentBlogs";
import BlogCategories from "./BlogCategories";
import PopularCoursesSidebar from "../course/PopularCoursesSidebar";
import BlogTags from "./BlogTags";
import BlogSearchForm from "../form/BlogSearchForm";

const BlogSidebar = () => {
  return (
    <div className="col-xl-4 col-lg-4">
      <div className="blog_details-sidebar mb-60">
        <div className="blog_details-widget">
          <h4 className="blog_details-widget-title">Search</h4>
          <BlogSearchForm />
        </div>
        <RecentBlogs />
        <BlogCategories />
        <PopularCoursesSidebar />
        <BlogTags />
      </div>
    </div>
  );
};

export default BlogSidebar;

import { blogPosts } from "@/data";

const BlogCategories = () => {
  // Extract all categories from blogPosts
  const allCategories = blogPosts.map((post) => post.category);

  // Get unique categories using a Set, then convert back to an array
  const uniqueCategories = Array.from(new Set(allCategories));

  return (
    <div className="blog_details-widget widget-category">
      <h4 className="blog_details-widget-title">Categories</h4>
      <div className="blog_details-widget-category">
        <ul>
          {/* Map over the uniqueCategories array */}
          {uniqueCategories.map((category) => (
            <li key={category}>
              {" "}
              {/* Use category itself as key since it's unique */}
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogCategories;

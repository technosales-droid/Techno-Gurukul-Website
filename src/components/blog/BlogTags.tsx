const tags = [
  "Consulting",
  "Student",
  "Course",
  "Art",
  "School",
  "Education",
  "Learning",
  "Design",
  "Online Courses",
  "UI Design",
];

const BlogTags = () => {
  return (
    <div className="blog_details-widget">
      <h4 className="blog_details-widget-title">Tags</h4>
      <div className="blog_details-widget-tag">
        <ul>
          {tags.map((tag) => (
            <li key={tag}>
              <a href="#">{tag}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogTags;

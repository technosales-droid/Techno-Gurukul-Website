import Image from "next/image";

const CourseInstructorTabpane = () => {
  return (
    <div className="course_details-instructor">
      <div className="course_details-thumbnail w_img">
        <Image
          width={410}
          height={470}
          src="/assets/img/teacher/2/1.jpg"
          alt="team images"
        />
      </div>
      <div className="course_details-author-content">
        <h6 className="course_details-author-title">Jane Seymour</h6>
        <span className="course_details-author-subtitle">
          Founder &amp; CEO
        </span>
        <p>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore
          et dolore magna aliqua enim minim veniam quis nostrud exercitation
          ulla mco laboris nisi ut aliquip ex ea commodo consequat. duis aute
          irure dolor in reprehenderit in voluptate.
        </p>
        <div className="contact-social">
          <span>Social Media</span>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructorTabpane;

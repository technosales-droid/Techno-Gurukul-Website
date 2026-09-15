const CourseReviewTabpane = () => {
  return (
    <div className="course_details-review">
      <h4 className="course_details-review-title">
        Student Ratings &amp; Reviews
      </h4>
      <div className="course_details-review-wrap">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 col-sm-4">
            <div className="course_details-review-left">
              <h5>5.0</h5>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                </li>
              </ul>
              <p>(4 Reviews)</p>
            </div>
          </div>
          <div className="col-md-8 col-sm-8">
            <div className="course_details-review-content">
              <ul>
                <li>
                  <span className="review-rating">
                    5 <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="review-progress-bar"></span>
                  <span className="review-rating-count">1</span>
                </li>
                <li>
                  <span className="review-rating">
                    4 <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="review-progress-bar"></span>
                  <span className="review-rating-count">3</span>
                </li>
                <li>
                  <span className="review-rating">
                    5 <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="review-progress-bar"></span>
                  <span className="review-rating-count">0</span>
                </li>
                <li>
                  <span className="review-rating">
                    5 <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="review-progress-bar"></span>
                  <span className="review-rating-count">0</span>
                </li>
                <li>
                  <span className="review-rating">
                    5 <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="review-progress-bar"></span>
                  <span className="review-rating-count">0</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewTabpane;

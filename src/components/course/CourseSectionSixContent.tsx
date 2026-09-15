
import Image from "next/image";

interface Props {
  id: number;
  title: string;
  toggleAccordion: (id: number) => void;
}
const CourseSectionSixContent = ({ id, title, toggleAccordion }: Props) => {
  return (
    <>
      <div
        className="h8_course-m-title"
        role="button"
        onClick={() => toggleAccordion(id)}
      >
        <h6 className="h8_course-m-count">
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L23 7L17 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M9 1L15 7L9 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h6>
        <span className="h8_course-m-title-vertical">{title}</span>
        <h6 className="h8_course-m-count h8_course-m-count-2">
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1L23 7L17 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.7"
              d="M9 1L15 7L9 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.5"
              d="M1 1L7 7L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h6>
      </div>
      <div className="h8_course-content-3">
        <div className="course-accordion-wrap">
          <div className="accordion-body-img">
            <Image
              width={440}
              height={355}
              src="/assets/img/course/9/1.png"
              alt="img"
            />
            <span>$450</span>
          </div>
          <div className="accordion-body-bottom">
            <div className="accordion-body-content">
              <h4>Web Development</h4>
              <p>
                There are many variations of passages of Lorem Ips um available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which.
              </p>
              <p>
                Many variations of passages of Lorem Ipsum one available, but
                the majority have suffered alteration in <b>Sketch, Adobe XD</b>{" "}
                or <b>Figma</b>.
              </p>
              <div className="accordion-body-content-rating">
                <div className="accordion_left">
                  <div className="accordion_left_img">
                    <Image
                      width={70}
                      height={30}
                      src="/assets/img/course/9/2.png"
                      alt="img"
                    />
                    <span>20k</span>
                  </div>
                  <ul className="accordion_left_rating">
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i className="fa-solid fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div className="accordion_right">
                  <h2>
                    4.5<span>(10)</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="accordion-body-right">
              <div className="inner-info mb-70">
                <h3>5</h3>
                <span>Weeks</span>
              </div>
              <div className="inner-info inner-info-2">
                <h3>30</h3>
                <span>Classes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSectionSixContent;

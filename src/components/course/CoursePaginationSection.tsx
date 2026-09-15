"use client";
import { useCustomContext } from "@/context/context";

interface Props {
  ITEMS_PER_PAGE: number;
}
const CoursePaginationSection = ({ ITEMS_PER_PAGE }: Props) => {
  const { filteredCourses, currentPage, handlePageClick } = useCustomContext();
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  return (
    <>
      {totalPages > 1 && (
        <div className="row">
          <div className="col-12">
            <div className="pagination-area mt-20 mb-30">
              <ul>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={i + 1 === currentPage ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(i + 1);
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </a>
                  </li>
                ))}
                {currentPage < totalPages && (
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(currentPage + 1);
                      }}
                    >
                      <i className="fa-light fa-angle-right"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursePaginationSection;

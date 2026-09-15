"use client";
import { useCustomContext } from "@/context/context";


const CourseSearchForm = () => {
  const { search, handleSearchChange } = useCustomContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search Item"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit" className="innerPage_course-search-btn">
        <i className="fa-thin fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default CourseSearchForm;

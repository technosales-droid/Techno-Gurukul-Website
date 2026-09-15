"use client";
import { useRouter } from "next/navigation";
import { useCustomContext } from "@/context/context";

const BannerSearchForm3 = () => {
  const { search, handleSearchChange } = useCustomContext();
  const navigate = useRouter();
  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate.push(`/course`);
  };
  return (
    <form onSubmit={handleFormSubmit} className="h4_banner-form">
      <input
        type="text"
        placeholder="Search your course"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit" className="theme-btn theme-btn-4 h4_banner-btn">
        Find Course
      </button>
    </form>
  );
};

export default BannerSearchForm3;

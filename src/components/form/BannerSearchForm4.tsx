"use client";
import { useRouter } from "next/navigation";
import { useCustomContext } from "@/context/context";

const BannerSearchForm4 = () => {
  const { search, handleSearchChange } = useCustomContext();
  const navigate = useRouter();
  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate.push(`/course`);
  };
  return (
    <form onSubmit={handleFormSubmit} className="h2_banner-form">
      <input
        type="text"
        placeholder="Search Course"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">
        <i className="fa-thin fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default BannerSearchForm4;

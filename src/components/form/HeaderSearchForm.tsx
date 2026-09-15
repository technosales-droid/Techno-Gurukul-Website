"use client";
import { useCustomContext } from "@/context/context";
import { useRouter } from "next/navigation";


const HeaderSearchForm = () => {
  const { search, handleSearchChange } = useCustomContext();

  const navigate = useRouter();

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate.push(`/course`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search Item"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit" className="header-search-btn">
        <i className="fa-thin fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default HeaderSearchForm;

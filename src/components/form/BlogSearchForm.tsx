"use client";

import { useState } from "react";

const BlogSearchForm = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue("");
  };
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search here..."
        required
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button type="submit">
        <i className="fa-thin fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default BlogSearchForm;

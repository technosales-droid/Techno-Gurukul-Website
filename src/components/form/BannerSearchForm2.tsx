"use client";
import { useRouter } from "next/navigation";
import { useCustomContext } from "@/context/context";

const BannerSearchForm2 = () => {
  const { search, handleSearchChange, handleCategoryChange, category } =
    useCustomContext();
  const navigate = useRouter();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate.push(`/course`);
  };

  const formatCategoryName = (slug: string | null | undefined): string => {
    // Handle empty, null, or undefined slugs
    if (!slug) {
      return "Category";
    }

    // Ensure the slug is a string before processing
    const slugString = String(slug);

    // Replace hyphens with spaces, then capitalize each word
    const formattedName = slugString
      .split("-") // Split the string by hyphens
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of each word
      )
      .join(" "); // Join the words back with spaces

    return formattedName;
  };

  const displayCategoryName = (slug: string | null | undefined): string => {
    const formattedName = formatCategoryName(slug);

    if (formattedName.length <= 9) {
      return formattedName;
    } else {
      const words = formattedName.split(" ");
      return words[0] ?? formattedName;
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="h3_banner-form">
      <div className="h3_banner-form-item">
        <div className="h3_banner-form-item-search">
          <i className="fa-regular fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search Course"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="h3_banner-form-item">
        <div className="h3_banner-category">
          <a>
            <i className="fa-solid fa-grid"></i>
            <span> {displayCategoryName(category)}</span>
            <i className="fa-light fa-angle-down"></i>
          </a>
          <ul className="h3_banner-category-submenu">
            <li>
              <a
                role="button"
                onClick={() => handleCategoryChange("art-design")}
              >
                Art Design
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => handleCategoryChange("graphic-design")}
              >
                Graphic Design
              </a>
            </li>
            <li>
              <a
                role="button"
                onClick={() => handleCategoryChange("web-design")}
              >
                Web Design
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h3_banner-form-item">
        <button
          type="submit"
          className="theme-btn theme-btn-medium theme-btn-3 h3_banner-form-btn"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default BannerSearchForm2;

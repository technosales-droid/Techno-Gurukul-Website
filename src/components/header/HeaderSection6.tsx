"use client";
import { useEffect, useRef, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import Link from "next/link";
import { useCustomContext } from "@/context/context";
import { useRouter } from "next/navigation";
import HeaderSearchForm from "../form/HeaderSearchForm";

const HeaderSection6 = () => {
  const { toggleMobileMenu, handleCategoryChange } = useCustomContext();
  const navigate = useRouter();
  const categorySelect = (category: string) => {
    handleCategoryChange(category);
    navigate.push(`/course`);
  };
  const headerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsSticky(scroll >= 120);
    };

    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight(); // Initial run
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);
  return (
    <>
      <header>
        <div
          className={`h9_header-area header-sticky ${isSticky ? "sticky" : ""}`}
          ref={headerRef}
        >
          <div className="container container-custom-3">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-4">
                <div className="h9_header-left d-none d-md-flex">
                  <div className="h2_header-category h9_header-button">
                    <a href="#" className="h9_header-button-text">
                      <i className="fa-solid fa-grid"></i>Courses
                    </a>
                    <ul className="h2_header-category-submenu">
                      <li>
                        <a
                          role="button"
                          href="#"
                          onClick={() => categorySelect("art-design")}
                        >
                          Art Design
                        </a>
                      </li>
                      <li>
                        <a
                          role="button"
                          href="#"
                          onClick={() => categorySelect("graphic-design")}
                        >
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a
                          role="button"
                          href="#"
                          onClick={() => categorySelect("web-design")}
                        >
                          Web Design
                        </a>
                      </li>
                      <li>
                        <a
                          role="button"
                          href="#"
                          onClick={() => categorySelect("ux-ui-design")}
                        >
                          UX/UI Design
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="h9_header-search d-none d-lg-block">
                    <HeaderSearchForm />
                  </div>
                  <div className="h9_header-menu d-none">
                    <HeaderMenu menuStyle="h7_main-menu" />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                <div className="h9_header-logo text-xl-center">
                  <Link href="/">
                    <Image
                      width={132}
                      height={44}
                      src="/assets/img/logo/logo-blue.png"
                      alt="img"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-lg-3 col-md-4 col-6">
                <div className="h9_header-right">
                  <div className="h9_header-right-text d-none d-xl-block">
                    <ul>
                      <li>
                        <Link href="/contact">Get Ai Guide</Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          Donate<i className="fa-light fa-arrow-up-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="h9_header-btn2 d-none d-sm-block">
                    <Link
                      href="/sign-in"
                      className="h9_header-btn theme-btn theme-btn-9"
                    >
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.01367 8C8.94667 8 10.5137 6.433 10.5137 4.5C10.5137 2.567 8.94667 1 7.01367 1C5.08068 1 3.51367 2.567 3.51367 4.5C3.51367 6.433 5.08068 8 7.01367 8Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.026 14.9996C13.026 12.2906 10.331 10.0996 7.013 10.0996C3.695 10.0996 1 12.2906 1 14.9996"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Login
                    </Link>
                  </div>
                  <div
                    className="header-menu-bar h7_menu-bar d-xl-none ml-10"
                    role="button"
                    onClick={toggleMobileMenu}
                  >
                    <span className="header-menu-bar-icon side-toggle">
                      <i className="fa-light fa-bars"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer div when sticky is active */}
      {isSticky && <div style={{ height: `${headerHeight}px` }}></div>}
    </>
  );
};

export default HeaderSection6;

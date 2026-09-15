"use client";
import { useState, useEffect, useRef } from "react";
import HeaderMenu from "./HeaderMenu";
import { useCustomContext } from "@/context/context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
interface Props {
  variant?: boolean;
}
const HeaderSection2 = ({ variant }: Props) => {
  const { toggleMobileMenu, handleCategoryChange } = useCustomContext();
  const navigate = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const categorySelect = (category: string) => {
    handleCategoryChange(category);
    navigate.push(`/course`);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Set initial header height
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => { });
    };
  }, []);

  return (
    <>
      <header>
        <div
          ref={headerRef}
          className={`h2_header-area ${variant ? "h4_header-area" : ""
            } header-sticky ${isSticky ? "sticky" : ""}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-sm-7 col-6">
                <div className="h2_header-left">
                  <div className="h2_header-logo">
                    <Link href="/">
                      <Image
                        width={132}
                        height={44}
                        src="/assets/img/logo/logo.png"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div
                    className={`h2_header-category ${variant ? "h4_header-category" : ""
                      } d-none d-sm-block`}
                  >
                    <a href="#">
                      <i className="fa-solid fa-grid"></i>
                      <span>Category</span>
                    </a>
                    <ul
                      className={`h2_header-category-submenu ${variant ? "h4_header-category-submenu" : ""
                        }`}
                    >
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
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="h2_header-middle">
                  <HeaderMenu
                    menuStyle={`h2_main-menu ${variant ? "h4_main-menu" : ""}`}
                  />
                </div>
              </div>
              <div className="col-xl-3 col-sm-5 col-6">
                <div className="h2_header-right">
                  <div className="h2_header-btn d-none d-sm-block">
                    <Link
                      href="/sign-up"
                      className={`header-btn theme-btn  ${variant ? "theme-btn-4" : "theme-btn-medium"
                        }`}
                    >
                      {variant ? "Sign Up Now" : "Sign Up"}
                    </Link>
                  </div>
                  <div
                    className="header-menu-bar d-xl-none ml-10"
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

export default HeaderSection2;

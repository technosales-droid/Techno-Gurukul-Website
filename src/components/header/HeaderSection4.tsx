"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";
import { useCustomContext } from "@/context/context";
import HeaderSearchForm from "../form/HeaderSearchForm";

interface Props {
  variant?: boolean;
}

const HeaderSection4 = ({ variant }: Props) => {
  const { toggleMobileMenu } = useCustomContext();
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
        {!variant && (
          <div className="h7_header-top d-none d-md-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-9">
                  <ul className="h7_header-top-list">
                    <li>
                      <a href="tel:8812356877787 ">
                        <i className="fa-light fa-phone"></i>(88) 123 568 777 87{" "}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@xyz-text.com ">
                        <i className="fa-light fa-envelope"></i>
                        info@xyz-text.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-light fa-location-dot"></i>New Jersey
                        07052, USA
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-3">
                  <div className="h7_header-top-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-quora"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          ref={headerRef}
          className={`h7_header-area header-sticky ${isSticky ? "sticky" : ""}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-7 col-xl-8 col-lg-6 col-6">
                <div className="h7_header-left">
                  <div className="h7_header-logo">
                    <Link href="/">
                      <Image
                        src={
                          variant
                            ? "/assets/img/logo/logo-violet.png"
                            : "/assets/img/logo/logo-red.png"
                        }
                        alt="img"
                        height={44}
                        width={132}
                      />
                    </Link>
                  </div>
                  <div className="h7_header-menu d-none d-xl-block">
                    <HeaderMenu menuStyle="h7_main-menu" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-4 col-lg-6 col-6">
                <div className="h7_header-right">
                  <div className="h7_header-search d-none d-xxl-block">
                    <HeaderSearchForm />
                  </div>
                  <div className="h7_header-btn2 d-none d-sm-block">
                    <Link
                      href="/sign-in"
                      className={`h7_header-btn theme-btn theme-btn-medium ${variant ? "theme-btn-10" : "theme-btn-6"
                        }`}
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
      {/* Spacer to prevent layout jump when sticky is active */}
      {isSticky && <div style={{ height: `${headerHeight}px` }} />}
    </>
  );
};

export default HeaderSection4;

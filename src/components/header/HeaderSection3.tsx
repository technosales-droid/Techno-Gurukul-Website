"use client";
import { useEffect, useRef, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { useCustomContext } from "@/context/context";
import Link from "next/link";
import Image from "next/image";

interface Props {
  variant?: string;
}
const HeaderSection3 = ({ variant }: Props) => {
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
        <div
          ref={headerRef}
          className={`${
            variant === "style-2"
              ? "h3_header-area h5_header-area"
              : variant === "style-3"
              ? "h6_header-area"
              : "h3_header-area"
          } header-sticky ${isSticky ? "sticky" : ""}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-sm-7 col-6">
                <div
                  className={
                    variant === "style-3" ? "h6_header-logo" : "h3_header-logo"
                  }
                >
                  <Link href="/">
                    <Image
                      width={132}
                      height={44}
                      src={
                        variant === "style-3"
                          ? "/assets/img/logo/logo-white.png"
                          : "/assets/img/logo/logo.png"
                      }
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div
                  className={
                    variant === "style-3"
                      ? "h6_header-middle"
                      : "h3_header-middle"
                  }
                >
                  <HeaderMenu
                    menuStyle={
                      variant === "style-2"
                        ? "h3_main-menu h5_main-menu"
                        : variant === "style-3"
                        ? "h6_main-menu"
                        : "h3_main-menu"
                    }
                  />
                </div>
              </div>
              <div className="col-xl-3 col-sm-5 col-6">
                <div
                  className={
                    variant === "style-3"
                      ? "h6_header-right"
                      : "h3_header-right"
                  }
                >
                  <div
                    className={`${
                      variant === "style-3" ? "h6_header-btn" : "h3_header-btn"
                    } d-none d-sm-block`}
                  >
                    <Link
                      href="/sign-up"
                      className={`header-btn theme-btn theme-btn-medium ${
                        variant === "style-2"
                          ? "theme-btn-5"
                          : variant === "style-3"
                          ? "theme-btn-6"
                          : "theme-btn-3"
                      }`}
                    >
                      {variant === "style-2" ? (
                        "Enroll Now"
                      ) : variant === "style-3" ? (
                        <>
                          Apply Now
                          <i className="fa-light fa-arrow-up-right"></i>
                        </>
                      ) : (
                        <>
                          Sign Up Now
                          <i className="fa-light fa-arrow-up-right"></i>
                        </>
                      )}
                    </Link>
                  </div>
                  <div
                    className={`header-menu-bar ${
                      variant === "style-3" ? "h6_menu-bar" : ""
                    } d-xl-none ml-10`}
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

export default HeaderSection3;

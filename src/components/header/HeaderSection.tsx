"use client";
import { useEffect, useRef, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { useCustomContext } from "@/context/context";
import Link from "next/link";
import HeaderSearchForm from "../form/HeaderSearchForm";
import Image from "next/image";

const HeaderSection = () => {
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

    updateHeaderHeight(); // Initial height
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", handleScroll);

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
          className={`header-area header-sticky ${isSticky ? "sticky" : ""}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 col-md-6 col-6">
                <div className="header-left">
                  <div className="header-logo">
                    <Link href="/">
                      <Image
                        width={132}
                        height={44}
                        src="/assets/img/logo/logo.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <HeaderMenu menuStyle="main-menu" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6 col-6">
                <div className="header-right">
                  <div className="header-search d-none d-lg-block">
                    <HeaderSearchForm />
                  </div>
                  <div className="header-btn d-none d-sm-block">
                    <Link
                      href="/sign-up"
                      className="header-btn theme-btn theme-btn-medium"
                    >
                      Enroll Now
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

      {/* Spacer to prevent layout jump when header becomes sticky */}
      {isSticky && <div style={{ height: `${headerHeight}px` }} />}
    </>
  );
};

export default HeaderSection;

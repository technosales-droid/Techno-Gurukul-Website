"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { admissionsCta, primaryNav, type NavLink } from "@/data/navigation";
import { useCustomContext } from "@/context/context";

const isLinkActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

interface NavItemsProps {
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}

/** Single source of nav markup, shared by the desktop bar and the mobile drawer. */
const NavItems = ({ pathname, onNavigate = () => {}, className }: NavItemsProps) => (
  <ul className={className}>
    {primaryNav.map((item: NavLink) => {
      const active = isLinkActive(pathname, item.href);
      return (
        <li key={item.href} className="site-nav__item">
          <Link
            href={item.href}
            className="site-nav__link"
            aria-current={active ? "page" : undefined}
            data-active={active || undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        </li>
      );
    })}
  </ul>
);

const HamburgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M3 6.5h18M3 12h18M3 17.5h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 5l14 14M19 5L5 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SiteHeader = () => {
  const pathname = usePathname();
  const { isMenuOpen, toggleMobileMenu } = useCustomContext();
  const headerRef = useRef<HTMLElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    if (isMenuOpen) toggleMobileMenu();
  }, [isMenuOpen, toggleMobileMenu]);

  // Subtle elevation once the page has scrolled — position: sticky handles
  // the actual pinning, so there's no header-height measuring/spacer needed.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change.
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Escape to close, lock body scroll while open, move focus into the drawer.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      (previouslyFocused ?? toggleBtnRef.current)?.focus();
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <header ref={headerRef} className="site-header">
      <div className="container">
        <div className="site-header__bar">
          <Link href="/" className="site-header__logo" aria-label="TechnoGurukul home">
            <Image
              src="/assets/img/logo/technogurukul-logo.png"
              alt="TechnoGurukul"
              width={497}
              height={528}
              priority
            />
          </Link>

          <nav className="site-header__nav" aria-label="Primary">
            <NavItems pathname={pathname} className="site-nav" />
          </nav>

          <div className="site-header__actions">
            <Link href={admissionsCta.href} className="theme-btn theme-btn-amber theme-btn-medium site-header__cta">
              {admissionsCta.label}
            </Link>
            <button
              ref={toggleBtnRef}
              type="button"
              className="site-header__toggle"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-drawer"
              onClick={toggleMobileMenu}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`site-drawer-backdrop ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`site-drawer ${isMenuOpen ? "is-open" : ""}`}
      >
        <div className="site-drawer__head">
          <span className="site-drawer__title">Menu</span>
          <button
            ref={closeBtnRef}
            type="button"
            className="site-drawer__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <CloseIcon />
          </button>
        </div>

        <NavItems pathname={pathname} onNavigate={closeMenu} className="site-drawer__nav" />

        <Link
          href={admissionsCta.href}
          className="theme-btn theme-btn-amber theme-btn-full site-drawer__cta"
          onClick={closeMenu}
        >
          {admissionsCta.label}
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;

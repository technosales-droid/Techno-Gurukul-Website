"use client";
import Link from "next/link";
import { useCustomContext } from "@/context/context";
import { menuData } from "@/data";
import { useState } from "react";
import Image from "next/image";

interface Props {
  menuStyle: string;
}

const HeaderMenu = ({ menuStyle }: Props) => {
  const { toggleMobileMenu } = useCustomContext();
  const [activeMenus, setActiveMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setActiveMenus((prev) =>
      prev.includes(menu)
        ? prev.filter((item) => item !== menu)
        : [...prev, menu]
    );
  };

  return (
    <nav
      className={`${menuStyle} mobile-menu d-none d-xl-block`}
      id="mobile-menu"
    >
      <div className="row align-items-center d-xl-none d-flex">
        <div className="col-xl-6 col-8">
          <div className="sidebar-logo">
            <Link href="/">
              <Image
                width={132}
                height={44}
                src="/assets/img/logo/logo-white.png"
                alt="logo-img"
              />
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-4">
          <div className="sidebar-close-wrapper text-end">
            <button
              className="sidebar-close side-info-close"
              onClick={toggleMobileMenu}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      <ul>
        {menuData.map((menu) => (
          <li className="menu-has-child" key={menu.key}>
            <Link
              href={menu.link}
              className="main-nav"
              role="button"
              onClick={() => toggleMenu(menu.key)}
            >
              <span>{menu.label}</span>
              <span className="d-block d-xl-none">
                <i
                  className={`fa-regular ${
                    activeMenus.includes(menu.key)
                      ? "fa-angle-up"
                      : "fa-angle-down"
                  }`}
                ></i>
              </span>
            </Link>
            <ul
              className={`submenu ${
                activeMenus.includes(menu.key) ? "open" : ""
              }`}
            >
              {menu.submenu.map((subMenuItem, idx) => (
                <li key={idx}>
                  <Link href={subMenuItem.href}>{subMenuItem.label}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;

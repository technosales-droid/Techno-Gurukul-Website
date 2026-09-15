"use client";

import NewsletterForm from "../form/NewsletterForm";
import Link from "next/link";
import { useCustomContext } from "@/context/context";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface Props {
  logo: string;
  style?: string;
  noCta?: boolean;
}
const FooterSection2 = ({ logo, style, noCta }: Props) => {
  const { handleCategoryChange } = useCustomContext();
  const navigate = useRouter();
  const categorySelect = (category: string) => {
    handleCategoryChange(category);
    navigate.push(`/course`);
  };
  return (
    <footer className={`h6_footer-area ${style ? style : ""}`}>
      <div className={`footer-top ${noCta ? "pt-100" : "pt-200"} pb-30`}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-5">
              <div className="h6_footer-widget mb-40 mr-80">
                <div className="footer-logo">
                  <Link href="/">
                    <Image width={132} height={44} src={logo} alt="img" />
                  </Link>
                </div>
                <p className="h6_footer-widget-text">
                  Maurus herderite egret orca ac incident. Viramas at deque eu
                  ipsum consenter commode egret t dam celestas beget mi.
                </p>
                <div className="h6_footer-social">
                  <ul>
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
            <div className="col-xl-5 col-lg-5 col-md-7 d-flex flex-wrap flex-sm-nowrap justify-content-between">
              <div className="h6_footer-inner">
                <div className="h6_footer-widget mb-40">
                  <h5 className="h6_footer-widget-title">Our Links</h5>
                  <div className="h6_footer-widget-list">
                    <ul>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/course">Courses</Link>
                      </li>
                      <li>
                        <Link href="/contact">Help Centre</Link>
                      </li>
                      <li>
                        <Link href="/blog">News</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="h6_footer-inner">
                <div className="h6_footer-widget mb-40">
                  <h5 className="h6_footer-widget-title">Class</h5>
                  <div className="h6_footer-widget-list">
                    <ul>
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
              <div className="h6_footer-inner">
                <div className="h6_footer-widget mb-40">
                  <h5 className="h6_footer-widget-title">Support</h5>
                  <div className="h6_footer-widget-list">
                    <ul>
                      <li>
                        <Link href="/contact">Help Centre</Link>
                      </li>
                      <li>
                        <Link href="/contact">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contacts</Link>
                      </li>
                      <li>
                        <Link href="/contact">Security</Link>
                      </li>
                      <li>
                        <Link href="/contact">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="h6_footer-widget ml-80 mb-40">
                <h5 className="h6_footer-widget-title">Newsletter</h5>
                <p className="h6_footer-widget-text newsletter-text">
                  Sign up foe our newsletter and get 34% <br /> off your next
                  course.
                </p>
                <NewsletterForm variant />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h6_copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="h6_copyright-text">
                <p>
                  Copyright © {new Date().getFullYear()} All Rights Reserved by Eduan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;

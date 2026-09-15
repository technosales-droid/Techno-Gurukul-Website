"use client";
import { useCustomContext } from "@/context/context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NewsletterForm from "../form/NewsletterForm";
import Image from "next/image";

interface Props {
  style?: string;
  whiteLogo?: boolean;
}
const FooterSection = ({ style, whiteLogo }: Props) => {
  const { handleCategoryChange } = useCustomContext();
  const navigate = useRouter();
  const categorySelect = (category: string) => {
    handleCategoryChange(category);
    navigate.push(`/course`);
  };
  return (
    <footer className={`footer-area ${style ? style : ""}`}>
      <div className="footer-top pt-240 pb-55">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-7 col-md-7 col-sm-12">
              <div className="footer-widget mb-40">
                <div className="footer-logo">
                  <Link href="/">
                    <Image
                      width={132}
                      height={44}
                      src={
                        whiteLogo
                          ? "/assets/img/logo/logo-white.png"
                          : "/assets/img/logo/logo.png"
                      }
                      alt="img"
                    />
                  </Link>
                </div>
                <p className="footer-widget-text mb-35">
                  Through a combination of lectures, readings, discussions,
                  students will gain solid foundation in educational.
                </p>
                <div className="footer-social">
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
            <div className="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center">
              <div className="footer-widget mb-40">
                <h5 className="footer-widget-title">Useful Link</h5>
                <div className="footer-widget-list">
                  <ul>
                    <li>
                      <Link href="/about">About Eduan</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link href="/contact">Help Centre</Link>
                    </li>
                    <li>
                      <Link href="/about">Refund</Link>
                    </li>
                    <li>
                      <Link href="/about">Conditions</Link>
                    </li>
                    <li>
                      <Link href="/about">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-5 col-md-5 col-sm-6 d-flex justify-content-xl-center order-md-4 order-xl-3">
              <div className="footer-widget mb-40">
                <h5 className="footer-widget-title">Categories</h5>
                <div className="footer-widget-list">
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
            <div className="col-xl-4 col-lg-7 col-md-7 col-sm-12 order-md-3 order-xl-4">
              <div className="footer-widget ml-80 mb-40">
                <h5 className="footer-widget-title">Newsletter</h5>
                <p className="footer-widget-text mb-20 newsletter-text">
                  Sign up for our newsletter and get 34% <br /> off your next
                  course.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright-text">
                <p>
                  Copyright © {new Date().getFullYear()} All Rights Reserved by
                  Eduan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

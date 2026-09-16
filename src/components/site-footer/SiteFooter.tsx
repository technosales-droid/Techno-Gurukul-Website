import Image from "next/image";
import Link from "next/link";
import { primaryNav, footerNav, legalNav } from "@/data/navigation";

/**
 * Minimal, functional site footer — gives every secondary/legal
 * destination in the approved information architecture a real link.
 * Not a bespoke art-directed homepage section; a straightforward,
 * on-brand utility footer.
 */
const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Image
              src="/assets/img/logo/technogurukul-logo.png"
              alt="TechnoGurukul"
              width={497}
              height={528}
              className="site-footer__logo"
            />
            <p className="site-footer__tagline">
              A practical digital marketing academy in Nashik.
            </p>
          </div>

          <nav className="site-footer__col" aria-label="Primary">
            <span className="site-footer__col-title">Explore</span>
            <ul>
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="Program">
            <span className="site-footer__col-title">Program</span>
            <ul>
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <span className="site-footer__col-title">Contact</span>
            <address className="site-footer__address">
              TechnoGurukul, Nashik, Maharashtra
              <br />
              <a href="mailto:hello@technogurukul.com">
                hello@technogurukul.com
              </a>
            </address>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} TechnoGurukul. All rights reserved.</span>
          <ul className="site-footer__legal">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

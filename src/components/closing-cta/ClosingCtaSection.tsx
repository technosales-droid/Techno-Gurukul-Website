import Link from "next/link";

/**
 * Homepage Section 6 — the closing CTA. Reuses the shared
 * `.content-cta` styles (see _content-page.scss) rather than
 * introducing a one-off style just for this instance.
 */
const ClosingCtaSection = () => {
  return (
    <section className="content-cta">
      <div className="container">
        <h2 className="content-cta__title">
          Your Career Won&apos;t Be Built By Watching Tutorials.
        </h2>
        <p className="content-cta__desc">
          It will be built by doing the work. Start learning digital
          marketing in Nashik.
        </p>
        <div className="content-cta__actions">
          <Link href="/programs" className="theme-btn theme-btn-amber theme-btn-big">
            Explore the Program
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;


import Image from "next/image";
import Link from "next/link";

const CtaSection5 = () => {
  return (
    <section className="h10_class-area pt-105 pb-105">
      <Image
        width={78}
        height={91}
        src="/assets/img/class/10/shape-1.png"
        alt="img"
        className="h10_class-shape-1 d-none d-xxl-block"
      />
      <Image
        width={35}
        height={36}
        src="/assets/img/class/10/shape-2.png"
        alt="img"
        className="h10_class-shape-2 d-none d-lg-block"
      />
      <Image
        width={61}
        height={52}
        src="/assets/img/class/10/shape-3.png"
        alt="img"
        className="h10_class-shape-3 d-none d-lg-block"
      />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5 col-md-6">
            <div className="h10_class-content mb-40 mb-md-0">
              <h2 className="h10_class-content-title">
                Joint Our <span>Live</span> <br /> Kids Live Class
              </h2>
              <p>
                Through a combination of lectures, readings, and discussions,
                students will gain a solid in educational psychology.
              </p>
              <Link
                href="/contact"
                className="theme-btn theme-btn-10 theme-btn-10-transparent"
              >
                Visit Online Class<i className="fa-light fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <div className="h10_class-img">
              <Image
                width={520}
                height={387}
                src="/assets/img/class/10/1.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection5;

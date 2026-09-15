import Link from "next/link";
import Image from "next/image";

const ErrorSection = () => {
  return (
    <div className="error-area pt-110 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="error-content text-center mb-85">
              <h2>Sorry, Page Not Found!</h2>
              <Link href="/" className="theme-btn theme-btn-big">
                Go To Homepage
              </Link>
            </div>
            <div className="error-content-img w_img">
              <Image
                width={1290}
                height={549}
                src="/assets/img/404/404.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorSection;

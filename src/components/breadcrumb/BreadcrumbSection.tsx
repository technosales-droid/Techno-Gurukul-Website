import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
}
const BreadcrumbSection = ({ title }: Props) => {
  return (
    <section className="breadcrumb-area bg-default">
      <Image
        width={34}
        height={34}
        src="/assets/img/breadcrumb/shape-1.png"
        alt="img"
        className="breadcrumb-shape"
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content">
              <h2 className="breadcrumb-title">{title}</h2>
              <div className="breadcrumb-list">
                <Link href="/">Home</Link>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;

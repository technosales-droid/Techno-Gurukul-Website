import MainLayout from "@/components/layout/MainLayout";

interface Props {
  title: string;
}

/**
 * Shared shell for Privacy Policy / Terms & Conditions. No legal text
 * has been supplied yet — rather than invent policy content, this is
 * an honest placeholder so the footer link isn't dead.
 */
const LegalPageMain = ({ title }: Props) => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__desc">
            This page is a placeholder. TechnoGurukul&apos;s {title.toLowerCase()}{" "}
            will be published here once finalised.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default LegalPageMain;

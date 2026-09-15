import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";
import MainLayout from "@/components/layout/MainLayout";

interface Props {
  title: string;
  description: string;
}

/**
 * Placeholder for a nav destination that hasn't been designed yet.
 * Keeps every header link real (no href="#") while each section
 * is built out task-by-task.
 */
const ComingSoonMain = ({ title, description }: Props) => {
  return (
    <MainLayout>
      <BreadcrumbSection title={title} />
      <section className="pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <p style={{ color: "var(--clr-brand-slate)", fontSize: 18 }}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ComingSoonMain;

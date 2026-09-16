import MainLayout from "@/components/layout/MainLayout";

const expertise = [
  "Performance Marketing",
  "Digital Strategy",
  "Consumer Psychology",
  "AI-Native Marketing",
];

const TrainerPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Learn From Someone Who Does The Work.</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <span className="content-block__eyebrow">Director &amp; Lead Trainer</span>
            <h2 className="content-block__title">Ebrahim Shakir</h2>
            <p className="content-block__desc">
              Ebrahim Shakir brings practical experience in digital
              marketing and performance marketing into the classroom. His
              approach is built around understanding the why behind the
              work, not simply teaching students which buttons to press.
            </p>
            <span className="content-block__eyebrow" style={{ marginTop: 24 }}>
              Areas of Expertise
            </span>
            <ul className="tag-list">
              {expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <span className="content-cta__desc" style={{ display: "block", marginBottom: 8 }}>
            Philosophy
          </span>
          <h2 className="content-cta__title">
            Don&apos;t Teach Students What To Think. Teach Them How To Think.
          </h2>
          <p className="content-cta__desc">
            Digital marketing evolves too quickly for anyone to rely on a
            fixed playbook. The objective is to develop marketers who can
            understand a problem, identify an opportunity, choose the right
            tools and make informed decisions.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default TrainerPageMain;

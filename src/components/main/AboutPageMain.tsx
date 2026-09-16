import MainLayout from "@/components/layout/MainLayout";

const AboutPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">
            We Don&apos;t Teach For Exams. We Teach For The Real World.
          </h1>
          <p className="page-hero__desc">
            TechnoGurukul is a skill development academy based in Nashik,
            Maharashtra. We were created around a simple observation: knowing
            something and being able to do something are two very different
            things. Digital marketing changes constantly. Platforms change.
            Algorithms change. Consumer behaviour changes. Technology
            changes. So education cannot stop at textbooks and
            presentations. At TechnoGurukul, we focus on practical
            learning — combining concepts with execution, technology with
            strategy and classroom learning with real-world exposure.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <span className="content-block__eyebrow">Our Belief</span>
            <h2 className="content-block__title">
              Skills Are Built Through Practice.
            </h2>
            <p className="content-block__desc">
              You can watch someone create an advertisement. You can read
              about SEO. You can learn what a conversion funnel is. But you
              understand them differently when you actually have to create
              one. That&apos;s why practical execution sits at the centre of
              our learning philosophy.
            </p>
          </div>

          <div className="content-block">
            <span className="content-block__eyebrow">Our Vision</span>
            <h2 className="content-block__title">
              Building Skills For The Digital Economy.
            </h2>
            <p className="content-block__desc">
              We began with digital marketing because businesses across
              industries increasingly need people who understand digital
              customer acquisition, content, technology and performance. Our
              larger vision is to build a skill-focused institution around
              emerging technology disciplines.
            </p>
          </div>

          <div className="content-block">
            <span className="content-block__eyebrow">Where We&apos;re Going</span>
            <h2 className="content-block__title">
              Digital Marketing is our starting point.
            </h2>
            <p className="content-block__desc">
              The larger TechnoGurukul ecosystem can extend into emerging
              areas such as:
            </p>
            <ul className="content-list">
              <li>Data Science &amp; Analytics</li>
              <li>Cybersecurity</li>
              <li>Blockchain &amp; Web3</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <h2 className="content-cta__title">
            Built In Nashik. Designed For What&apos;s Next.
          </h2>
          <p className="content-cta__desc">
            We want students from Nashik and beyond to have access to
            practical, relevant and continuously evolving technology
            education.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPageMain;

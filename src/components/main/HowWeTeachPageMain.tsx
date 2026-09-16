import MainLayout from "@/components/layout/MainLayout";

const HowWeTeachPageMain = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Learn It. Do It. Get Better At It.</h1>
          <p className="page-hero__desc">
            Our classroom isn&apos;t designed to turn students into
            note-taking machines. It&apos;s designed to turn learners into
            practitioners. At TechnoGurukul, concepts are followed by
            application. Students don&apos;t simply discuss marketing — they
            use the tools, build campaigns, analyse outcomes and solve
            problems.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-section__head">
            <span className="content-section__eyebrow">Our Learning Model</span>
            <h2 className="content-section__title">
              60% Practical. 25% Strategy. 15% Tools &amp; Theory.
            </h2>
          </div>
          <dl className="content-meta">
            <div className="content-meta__item">
              <dt>60% — Doing</dt>
              <dd>Live Campaigns. Live Projects. Content. Analysis. Execution.</dd>
            </div>
            <div className="content-meta__item">
              <dt>25% — Thinking</dt>
              <dd>Strategy. Consumer psychology. Marketing principles. Problem-solving.</dd>
            </div>
            <div className="content-meta__item">
              <dt>15% — Tools &amp; Theory</dt>
              <dd>Platforms, technology, frameworks and professional knowledge.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="content-section content-section--alt">
        <div className="container">
          <div className="content-block">
            <span className="content-block__eyebrow">Real Business Exposure</span>
            <h2 className="content-block__title">
              Because Businesses Don&apos;t Give You Classroom Problems.
            </h2>
            <p className="content-block__desc">
              Students get exposure to real businesses and real marketing
              challenges from real clients. This helps them understand:
            </p>
            <ul className="content-list">
              <li>How businesses actually operate</li>
              <li>How clients think</li>
              <li>How marketing decisions are made</li>
              <li>How campaigns are planned</li>
              <li>How results are evaluated</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-block">
            <span className="content-block__eyebrow">Learn Through Live Projects</span>
            <h2 className="content-block__title">Build Something You Can Show.</h2>
            <p className="content-block__desc">
              A certificate tells someone you completed a course. A
              portfolio shows them what you can do. Our practical approach
              helps students create projects and campaign work that
              demonstrate their skills.
            </p>
          </div>

          <div className="content-block">
            <span className="content-block__eyebrow">Learn Together</span>
            <h2 className="content-block__title">Marketing Is A Team Sport.</h2>
            <p className="content-block__desc">
              Students collaborate, divide responsibilities, present ideas,
              solve problems and work towards outcomes. The objective isn&apos;t
              simply to complete an assignment. It&apos;s to learn how
              professional marketing work gets done.
            </p>
          </div>
        </div>
      </section>

      <section className="content-cta">
        <div className="container">
          <h2 className="content-cta__title">
            The Best Way To Learn Digital Marketing Is To Practice Digital
            Marketing.
          </h2>
          <p className="content-cta__desc">That&apos;s our classroom.</p>
        </div>
      </section>
    </MainLayout>
  );
};

export default HowWeTeachPageMain;

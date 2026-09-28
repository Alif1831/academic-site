export default function Home() {
  const overview = [
    {
      number: "01",
      label: "Current Role",
      text: "PhD student in Mechanical Engineering at the University of Arizona.",
    },
    {
      number: "02",
      label: "Research Focus",
      text: "MXenes, MAX phases, Rapid Joule Heating, and electrochemical materials.",
    },
    {
      number: "03",
      label: "Methods",
      text: "Materials characterization, molecular dynamics, and applied machine learning.",
    },
    {
      number: "04",
      label: "Teaching",
      text: "TA for Fundamentals of Materials for Engineers (AME-MSE 331R).",
    },
  ];

  const currentWork = [
    "Working on MAX phase synthesis using Rapid Joule Heating.",
    "Exploring MXene-based electrochemical materials.",
    "Teaching AME-MSE 331R: Fundamentals of Materials for Engineers.",
    "Interested in materials informatics and data-driven discovery.",
  ];

  const updates = [
    {
      date: "Sep 2026",
      title: "National X-ray School",
      description:
        "Selected participant in the 10-day National X-ray School at Argonne National Laboratory.",
    },
    {
      date: "Aug 2026",
      title: "Best Presenter Award, Judge’s Choice",
      description:
        "Received the Best Presenter Award at the Arizona Renewable Energy Materials Discovery (AZ REMADE) Research Symposium.",
    },
    {
      date: "2026",
      title: "Attended ACoQuM Workshop at ASU",
      description:
        "NSF-funded workshop on quantum materials, electron microscopy, and ultrafast probes at Arizona State University. Received a $750 travel grant.",
    },
    {
      date: "2026",
      title: "Attended QC4MC Summer School",
      description:
        "NSF CyberTraining summer school on quantum computing for materials and chemistry. Received an $800 scholarship.",
    },
    {
      date: "2025",
      title: "Passed PhD Qualifying Exam",
      description:
        "Passed in Engineering Math and chose Thermal Sciences as my major field.",
    },
    {
      date: "2025",
      title: "Publication in Journal of Molecular Modeling",
      description:
        "Multi-fidelity neural network prediction of tensile strength in high-entropy alloys.",
    },
  ];

  return (
    <main className="page-main">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="home-hero">
        <div className="hero-copy">
          <p className="hero-kicker">
            PhD Student / Mechanical Engineering
          </p>

          <h1 className="hero-title">
            Alif Jawad
          </h1>

          <p className="hero-lede">
            PhD student at the University of Arizona working at the
            intersection of advanced materials synthesis, 2D materials,
            and data-driven discovery — with focus on MXenes, MAX phases,
            and Rapid Joule Heating.
          </p>

          <p className="hero-secondary">
            My research sits at the intersection of materials synthesis,
            electrochemical materials, molecular dynamics, and machine
            learning.
          </p>

          <div className="hero-actions">
            <a href="/research" className="btn-primary">
              Research
            </a>

            <a href="/publications" className="btn-secondary">
              Publications
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download CV
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
            >
              Google Scholar ↗
            </a>

            <a
              href="https://github.com/Alif1831"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/alif-jawad/"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-profile">
          <div className="hero-photo-wrap">
            <img
              src="/images/profile.jpg"
              alt="Alif Jawad"
              className="hero-photo"
            />
          </div>

          <div className="hero-affiliation">
            <p className="hero-affiliation-label">
              Affiliation
            </p>

            <p className="hero-affiliation-name">
              University of Arizona
            </p>

            <p className="hero-affiliation-group">
              Beidaghi Electrochemistry Research Group
            </p>
          </div>
        </div>
      </section>


      {/* =====================================================
          ACADEMIC INDEX
          ===================================================== */}

      <section
        className="index-grid"
        aria-label="Academic overview"
      >
        {overview.map((item) => (
          <article
            className="index-card"
            key={item.number}
          >
            <span className="index-number">
              / {item.number}
            </span>

            <span className="index-label">
              {item.label}
            </span>

            <p className="index-text">
              {item.text}
            </p>
          </article>
        ))}
      </section>


      {/* =====================================================
          CURRENTLY + RECENT
          ===================================================== */}

      <section className="information-grid">
        <article className="notebook-card notebook-card-dark">
          <header className="notebook-heading">
            <h2 className="notebook-heading-title">
              Currently
            </h2>

            <span className="notebook-heading-meta">
              Lab Notes
            </span>
          </header>

          <ul className="current-list">
            {currentWork.map((item) => (
              <li
                className="current-item"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </article>


        <article className="notebook-card">
          <header className="notebook-heading">
            <h2 className="notebook-heading-title">
              Recent Updates
            </h2>

            <span className="notebook-heading-meta">
              2025–2026
            </span>
          </header>

          <div className="updates-list">
            {updates.map((item) => (
              <div
                className="update-row"
                key={`${item.date}-${item.title}`}
              >
                <div className="update-date">
                  {item.date}
                </div>

                <div>
                  <h3 className="update-title">
                    {item.title}
                  </h3>

                  <p className="update-description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>


      {/* =====================================================
          FEATURED WORK
          ===================================================== */}

      <section className="featured-card">
        <div className="featured-side">
          <span className="featured-label">
            Featured Work
          </span>

          <span className="featured-number">
            01
          </span>
        </div>

        <div>
          <h2 className="featured-title">
            Multi-fidelity neural network-based prediction of tensile
            strength of high-entropy alloy FeNiCoCrCu
          </h2>

          <p className="featured-meta">
            Journal of Molecular Modeling · 2025
          </p>

          <div className="featured-actions">
            <a
              href="https://doi.org/10.1007/s00894-025-06439-z"
              target="_blank"
              rel="noreferrer"
              className="featured-link"
            >
              View Publication ↗
            </a>

            <a
              href="/publications"
              className="featured-link"
            >
              All Publications →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
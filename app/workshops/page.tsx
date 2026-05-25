export default function WorkshopsPage() {
  const workshops = [
    {
      title: "ACoQuM — Unravelling Atomistic Correlations in Quantum Materials",
      subtitle:
        "NSF-funded workshop on quantum materials, microscopy, ultrafast probes, and materials informatics.",
      date: "May 21–22, 2026",
      location: "Arizona State University, Tempe, AZ",
      href: "/workshops/acoqm",
    },
  ];

  return (
    <main className="page-main">
      <section
        className="hero-dark"
        style={{
          borderRadius: "2rem",
          padding: "3rem 2.5rem 2.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <span className="label-gold-light">Workshops</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 500,
              fontStyle: "normal",
              lineHeight: 1.15,
              color: "white",
              margin: "0 0 1rem",
              maxWidth: "44rem",
            }}
          >
            Workshops attended, teaching materials, and academic training.
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "38rem",
              margin: 0,
            }}
          >
            This page collects workshops, short courses, teaching resources, and
            academic training activities related to materials science, quantum
            materials, microscopy, and engineering education.
          </p>
        </div>
      </section>

      <section
        className="card"
        style={{ padding: "2rem 2.25rem", marginBottom: "1.5rem" }}
      >
        <div className="section-label">
          <span className="label-gold">Workshops Attended</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {workshops.map((workshop) => (
            <a
              key={workshop.title}
              href={workshop.href}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div className="card card-hover" style={{ padding: "1.75rem" }}>
                <p className="label-gold" style={{ marginBottom: "0.5rem" }}>
                  {workshop.date} · {workshop.location}
                </p>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    fontStyle: "normal",
                    color: "var(--navy)",
                    margin: "0 0 0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  {workshop.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "var(--slate)",
                    margin: "0 0 1.25rem",
                  }}
                >
                  {workshop.subtitle}
                </p>

                <span className="btn-primary" style={{ width: "fit-content" }}>
                  View Details
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="card" style={{ padding: "2rem 2.25rem" }}>
        <div className="section-label">
          <span className="label-gold">Future Updates</span>
        </div>

        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            color: "var(--slate)",
            margin: 0,
          }}
        >
          More workshops, teaching resources, tutorials, and academic materials
          will be added here over time.
        </p>
      </section>
    </main>
  );
}
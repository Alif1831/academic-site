export default function QC4MCWorkshopPage() {
  const overview = [
    {
      label: "Dates",
      text: "June 16–19, 2026",
    },
    {
      label: "Location",
      text: "Arizona State University, Tempe, AZ",
    },
    {
      label: "Support",
      text: "$800 scholarship",
    },
    {
      label: "Program",
      text: "NSF CyberTraining Summer School",
    },
    {
      label: "Focus",
      text: "Quantum computing, Qiskit, quantum chemistry, and materials science",
    },
  ];

  const schedule = [
    {
      day: "Day 1",
      date: "June 16",
      topics: [
        "Quantum computing basics for materials science and chemistry",
        "Qubits, circuits, algorithms, and applications",
        "Hands-on Qiskit tutorial",
        "Introduction to quantum chemistry",
        "AI for quantum computing",
      ],
    },
    {
      day: "Day 2",
      date: "June 17",
      topics: [
        "Quantum computing tutorials and applications",
        "Hands-on coding activities",
        "Team project development",
        "Discussion of quantum computing use cases in science and engineering",
      ],
    },
    {
      day: "Day 3",
      date: "June 18",
      topics: [
        "Advanced topics in quantum computing for materials and chemistry",
        "Quantum algorithms and scientific applications",
        "Team project work",
        "Technical discussions and guided activities",
      ],
    },
    {
      day: "Day 4",
      date: "June 19",
      topics: [
        "Final project development",
        "Team presentations",
        "Workshop wrap-up",
        "Future directions in quantum computing for materials and chemistry",
      ],
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
          <a
            href="/workshops"
            className="btn-ghost-white"
            style={{ marginBottom: "2rem", display: "inline-flex" }}
          >
            ← Back to Workshops
          </a>

          <div className="section-label">
            <span className="label-gold-light">Workshop Attended</span>
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
            QC4MC — Quantum Computing for Materials and Chemistry
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "38rem",
              margin: "0 0 2rem",
            }}
          >
            NSF CyberTraining summer school focused on quantum computing,
            Qiskit, quantum chemistry, AI, and applications in materials science
            and chemistry.
          </p>

          <a
            href="https://sites.google.com/asu.edu/qc4mc/home"
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "white",
              color: "var(--navy)",
              borderRadius: "999px",
              padding: "0.65rem 1.4rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Workshop Website
          </a>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {overview.map((item) => (
          <div key={item.label} className="card" style={{ padding: "1.5rem" }}>
            <div className="section-label">
              <span className="label-gold">{item.label}</span>
            </div>

            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "var(--slate)",
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <section
        className="card"
        style={{ padding: "2rem 2.25rem", marginBottom: "1.5rem" }}
      >
        <div className="section-label">
          <span className="label-gold">About the Summer School</span>
        </div>

        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.8,
            color: "var(--slate)",
            maxWidth: "50rem",
            margin: 0,
          }}
        >
          QC4MC introduced quantum computing concepts and practical tools for
          materials science and chemistry. The program included lectures,
          hands-on tutorials, Qiskit-based exercises, quantum chemistry
          applications, AI-related topics, and team project activities.
        </p>
      </section>

      <section
        className="card"
        style={{ padding: "2rem 2.25rem", marginBottom: "1.5rem" }}
      >
        <div className="section-label">
          <span className="label-gold">Program Highlights</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            {
              title: "Quantum Computing Foundations",
              text: "Qubits, circuits, measurements, quantum gates, and basic algorithms.",
            },
            {
              title: "Hands-on Qiskit Training",
              text: "Practical tutorials involving quantum circuits and measurements using Qiskit.",
            },
            {
              title: "Quantum Chemistry",
              text: "Introduction to quantum chemistry concepts and their connection to computational materials science.",
            },
            {
              title: "AI and Quantum Computing",
              text: "Discussion of AI methods and their role in quantum computing workflows and applications.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--surface-tinted)",
                border: "1px solid rgba(15,28,46,0.07)",
                borderRadius: "1rem",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  color: "var(--navy)",
                  margin: "0 0 0.5rem",
                }}
              >
                {item.title}
              </p>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--slate-light)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ padding: "2rem 2.25rem" }}>
        <div className="section-label">
          <span className="label-gold">Schedule Overview</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {schedule.map((day) => (
            <div
              key={day.day}
              style={{
                background: "var(--surface-tinted)",
                border: "1px solid rgba(15,28,46,0.07)",
                borderRadius: "1rem",
                padding: "1.25rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.775rem",
                  color: "var(--gold)",
                  margin: "0 0 0.5rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                {day.day} · {day.date}
              </p>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.1rem",
                  color: "var(--slate)",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                }}
              >
                {day.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default function ACoQuMWorkshopPage() {
  const speakers = [
    {
      name: "Seth Tongay",
      affiliation: "Arizona State University",
      talk: "Open Questions at the Intersection of 2D Materials, Microscopy, and CXFEL Science",
    },
    {
      name: "Pinshane Y. Huang",
      affiliation: "University of Illinois at Urbana-Champaign",
      talk: "Electron Ptychography at the Limits",
    },
    {
      name: "Aaron M. Lindenberg",
      affiliation: "Stanford University",
      talk: "Visualizing and Optimizing Materials Processes",
    },
    {
      name: "Juan Carlos Idrobo",
      affiliation: "University of Washington / PNNL",
      talk: "Mapping Emergent Quantum Behavior with Electron Spectroscopy",
    },
    {
      name: "Nicholas Maltis",
      affiliation: "Arizona State University",
      talk: "A Programmable THz Platform for Unraveling Coupled Quantum Dynamics",
    },
    {
      name: "Darrell G. Schlom",
      affiliation: "Cornell University",
      talk: "Hot Quantum Materials — Thin Films of Oxide Quantum Materials",
    },
    {
      name: "Haidan Wen",
      affiliation: "Argonne National Laboratory",
      talk: "Exploring Collective Structural Dynamics by Ultrafast X-ray Diffraction",
    },
    {
      name: "Steffi Woo",
      affiliation: "Oak Ridge National Laboratory",
      talk: "Excitons in Two-Dimensional Semiconductors",
    },
    {
      name: "Suk Hyun Sung",
      affiliation: "University of Michigan",
      talk: "Imaging Quantum States with Liquid Helium Transmission Electron Microscopy",
    },
    {
      name: "Sergei V. Kalinin",
      affiliation: "University of Tennessee, Knoxville",
      talk: "From Human-Operated to Agentic Microscopes",
    },
    {
      name: "Miaofang Chi",
      affiliation: "Duke University / Oak Ridge National Laboratory",
      talk: "Probing Competing Orders: Cryogenic Electron Microscopy of Quantum Materials",
    },
  ];

  const schedule = [
    {
      time: "8:00–8:50 AM",
      day1: "KEYNOTE: Seth Tongay",
      day2: "KEYNOTE: Darrell Schlom",
    },
    {
      time: "9:00–10:00 AM",
      day1: "Session A: Spatial Textures of Order Parameters",
      day2: "Session C: Measuring Collective Excitations",
    },
    {
      time: "10:20–11:50 AM",
      day1: "Session B: Electronic Excitations",
      day2: "Session D: Next-Gen Hardware and Software",
    },
    {
      time: "12:10–1:30 PM",
      day1: "Lunch",
      day2: "Lunch",
    },
    {
      time: "1:30–2:00 PM",
      day1: "Access and Education: David Smith",
      day2: "Access and Education: Aravinder Sandhu",
    },
    {
      time: "2:00–5:00 PM",
      day1: "Lab Tours: Microscopy Facilities",
      day2: "CXFEL and FORCE Facilities Tours",
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
            ACoQuM — Unravelling Atomistic Correlations in Quantum Materials
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
            NSF-funded workshop hosted at Arizona State University, bringing
            together leading researchers in quantum materials, advanced electron
            microscopy, ultrafast spectroscopy, and materials informatics.
          </p>

          <a
            href="https://faculty.engineering.asu.edu/susarla-group/acqum-unravelling-atomistic-correlations-in-quantum-materials/"
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
        {[
          { label: "Dates", text: "May 21–22, 2026" },
          { label: "Location", text: "Arizona State University, Tempe, AZ" },
          { label: "Support", text: "$750 travel grant" },
          { label: "Funding", text: "NSF-funded workshop" },
          {
            label: "Focus",
            text: "Quantum materials, electron microscopy, ultrafast probes",
          },
        ].map((item) => (
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
          <span className="label-gold">About the Workshop</span>
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
          ACoQuM brought together researchers working at the frontier of quantum
          materials characterization, covering topics including 2D materials,
          moiré systems, charge density waves, cryogenic electron microscopy,
          ultrafast X-ray and THz probes, electron ptychography, and machine
          learning-driven autonomous microscopy. The workshop included keynote
          talks, technical sessions, discussion panels, and tours of ASU
          microscopy and CXFEL facilities.
        </p>
      </section>

      <section
        className="card"
        style={{ padding: "2rem 2.25rem", marginBottom: "1.5rem" }}
      >
        <div className="section-label">
          <span className="label-gold">Program Schedule</span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
            }}
          >
            <thead>
              <tr>
                {["Time", "Day 1 — May 21", "Day 2 — May 22"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "0.75rem 1rem",
                      borderBottom: "2px solid rgba(15,28,46,0.1)",
                      color: "var(--navy)",
                      fontWeight: 500,
                      fontSize: "0.8125rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {schedule.map((row, i) => (
                <tr
                  key={row.time}
                  style={{
                    background:
                      i % 2 === 0 ? "transparent" : "var(--surface-tinted)",
                  }}
                >
                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      color: "var(--gold)",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.time}
                  </td>

                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      color: "var(--slate)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.day1}
                  </td>

                  <td
                    style={{
                      padding: "0.75rem 1rem",
                      color: "var(--slate)",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.day2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card" style={{ padding: "2rem 2.25rem" }}>
        <div className="section-label">
          <span className="label-gold">Invited Speakers</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {speakers.map((s) => (
            <div
              key={s.name}
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
                  fontSize: "0.9rem",
                  color: "var(--navy)",
                  margin: "0 0 0.25rem",
                }}
              >
                {s.name}
              </p>

              <p
                style={{
                  fontSize: "0.775rem",
                  color: "var(--gold)",
                  margin: "0 0 0.5rem",
                  fontWeight: 500,
                }}
              >
                {s.affiliation}
              </p>

              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--slate-light)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {s.talk}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
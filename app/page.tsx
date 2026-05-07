export default function Home() {
  return (
    <main className="page-main">

      {/* ── Hero ── */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2rem",
        borderRadius: "2rem",
        overflow: "hidden",
        border: "1px solid rgba(15,28,46,0.1)",
        marginBottom: "1.5rem",
      }}>
        {/* top: dark hero band */}
        <div className="hero-dark" style={{ padding: "3rem 2.5rem 2.5rem" }}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "2.5rem", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <p className="label-gold-light animate-fade-up delay-1">
                  PhD Student · Mechanical Engineering
                </p>
                <h1 className="animate-fade-up delay-2" style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "white",
                  margin: "0.75rem 0 1.25rem",
                }}>
                  Alif Jawad
                </h1>
                <p className="animate-fade-up delay-3" style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.78)",
                  maxWidth: "38rem",
                  marginBottom: "0.75rem",
                }}>
                  PhD student at the University of Arizona working at the intersection of
                  advanced materials synthesis, 2D materials, and data-driven discovery —
                  with focus on MXenes, MAX phases, and Flash Joule Heating.
                </p>
                <p className="animate-fade-up delay-4" style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: "36rem",
                  marginBottom: "2rem",
                }}>
                  My research sits at the intersection of materials synthesis,
                  electrochemical materials, molecular dynamics, and machine learning.
                </p>

                <div className="animate-fade-up delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1rem" }}>
                  <a href="/research" className="btn-primary">Research</a>
                  <a href="/publications" className="btn-ghost-white">Publications</a>
                  <a href="/cv.pdf" target="_blank" className="btn-ghost-white">Download CV</a>
                </div>
                <div className="animate-fade-up delay-5" style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                  {[
                    ["🎓", "Google Scholar", "https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"],
                    ["💻", "GitHub", "https://github.com/Alif1831"],
                    ["🔗", "LinkedIn", "https://www.linkedin.com/in/alif-jawad/"],
                  ].map(([icon, label, href]) => (
                    <a key={label as string} href={href as string} target="_blank" className="btn-ghost-white">
                      <span style={{ fontSize: "0.875rem" }}>{icon}</span> {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* profile photo */}
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: "clamp(160px, 20vw, 220px)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  border: "2px solid rgba(201,151,58,0.4)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}>
                  <img
                    src="/images/profile.jpg"
                    alt="Alif Jawad"
                    style={{ width: "100%", display: "block", aspectRatio: "1", objectFit: "cover" }}
                  />
                </div>
                <div style={{
                  marginTop: "1rem",
                  padding: "0.875rem 1rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "1rem",
                  backdropFilter: "blur(8px)",
                }}>
                  <p className="label-gold-light" style={{ marginBottom: "0.35rem" }}>Affiliation</p>
                  <p style={{ color: "white", fontWeight: 500, fontSize: "0.9rem", margin: 0 }}>University of Arizona</p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8125rem", margin: "0.2rem 0 0" }}>
                    Beidaghi Electrochemistry Research Group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info cards row ── */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
        marginBottom: "1.5rem",
      }}>
        {[
          { label: "Current Role", text: "PhD student in Mechanical Engineering at the University of Arizona." },
          { label: "Research Focus", text: "MXenes, MAX phases, Flash Joule Heating, and electrochemical materials." },
          { label: "Methods", text: "Materials characterization, molecular dynamics, and applied machine learning." },
          { label: "Teaching", text: "TA for Fundamentals of Materials for Engineers (AME-MSE 331R)." },
        ].map((item, i) => (
          <div key={item.label} className="card card-hover" style={{ padding: "1.5rem" }}>
            <div className="section-label">
              <span className="label-gold">{item.label}</span>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--slate)", margin: 0 }}>{item.text}</p>
          </div>
        ))}
      </section>

      {/* ── Currently / Updates ── */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1rem",
        marginBottom: "1.5rem",
      }}>
        <div className="card" style={{ padding: "2rem" }}>
          <div className="section-label">
            <span className="label-gold">Currently</span>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {[
              "Working on MAX phase synthesis using Flash Joule Heating.",
              "Exploring MXene-based electrochemical materials.",
              "Teaching AME-MSE 331R: Fundamentals of Materials for Engineers.",
              "Interested in materials informatics and data-driven discovery.",
            ].map(item => (
              <li key={item} style={{
                display: "flex", alignItems: "flex-start", gap: "0.75rem",
                fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--slate)",
              }}>
                <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "0.15em" }}>◆</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{ padding: "2rem" }}>
          <div className="section-label">
            <span className="label-gold">Recent Updates</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "Publication in Journal of Molecular Modeling",
                text: "Multi-fidelity neural network prediction of tensile strength in high-entropy alloys.",
                year: "2025",
              },
              {
                title: "Teaching project added",
                text: "Fe₃C phase diagram project for AME 331R is available on GitHub.",
                year: "2025",
              },
              {
                title: "Academic website launched",
                text: "Research, CV, publications, and contact information are now organized in one place.",
                year: "2025",
              },
            ].map((item, i) => (
              <div key={item.title} style={{
                paddingBottom: i < 2 ? "1.25rem" : 0,
                borderBottom: i < 2 ? "1px solid rgba(15,28,46,0.07)" : "none",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.5rem" }}>
                  <p style={{ fontWeight: 500, fontSize: "0.9375rem", margin: 0, color: "var(--navy)" }}>{item.title}</p>
                  <span style={{ fontSize: "0.75rem", color: "var(--gold)", fontWeight: 500, flexShrink: 0 }}>{item.year}</span>
                </div>
                <p style={{ margin: "0.35rem 0 0", fontSize: "0.875rem", lineHeight: 1.65, color: "var(--slate-light)" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured publication ── */}
      <section className="hero-dark" style={{ borderRadius: "1.75rem", padding: "2.5rem" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <span className="label-gold-light">Featured Work</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 500,
            color: "white",
            lineHeight: 1.3,
            maxWidth: "42rem",
            margin: "0 0 0.75rem",
          }}>
            Multi-fidelity neural network–based prediction of tensile strength of high-entropy alloy FeNiCoCrCu
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", margin: "0 0 1.75rem" }}>
            Journal of Molecular Modeling, 2025
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="https://doi.org/10.1007/s00894-025-06439-z" target="_blank" className="btn-primary"
               style={{ background: "white", color: "var(--navy)" }}>
              View Publication
            </a>
            <a href="https://github.com/Alif1831/Fe3C-Phase-diagram-for-AME-331R-Project" target="_blank" className="btn-ghost-white">
              Teaching GitHub Project
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

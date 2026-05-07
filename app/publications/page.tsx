export default function PublicationsPage() {
  return (
    <main className="page-main">
      <section className="hero-dark" style={{ borderRadius: "2rem", padding: "3rem 2.5rem 2.5rem", marginBottom: "1.5rem" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <span className="label-gold-light">Publications</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 500, lineHeight: 1.15,
            color: "white", margin: "0 0 1rem", maxWidth: "40rem",
          }}>
            Research publications and scholarly work.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 0 2rem" }}>
            My publication work reflects my interest in molecular dynamics, machine learning,
            high-entropy alloys, and data-driven materials modeling.
          </p>
          <a
            href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
            target="_blank"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "white", color: "var(--navy)",
              borderRadius: "999px", padding: "0.65rem 1.4rem",
              fontSize: "0.875rem", fontWeight: 500, textDecoration: "none",
            }}
          >
            <span>🎓</span> Google Scholar
          </a>
        </div>
      </section>

      {/* Publication card */}
      <article className="card" style={{ padding: "2.25rem 2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
          <div className="section-label" style={{ marginBottom: 0 }}>
            <span className="label-gold">Journal Article</span>
          </div>
          <span style={{
            background: "var(--gold-pale)",
            color: "var(--gold)",
            border: "1px solid rgba(201,151,58,0.25)",
            borderRadius: "999px",
            padding: "0.25rem 0.875rem",
            fontSize: "0.8rem", fontWeight: 500,
          }}>2025</span>
        </div>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
          fontWeight: 500, lineHeight: 1.3,
          color: "var(--navy)", margin: "0 0 1rem", maxWidth: "44rem",
        }}>
          Multi-fidelity neural network–based prediction of tensile strength of high-entropy alloy FeNiCoCrCu using molecular dynamics data
        </h2>

        <p style={{ fontSize: "0.9rem", color: "var(--slate)", margin: "0 0 0.4rem" }}>
          N. E. Chowdhury, A. Jawad, A. Rahman, M. J. A. Khan
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--slate-light)", margin: "0 0 1.25rem", fontStyle: "italic" }}>
          Journal of Molecular Modeling, 31(8), 1–9.
        </p>

        <hr className="divider" />

        <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--slate)", margin: "0 0 1.75rem", maxWidth: "44rem" }}>
          This work uses molecular dynamics data and a multi-fidelity neural network approach
          to predict tensile strength in high-entropy alloys, bridging low-fidelity single-crystal
          and high-fidelity polycrystal simulation data.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <a href="https://doi.org/10.1007/s00894-025-06439-z" target="_blank" className="btn-primary">
            View Publication
          </a>
          <a href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ" target="_blank" className="btn-secondary">
            Google Scholar
          </a>
        </div>
      </article>
    </main>
  );
}

export default function ResearchPage() {
  const tags = [
    "MXenes","MAX Phases","Flash Joule Heating","2D Materials",
    "Material Characterization","Molecular Dynamics",
    "Applied Machine Learning","Material Informatics","Electrochemical Materials",
  ];

  return (
    <main className="page-main">
      {/* Header */}
      <section className="hero-dark" style={{ borderRadius: "2rem", padding: "3rem 2.5rem 2.5rem", marginBottom: "1.5rem" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <span className="label-gold-light">Research</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 500, lineHeight: 1.15,
            color: "white", margin: "0 0 1rem", maxWidth: "40rem",
          }}>
            Advanced materials, MXenes,{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.75)" }}>
              MAX phases, and data-driven discovery.
            </em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 0 2rem" }}>
            My research focuses on materials synthesis, 2D materials, electrochemical materials,
            molecular dynamics simulations, applied machine learning, and materials characterization.
          </p>
          <a
            href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
            target="_blank"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "white", color: "var(--navy)",
              borderRadius: "999px", padding: "0.65rem 1.4rem",
              fontSize: "0.875rem", fontWeight: 500, textDecoration: "none",
              transition: "opacity .2s",
            }}
          >
            <span>🎓</span> Google Scholar
          </a>
        </div>
      </section>

      {/* Current PhD Research */}
      <section className="card" style={{ padding: "2rem 2.25rem", marginBottom: "1.5rem" }}>
        <div className="section-label">
          <span className="label-gold">Current PhD Research</span>
        </div>
        <div style={{
          background: "var(--surface-tinted)",
          border: "1px solid rgba(15,28,46,0.07)",
          borderRadius: "1.25rem",
          padding: "1.75rem",
        }}>
          <p className="label-gold" style={{ marginBottom: "0.75rem" }}>
            Beidaghi Electrochemistry Research Group
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.6rem", fontWeight: 500,
            color: "var(--navy)", margin: "0 0 1rem", lineHeight: 1.25,
          }}>
            MAX Phase Synthesis using Flash Joule Heating
          </h2>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--slate)", maxWidth: "44rem", margin: 0 }}>
            I work on optimizing synthesis conditions for Ti, Nb, and V MAX phases using Flash Joule Heating.
            I am also interested in exploring synthesis pathways from low-entropy to high-entropy MAX phases.
          </p>
        </div>
      </section>

      {/* Two-col cards */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        <div className="card" style={{ padding: "2rem" }}>
          <div className="section-label">
            <span className="label-gold">MXenes & Electrochemical Materials</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 500, color: "var(--navy)", margin: "0 0 0.875rem" }}>
            2D Materials for Energy & Filtration
          </h2>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--slate)", margin: 0 }}>
            I am interested in MXene-based materials for electrochemical and filtration applications,
            including MXene inks, delaminated MXene films, and electrode materials.
          </p>
        </div>
        <div className="card" style={{ padding: "2rem" }}>
          <div className="section-label">
            <span className="label-gold">Materials Informatics</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 500, color: "var(--navy)", margin: "0 0 0.875rem" }}>
            Data-Driven Discovery
          </h2>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--slate)", margin: 0 }}>
            I am interested in combining materials science with applied machine learning to understand
            structure-property relationships and support data-driven materials discovery.
          </p>
        </div>
      </section>

      {/* Previous Research */}
      <section className="card" style={{ padding: "2rem 2.25rem", marginBottom: "1.5rem" }}>
        <div className="section-label">
          <span className="label-gold">Previous Research</span>
        </div>
        <div style={{
          background: "var(--surface-tinted)",
          border: "1px solid rgba(15,28,46,0.07)",
          borderRadius: "1.25rem",
          padding: "1.75rem",
        }}>
          <p className="label-gold" style={{ marginBottom: "0.75rem" }}>Undergraduate Thesis · BUET</p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem", fontWeight: 500,
            color: "var(--navy)", margin: "0 0 1rem", lineHeight: 1.3,
          }}>
            Molecular Dynamics and Machine Learning for High-Entropy Alloys
          </h2>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--slate)", maxWidth: "44rem", margin: "0 0 1.5rem" }}>
            My undergraduate thesis studied tensile strength prediction of high-entropy alloy FeCrCuCoNi
            using molecular dynamics simulations and machine learning. The work used low-fidelity
            single-crystal data and high-fidelity polycrystal data with a multi-fidelity neural network approach.
          </p>
          <a href="https://doi.org/10.1007/s00894-025-06439-z" target="_blank" className="btn-primary">
            View Related Publication
          </a>
        </div>
      </section>

      {/* Research interests tags */}
      <section className="card" style={{ padding: "2rem 2.25rem" }}>
        <div className="section-label">
          <span className="label-gold">Research Interests</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

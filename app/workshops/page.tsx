export default function WorkshopsPage() {
  return (
    <main className="page-main">
      <section className="hero-dark" style={{ borderRadius: "2rem", padding: "3rem 2.5rem 2.5rem", marginBottom: "1.5rem" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <span className="label-gold-light">Workshops & Teaching Materials</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 500, color: "white", lineHeight: 1.15, margin: "0 0 1rem", maxWidth: "36rem",
          }}>
            Future updates are coming.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "34rem", margin: 0 }}>
            This page will later include workshops, teaching resources, tutorials, course-related projects, and educational materials.
          </p>
        </div>
      </section>

      <div className="card" style={{ padding: "3.5rem 2.5rem", textAlign: "center" }}>
        <div style={{
          width: "3.5rem", height: "3.5rem",
          background: "var(--cream-dark)",
          border: "1px solid rgba(201,151,58,0.2)",
          borderRadius: "1rem",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 1.5rem",
          fontSize: "1.5rem",
        }}>⏳</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 500, color: "var(--navy)", margin: "0 0 0.75rem" }}>
          More content will be added soon.
        </h2>
        <p style={{ fontSize: "0.9375rem", color: "var(--slate-light)", lineHeight: 1.7, maxWidth: "32rem", margin: "0 auto 2rem" }}>
          Workshops, teaching tools, interactive materials, and academic resources are currently under development.
        </p>
        <a href="/contact" className="btn-secondary">Get in Touch</a>
      </div>
    </main>
  );
}

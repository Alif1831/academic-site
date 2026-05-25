const skills = [
  { title: "Characterization", text: "XRD, SEM, AFM, EDS, Raman, UV-Vis, TGA" },
  { title: "Electrochemistry", text: "CV, GCD, EIS" },
  { title: "Simulation & Coding", text: "LAMMPS, MATLAB, ANSYS, Python, C, Arduino" },
  { title: "Visualization", text: "OVITO, Tecplot 360, Origin" },
  { title: "CAD", text: "SolidWorks, AutoCAD" },
  { title: "Professional", text: "Teaching, writing, public speaking, leadership" },
];

const tags = [
  "MXenes","MAX Phases","Flash Joule Heating","Molecular Dynamics",
  "Applied Machine Learning","2D Materials","Material Characterization","Material Informatics",
];

export default function CVPage() {
  return (
    <main className="page-main">
      <section className="hero-dark" style={{ borderRadius: "2rem", padding: "3rem 2.5rem 2.5rem", marginBottom: "1.5rem" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <span className="label-gold-light">Curriculum Vitae</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 500, color: "white", lineHeight: 1.15, margin: "0 0 1rem",
          }}>
            Academic CV
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "34rem", margin: "0 0 2rem" }}>
            Education, research experience, publications, teaching, technical skills, and professional activities.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="/cv.pdf?v=2026-05-25" target="_blank" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "white", color: "var(--navy)", borderRadius: "999px",
              padding: "0.65rem 1.4rem", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none",
            }}>
              View / Download CV
            </a>
            {[
              ["🎓","Scholar","https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"],
              ["💻","GitHub","https://github.com/Alif1831"],
              ["🔗","LinkedIn","https://www.linkedin.com/in/alif-jawad/"],
            ].map(([icon,label,href]) => (
              <a key={label as string} href={href as string} target="_blank" className="btn-ghost-white">
                <span style={{ fontSize: "0.875rem" }}>{icon}</span> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Education + Research Areas */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", marginBottom: "1rem" }}>
        <div className="card" style={{ padding: "2rem" }}>
          <div className="section-label">
            <span className="label-gold">Education</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { inst: "University of Arizona", degree: "PhD Student in Mechanical Engineering", years: "2024–Present" },
              { inst: "Bangladesh University of Engineering and Technology", degree: "BSc in Mechanical Engineering", years: "2018–2023" },
            ].map(e => (
              <div key={e.inst} style={{ paddingLeft: "1rem", borderLeft: "2px solid var(--gold-pale)" }}>
                <p style={{ fontWeight: 500, color: "var(--navy)", margin: "0 0 0.2rem", fontSize: "0.9375rem" }}>{e.inst}</p>
                <p style={{ color: "var(--slate)", margin: "0 0 0.2rem", fontSize: "0.875rem" }}>{e.degree}</p>
                <p style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 500, margin: 0 }}>{e.years}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: "2rem" }}>
          <div className="section-label">
            <span className="label-gold">Research Areas</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </section>

      {/* Research Experience */}
      <section className="card" style={{ padding: "2rem 2.25rem", marginBottom: "1rem" }}>
        <div className="section-label">
          <span className="label-gold">Research Experience</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
          {[
            {
              title: "PhD Researcher · Beidaghi Electrochemistry Research Group",
              sub: "University of Arizona · 2024–Present",
              body: "Working on synthesis conditions for Ti, Nb, and V MAX phases using Flash Joule Heating, with interest in low-entropy and high-entropy MAX phase pathways.",
            },
            {
              title: "Undergraduate Thesis · Molecular Dynamics & ML",
              sub: "BUET · Mechanical Engineering",
              body: "Studied tensile strength prediction of high-entropy alloys using molecular dynamics simulations and multi-fidelity neural network modeling.",
            },
          ].map(item => (
            <div key={item.title} style={{
              background: "var(--surface-tinted)",
              border: "1px solid rgba(15,28,46,0.07)",
              borderRadius: "1.25rem",
              padding: "1.5rem",
            }}>
              <p style={{ fontWeight: 500, color: "var(--navy)", margin: "0 0 0.35rem", fontSize: "0.9375rem", lineHeight: 1.4 }}>{item.title}</p>
              <p style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 500, margin: "0 0 0.875rem" }}>{item.sub}</p>
              <p style={{ color: "var(--slate)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publication + Teaching */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1rem", marginBottom: "1rem" }}>
        <div className="card" style={{ padding: "2rem" }}>
          <div className="section-label">
            <span className="label-gold">Publication</span>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--navy)", lineHeight: 1.4, margin: "0 0 0.5rem", fontWeight: 500 }}>
            Multi-fidelity neural network–based prediction of tensile strength of high-entropy alloy FeNiCoCrCu
          </p>
          <p style={{ color: "var(--slate-light)", fontSize: "0.875rem", fontStyle: "italic", margin: "0 0 1.25rem" }}>
            Journal of Molecular Modeling, 2025
          </p>
          <a href="https://doi.org/10.1007/s00894-025-06439-z" target="_blank" className="btn-primary">
            View Publication
          </a>
        </div>

        <div className="card" style={{ padding: "2rem" }}>
          <div className="section-label">
            <span className="label-gold">Teaching</span>
          </div>
          <p style={{ fontWeight: 500, color: "var(--navy)", fontSize: "0.9375rem", margin: "0 0 0.5rem" }}>
            Fundamentals of Materials for Engineers
          </p>
          <p style={{ color: "var(--slate)", fontSize: "0.875rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>
            Grading, problem-solving sessions, office hours, online support, recorded videos, and final project assistance.
          </p>
          <div style={{
            background: "var(--surface-tinted)", border: "1px solid rgba(15,28,46,0.07)",
            borderRadius: "1rem", padding: "1.25rem",
          }}>
            <p className="label-gold" style={{ marginBottom: "0.4rem" }}>Teaching Project</p>
            <p style={{ fontWeight: 500, color: "var(--navy)", margin: "0 0 0.5rem", fontSize: "0.9rem" }}>Fe₃C Phase Diagram for AME 331R</p>
            <a href="https://github.com/Alif1831/Fe3C-Phase-diagram-for-AME-331R-Project" target="_blank" className="btn-primary" style={{ marginTop: "0.5rem", fontSize: "0.8125rem", padding: "0.55rem 1.1rem" }}>
              <span>💻</span> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="card" style={{ padding: "2rem 2.25rem" }}>
        <div className="section-label">
          <span className="label-gold">Technical Skills</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "0.75rem" }}>
          {skills.map(s => (
            <div key={s.title} style={{
              background: "var(--surface-tinted)",
              border: "1px solid rgba(15,28,46,0.07)",
              borderRadius: "1rem", padding: "1.125rem",
            }}>
              <p style={{ fontWeight: 500, fontSize: "0.875rem", color: "var(--navy)", margin: "0 0 0.35rem" }}>{s.title}</p>
              <p style={{ fontSize: "0.8125rem", color: "var(--slate-light)", lineHeight: 1.6, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

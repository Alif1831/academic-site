export default function ContactPage() {
  const links = [
    {
      label: "Email",
      title: "alifjawad@arizona.edu",
      desc: "Best way to reach me for academic, research, and collaboration inquiries.",
      href: "mailto:alifjawad@arizona.edu",
      icon: "✉",
    },
    {
      label: "Google Scholar",
      title: "Research Profile",
      desc: "View my publication record and research citations.",
      href: "https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ",
      icon: "🎓",
    },
    {
      label: "LinkedIn",
      title: "Professional Profile",
      desc: "Connect with me professionally and follow academic updates.",
      href: "https://www.linkedin.com/in/alif-jawad/",
      icon: "🔗",
    },
    {
      label: "GitHub",
      title: "Code & Projects",
      desc: "Explore my coding projects, materials informatics work, and research-related repositories.",
      href: "https://github.com/Alif1831",
      icon: "💻",
    },
  ];

  return (
    <main className="page-main">
      <section className="hero-dark" style={{ borderRadius: "2rem", padding: "3rem 2.5rem 2.5rem", marginBottom: "1.5rem" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label">
            <span className="label-gold-light">Contact</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
            fontWeight: 500, color: "white", lineHeight: 1.1, margin: "0 0 1rem",
          }}>
            Let's connect.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "32rem", margin: 0 }}>
            I'm happy to connect about research, collaboration, teaching, materials science,
            and academic opportunities.
          </p>
        </div>
      </section>

      {/* Location card */}
      <div className="card" style={{ padding: "1.5rem 2rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1.25rem" }}>
        <span style={{ fontSize: "1.25rem" }}>📍</span>
        <div>
          <p className="label-gold" style={{ marginBottom: "0.2rem" }}>Location</p>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--navy)", margin: "0 0 0.2rem" }}>
            Tucson, Arizona
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--slate-light)", margin: 0 }}>
            Currently based at the University of Arizona.
          </p>
        </div>
      </div>

      {/* Contact grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1rem" }}>
        {links.map(item => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto") ? undefined : "_blank"}
            className="card card-hover"
            style={{ padding: "1.75rem", textDecoration: "none", display: "block" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
              <span style={{
                width: "2.25rem", height: "2.25rem",
                background: "var(--cream-dark)",
                borderRadius: "0.625rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", flexShrink: 0,
              }}>{item.icon}</span>
              <span className="label-gold">{item.label}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 500, color: "var(--navy)", margin: "0 0 0.5rem" }}>
              {item.title}
            </h2>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--slate-light)", margin: 0 }}>
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Alif Jawad | PhD Student in Mechanical Engineering",
  description:
    "PhD student at the University of Arizona researching MXenes, MAX phases, Flash Joule Heating, molecular dynamics, and materials informatics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <a href="/" className="nav-brand">
              <img
                src="/images/profile.jpg"
                alt="Alif Jawad"
                className="nav-avatar"
                width={34}
                height={34}
              />
              <span className="nav-name">Alif Jawad</span>
            </a>

            <nav className="nav-links">
              <a href="/research" className="nav-link">Research</a>
              <a href="/publications" className="nav-link">Publications</a>
              <a href="/workshops" className="nav-link">Workshops</a>
              <a href="/cv" className="nav-link">CV</a>
              <a href="/contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="footer-brand">Alif Jawad</span>
              <span className="footer-sep">·</span>
              <span className="footer-muted">University of Arizona</span>
            </div>
            <div className="footer-links">
              {[
                ["Scholar", "https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"],
                ["GitHub", "https://github.com/Alif1831"],
                ["LinkedIn", "https://www.linkedin.com/in/alif-jawad/"],
                ["Email", "mailto:alifjawad@arizona.edu"],
              ].map(([label, href]) => (
                <a key={label} href={href} target="_blank" className="footer-link">
                  {label}
                </a>
              ))}
            </div>
            <span className="footer-muted">© {new Date().getFullYear()}</span>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}

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
              />
              <span className="nav-name">Alif Jawad</span>
            </a>

            <nav className="nav-links">
              {[
                ["Research", "/research"],
                ["Publications", "/publications"],
                ["Workshops", "/workshops"],
                ["CV", "/cv"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="nav-link">
                  {label}
                </a>
              ))}
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

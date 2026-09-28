import type { Metadata } from "next";
import { DM_Sans, EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alif Jawad | PhD Student in Mechanical Engineering",
  description:
    "PhD student at the University of Arizona researching MXenes, MAX phases, Rapid Joule Heating, molecular dynamics, and materials informatics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${ebGaramond.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <a href="/" className="nav-brand">
              <span className="nav-brand-mark">AJ</span>
              <span className="nav-name">Alif Jawad</span>
            </a>

            <nav className="nav-links" aria-label="Primary navigation">
              <a href="/research" className="nav-link">
                Research
              </a>

              <a href="/publications" className="nav-link">
                Publications
              </a>

              <a href="/workshops" className="nav-link">
                Workshops
              </a>

              <a href="/cv" className="nav-link">
                CV
              </a>

              <a href="/contact" className="nav-link">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="footer-identity">
              <span className="footer-brand">Alif Jawad</span>
              <span className="footer-sep">/</span>
              <span className="footer-muted">University of Arizona</span>
            </div>

            <div className="footer-links">
              <a
                href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Scholar
              </a>

              <a
                href="https://github.com/Alif1831"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/alif-jawad/"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>

              <a
                href="mailto:alifjawad@arizona.edu"
                className="footer-link"
              >
                Email
              </a>
            </div>

            <span className="footer-muted">
              © {new Date().getFullYear()}
            </span>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Alif Jawad | PhD Student in Mechanical Engineering",
  description:
    "PhD student at the University of Arizona researching MXenes, MAX phases, Flash Joule Heating, molecular dynamics, and materials informatics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f7f3ea]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/profile.jpg"
                alt="Alif Jawad"
                className="h-9 w-9 rounded-full border border-stone-300 object-cover"
              />
              <span className="text-lg font-semibold tracking-tight">
                Alif Jawad
              </span>
            </a>

            <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-stone-600">
              <a href="/research" className="hover:text-stone-950">
                Research
              </a>
              <a href="/publications" className="hover:text-stone-950">
                Publications
              </a>
              <a href="/workshops" className="hover:text-stone-950">
                Workshops
              </a>
              <a href="/cv" className="hover:text-stone-950">
                CV
              </a>
              <a href="/contact" className="hover:text-stone-950">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-stone-500">
          © {new Date().getFullYear()} Alif Jawad · University of Arizona
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
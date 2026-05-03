import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alif Jawad",
  description:
    "PhD student in Mechanical Engineering at the University of Arizona.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f7f3ea]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="text-lg font-semibold tracking-tight">
              Alif Jawad
            </a>

            <nav className="flex gap-5 text-sm text-stone-600">
              <a href="/research" className="hover:text-stone-950">
                Research
              </a>
              <a href="/publications" className="hover:text-stone-950">
                Publications
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
      </body>
    </html>
  );
}
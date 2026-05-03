export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm">
        <div className="bg-stone-950 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Contact
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight">
            Let’s connect.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            I am happy to connect about research, collaboration, teaching,
            materials science, and academic opportunities.
          </p>
        </div>

        <div className="grid gap-6 p-8 md:grid-cols-2 md:p-12">
          <a
            href="mailto:alifjawad@arizona.edu"
            className="rounded-3xl border border-stone-200 bg-stone-50 p-6 hover:bg-white"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Email
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-950">
              alifjawad@arizona.edu
            </h2>
            <p className="mt-3 leading-7 text-stone-600">
              Best way to reach me for academic, research, and collaboration
              inquiries.
            </p>
          </a>

          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Location
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-950">
              Tucson, Arizona
            </h2>
            <p className="mt-3 leading-7 text-stone-600">
              Currently based at the University of Arizona.
            </p>
          </div>

          <a
            href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
            target="_blank"
            className="rounded-3xl border border-stone-200 bg-stone-50 p-6 hover:bg-white"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Google Scholar
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-950">
              Research Profile
            </h2>
            <p className="mt-3 leading-7 text-stone-600">
              View my publication record and research citations.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/alif-jawad/"
            target="_blank"
            className="rounded-3xl border border-stone-200 bg-stone-50 p-6 hover:bg-white"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              LinkedIn
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-950">
              Professional Profile
            </h2>
            <p className="mt-3 leading-7 text-stone-600">
              Connect with me professionally and follow academic updates.
            </p>
          </a>

          <a
            href="https://github.com/Alif1831"
            target="_blank"
            className="rounded-3xl border border-stone-200 bg-stone-50 p-6 hover:bg-white md:col-span-2"
          >
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              GitHub
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-950">
              Code & Projects
            </h2>
            <p className="mt-3 leading-7 text-stone-600">
              Explore my coding projects, materials informatics work, and
              research-related repositories.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
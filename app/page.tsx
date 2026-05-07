export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="grid gap-10 rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm md:grid-cols-[1.3fr_0.7fr] md:p-12">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-700">
            PhD Student · Mechanical Engineering
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
            Alif Jawad
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-stone-700">
            I am a PhD student at the University of Arizona working on advanced
            materials, MXenes, MAX phases, Flash Joule Heating, molecular
            dynamics, applied machine learning, and materials characterization.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-stone-600">
            My research interests sit at the intersection of materials
            synthesis, electrochemical materials, simulation, and data-driven
            materials discovery.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/research"
              className="rounded-full bg-stone-950 px-6 py-3 text-white shadow-sm hover:bg-stone-800"
            >
              Research
            </a>

            <a
              href="/publications"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 hover:bg-stone-50"
            >
              Publications
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 hover:bg-stone-50"
            >
              Download CV
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium hover:bg-stone-50"
            >
              <span>🎓</span>
              Google Scholar
            </a>

            <a
              href="https://github.com/Alif1831"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium hover:bg-stone-50"
            >
              <span>💻</span>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alif-jawad/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium hover:bg-stone-50"
            >
              <span>🔗</span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-stone-50 p-5">
          <img
            src="/images/profile.jpg"
            alt="Alif Jawad"
            className="aspect-square w-full rounded-2xl object-cover shadow-sm"
          />

          <div className="mt-5 rounded-2xl bg-white p-5">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Affiliation
            </p>
            <p className="mt-3 font-semibold text-stone-950">
              University of Arizona
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Beidaghi Electrochemistry Research Group
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-4">
        {[
          {
            title: "Current Role",
            text: "PhD student in Mechanical Engineering at the University of Arizona.",
          },
          {
            title: "Research Focus",
            text: "MXenes, MAX phases, Flash Joule Heating, and electrochemical materials.",
          },
          {
            title: "Methods",
            text: "Materials characterization, molecular dynamics, and applied machine learning.",
          },
          {
            title: "Teaching",
            text: "TA for Fundamentals of Materials for Engineers.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-stone-200 bg-white/75 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-stone-950">
              {item.title}
            </h2>
            <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-700">
            Currently
          </p>

          <ul className="mt-6 space-y-4 leading-7 text-stone-700">
            <li>• Working on MAX phase synthesis using Flash Joule Heating.</li>
            <li>• Exploring MXene-based electrochemical materials.</li>
            <li>• Teaching AME-MSE 331R: Fundamentals of Materials for Engineers.</li>
            <li>• Interested in materials informatics and data-driven discovery.</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-700">
            Recent Updates
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="font-semibold text-stone-950">
                Publication in Journal of Molecular Modeling
              </p>
              <p className="mt-1 text-stone-600">
                Multi-fidelity neural network prediction of tensile strength in
                high-entropy alloys.
              </p>
            </div>

            <div>
              <p className="font-semibold text-stone-950">
                Teaching project added
              </p>
              <p className="mt-1 text-stone-600">
                Fe₃C phase diagram project for AME 331R is available on GitHub.
              </p>
            </div>

            <div>
              <p className="font-semibold text-stone-950">
                Academic website launched
              </p>
              <p className="mt-1 text-stone-600">
                Research, CV, publications, and contact information are now
                organized in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-700">
          Featured Work
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-stone-950">
          Multi-fidelity neural network–based prediction of tensile strength of
          high-entropy alloy FeNiCoCrCu
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-stone-600">
          Published in Journal of Molecular Modeling, 2025.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://doi.org/10.1007/s00894-025-06439-z"
            target="_blank"
            className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            View Publication
          </a>

          <a
            href="https://github.com/Alif1831/Fe3C-Phase-diagram-for-AME-331R-Project"
            target="_blank"
            className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium hover:bg-stone-50"
          >
            Teaching GitHub Project
          </a>
        </div>
      </section>
    </main>
  );
}
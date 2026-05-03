export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cover.jpg')" }}
        />

        <div className="px-8 pb-12 md:px-12">
          <img
            src="/images/profile.jpg"
            alt="Alif Jawad"
            className="-mt-20 h-40 w-40 rounded-full border-4 border-white object-cover shadow-lg"
          />

          <p className="mt-7 text-sm font-medium uppercase tracking-[0.25em] text-amber-700">
            PhD Student · Mechanical Engineering
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
            Alif Jawad
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-stone-700">
            I am a PhD student in Mechanical Engineering at the University of
            Arizona. My research focuses on MXenes, MAX phases, Flash Joule
            Heating, molecular dynamics, applied machine learning, 2D materials,
            and materials characterization.
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
              href="/cv"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 hover:bg-stone-50"
            >
              CV
            </a>

            <a
              href="/contact"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 hover:bg-stone-50"
            >
              Contact
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
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          "MXenes & 2D Materials",
          "Flash Joule Heating",
          "Materials Informatics",
        ].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-stone-200 bg-white/75 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-stone-950">{item}</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Research interest in advanced materials, synthesis, simulation,
              characterization, and data-driven materials discovery.
            </p>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-sm md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-700">
          Featured Publication
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
            href="/publications"
            className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium hover:bg-stone-50"
          >
            All Publications
          </a>
        </div>
      </section>
    </main>
  );
}
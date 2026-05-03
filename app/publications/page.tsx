export default function PublicationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm">
        <div className="bg-stone-950 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Publications
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight">
            Research publications and scholarly work.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            My publication work reflects my interest in molecular dynamics,
            machine learning, high-entropy alloys, and data-driven materials
            modeling.
          </p>

          <div className="mt-8">
            <a
              href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-950 hover:bg-stone-100"
            >
              <span>🎓</span>
              Google Scholar
            </a>
          </div>
        </div>

        <div className="grid gap-6 p-8 md:p-12">
          <article className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Journal Article · 2025
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-stone-950">
              Multi-fidelity neural network–based prediction of tensile strength
              of high-entropy alloy FeNiCoCrCu using molecular dynamics data
            </h2>

            <p className="mt-4 leading-7 text-stone-600">
              N. E. Chowdhury, A. Jawad, A. Rahman, M. J. A. Khan
            </p>

            <p className="mt-3 leading-7 text-stone-600">
              Journal of Molecular Modeling, 31(8), 1–9.
            </p>

            <p className="mt-5 max-w-4xl leading-7 text-stone-700">
              This work uses molecular dynamics data and a multi-fidelity neural
              network approach to predict tensile strength in high-entropy
              alloys.
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
                href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
                target="_blank"
                className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium hover:bg-stone-50"
              >
                Google Scholar
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
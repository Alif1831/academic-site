export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm">
        <div className="bg-stone-950 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Research
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight">
            Advanced materials, MXenes, MAX phases, and data-driven materials discovery.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            My research focuses on materials synthesis, 2D materials,
            electrochemical materials, molecular dynamics simulations, applied
            machine learning, and materials characterization.
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
          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Current PhD Research
            </h2>

            <div className="mt-6 rounded-2xl bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
                Beidaghi Electrochemistry Research Group
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-stone-950">
                MAX Phase Synthesis using Flash Joule Heating
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-stone-600">
                I work on optimizing synthesis conditions for Ti, Nb, and V MAX
                phases using Flash Joule Heating. I am also interested in
                exploring synthesis pathways from low-entropy to high-entropy
                MAX phases.
              </p>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
              <h2 className="text-2xl font-semibold text-stone-950">
                MXenes & Electrochemical Materials
              </h2>

              <p className="mt-5 leading-7 text-stone-600">
                I am interested in MXene-based materials for electrochemical and
                filtration applications, including MXene inks, delaminated MXene
                films, and electrode materials.
              </p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
              <h2 className="text-2xl font-semibold text-stone-950">
                Materials Informatics
              </h2>

              <p className="mt-5 leading-7 text-stone-600">
                I am interested in combining materials science with applied
                machine learning to understand structure-property relationships
                and support data-driven materials discovery.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Previous Research
            </h2>

            <div className="mt-6 rounded-2xl bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
                Undergraduate Thesis · BUET
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-stone-950">
                Molecular Dynamics and Machine Learning for High-Entropy Alloys
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-stone-600">
                My undergraduate thesis studied tensile strength prediction of
                high-entropy alloy FeCrCuCoNi using molecular dynamics
                simulations and machine learning. The work used low-fidelity
                single-crystal data and high-fidelity polycrystal data with a
                multi-fidelity neural network approach.
              </p>

              <a
                href="https://doi.org/10.1007/s00894-025-06439-z"
                target="_blank"
                className="mt-6 inline-block rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
              >
                View Related Publication
              </a>
            </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Research Interests
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "MXenes",
                "MAX Phases",
                "Flash Joule Heating",
                "2D Materials",
                "Material Characterization",
                "Molecular Dynamics",
                "Applied Machine Learning",
                "Material Informatics",
                "Electrochemical Materials",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
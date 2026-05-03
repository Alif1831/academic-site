export default function CVPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm">
        <div className="bg-stone-950 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Curriculum Vitae
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            Academic CV
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
            Education, research experience, publications, teaching, technical
            skills, and professional activities.
          </p>

          <div className="mt-8">
            <a
              href="/cv.pdf"
              target="_blank"
              className="rounded-full bg-white px-6 py-3 font-medium text-stone-950 shadow-sm hover:bg-stone-100"
            >
              View / Download CV
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://scholar.google.com/citations?hl=en&pli=1&user=pJ50c_QAAAAJ"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              <span>🎓</span>
              Google Scholar
            </a>

            <a
              href="https://github.com/Alif1831"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              <span>💻</span>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/alif-jawad/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              <span>🔗</span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid gap-6 p-8 md:grid-cols-2 md:p-12">
          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Education
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <p className="font-semibold">University of Arizona</p>
                <p className="mt-1 text-stone-600">
                  PhD Student in Mechanical Engineering
                </p>
                <p className="text-sm text-stone-500">2024–Present</p>
              </div>

              <div>
                <p className="font-semibold">
                  Bangladesh University of Engineering and Technology
                </p>
                <p className="mt-1 text-stone-600">
                  BSc in Mechanical Engineering
                </p>
                <p className="text-sm text-stone-500">2018–2023</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Research Areas
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "MXenes",
                "MAX Phases",
                "Flash Joule Heating",
                "Molecular Dynamics",
                "Applied Machine Learning",
                "2D Materials",
                "Material Characterization",
                "Material Informatics",
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

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold text-stone-950">
              Research Experience
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-5">
                <p className="font-semibold">
                  PhD Researcher · Beidaghi Electrochemistry Research Group
                </p>
                <p className="mt-1 text-sm text-stone-500">
                  University of Arizona · 2024–Present
                </p>
                <p className="mt-4 leading-7 text-stone-600">
                  Working on synthesis conditions for Ti, Nb, and V MAX phases
                  using Flash Joule Heating, with interest in low-entropy and
                  high-entropy MAX phase pathways.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5">
                <p className="font-semibold">
                  Undergraduate Thesis · Molecular Dynamics & ML
                </p>
                <p className="mt-1 text-sm text-stone-500">
                  BUET · Mechanical Engineering
                </p>
                <p className="mt-4 leading-7 text-stone-600">
                  Studied tensile strength prediction of high-entropy alloys
                  using molecular dynamics simulations and multi-fidelity neural
                  network modeling.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Publication
            </h2>

            <p className="mt-5 font-semibold">
              Multi-fidelity neural network–based prediction of tensile strength
              of high-entropy alloy FeNiCoCrCu
            </p>

            <p className="mt-3 leading-7 text-stone-600">
              Journal of Molecular Modeling, 2025
            </p>

            <a
              href="https://doi.org/10.1007/s00894-025-06439-z"
              target="_blank"
              className="mt-5 inline-block rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
            >
              View Publication
            </a>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Teaching
            </h2>

            <p className="mt-5 font-semibold">
              Fundamentals of Materials for Engineers
            </p>

            <p className="mt-3 leading-7 text-stone-600">
              Teaching experience includes grading, problem-solving sessions, office
              hours, online support, recorded videos, and final project assistance.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5">
              <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
                Teaching Project
              </p>

              <h3 className="mt-3 text-lg font-semibold text-stone-950">
                Fe₃C Phase Diagram Project for AME 331R
              </h3>

              <p className="mt-3 leading-7 text-stone-600">
                A course-related project created for Fundamentals of Materials for
                Engineers, connected to phase diagrams and materials science teaching.
              </p>

              <a
                href="https://github.com/Alif1831/Fe3C-Phase-diagram-for-AME-331R-Project"
                target="_blank"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
              >
                <span>💻</span>
                View GitHub Project
              </a>
            </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold text-stone-950">
              Technical Skills
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Characterization",
                  text: "XRD, SEM, AFM, EDS, Raman, UV-Vis, TGA",
                },
                {
                  title: "Electrochemistry",
                  text: "CV, GCD, EIS",
                },
                {
                  title: "Simulation & Coding",
                  text: "LAMMPS, MATLAB, ANSYS, Python, C, Arduino",
                },
                {
                  title: "Visualization",
                  text: "OVITO, Tecplot 360, Origin",
                },
                {
                  title: "CAD",
                  text: "SolidWorks, AutoCAD",
                },
                {
                  title: "Professional",
                  text: "Teaching, writing, public speaking, leadership",
                },
              ].map((skill) => (
                <div key={skill.title} className="rounded-2xl bg-white p-5">
                  <p className="font-semibold">{skill.title}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {skill.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
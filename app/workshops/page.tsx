export default function WorkshopsPage() {
  const workshops = [
    {
      title: "ACoQuM — Unravelling Atomistic Correlations in Quantum Materials",
      subtitle:
        "NSF-funded workshop on quantum materials, microscopy, ultrafast probes, and materials informatics.",
      date: "May 21–22, 2026",
      location: "Arizona State University, Tempe, AZ",
      href: "/workshops/acoqm",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm">
        <div className="bg-stone-950 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Workshops
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight">
            Workshops attended, teaching materials, and academic training.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            This page collects workshops, short courses, teaching resources, and
            academic training activities related to materials science, quantum
            materials, microscopy, and engineering education.
          </p>
        </div>

        <div className="grid gap-6 p-8 md:p-12">
          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Workshops Attended
            </h2>

            <div className="mt-6 grid gap-5">
              {workshops.map((workshop) => (
                <a
                  key={workshop.title}
                  href={workshop.href}
                  className="block rounded-3xl border border-stone-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
                    {workshop.date} · {workshop.location}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-stone-950">
                    {workshop.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-7 text-stone-600">
                    {workshop.subtitle}
                  </p>

                  <p className="mt-5 inline-flex rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white">
                    View Details
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Future Updates
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-stone-600">
              More workshops, teaching resources, tutorials, and academic
              materials will be added here over time.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
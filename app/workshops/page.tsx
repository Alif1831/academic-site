export default function WorkshopsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm">
        <div className="bg-stone-950 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Workshops & Teaching Materials
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight">
            Future updates are coming.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            This page will later include workshops, teaching resources,
            tutorials, course-related projects, and educational materials.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="rounded-3xl border border-stone-200 bg-stone-50 p-10 text-center">
            <p className="text-2xl font-semibold text-stone-950">
              More content will be added soon.
            </p>

            <p className="mt-4 leading-7 text-stone-600">
              Workshops, teaching tools, interactive materials, and academic
              resources are currently under development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
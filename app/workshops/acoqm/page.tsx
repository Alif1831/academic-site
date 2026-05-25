export default function ACoQuMWorkshopPage() {
  const speakers = [
    {
      name: "Seth Tongay",
      affiliation: "Arizona State University",
      talk: "Open Questions at the Intersection of 2D Materials, Microscopy, and CXFEL Science",
    },
    {
      name: "Pinshane Y. Huang",
      affiliation: "University of Illinois at Urbana-Champaign",
      talk: "Electron Ptychography at the Limits",
    },
    {
      name: "Aaron M. Lindenberg",
      affiliation: "Stanford University",
      talk: "Visualizing and Optimizing Materials Processes",
    },
    {
      name: "Juan Carlos Idrobo",
      affiliation: "University of Washington / PNNL",
      talk: "Mapping Emergent Quantum Behavior with Electron Spectroscopy",
    },
    {
      name: "Nicholas Maltis",
      affiliation: "Arizona State University",
      talk: "A Programmable THz Platform for Unraveling Coupled Quantum Dynamics",
    },
    {
      name: "Darrell G. Schlom",
      affiliation: "Cornell University",
      talk: "Hot Quantum Materials — Thin Films of Oxide Quantum Materials",
    },
    {
      name: "Haidan Wen",
      affiliation: "Argonne National Laboratory",
      talk: "Exploring Collective Structural Dynamics by Ultrafast X-ray Diffraction",
    },
    {
      name: "Steffi Woo",
      affiliation: "Oak Ridge National Laboratory",
      talk: "Excitons in Two-Dimensional Semiconductors",
    },
    {
      name: "Suk Hyun Sung",
      affiliation: "University of Michigan",
      talk: "Imaging Quantum States with Liquid Helium Transmission Electron Microscopy",
    },
    {
      name: "Sergei V. Kalinin",
      affiliation: "University of Tennessee, Knoxville",
      talk: "From Human-Operated to Agentic Microscopes",
    },
    {
      name: "Miaofang Chi",
      affiliation: "Duke University / Oak Ridge National Laboratory",
      talk: "Probing Competing Orders: Cryogenic Electron Microscopy of Quantum Materials",
    },
  ];

  const schedule = [
    {
      time: "8:00–8:50 AM",
      day1: "KEYNOTE: Seth Tongay",
      day2: "KEYNOTE: Darrell Schlom",
    },
    {
      time: "9:00–10:00 AM",
      day1: "Session A: Spatial Textures of Order Parameters",
      day2: "Session C: Measuring Collective Excitations",
    },
    {
      time: "10:20–11:50 AM",
      day1: "Session B: Electronic Excitations",
      day2: "Session D: Next-Gen Hardware and Software",
    },
    {
      time: "12:10–1:30 PM",
      day1: "Lunch",
      day2: "Lunch",
    },
    {
      time: "1:30–2:00 PM",
      day1: "Access and Education: David Smith",
      day2: "Access and Education: Aravinder Sandhu",
    },
    {
      time: "2:00–5:00 PM",
      day1: "Lab Tours: Microscopy Facilities",
      day2: "CXFEL and FORCE Facilities Tours",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm">
        <div className="bg-stone-950 px-8 py-12 text-white md:px-12">
          <a
            href="/workshops"
            className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-stone-200 hover:bg-white/10"
          >
            ← Back to Workshops
          </a>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
            Workshop Attended
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight">
            ACoQuM — Unravelling Atomistic Correlations in Quantum Materials
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            NSF-funded workshop hosted at Arizona State University, bringing
            together researchers in quantum materials, advanced electron
            microscopy, ultrafast spectroscopy, and materials informatics.
          </p>

          <div className="mt-8">
            <a
              href="https://faculty.engineering.asu.edu/susarla-group/acqum-unravelling-atomistic-correlations-in-quantum-materials/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-stone-950 hover:bg-stone-100"
            >
              Workshop Website
            </a>
          </div>
        </div>

        <div className="grid gap-6 p-8 md:p-12">
          <section className="grid gap-5 md:grid-cols-4">
            {[
              { label: "Dates", text: "May 21–22, 2026" },
              { label: "Location", text: "Arizona State University, Tempe, AZ" },
              { label: "Funding", text: "NSF-funded workshop" },
              {
                label: "Focus",
                text: "Quantum materials, microscopy, ultrafast probes",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-6"
              >
                <p className="text-sm font-medium uppercase tracking-widest text-amber-700">
                  {item.label}
                </p>
                <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
              </div>
            ))}
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              About the Workshop
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-stone-600">
              ACoQuM brought together researchers working at the frontier of
              quantum materials characterization, covering topics including 2D
              materials, moiré systems, charge density waves, cryogenic electron
              microscopy, ultrafast X-ray and THz probes, electron ptychography,
              and machine learning-driven autonomous microscopy. The workshop
              included keynote talks, technical sessions, discussion panels, and
              tours of ASU microscopy and CXFEL facilities.
            </p>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Program Schedule
            </h2>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    {["Time", "Day 1 — May 21", "Day 2 — May 22"].map(
                      (header) => (
                        <th
                          key={header}
                          className="whitespace-nowrap border-b-2 border-stone-200 px-4 py-3 text-left font-medium text-stone-950"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody>
                  {schedule.map((row, index) => (
                    <tr
                      key={row.time}
                      className={index % 2 === 0 ? "bg-white" : "bg-stone-100"}
                    >
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-amber-700">
                        {row.time}
                      </td>
                      <td className="px-4 py-3 leading-6 text-stone-600">
                        {row.day1}
                      </td>
                      <td className="px-4 py-3 leading-6 text-stone-600">
                        {row.day2}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
            <h2 className="text-2xl font-semibold text-stone-950">
              Invited Speakers
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker) => (
                <div
                  key={speaker.name}
                  className="rounded-2xl border border-stone-200 bg-white p-5"
                >
                  <p className="font-semibold text-stone-950">
                    {speaker.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-amber-700">
                    {speaker.affiliation}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {speaker.talk}
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
import Nav from './Nav'

const projects = [
  {
    name: 'FSM — Field Service Management',
    description:
      'Built responsive UI modules with role-based access for Admin, Employee, and Customer roles. Integrated REST APIs across modules for real-time data rendering, working closely with backend and QA teams.',
    tech: ['React JS', 'JavaScript (ES6)', 'REST APIs', 'Role-based Access'],
  },
  {
    name: 'Apna Makaan',
    description:
      'A responsive real estate web app supporting multiple user types — vendors, agents, and buyers — with a consistent, cross-device user experience.',
    tech: ['React JS', 'Tailwind CSS', 'Responsive Design'],
  },
]

export default function Project() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <section className="px-6 py-12 sm:px-8 md:px-[8%] md:py-16">
        <div className="max-w-3xl">
          <h1 className="mb-3 font-display text-3xl font-semibold sm:text-4xl">Projects</h1>
          <p className="mb-9 text-base sm:text-lg">
            A couple of things I&apos;ve built and shipped as part of my work.
          </p>
          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl bg-card p-6 shadow-[8px_8px_0px_0px_var(--color-accent)] sm:p-7"
              >
                <h2 className="mb-3 font-display text-xl font-semibold sm:text-2xl">
                  {project.name}
                </h2>
                <p className="mb-4 text-sm leading-relaxed sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-white sm:text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

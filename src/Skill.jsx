import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faBootstrap,
  faPython, faGitAlt, faFigma,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer, faUsersGear, faBug } from '@fortawesome/free-solid-svg-icons'

const skillGroups = [
  {
    title: 'Front-End',
    items: [
      { name: 'HTML5', icon: faHtml5 },
      { name: 'CSS3', icon: faCss3Alt },
      { name: 'JavaScript (ES6)', icon: faJsSquare },
      { name: 'React JS', icon: faReact },
      { name: 'Next.js (basics)', icon: faReact },
      { name: 'Angular (basics)', icon: faAngular },
      { name: 'Bootstrap', icon: faBootstrap },
      { name: 'Tailwind CSS', icon: faCss3Alt },
    ],
  },
  {
    title: 'State Management',
    items: [{ name: 'Redux fundamentals (self-study)', icon: faServer }],
  },
  {
    title: 'Supporting Back-End',
    items: [
      { name: 'Python', icon: faPython },
      { name: 'FastAPI', icon: faServer },
      { name: 'REST API integration', icon: faServer },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB', icon: faDatabase },
      { name: 'PostgreSQL', icon: faDatabase },
    ],
  },
  {
    title: 'Tools & Practices',
    items: [
      { name: 'Git', icon: faGitAlt },
      { name: 'VS Code', icon: faServer },
      { name: 'Postman', icon: faServer },
      { name: 'Agile / Scrum', icon: faUsersGear },
      { name: 'Debugging & Performance', icon: faBug },
      { name: 'Figma', icon: faFigma },
    ],
  },
]

export default function Skill() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <section className="px-6 py-12 sm:px-8 md:px-[8%] md:py-16">
        <div className="max-w-3xl">
          <h1 className="mb-3 font-display text-3xl font-semibold sm:text-4xl">Skills</h1>
          <p className="mb-10 max-w-xl text-base leading-relaxed sm:text-lg">
            A snapshot of the technologies and practices I use day to day,
            plus the areas I&apos;m actively growing into.
          </p>
          {skillGroups.map((group) => (
            <div key={group.title} className="mb-8">
              <h2 className="mb-4 font-display text-lg font-semibold text-accent sm:text-xl">
                {group.title}
              </h2>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2.5 rounded-full bg-card px-4 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white sm:text-base"
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-lg" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

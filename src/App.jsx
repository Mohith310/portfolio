import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import ExperienceAccordion from './ExperienceAccordion'
import AchievementsCarousel from './AchievementsCarousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import myPhoto from './img/myPhoto.jpg'
import frontEndImg from './img/frontEnd.avif'
import backEndImg from './img/backEnd.avif'
import datbaseImg from './img/database.jpeg'

const experience = [
  {
    role: 'Web Developer',
    company: 'CompIndia Infotech Pvt. Ltd.',
    period: 'Dec 2025 – Aug 2026',
    points: [
      'Build and enhance responsive, user-centric web applications using React JS, JavaScript (ES6), and Tailwind CSS.',
      'Collaborate with backend developers and QA to integrate REST APIs, ensuring reliable data rendering across dashboards.',
      'Debug and resolve cross-browser layout and styling issues, writing clean, maintainable code and participating in code reviews.',
    ],
  },
  {
    role: 'UI Developer',
    company: 'CompIndia Infotech Pvt. Ltd.',
    period: 'Jun 2025 – Nov 2025',
    points: [
      'Built scalable front-end interfaces using Angular and Bootstrap, gaining practical cross-framework exposure relevant to React/Angular collaboration.',
      'Implemented client-side interactivity and reusable UI components using HTML, CSS, and JavaScript.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Codeon Technologies Pvt. Ltd.',
    period: 'Jan 2025 – Jun 2025',
    points: [
      'Built and styled responsive web pages using HTML, CSS, and JavaScript; explored React JS and Tailwind CSS for component-based UI development.',
    ],
  },
  {
    role: 'Trainee – Data Specialist',
    company: 'Ninestars Information Technologies Pvt. Ltd.',
    period: 'Jun 2023 – May 2024',
    points: [
      'Performed data quality checks and validation for AI-based OCR systems, strengthening attention to detail and quality-focused development habits.',
    ],
  },
]

export default function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />

      {/* Hero */}
      <section className="flex flex-col items-center gap-10 px-6 pt-8 pb-16 sm:px-8 md:flex-row md:justify-between md:px-[8%] md:pt-12">
        <div className="flex w-full flex-col gap-5 md:w-3/5">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl md:text-6xl">
            Hi, I&apos;m Mohith.
          </h1>
          <h2 className="font-display text-2xl font-medium text-accent sm:text-3xl md:text-4xl">
            Web Developer.
          </h2>
          <p className="max-w-xl text-base leading-relaxed sm:text-lg md:text-xl">
            I build responsive, user-centric web apps with React, JavaScript
            and Tailwind CSS — currently shipping features at CompIndia
            Infotech in Tirupati, India.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => navigate('/project')}
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-accent-dark cursor-pointer"
            >
              View my work
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-lg border-2 border-accent px-6 py-3 font-semibold text-accent transition-colors duration-200 hover:bg-accent hover:text-white cursor-pointer"
            >
              Get in touch
            </button>
          </div>
        </div>
        <div
          className="h-64 w-64 shrink-0 rounded-full bg-cover bg-top shadow-[10px_10px_1rem_6px_var(--color-accent)] sm:h-72 sm:w-72 md:h-[26rem] md:w-[26rem]"
          style={{ backgroundImage: `url(${myPhoto})` }}
        />
      </section>

      {/* Expertise */}
      <section className="px-6 pb-16 sm:px-8 md:px-[8%]">
        <h2 className="mb-8 text-center font-display text-3xl font-semibold sm:text-4xl">
          Expertise
        </h2>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
          {[
            { title: 'Front-End Development', desc: 'React JS, JavaScript, Bootstrap, Tailwind', img: frontEndImg },
            { title: 'Back-End Development', desc: 'Python, FastAPI, REST APIs', img: backEndImg },
            { title: 'Databases', desc: 'MongoDB, PostgreSQL', img: datbaseImg },
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => navigate('/skill')}
              className={`flex h-56 w-56 cursor-pointer flex-col items-center justify-between rounded-2xl border-2 border-white p-3 text-center shadow-[10px_10px_1rem_6px_var(--color-accent)] transition-transform duration-200 hover:-translate-y-1.5 ${
                item.img ? 'bg-cover text-white' : 'justify-center gap-4 bg-accent text-white'
              }`}
              style={item.img ? { backgroundImage: `url(${item.img})` } : undefined}
            >
              {item.icon && <FontAwesomeIcon icon={item.icon} className="text-4xl" />}
              <h4 className={`font-display text-lg font-semibold drop-shadow ${item.img ? 'mt-2' : ''}`}>
                {item.title}
              </h4>
              <p className={`text-sm drop-shadow ${item.img ? 'mb-2' : ''}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 pb-14 sm:px-8 md:px-[8%]">
        <div className="max-w-3xl">
          <h2 className="mb-6 font-display text-2xl font-semibold sm:text-3xl">About Me</h2>
          <p className="text-base leading-relaxed sm:text-lg">
            Web Developer with 2+ years of professional experience
            building responsive, user-centric web applications using HTML5,
            CSS3, JavaScript (ES6), React JS, and basic Angular. Skilled in
            translating UI/UX designs into functional, cross-browser
            compatible interfaces, and collaborating closely with designers,
            back-end developers, and product managers in agile environments.
            Currently building hands-on depth in Redux state management and
            Next.js beyond the fundamentals.
          </p>
        </div>
      </section>

      {/* Experience accordion */}
      <section className="px-6 pb-14 sm:px-8 md:px-[8%]">
        <div className="max-w-3xl">
          <h2 className="mb-7 font-display text-2xl font-semibold sm:text-3xl">Experience</h2>
          <ExperienceAccordion items={experience} />
        </div>
      </section>

      {/* Education */}
      <section className="px-6 pb-14 sm:px-8 md:px-[8%]">
        <div className="max-w-3xl">
          <h2 className="mb-7 font-display text-2xl font-semibold sm:text-3xl">Education</h2>
          <div className="rounded-xl bg-card p-6">
            <h3 className="font-display text-lg font-semibold sm:text-xl">
              B.Tech, Computer Science &amp; Engineering
            </h3>
            <span className="text-sm opacity-75">
              S V Engineering College, Tirupati (JNTU Anantapur) · 2023 · 7.97 CGPA
            </span>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 pb-16 sm:px-8 md:px-[8%]">
        <div className="max-w-3xl">
          <h2 className="mb-7 font-display text-2xl font-semibold sm:text-3xl">
            Certifications &amp; Achievements
          </h2>
          <AchievementsCarousel
            items={[
              'Full Stack Development — Career Smith Edu. Tech. Ltd.',
              'Salesforce Virtual Internship — SmartInternz platform',
              'Online English Language Proficiency Certificate — Dharmavaram faculty',
              'Group certificate for outstanding performance with the WES project team',
            ]}
          />
        </div>
      </section>
    </div>
  )
}

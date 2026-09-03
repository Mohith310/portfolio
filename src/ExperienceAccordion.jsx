import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ExperienceAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i))
  }

  return (
    <div className="flex flex-col gap-3">
      {items.map((job, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl bg-card transition-shadow duration-200"
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span>
                <h3 className="font-display text-base font-semibold sm:text-lg">
                  {job.role}
                </h3>
                <span className="block text-xs opacity-75 sm:text-sm">
                  {job.company} · {job.period}
                </span>
              </span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`shrink-0 text-accent transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <ul className="list-disc px-5 pb-5 pl-9 sm:px-6 sm:pb-6">
                  {job.points.map((p, j) => (
                    <li key={j} className="py-1 text-sm leading-relaxed sm:text-base">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ExperienceAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
}

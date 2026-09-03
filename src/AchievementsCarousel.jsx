import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faAward } from '@fortawesome/free-solid-svg-icons'

export default function AchievementsCarousel({ items }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-card">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex w-full shrink-0 flex-col items-center gap-4 px-8 py-10 text-center sm:px-14 sm:py-12">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
                <FontAwesomeIcon icon={faAward} />
              </span>
              <p className="max-w-md text-sm leading-relaxed sm:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute top-1/2 left-1 -translate-y-1/2 cursor-pointer rounded-full bg-accent/90 p-2.5 text-white transition-colors duration-200 hover:bg-accent-dark sm:left-3"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute top-1/2 right-1 -translate-y-1/2 cursor-pointer rounded-full bg-accent/90 p-2.5 text-white transition-colors duration-200 hover:bg-accent-dark sm:right-3"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  i === index ? 'w-6 bg-accent' : 'w-2.5 bg-accent/30'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

AchievementsCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

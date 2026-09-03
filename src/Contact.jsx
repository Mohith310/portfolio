import { useState } from 'react'
import Nav from './Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:mohith1709@gmail.com?subject=${subject}&body=${body}`
  }

  const inputClasses =
    'rounded-lg border-2 border-card bg-white px-3.5 py-3 text-sm text-text outline-none transition-colors duration-200 focus:border-accent sm:text-base'

  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <section className="px-6 py-12 sm:px-8 md:px-[8%] md:py-16">
        <div className="max-w-3xl">
          <h1 className="mb-3 font-display text-3xl font-semibold sm:text-4xl">Get in Touch</h1>
          <p className="mb-10 text-base sm:text-lg">
            Have a role, project, or question in mind? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col gap-10 md:flex-row md:gap-12">
            <div className="flex min-w-[240px] flex-col gap-4">
              <a
                href="mailto:mohith1709@gmail.com"
                className="flex items-center gap-3 rounded-lg bg-card px-4.5 py-3.5 text-sm font-medium transition-colors duration-200 hover:bg-accent hover:text-white sm:text-base"
              >
                <FontAwesomeIcon icon={faEnvelope} /> mohith1709@gmail.com
              </a>
              <a
                href="tel:+916304345155"
                className="flex items-center gap-3 rounded-lg bg-card px-4.5 py-3.5 text-sm font-medium transition-colors duration-200 hover:bg-accent hover:text-white sm:text-base"
              >
                <FontAwesomeIcon icon={faPhone} /> +91 63043 45155
              </a>
              <a
                href="https://linkedin.com/in/mohith-pernapati-98b91322a"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg bg-card px-4.5 py-3.5 text-sm font-medium transition-colors duration-200 hover:bg-accent hover:text-white sm:text-base"
              >
                <FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/mohith-pernapati
              </a>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-1 min-w-[260px] flex-col gap-4">
              <label className="flex flex-col gap-1.5 text-sm font-semibold">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-semibold">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-semibold">
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} resize-y`}
                />
              </label>
              <button
                type="submit"
                className="self-start rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-accent-dark cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

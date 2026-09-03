import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEnvelope, faDiagramProject } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home', icon: faHouse },
    { path: '/skill', label: 'Skills', icon: faUser },
    { path: '/project', label: 'Projects', icon: faDiagramProject },
    { path: '/contact', label: 'Contact', icon: faEnvelope },
  ]

  return (
    <header className="sticky top-0 z-10 bg-bg">
      <nav className="flex items-center justify-between px-6 py-4 sm:px-8 md:px-[8%]">
        <span
          className="cursor-pointer font-display text-xl font-bold text-accent"
          onClick={() => navigate('/')}
        >
          MP.
        </span>
        <ul className="flex flex-wrap items-center justify-end gap-1 list-none text-sm font-medium sm:text-base">
          {links.map((link) => (
            <li
              key={link.path}
              onClick={() => navigate(link.path)}
              className={`cursor-pointer rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-accent hover:text-white ${
                location.pathname === link.path ? 'bg-accent text-white' : ''
              }`}
            >
              <FontAwesomeIcon icon={link.icon} /> {link.label}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

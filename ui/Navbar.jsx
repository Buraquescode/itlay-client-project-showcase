import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, GraduationCap } from 'lucide-react'

const links = [
  { to: '/',               label: 'Home' },
  { to: '/study-italy',    label: 'Study in Italy' },
  { to: '/universities',   label: 'Scholarships' },
  { to: '/success-stories',label: 'Success Stories' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-linear-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg leading-none block">Itlay Admissions</span>
              <span className="text-xs text-emerald-600 font-medium">Simplified by Bahaudin Shah</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="https://wa.me/+923453836699"
              target="_blank"
              rel="noreferrer"
              className="ml-3 px-4 py-2 bg-linear-to-r from-blue-600 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 space-y-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
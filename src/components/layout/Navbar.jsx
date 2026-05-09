import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES = [
  { label: 'Carpet Fitting',    to: '/services/carpet-fitting' },
  { label: 'Carpet Tiles',      to: '/services/carpet-tiles' },
  { label: 'LVT Flooring',      to: '/services/lvt-flooring' },
  { label: 'Laminate Flooring', to: '/services/laminate-flooring' },
  { label: 'Vinyl Flooring',    to: '/services/vinyl-flooring' },
  { label: 'Stair Runners',     to: '/services/stair-runners' },
]

const AREAS = [
  { label: 'Ealing',   to: '/areas/ealing' },
  { label: 'Hounslow', to: '/areas/hounslow' },
  { label: 'Slough',   to: '/areas/slough' },
  { label: 'Uxbridge', to: '/areas/uxbridge' },
  { label: 'Wembley',  to: '/areas/wembley' },
]

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services', dropdown: SERVICES },
  { label: 'Gallery',  to: '/gallery' },
  { label: 'Reviews',  to: '/reviews' },
  { label: 'Areas',    to: '/areas',    dropdown: AREAS },
  { label: 'Contact',  to: '/contact' },
]

const dropdownVariants = {
  hidden:  { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15 } },
}

const hamburgerTop    = { closed: { y: 0, rotate: 0 }, open: { y: 7,  rotate: 45  } }
const hamburgerMiddle = { closed: { opacity: 1 },       open: { opacity: 0 } }
const hamburgerBottom = { closed: { y: 0, rotate: 0 }, open: { y: -7, rotate: -45 } }

function DropdownMenu({ items }) {
  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden" animate="visible" exit="exit"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white
                 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[var(--color-border)]
                 overflow-hidden z-50"
    >
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `block px-5 py-3 text-[13px] font-medium transition-all duration-150 ${
              isActive
                ? 'text-[var(--color-gold)] bg-[var(--color-warm-white)]'
                : 'text-[var(--color-text-dark)] hover:text-[var(--color-gold)] hover:bg-[var(--color-warm-white)]'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </motion.div>
  )
}

function NavItem({ link }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  if (link.dropdown) {
    return (
      <div
        ref={ref}
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="true"
          className="flex items-center gap-1 text-[13px] font-medium text-[var(--color-text-dark)]
                     hover:text-[var(--color-gold)] transition-colors duration-150 focus:outline-none"
        >
          {link.label}
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence>
          {open && <DropdownMenu items={link.dropdown} />}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <NavLink
      to={link.to}
      end={link.to === '/'}
      className={({ isActive }) =>
        `text-[13px] font-medium transition-colors duration-150 ${
          isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-text-dark)] hover:text-[var(--color-gold)]'
        }`
      }
    >
      {link.label}
    </NavLink>
  )
}

function MobileAccordion({ link, onClose }) {
  const [open, setOpen] = useState(false)

  if (link.dropdown) {
    return (
      <div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between py-3.5 text-[15px] font-medium
                     text-[var(--color-text-dark)] border-b border-[var(--color-border)]"
        >
          {link.label}
          <svg
            className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden"
            >
              <div className="pl-4 py-2 flex flex-col gap-0.5">
                {link.dropdown.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `py-2.5 text-[13px] font-medium transition-colors ${
                        isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-gold)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <NavLink
      to={link.to}
      onClick={onClose}
      end={link.to === '/'}
      className={({ isActive }) =>
        `block py-3.5 text-[15px] font-medium border-b border-[var(--color-border)] transition-colors ${
          isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-text-dark)] hover:text-[var(--color-gold)]'
        }`
      }
    >
      {link.label}
    </NavLink>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const location = useLocation()

  useEffect(() => setMobileOpen(false), [location.pathname])
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-transparent'
          : 'border-b border-[var(--color-border)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-0.5" aria-label="Prestige Carpets – Home">
          <span className="text-[22px] font-bold tracking-tight text-[var(--color-navy)]">Prestige</span>
          <span className="text-[22px] font-bold tracking-tight text-[var(--color-gold)]">Carpets</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} link={link} />
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:02012345678"
            className="flex items-center gap-2 text-[13px] font-medium text-[var(--color-text-dark)]
                       hover:text-[var(--color-gold)] transition-colors"
            aria-label="Call us on 020 1234 5678"
          >
            <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            020 1234 5678
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg bg-[var(--color-gold)] text-white text-[13px] font-semibold
                       hover:bg-[var(--color-gold-hover)] transition-colors duration-200
                       shadow-[0_2px_8px_rgba(201,162,39,0.35)]"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <motion.div
            initial={false}
            animate={mobileOpen ? 'open' : 'closed'}
            className="w-6 h-5 flex flex-col justify-between"
          >
            <motion.span variants={hamburgerTop}    className="block h-0.5 w-full bg-[var(--color-navy)] rounded origin-center" />
            <motion.span variants={hamburgerMiddle} className="block h-0.5 w-full bg-[var(--color-navy)] rounded" />
            <motion.span variants={hamburgerBottom} className="block h-0.5 w-full bg-[var(--color-navy)] rounded origin-center" />
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-[var(--color-border)]"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
              {NAV_LINKS.map((link) => (
                <MobileAccordion key={link.to} link={link} onClose={() => setMobileOpen(false)} />
              ))}
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:02012345678"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-[var(--color-gold)]
                             text-[var(--color-text-dark)] text-sm font-medium hover:bg-[var(--color-warm-white)] transition-colors"
                >
                  <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  020 1234 5678
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-3.5 rounded-xl bg-[var(--color-gold)] text-white text-sm font-semibold
                             hover:bg-[var(--color-gold-hover)] transition-colors"
                >
                  Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

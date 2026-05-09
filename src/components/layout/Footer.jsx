import { Link } from 'react-router-dom'

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

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-slate-400">

      {/* Gold top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-0.5">
            <span className="text-xl font-bold text-white">Prestige</span>
            <span className="text-xl font-bold text-[var(--color-gold)]">Carpets</span>
          </Link>
          <p className="text-[13px] leading-relaxed text-slate-400">
            Professional carpet fitting and flooring solutions across London and the West. Quality you can feel underfoot.
          </p>
          <a
            href="tel:02012345678"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-gold)]
                       hover:text-white transition-colors w-fit"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            020 1234 5678
          </a>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Services</h3>
          <ul className="flex flex-col gap-2.5">
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="text-[13px] text-slate-400 hover:text-[var(--color-gold)] transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Areas We Cover</h3>
          <ul className="flex flex-col gap-2.5">
            {AREAS.map((a) => (
              <li key={a.to}>
                <Link to={a.to} className="text-[13px] text-slate-400 hover:text-[var(--color-gold)] transition-colors">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.15em]">Company</h3>
          <ul className="flex flex-col gap-2.5">
            {[
              { label: 'Home',    to: '/' },
              { label: 'About',   to: '/about' },
              { label: 'Gallery', to: '/gallery' },
              { label: 'Reviews', to: '/reviews' },
              { label: 'Contact', to: '/contact' },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-[13px] text-slate-400 hover:text-[var(--color-gold)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Prestige Carpets. All rights reserved.</p>
          <p className="text-xs text-slate-500">Professional carpet fitting across London &amp; the West</p>
        </div>
      </div>
    </footer>
  )
}

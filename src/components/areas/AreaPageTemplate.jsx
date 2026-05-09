import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServiceCTA from '../services/ServiceCTA'
import ServiceFAQ from '../services/ServiceFAQ'

const SERVICES = [
  { label: 'Carpet Fitting',    to: '/services/carpet-fitting' },
  { label: 'LVT Flooring',      to: '/services/lvt-flooring' },
  { label: 'Laminate Flooring', to: '/services/laminate-flooring' },
  { label: 'Vinyl Flooring',    to: '/services/vinyl-flooring' },
  { label: 'Carpet Tiles',      to: '/services/carpet-tiles' },
  { label: 'Stair Runners',     to: '/services/stair-runners' },
]

const WHY_US = [
  { title: '5+ Years Experience',    desc: 'Over five years fitting carpets and flooring across West London.' },
  { title: 'Fully Insured',          desc: 'Full public liability insurance on every job.' },
  { title: 'Same Week Fitting',      desc: 'Same-week and next-day slots available.' },
  { title: 'Free Measuring Service', desc: 'Free home visit, accurate measurements, clear quote.' },
  { title: 'Supply & Fit or Fit Only', desc: 'We can supply everything or fit flooring you have already bought.' },
  { title: 'No Hidden Costs',        desc: 'Clear, itemised quotes with no surprises on the day.' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

/**
 * AreaPageTemplate
 * @param {string}   areaName     — e.g. "Ealing"
 * @param {string}   intro        — hero paragraph
 * @param {string[]} paragraphs   — body paragraphs for intro section
 * @param {string[]} subAreas     — nearby areas list
 * @param {object[]} faqs         — [{q, a}]
 */
export default function AreaPageTemplate({ areaName, intro, paragraphs, subAreas = [], faqs }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-navy)] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-10"
          >
            <Link to="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
            <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-[var(--color-gold)]">Areas</span>
            <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-[var(--color-gold)]">{areaName}</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-7 h-px bg-[var(--color-gold)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Local Flooring Experts</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Carpet Fitting &amp; Flooring in {areaName}
              </h1>
              <p className="mt-6 text-[15px] text-slate-300 leading-relaxed max-w-2xl">{intro}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[var(--color-gold)] text-white font-semibold text-sm hover:bg-[var(--color-gold-hover)] transition-all duration-200 shadow-[0_4px_20px_rgba(201,162,39,0.4)]">
                  Get Free Quote
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <a href="tel:02012345678" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:border-white/45 hover:bg-white/5 transition-all duration-200">
                  <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full"><path d="M0 40L1440 40L1440 12C1200 40 960 0 720 12C480 24 240 0 0 12L0 40Z" fill="#FAFAF9" /></svg>
        </div>
      </section>

      {/* Intro + Services */}
      <section className="py-20 bg-[var(--color-warm-white)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — content */}
            <motion.div {...fadeUp(0)}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-[var(--color-gold)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">About Our {areaName} Service</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">
                Professional Flooring in {areaName}
              </h2>
              <div className="space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">{p}</p>
                ))}
              </div>

              {subAreas.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-semibold text-[var(--color-text-dark)] uppercase tracking-wider mb-3">Areas covered include:</p>
                  <div className="flex flex-wrap gap-2">
                    {subAreas.map((a) => (
                      <span key={a} className="px-3 py-1.5 bg-white border border-[var(--color-border)] rounded-full text-xs font-medium text-[var(--color-text-dark)]">{a}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right — services list */}
            <motion.div {...fadeUp(0.1)}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-[var(--color-gold)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">Services Available in {areaName}</span>
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">What We Offer</h2>
              <div className="flex flex-col gap-3">
                {SERVICES.map((s, i) => (
                  <motion.div key={s.label} {...fadeUp(i * 0.06)}>
                    <Link
                      to={s.to}
                      className="group flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-[var(--color-border)] hover:border-[var(--color-gold)]/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-all duration-250"
                    >
                      <span className="text-sm font-semibold text-[var(--color-text-dark)] group-hover:text-[var(--color-gold)] transition-colors">{s.label}</span>
                      <svg className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-gold)] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[var(--color-gold)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">Why Choose Us in {areaName}</span>
              <span className="w-6 h-px bg-[var(--color-gold)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)]">Your Local Flooring Specialists</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((r, i) => (
              <motion.div
                key={r.title}
                {...fadeUp(i * 0.07)}
                className="bg-[var(--color-warm-white)] rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-text-dark)] mb-1.5">{r.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} />

      {/* CTA */}
      <ServiceCTA
        heading={`Ready to Get Started in ${areaName}?`}
        subtext={`Professional carpet fitting and flooring installation in ${areaName} and surrounding areas. Free measuring visit, honest advice and a clear quote — no obligation.`}
      />
    </>
  )
}

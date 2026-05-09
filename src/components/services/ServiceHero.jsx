import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function ServiceHero({ title, tagline, intro, serviceLabel }) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-[var(--color-navy)]">

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--color-gold)]/4 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">

        {/* Breadcrumb */}
        <motion.nav {...fadeUp(0.05)} aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-10">
          <Link to="/" className="hover:text-[var(--color-gold)] transition-colors">Home</Link>
          <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          <Link to="/services" className="hover:text-[var(--color-gold)] transition-colors">Services</Link>
          <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          <span className="text-[var(--color-gold)]">{serviceLabel}</span>
        </motion.nav>

        <div className="max-w-3xl">
          <motion.div {...fadeUp(0.12)} className="flex items-center gap-2 mb-5">
            <span className="w-7 h-px bg-[var(--color-gold)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">{tagline}</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="mt-6 text-[15px] md:text-base text-slate-300 leading-relaxed max-w-2xl">
            {intro}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl
                         bg-[var(--color-gold)] text-white font-semibold text-sm
                         hover:bg-[var(--color-gold-hover)] transition-all duration-200
                         shadow-[0_4px_20px_rgba(201,162,39,0.4)]"
            >
              Get Free Quote
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:02012345678"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:border-white/45 hover:bg-white/5 transition-all duration-200"
            >
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {['5+ Years Experience', 'Fully Insured', 'Same Week Fitting', 'Free Measuring'].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-[var(--color-gold)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-slate-400 font-medium">{b}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave into warm-white */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 56L1440 56L1440 18C1200 56 960 0 720 18C480 36 240 0 0 18L0 56Z" fill="#FAFAF9" />
        </svg>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const trustBadges = [
  '5+ Years Experience',
  'Fully Insured',
  'Same Week Fitting',
  'Free Measuring Service',
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[var(--color-navy)]">

      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)',
        }}
      />

      {/* Soft glow */}
      <div className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full bg-[var(--color-gold)]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--color-gold)]/4 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-[var(--color-gold)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                London's Trusted Carpet Fitters
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-[1.08] tracking-tight"
            >
              Expert Carpet &amp;{' '}
              <span className="text-[var(--color-gold)]">Flooring</span>{' '}
              Fitting
            </motion.h1>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-6 text-[15px] md:text-base text-slate-300 leading-relaxed max-w-[520px]"
            >
              Professional carpet fitting, vinyl flooring installation, laminate flooring,
              LVT flooring specialists and stair runner installation across London,
              Hounslow, Ealing, Slough, Uxbridge and surrounding areas.
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="mt-9 flex flex-wrap gap-4">
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
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                           border border-white/25 text-white font-semibold text-sm
                           hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                View Services
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div {...fadeUp(0.52)} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map((b) => (
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

          {/* Right — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-5 -right-5 w-full h-full rounded-3xl border border-[var(--color-gold)]/20 pointer-events-none" />
              <div
                className="relative rounded-3xl overflow-hidden h-[500px] flex flex-col items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,162,39,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(201,162,39,0.12)',
                }}
              >
                {/* ↓ Replace with: <img src="hero.jpg" alt="Professional carpet fitting London" className="w-full h-full object-cover" /> */}
                <svg className="w-14 h-14 text-white/8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-white/15 text-[10px] tracking-[0.2em] uppercase">Hero Image</p>

                {/* Floating info pill */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/8 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Fully Insured &amp; Guaranteed</p>
                      <p className="text-slate-400 text-xs mt-0.5">Every job backed by our workmanship guarantee</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider into warm-white */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 56L1440 56L1440 18C1200 56 960 0 720 18C480 36 240 0 0 18L0 56Z" fill="#FAFAF9" />
        </svg>
      </div>
    </section>
  )
}

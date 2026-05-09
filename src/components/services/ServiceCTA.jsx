import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ServiceCTA({
  heading = 'Ready to Upgrade Your Flooring?',
  subtext = 'Get professional flooring installation services across London and surrounding areas. Free measuring visit, clear quote within 24 hours.',
}) {
  return (
    <section className="py-20 bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-[var(--color-navy)]"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }}
          />
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--color-gold)]/7 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[var(--color-gold)]/5 blur-[80px] pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center px-10 py-16 md:px-16 md:py-20">

            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-px bg-[var(--color-gold)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Get Started Today</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{heading}</h2>
              <p className="mt-4 text-[15px] text-slate-300 leading-relaxed max-w-lg">{subtext}</p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                {['Free Quote', 'Same Week Fitting', 'Fully Insured', '5+ Years Experience'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-xs text-slate-400">
                    <svg className="w-3.5 h-3.5 text-[var(--color-gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contact"
                className="group w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl
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
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-xl
                           border border-white/20 text-white font-semibold text-sm
                           hover:bg-white/6 hover:border-white/40 transition-all duration-200"
              >
                <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: 020 1234 5678
              </a>
              <p className="text-xs text-slate-500 text-center lg:text-right">Mon–Sat 8am–6pm · Free measuring included</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

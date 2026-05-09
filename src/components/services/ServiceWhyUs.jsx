import { motion } from 'framer-motion'

const reasons = [
  { title: '5+ Years Experience',      desc: 'We have been fitting carpets and flooring across West London for over five years, building a reputation for quality work and honest service.',                                                                                  icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: 'Fully Insured Service',    desc: 'Every job is covered by full public liability insurance. You can book with confidence knowing your home and belongings are protected throughout.',                                                                              icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { title: 'Same Week Fitting',        desc: 'We offer same-week and next-day fitting slots across all our service areas. No long waits — we work around your schedule.',                                                                                                   icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
  { title: 'Free Measuring Service',   desc: 'We visit your home, measure every room accurately and provide a clear, itemised quote — all completely free with no obligation to book.',                                                                                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
  { title: 'Reliable Workmanship',     desc: 'Every installation is carried out to a high standard. We take care of your home, work cleanly and do not leave until the job is done properly.',                                                                               icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg> },
  { title: 'Customer-Focused',         desc: 'We listen to what you want, give honest advice and keep you informed throughout. No hard sell, no hidden costs — just straightforward, friendly service.',                                                                     icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
]

export default function ServiceWhyUs() {
  return (
    <section className="py-20 bg-[var(--color-navy)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-[var(--color-gold)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">Why Choose Us</span>
            <span className="w-6 h-px bg-[var(--color-gold)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">What Sets Us Apart</h2>
          <p className="mt-4 text-[var(--color-text-muted)] text-[15px] max-w-xl mx-auto leading-relaxed">
            We are a small, dedicated team — and that means every customer gets our full attention from first contact to finished floor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex gap-4 p-5 rounded-2xl border border-white/8 bg-white/3
                         hover:border-[var(--color-gold)]/35 hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-gold)]/12 border border-[var(--color-gold)]/20
                              flex items-center justify-center text-[var(--color-gold)]
                              group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:border-[var(--color-gold)]
                              transition-all duration-300">
                {r.icon}
              </div>
              <div>
                <h3 className="text-[13px] font-semibold text-white mb-1.5">{r.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

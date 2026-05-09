import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServiceCTA from '../components/services/ServiceCTA'

const services = [
  {
    title: 'Carpet Fitting',
    tag: 'Most Popular',
    to: '/services/carpet-fitting',
    desc: 'Expert carpet fitting for bedrooms, living rooms, hallways and stairs. All carpet types, supply & fit or fit-only.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
  },
  {
    title: 'LVT Flooring',
    tag: 'Premium',
    to: '/services/lvt-flooring',
    desc: 'Luxury vinyl tile that looks like real wood or stone. 100% waterproof, scratch-resistant and perfect for kitchens and bathrooms.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>,
  },
  {
    title: 'Laminate Flooring',
    tag: null,
    to: '/services/laminate-flooring',
    desc: 'Durable laminate in a wide range of wood and stone effects. Quick installation with minimal disruption to your home.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>,
  },
  {
    title: 'Vinyl Flooring',
    tag: null,
    to: '/services/vinyl-flooring',
    desc: 'Sheet vinyl and luxury vinyl planks for a seamless, easy-clean finish. Available in hundreds of designs.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
  },
  {
    title: 'Carpet Tiles',
    tag: null,
    to: '/services/carpet-tiles',
    desc: 'Versatile carpet tiles for offices, playrooms and commercial spaces. Easy to replace individual tiles.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>,
  },
  {
    title: 'Stair Runners',
    tag: null,
    to: '/services/stair-runners',
    desc: 'Bespoke stair runners fitted to any staircase shape. Add warmth, style and safety to your stairs.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h4v-4h4v-4h4v-4h4V3" /></svg>,
  },
]

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-navy)] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[var(--color-gold)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">What We Offer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Professional Flooring Installation Services
            </h1>
            <p className="mt-6 text-[15px] text-slate-300 leading-relaxed max-w-2xl">
              From carpet fitting to luxury vinyl tile — we supply and install every type of flooring across London and West London. Free measuring, honest advice and a clear quote.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full"><path d="M0 40L1440 40L1440 12C1200 40 960 0 720 12C480 24 240 0 0 12L0 40Z" fill="#FAFAF9" /></svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-[var(--color-warm-white)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={s.to}
                  className="group relative flex flex-col h-full bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 hover:border-[var(--color-gold)]/30 transition-all duration-300"
                >
                  {/* Image area */}
                  <div className="relative h-48 bg-[var(--color-warm-white)] flex items-center justify-center">
                    <svg className="w-10 h-10 text-[var(--color-border-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {s.tag && <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-[var(--color-gold)] text-white px-2.5 py-1 rounded-full">{s.tag}</span>}
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-warm-white)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:border-[var(--color-gold)] transition-all duration-300 flex-shrink-0">{s.icon}</div>
                      <h2 className="text-[15px] font-semibold text-[var(--color-text-dark)]">{s.title}</h2>
                    </div>
                    <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-gold)] group-hover:gap-2.5 transition-all duration-200">
                      Learn more
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA heading="Not Sure Which Flooring Is Right for You?" subtext="We are happy to advise. Book a free measuring visit and we will help you choose the best option for your home and budget." />
    </>
  )
}

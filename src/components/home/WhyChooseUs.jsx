import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTittle'

const reasons = [
  {
    title: 'Expert Craftsmanship',
    desc: 'Every installation is carried out by skilled fitters who take pride in precision — from the first cut to the final trim.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  },
  {
    title: 'Fully Insured Team',
    desc: 'All our fitters carry full public liability insurance. Your home and belongings are protected throughout every job.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  {
    title: 'Fast Turnaround',
    desc: 'Same-week and next-day fitting slots available. We work efficiently so you can enjoy your new floors without a long wait.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: 'Affordable Luxury',
    desc: 'Premium flooring installation at competitive prices. We believe luxury flooring solutions should be accessible to everyone.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
  {
    title: 'Precision Installation',
    desc: 'We measure twice, cut once. Our precision process ensures a perfect fit with no gaps, bumps or uneven edges.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>,
  },
  {
    title: 'Customer Satisfaction',
    desc: 'We are not done until you are completely satisfied. Every job is backed by our workmanship guarantee.',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[var(--color-navy)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border border-[var(--color-gold)]/15 pointer-events-none" />
              <div
                className="relative rounded-3xl overflow-hidden h-[480px] flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.08) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(201,162,39,0.1)' }}
              >
                {/* ↓ Replace with: <img src="..." alt="Professional carpet fitters at work" className="w-full h-full object-cover" /> */}
                <svg className="w-14 h-14 text-white/8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-white/12 text-[10px] tracking-[0.2em] uppercase">Image</p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-5 -right-5 bg-[var(--color-gold)] rounded-2xl px-5 py-4 shadow-2xl"
              >
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-xs text-white/80 mt-0.5">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              label="Why Choose Us"
              title="The Prestige Carpets Difference"
              subtitle="We are not just fitters — we are flooring specialists who care about getting every job right, from the first measure to the final trim."
              light
            />

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="group flex gap-3.5 p-4 rounded-xl border border-white/8 bg-white/3
                             hover:border-[var(--color-gold)]/35 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-gold)]/12 border border-[var(--color-gold)]/20
                                  flex items-center justify-center text-[var(--color-gold)]
                                  group-hover:bg-[var(--color-gold)] group-hover:text-white group-hover:border-[var(--color-gold)]
                                  transition-all duration-300">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-white mb-1">{r.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

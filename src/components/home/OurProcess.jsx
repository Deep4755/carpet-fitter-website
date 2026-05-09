import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTittle'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    desc: 'Contact us and we will arrange a convenient time to visit your home. We discuss your requirements, preferences and budget — completely free, no obligation.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  },
  {
    number: '02',
    title: 'Measuring & Planning',
    desc: 'Our free measuring service ensures every cut is precise. We calculate exact quantities, plan the layout and provide a clear, itemised quote within 24 hours.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M9 7h6m-3 4v4m-2-2h4" /></svg>,
  },
  {
    number: '03',
    title: 'Professional Installation',
    desc: 'Our experienced fitters arrive on time, protect your home and carry out the installation with precision. We move furniture and leave no mess behind.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    number: '04',
    title: 'Final Quality Check',
    desc: 'Before we leave, we carry out a thorough quality inspection with you. Every edge, join and trim is checked. We are not done until you are completely satisfied.',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  },
]

export default function OurProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          label="How It Works"
          title="Our Simple 4-Step Process"
          subtitle="From first contact to finished floor — we make the whole process easy, transparent and stress-free."
          center
        />

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-11 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, #C9A227 15%, #C9A227 85%, transparent 100%)',
                opacity: 0.35,
              }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 w-[88px] h-[88px] rounded-full bg-white border-2 border-[var(--color-border)]
                                flex flex-col items-center justify-center mb-6
                                shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                                group-hover:border-[var(--color-gold)] group-hover:shadow-[0_4px_20px_rgba(201,162,39,0.2)]
                                transition-all duration-300">
                  <div className="text-[var(--color-gold)] mb-0.5 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="text-[9px] font-bold text-[var(--color-gold)]/50 tracking-widest">{step.number}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-[var(--color-text-dark)] mb-3">{step.title}</h3>
                <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

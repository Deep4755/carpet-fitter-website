import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../common/SectionTittle'
import { Link } from 'react-router-dom'

const faqs = [
  { q: 'How much does carpet fitting cost?',   a: 'Carpet fitting costs vary depending on the room size, carpet type and any preparation work needed. We provide free, no-obligation quotes after visiting your home and measuring up — so you get an exact price with no surprises.' },
  { q: 'Do you supply flooring materials?',    a: 'Yes — we offer a full supply and fit service across all our flooring types, including carpet, LVT, laminate, vinyl and carpet tiles. We can also offer a fit-only service if you have already purchased your flooring.' },
  { q: 'How long does installation take?',     a: 'Most single-room carpet fittings take 2–4 hours. A full house can typically be completed in one day. LVT and laminate flooring installation may take slightly longer depending on the area. We will give you a clear timeframe when we quote.' },
  { q: 'Do you move furniture?',               a: 'Yes — we move standard furniture as part of our service and put everything back once the fitting is complete. We ask that you remove fragile items, valuables and very heavy pieces beforehand.' },
  { q: 'Which areas do you cover?',            a: 'We cover Hounslow, Ealing, Uxbridge, Slough, Wembley and all surrounding West London areas. If you are unsure whether we cover your postcode, just give us a call and we will confirm.' },
  { q: 'Do you offer free quotes?',            a: 'Yes — all quotes are completely free and no-obligation. We visit your home, carry out our free measuring service and provide a clear itemised quote, usually within 24 hours of the visit.' },
]

function FAQItem({ q, a, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`border-b border-[var(--color-border)] last:border-0 transition-colors duration-200 ${isOpen ? 'bg-[var(--color-warm-white)]' : ''} rounded-xl`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-5 px-5 text-left gap-4 group"
      >
        <span className={`text-[14px] font-semibold transition-colors duration-200 ${isOpen ? 'text-[var(--color-gold)]' : 'text-[var(--color-text-dark)] group-hover:text-[var(--color-gold)]'}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200
          ${isOpen
            ? 'bg-[var(--color-gold)] text-white rotate-180'
            : 'bg-[var(--color-warm-white)] text-[var(--color-text-muted)] group-hover:bg-[var(--color-gold)]/10 group-hover:text-[var(--color-gold)]'
          }`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[13px] text-[var(--color-text-muted)] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-[var(--color-navy)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left */}
          <div className="lg:col-span-2">
            <SectionTitle
              label="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know before booking your flooring installation."
              light
            />

            <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/4">
              <p className="text-sm font-semibold text-white mb-1.5">Still have a question?</p>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">Our team is happy to help — call us or send a message and we will get back to you quickly.</p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:02012345678"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-gold)] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  020 1234 5678
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send a message
                </Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-3 bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

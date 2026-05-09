import { useState } from 'react'
import { motion } from 'framer-motion'

const services = ['Carpet Fitting', 'LVT Flooring', 'Laminate Flooring', 'Vinyl Flooring', 'Carpet Tiles', 'Stair Runners', 'Not sure yet']
const areas    = ['Hounslow', 'Ealing', 'Uxbridge', 'Slough', 'Wembley', 'Other West London']

const contactInfo = [
  {
    label: 'Phone',
    value: '020 1234 5678',
    sub: 'Mon–Sat, 8am–6pm',
    href: 'tel:02012345678',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  },
  {
    label: 'Email',
    value: 'info@prestigecarpets.co.uk',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@prestigecarpets.co.uk',
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
  {
    label: 'Service Area',
    value: 'West London & Surrounding',
    sub: 'Hounslow, Ealing, Slough, Uxbridge, Wembley',
    href: null,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', area: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire up to your backend / email service here
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-navy)] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 16px)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/5 blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-px bg-[var(--color-gold)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Book Your Free Measuring Visit
            </h1>
            <p className="mt-6 text-[15px] text-slate-300 leading-relaxed max-w-2xl">
              Fill in the form and we will get back to you within 24 hours to arrange a convenient time. No obligation, no pressure — just honest advice and a clear quote.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" className="w-full"><path d="M0 40L1440 40L1440 12C1200 40 960 0 720 12C480 24 240 0 0 12L0 40Z" fill="#FAFAF9" /></svg>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-[var(--color-warm-white)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-px bg-[var(--color-gold)]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">Contact Details</span>
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">We'd Love to Hear From You</h2>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Call us directly, send an email or fill in the form. We aim to respond to all enquiries within 24 hours.
                </p>
              </div>

              {contactInfo.map((c) => (
                <div key={c.label} className="flex gap-4 p-5 bg-white rounded-2xl border border-[var(--color-border)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-semibold text-[var(--color-text-dark)] hover:text-[var(--color-gold)] transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-sm font-semibold text-[var(--color-text-dark)]">{c.value}</p>
                    )}
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}

              {/* Trust badges */}
              <div className="mt-2 p-5 bg-[var(--color-navy)] rounded-2xl">
                <p className="text-xs font-semibold text-white mb-3">Our Promise</p>
                {['Free measuring visit', 'No-obligation quote', 'Clear itemised pricing', 'Fully insured fitters'].map((t) => (
                  <div key={t} className="flex items-center gap-2 mb-2 last:mb-0">
                    <svg className="w-3.5 h-3.5 text-[var(--color-gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="text-xs text-slate-300">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="bg-white rounded-2xl border border-[var(--color-border)] p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center text-[var(--color-gold)] mx-auto mb-5">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">Message Received</h2>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md mx-auto">
                    Thank you for getting in touch. We will review your enquiry and get back to you within 24 hours to arrange your free measuring visit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[var(--color-border)] p-8 md:p-10">
                  <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-7">Request a Free Quote</h2>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-dark)] mb-2">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-dark)] mb-2">Phone Number *</label>
                      <input
                        type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-[var(--color-text-dark)] mb-2">Email Address</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-dark)] mb-2">Service Required</label>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text-dark)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-dark)] mb-2">Your Area</label>
                      <select
                        name="area" value={form.area} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text-dark)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-colors bg-white"
                      >
                        <option value="">Select your area</option>
                        {areas.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mb-7">
                    <label className="block text-xs font-semibold text-[var(--color-text-dark)] mb-2">Additional Details</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about the rooms, approximate size, any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] text-sm text-[var(--color-text-dark)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[var(--color-gold)] text-white font-semibold text-sm hover:bg-[var(--color-gold-hover)] transition-colors shadow-[0_4px_16px_rgba(201,162,39,0.35)] flex items-center justify-center gap-2"
                  >
                    Send Enquiry
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                  <p className="text-xs text-[var(--color-text-muted)] text-center mt-4">We will get back to you within 24 hours. No spam, ever.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

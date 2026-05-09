/**
 * SectionTitle — shared heading block used across all sections
 */
export default function SectionTitle({ label, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <div className={`flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="w-6 h-px bg-[var(--color-gold)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)]">
            {label}
          </span>
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-[var(--color-text-dark)]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[15px] md:text-base leading-relaxed max-w-2xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-slate-300' : 'text-[var(--color-text-muted)]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

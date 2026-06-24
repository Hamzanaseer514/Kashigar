interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-cobalt-900 pt-36 pb-24 overflow-hidden">
      {/* Geometric tile overlay */}
      <div className="absolute inset-0 tile-pattern opacity-20" />
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0E1F3A 100%)" }}
      />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p
            className="text-gold/70 text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className="text-cream text-5xl sm:text-6xl lg:text-7xl italic font-light leading-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {title}
        </h1>

        {/* Gold ornament divider */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="h-px w-16 bg-gold/30" />
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-gold" fill="currentColor">
            <path d="M8 0L16 8L8 16L0 8Z" />
            <path d="M8 4L12 8L8 12L4 8Z" fill="#0E1F3A" />
          </svg>
          <div className="h-px w-16 bg-gold/30" />
        </div>

        {description && (
          <p
            className="mt-8 max-w-2xl mx-auto text-cream/60 text-base leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p
          className="text-gold text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-4xl sm:text-5xl italic font-light leading-tight ${
          light ? "text-cream" : "text-cobalt"
        }`}
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {title}
      </h2>

      {/* Ornamental rule */}
      <div className={`flex items-center gap-3 mt-5 ${center ? "justify-center" : ""}`}>
        <div className="h-px w-10 bg-gold" />
        <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
        <div className="h-px w-10 bg-gold" />
      </div>

      {description && (
        <p
          className={`mt-5 text-sm leading-relaxed max-w-xl ${
            light ? "text-cream/65" : "text-charcoal-600"
          } ${center ? "mx-auto" : ""}`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

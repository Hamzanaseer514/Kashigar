import Link from "next/link";

const explore = [
  { label: "Home", href: "/" },
  { label: "About the Artist", href: "/about" },
  { label: "CV", href: "/cv" },
  { label: "The Naqashi Heritage", href: "/heritage" },
  { label: "Gallery & Portfolio", href: "/gallery" },
  { label: "Workshops & Teaching", href: "/workshops" },
  { label: "Awards & Achievements", href: "/awards" },
  { label: "Press & Media", href: "/press" },
  { label: "Shop / Commissions", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-cobalt-900 text-cream">

      {/* ── Main grid ── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <svg viewBox="0 0 28 28" className="w-7 h-7 flex-shrink-0" fill="none">
                <path d="M14 2L26 14L14 26L2 14Z" fill="#C8A96E" />
                <path d="M14 7L21 14L14 21L7 14Z" fill="#FAF7F2" opacity="0.2" />
                <path d="M14 11L17 14L14 17L11 14Z" fill="#C8A96E" />
              </svg>
              <span
                className="text-gold text-xl font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Kashigar
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Preserving seven generations of Kashikari mastery — the ancient art of hand-painted blue ceramic tiles from Multan, Pakistan.
            </p>
            <div className="mt-6 pt-6 border-t border-cream/10 text-cream/40 text-xs leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              <p>Jan Muhammad Colony</p>
              <p>Masoom Shah Road, Multan</p>
              <p className="mt-1">Punjab, Pakistan</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-gold text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore
            </h4>
            <ul className="space-y-2.5">
              {explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/55 hover:text-gold text-sm transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Heritage + Social */}
          <div>
            <h4
              className="text-gold text-xs tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Heritage
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-gold/40 pl-4">
                <p className="text-cream/80 text-sm italic" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Aga Khan Award for Architecture
                </p>
                <p className="text-cream/40 text-xs mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>1984 · Ustad Allah Diwaya</p>
              </div>
              <div className="border-l-2 border-gold/40 pl-4">
                <p className="text-cream/80 text-sm italic" style={{ fontFamily: "var(--font-cormorant)" }}>
                  Shah Rukn-e-Alam Restoration
                </p>
                <p className="text-cream/40 text-xs mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>Multan · 1985</p>
              </div>
              <div className="border-l-2 border-gold/40 pl-4">
                <p className="text-cream/80 text-sm italic" style={{ fontFamily: "var(--font-cormorant)" }}>
                  300+ Years of Craft
                </p>
                <p className="text-cream/40 text-xs mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>7 Generations · Thaheem Ansari</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/10">
              <p className="text-cream/40 text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-inter)" }}>Follow the Craft</p>
              <a
                href="https://www.instagram.com/ubaid_wajid_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/55 hover:text-gold transition-colors text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @ubaid_wajid_
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-cream/10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-cream/30 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
            © 2025 Ustad Muhammad Wajid Kashigar. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs tracking-wider" style={{ fontFamily: "var(--font-inter)" }}>
            Heritage Protected · Craft Preserved
          </p>
        </div>
      </div>
    </footer>
  );
}

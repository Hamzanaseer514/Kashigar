"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "CV", href: "/cv" }, // hidden by manager — can re-enable later
  { label: "Heritage", href: "/heritage" },
  { label: "Gallery", href: "/gallery" },
  { label: "Workshops", href: "/workshops" },
  { label: "Awards", href: "/awards" },
  { label: "Press", href: "/press" },
  { label: "Shop", href: "/shop" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm shadow-cobalt/5"
          : "bg-cream"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <svg viewBox="0 0 28 28" className="w-7 h-7 flex-shrink-0" fill="none">
              <path d="M14 2L26 14L14 26L2 14Z" fill="#1B3A6B" />
              <path d="M14 7L21 14L14 21L7 14Z" fill="#C8A96E" />
              <path d="M14 11L17 14L14 17L11 14Z" fill="#1B3A6B" />
            </svg>
            <div className="flex flex-col leading-none">
              <span
                className="font-heading text-cobalt text-xl font-semibold tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Kashigar
              </span>
              <span className="text-stone text-[9px] tracking-[0.25em] uppercase mt-0.5"
                style={{ fontFamily: "var(--font-inter)" }}>
                Multan · Est. 17th Century
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[11px] tracking-[0.18em] uppercase transition-colors ${
                  pathname === link.href
                    ? "text-gold font-semibold"
                    : "text-charcoal-600 hover:text-cobalt"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-3 px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase font-medium border transition-all ${
                pathname === "/contact"
                  ? "bg-cobalt text-cream border-cobalt"
                  : "border-cobalt text-cobalt hover:bg-cobalt hover:text-cream"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Contact
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-cobalt"
            aria-label="Toggle navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen border-t border-cobalt/10 pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-2 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 text-xs tracking-[0.2em] uppercase transition-colors ${
                  pathname === link.href
                    ? "text-gold bg-cream-100"
                    : "text-charcoal hover:text-cobalt hover:bg-cream-100"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Link
                href="/contact"
                className="block text-center py-3 bg-cobalt text-cream text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

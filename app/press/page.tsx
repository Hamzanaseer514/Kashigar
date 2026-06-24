import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "Press & Media" };

const articles = [
  {
    outlet: "Dawn Newspaper",
    section: "Multan Correspondent",
    date: "November 4, 2021",
    author: "Shakeel Ahmed",
    title: "Lone artisan sees Kashigari a dying art",
    excerpt: "Ustad Muhammad Wajid, the only one among his brothers still practising the ancient art of Kashigari, speaks about preserving a 300-year family legacy in the face of modernisation, commercial dilution, and institutional neglect.",
    tags: ["Heritage", "Craft", "Multan", "Kashikari"],
    featured: true,
    img: "/images/wajid-kashigar-1.jpg",
  },
  {
    outlet: "Dawn",
    section: "Non-Fiction",
    date: "2024",
    author: "Dawn Staff",
    title: "Legacies in Clay",
    excerpt: "From Ustad Hasan Bakhsh to Ubaid Wajid, a dynasty of Kashigars whose glazed tiles adorn the shrines, tombs, and mosques of Multan — and the question of whether that dynasty will survive.",
    tags: ["Heritage", "Family", "Architecture"],
    featured: true,
    img: "/images/wajid-workshop-display.jpg",
  },
  {
    outlet: "Instagram",
    section: "@shahzamanbaloch",
    date: "October 2025",
    author: "Shah Zaman Baloch",
    title: "Muhammad Wajid Kashigar — Traditional Craftsman",
    excerpt: "A documentary reel showcasing Wajid's pottery work — his slow, precise, historically rooted art form that preserves Multan's historic ceramic heritage despite modern manufacturing competition.",
    tags: ["Video", "Documentary", "Craft"],
    featured: false,
    img: "/images/wajid-workshop-reel.jpg",
  },
  {
    outlet: "Instagram",
    section: "@open_studios_pakistan",
    date: "October 2025",
    author: "Open Studios Pakistan",
    title: "In conversation with Ubaid Wajid Kashigar — 7th generation craftsman",
    excerpt: "A conversation with Ubaid Wajid Kashigar about the process, precision, and generational learning behind Kashigari — and how heritage influences craftsmanship.",
    tags: ["Video", "7th Generation", "Interview"],
    featured: false,
    img: "/images/kashikari-vase-and-column.jpg",
  },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press & Media"
        title="In the Public Record"
        description="Articles, documentaries, and media features on the Kashigar family and the art of Kashikari."
      />

      {/* FEATURED ARTICLES */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Featured Coverage" title="Major Press" />
          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {articles.filter((a) => a.featured).map((a, i) => (
              <article key={i} className="group border border-cobalt/10 hover:border-gold/40 transition-colors overflow-hidden">
                {/* Article image */}
                <div className="relative h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-cobalt-900/40" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-gold text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily:"var(--font-inter)" }}>{a.outlet}</p>
                    <p className="text-cream/70 text-xs mt-0.5" style={{ fontFamily:"var(--font-inter)" }}>{a.section} · {a.date}</p>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <h2 className="text-cobalt text-2xl sm:text-3xl italic leading-snug group-hover:text-cobalt-800 transition-colors" style={{ fontFamily:"var(--font-cormorant)" }}>{a.title}</h2>
                  {a.author && <p className="text-stone text-xs mt-2" style={{ fontFamily:"var(--font-inter)" }}>By {a.author}</p>}
                  <p className="text-charcoal-600 text-sm leading-relaxed mt-5" style={{ fontFamily:"var(--font-inter)" }}>{a.excerpt}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span key={t} className="bg-cobalt/5 text-cobalt text-[9px] tracking-[0.2em] uppercase px-3 py-1" style={{ fontFamily:"var(--font-inter)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA COVERAGE */}
      <section className="py-28 bg-cream-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Social & Digital" title="Video & Social Coverage" />
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {articles.filter((a) => !a.featured).map((a, i) => (
              <article key={i} className="group bg-cream border border-cobalt/10 hover:border-gold/40 transition-colors overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-cobalt-900/50" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-gold text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily:"var(--font-inter)" }}>{a.section}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone text-[10px] mb-3" style={{ fontFamily:"var(--font-inter)" }}>{a.date}</p>
                  <h3 className="text-cobalt text-xl italic leading-snug group-hover:text-cobalt-800" style={{ fontFamily:"var(--font-cormorant)" }}>{a.title}</h3>
                  <p className="text-charcoal-600 text-xs leading-relaxed mt-3" style={{ fontFamily:"var(--font-inter)" }}>{a.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span key={t} className="bg-cobalt/5 text-cobalt text-[9px] tracking-[0.2em] uppercase px-2.5 py-0.5" style={{ fontFamily:"var(--font-inter)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE PULL */}
      <section className="relative py-24 bg-cobalt-900 overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-cream text-2xl sm:text-3xl italic font-light leading-relaxed" style={{ fontFamily:"var(--font-cormorant)" }}>
            &ldquo;Now white clay is being used in the institution which has been converted into a business centre. Diplomas are being offered without hiring any original artist.&rdquo;
          </blockquote>
          <p className="mt-6 text-gold/70 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily:"var(--font-inter)" }}>
            Ustad Muhammad Wajid Kashigar — Dawn Newspaper, 2021
          </p>
        </div>
      </section>

      {/* PRESS KIT */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader eyebrow="For Journalists & Researchers" title="Press Kit" center description="High-resolution images, biographical information, and press releases available on request." />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3.5 bg-cobalt text-cream text-[11px] tracking-[0.2em] uppercase hover:bg-cobalt-800 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>Request Press Kit</a>
            <a href="/about" className="px-8 py-3.5 border border-cobalt text-cobalt text-[11px] tracking-[0.2em] uppercase hover:bg-cobalt hover:text-cream transition-all" style={{ fontFamily:"var(--font-inter)" }}>Artist Biography</a>
          </div>
        </div>
      </section>
    </>
  );
}

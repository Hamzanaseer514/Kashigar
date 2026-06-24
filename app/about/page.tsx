import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "About the Artist" };

function ImgPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#1B3A6B,#0E1F3A)" }} />
      <div className="absolute inset-0 tile-pattern opacity-30" />
    </div>
  );
}

function RealImg({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Artist"
        title="Ustad Muhammad Wajid Kashigar"
        description="Six generations of heritage, a lifetime of devotion, and the quiet determination of a man who refuses to let a 300-year art form disappear."
      />

      {/* ── BIO SPLIT */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div className="space-y-5 text-charcoal-600 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
              <SectionHeader eyebrow="Biography" title="A Life Devoted to Clay" />
              <div className="mt-8 space-y-5">
                <p>Born in 1964 in Multan&apos;s Jan Muhammad Colony, Ustad Muhammad Wajid grew up surrounded by the sounds and smells of the family workshop — the scrape of stylus on clay, the sharp mineral scent of oxide pigments, the roar of the kiln. Kashikari was not a career choice; it was a birthright.</p>
                <p>The sixth generation of the Thaheem (Ansari) family to practice this ancient art, Wajid learned at his father&apos;s knee. His father, Ustad Allah Diwaya, was already a legendary figure — a craftsman whose restoration work on the Hazrat Shah Rukn-e-Alam mausoleum in 1985 earned the family the Aga Khan Award for Architecture in 1984, one of the world&apos;s most prestigious recognitions in the built environment.</p>
                <p>Of the seven sons of Ustad Allah Diwaya, only Muhammad Wajid has remained. His brothers, drawn by steadier incomes elsewhere, eventually set aside their tools. Wajid stayed. &ldquo;Our family used to do all kinds of work,&rdquo; he says, &ldquo;including the construction of the building, Kashigari (tiles), Naqashi and Gulkari.&rdquo;</p>
                <p>Today he operates the last workshop in Multan that uses traditional red clay — the authentic material that his family, and the Soomro family before them, employed for generations to tile the shrines and mosques of this ancient city.</p>
                <p>His workshop on Masoom Shah Road doubles as his home. In the mornings, two sons attend school. In the evenings, they return to the workshop and learn the family art — keeping alive, for now, the hope of an eighth generation.</p>
              </div>
            </div>

            {/* Image + sidebar */}
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-[3/4] w-full relative overflow-hidden">
                  <RealImg src="/images/wajid-kashigar-1.jpg" alt="Ustad Muhammad Wajid Kashigar painting a ceramic dome in his Multan workshop" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-gold" />
                <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-gold" />
              </div>

              {/* Second image — at the kiln */}
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square relative overflow-hidden">
                  <RealImg src="/images/wajid-at-kiln.jpg" alt="Ustad Wajid working at the kiln in his workshop" />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <RealImg src="/images/kashikari-carved-tile-closeup.jpg" alt="Freshly carved Kashikari tile with floral motif" />
                </div>
              </div>

              {/* Quick facts card */}
              <div className="bg-cobalt-900 p-8">
                <p className="text-gold text-[10px] tracking-[0.35em] uppercase mb-6" style={{ fontFamily:"var(--font-inter)" }}>At a Glance</p>
                {[
                  ["Full Name", "Ustad Muhammad Wajid Kashigar"],
                  ["Born", "1964, Multan, Pakistan"],
                  ["Family Tribe", "Thaheem (Ansari)"],
                  ["Generation", "6th Generation Kashigar"],
                  ["Son", "Ubaid Wajid (7th Generation)"],
                  ["Location", "Jan Muhammad Colony, Masoom Shah Rd, Multan"],
                  ["Speciality", "Kashikari — Red Clay Ceramic Tiles"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 py-3 border-b border-cream/10 last:border-0">
                    <span className="text-cream/40 text-xs w-28 flex-shrink-0" style={{ fontFamily:"var(--font-inter)" }}>{k}</span>
                    <span className="text-cream/80 text-xs leading-snug" style={{ fontFamily:"var(--font-inter)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY */}
      <section className="py-28 bg-cream-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Artistic Philosophy" title="On Clay, Colour & Legacy" center />
            <div className="mt-14 space-y-8">
              {[
                {
                  heading: "The Primacy of Red Clay",
                  body: "While the modern blue pottery industry has largely shifted to cheap China clay, Wajid insists on traditional red clay. \"The products made of China clay cannot be used in the rehabilitation of historical monuments,\" he explains. Only red clay, fired and glazed in the ancestral manner, carries the structural and aesthetic properties needed to restore Multan's heritage architecture.",
                },
                {
                  heading: "Pattern as Memory",
                  body: "The geometric and floral designs Wajid draws are not invented — they are transcribed. Each pattern is drawn from a living catalogue of designs that exists in his family&apos;s memory, on worn pattern-books, and on the tiles of Multan's shrines. To draw a pattern is to remember the craftsman who drew it before you.",
                },
                {
                  heading: "The Fear of Silence",
                  body: "\"Art must be preserved by appointing original artists, or this art will die.\" Wajid has proposed a training facility for 25 students, requiring four kanals of land from the government. The Blue Pottery Institute — once a centre for authentic instruction — has, in his view, been \"hijacked by profiteers\" who now teach with white clay and issue diplomas to students who cannot restore a single historical monument.",
                },
              ].map((item) => (
                <div key={item.heading} className="border-l-2 border-gold pl-8">
                  <h3 className="text-cobalt text-2xl italic mb-3" style={{ fontFamily:"var(--font-cormorant)" }}>{item.heading}</h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY TRIBUTE */}
      <section className="relative py-24 bg-cobalt-900 overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-10" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Father-son images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square relative overflow-hidden">
                <RealImg src="/images/wajid-ubaid-portrait.jpg" alt="Ustad Wajid and son Ubaid in the workshop holding Kashikari tiles" />
              </div>
              <div className="aspect-square relative overflow-hidden">
                <RealImg src="/images/wajid-teaching-ubaid.jpg" alt="Ustad Wajid teaching Ubaid how to examine a tile" />
              </div>
              <div className="col-span-2 aspect-video relative overflow-hidden">
                <RealImg src="/images/ubaid-learning-craft.jpg" alt="Ubaid painting a tile while Wajid shows him the pattern" />
              </div>
            </div>

            {/* Quote + text */}
            <div className="text-center lg:text-left">
              <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-6" style={{ fontFamily:"var(--font-inter)" }}>The Next Generation</p>
              <blockquote className="text-cream text-3xl sm:text-4xl italic font-light leading-relaxed" style={{ fontFamily:"var(--font-cormorant)" }}>
                &ldquo;The art has been transferred from one generation to another, but I&rsquo;m not sure if my children will keep the tradition alive.&rdquo;
              </blockquote>
              <p className="mt-6 text-cream/50 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
                His son, <strong className="text-cream/80">Ubaid Wajid Kashigar</strong>, is the 7th generation — learning the craft at his father&apos;s side, painting tiles in the same workshop where six generations before him honed their craft.
              </p>
              <div className="mt-8">
                <a
                  href="https://www.instagram.com/ubaid_wajid_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.2em] uppercase"
                  style={{ fontFamily:"var(--font-inter)" }}
                >
                  Follow @ubaid_wajid_ on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ROW */}
      <section className="py-16 bg-cream border-t border-cobalt/10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/heritage" className="px-8 py-3.5 bg-cobalt text-cream text-[11px] tracking-[0.2em] uppercase hover:bg-cobalt-800 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>Explore the Heritage</Link>
          <Link href="/gallery" className="px-8 py-3.5 border border-cobalt text-cobalt text-[11px] tracking-[0.2em] uppercase hover:bg-cobalt hover:text-cream transition-all" style={{ fontFamily:"var(--font-inter)" }}>View Gallery</Link>
          <Link href="/contact" className="px-8 py-3.5 border border-cobalt/30 text-charcoal-600 text-[11px] tracking-[0.2em] uppercase hover:border-cobalt hover:text-cobalt transition-colors" style={{ fontFamily:"var(--font-inter)" }}>Get in Touch</Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

function ImgPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 tile-pattern opacity-25" style={{ background: "linear-gradient(135deg,#1B3A6B,#0E1F3A)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#1B3A6B 0%,#0E1F3A 100%)" }} />
      <div className="absolute inset-0 tile-pattern opacity-30" />
    </div>
  );
}

function RealImg({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={`absolute inset-0 w-full h-full object-cover ${className}`} />
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-cobalt-900 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/wajid-drawing-tile-pattern.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 tile-pattern opacity-15" />
        <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse 70% 70% at 50% 50%,transparent 10%,#0E1F3A 85%)" }} />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <p className="text-gold/80 text-[10px] tracking-[0.45em] uppercase mb-6" style={{ fontFamily:"var(--font-inter)" }}>
            Multan, Pakistan · Est. 17th Century
          </p>
          <h1 className="text-cream text-6xl sm:text-7xl lg:text-8xl xl:text-9xl italic font-light leading-[0.92]" style={{ fontFamily:"var(--font-cormorant)" }}>
            A Living<br /><span className="text-gold">Legacy</span>
          </h1>
          <p className="mt-8 text-cream/75 text-lg sm:text-xl italic" style={{ fontFamily:"var(--font-cormorant)" }}>
            Ustad Muhammad Wajid Kashigar
          </p>
          <p className="mt-4 text-cream/50 text-sm max-w-xl mx-auto leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
            Seven generations of Kashikari mastery — the ancient art of hand-painted blue ceramic tiles from Multan, Pakistan.
          </p>
          <div className="flex items-center justify-center gap-5 my-10">
            <div className="h-px w-24 bg-gold/30" />
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-gold" fill="currentColor"><path d="M10 0L20 10L10 20L0 10Z"/><path d="M10 5L15 10L10 15L5 10Z" fill="#0E1F3A"/></svg>
            <div className="h-px w-24 bg-gold/30" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gallery" className="px-10 py-4 bg-gold text-cobalt-900 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-gold-400 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>View Gallery</Link>
            <Link href="/about" className="px-10 py-4 border border-cream/25 text-cream text-[11px] tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors" style={{ fontFamily:"var(--font-inter)" }}>Meet the Artist</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily:"var(--font-inter)" }}>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-cobalt">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-cream/10">
            {[
              { value:"300+", label:"Years of Heritage" },
              { value:"7th",  label:"Generation Craftsman" },
              { value:"1984", label:"Aga Khan Award" },
              { value:"Multan", label:"City of Shrines" },
            ].map((s,i)=>(
              <div key={i} className="text-center py-4 px-4 sm:px-8">
                <p className="text-gold text-3xl sm:text-4xl italic font-light" style={{ fontFamily:"var(--font-cormorant)" }}>{s.value}</p>
                <p className="text-cream/45 text-[10px] tracking-[0.2em] uppercase mt-1.5" style={{ fontFamily:"var(--font-inter)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] w-full relative overflow-hidden">
                <RealImg src="/images/wajid-kashigar-1.jpg" alt="Ustad Muhammad Wajid Kashigar painting a ceramic dome in his Multan workshop" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border-r-2 border-b-2 border-gold pointer-events-none" />
              <div className="absolute -top-5 -left-5 w-28 h-28 border-l-2 border-t-2 border-gold pointer-events-none" />
              <div className="absolute bottom-6 left-6 bg-cobalt-900/90 backdrop-blur-sm px-5 py-3">
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily:"var(--font-inter)" }}>At Work</p>
                <p className="text-cream/60 text-[10px] mt-0.5" style={{ fontFamily:"var(--font-inter)" }}>Ustad Muhammad Wajid · Multan Workshop</p>
              </div>
            </div>
            <div>
              <SectionHeader eyebrow="Master Craftsman" title="The Last Guardian of Kashikari" description="In the lanes of Jan Muhammad Colony, Multan, Ustad Muhammad Wajid carries forward a 300-year-old family tradition — the ancient art of Kashikari." />
              <div className="mt-8 space-y-4 text-charcoal-600 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
                <p>Born in 1964, Wajid is the sixth-generation Kashigar. His father, Ustad Allah Diwaya, received the Aga Khan Award for Architecture in 1984 for restoring the Hazrat Shah Rukn-e-Alam mausoleum.</p>
                <p>Today, Wajid operates the city&apos;s only remaining workshop using traditional red clay — the same material his ancestors used to decorate Multan&apos;s tombs, shrines, and mosques for over three centuries.</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                <Link href="/about" className="inline-flex items-center gap-2 text-cobalt text-[11px] tracking-[0.2em] uppercase font-semibold group" style={{ fontFamily:"var(--font-inter)" }}>Read Full Story <span className="transition-transform group-hover:translate-x-1">→</span></Link>
                <Link href="/heritage" className="inline-flex items-center gap-2 text-stone text-[11px] tracking-[0.2em] uppercase group" style={{ fontFamily:"var(--font-inter)" }}>Family Heritage <span className="transition-transform group-hover:translate-x-1">→</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="py-28 bg-cream-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Portfolio" title="Selected Works" center description="Each piece is hand-drawn, pigment-filled, glazed, and kiln-fired using centuries-old techniques." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {([
              { title:"Carved Tile — Floral Motif",       cat:"Tiles",       tall:false, img:"/images/kashikari-carved-tile-closeup.jpg" },
              { title:"Ustad at the Kiln",                cat:"Workshop",    tall:true,  img:"/images/wajid-at-kiln.jpg" },
              { title:"Shrine Restoration Tiles",         cat:"Heritage",    tall:false, img:"/images/wajid-workshop-display.jpg" },
              { title:"Calligraphy Vase",                 cat:"Vessels",     tall:true,  img:"/images/kashikari-calligraphy-vase.jpg" },
              { title:"Drawing the Pattern",              cat:"Craft Process",tall:false, img:"/images/wajid-drawing-tile-pattern.jpg" },
              { title:"Architectural Finials",            cat:"Architectural",tall:true,  img:"/images/kashikari-architectural-pieces.jpg" },
            ] as { title:string; cat:string; tall:boolean; img:string|null }[]).map((w,i)=>(
              <div key={i} className="group cursor-pointer">
                <div className={`relative overflow-hidden ${w.tall?"aspect-[3/4]":"aspect-square"}`}>
                  {w.img
                    ? <RealImg src={w.img} alt={w.title} />
                    : <ImgPlaceholder className="absolute inset-0 w-full h-full" />
                  }
                  <div className="absolute inset-0 bg-cobalt-900/0 group-hover:bg-cobalt-900/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-gold text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily:"var(--font-inter)" }}>{w.cat}</span>
                  </div>
                </div>
                <div className="mt-3 pb-4 border-b border-cobalt/10">
                  <p className="text-cobalt text-lg italic" style={{ fontFamily:"var(--font-cormorant)" }}>{w.title}</p>
                  <p className="text-stone text-[11px] tracking-wide mt-0.5" style={{ fontFamily:"var(--font-inter)" }}>Traditional Kashikari · Multan</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/gallery" className="inline-flex items-center gap-2 px-10 py-4 border border-cobalt text-cobalt text-[11px] tracking-[0.25em] uppercase hover:bg-cobalt hover:text-cream transition-all" style={{ fontFamily:"var(--font-inter)" }}>View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-32 bg-cobalt-900 overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-10 h-8 mx-auto mb-10 text-gold/20">
            <svg viewBox="0 0 40 30" fill="currentColor"><path d="M0 30V16.36C0 7.33 5.63 1.88 16.88 0L18.75 4.09C13.19 5.45 10.4 8.64 10.4 13.64H17.5V30H0ZM22.5 30V16.36C22.5 7.33 28.13 1.88 39.38 0L41.25 4.09C35.69 5.45 32.9 8.64 32.9 13.64H40V30H22.5Z"/></svg>
          </div>
          <blockquote className="text-cream text-3xl sm:text-4xl lg:text-5xl italic font-light leading-relaxed" style={{ fontFamily:"var(--font-cormorant)" }}>
            &ldquo;The art has been transferred from one generation to another, but I&rsquo;m not sure if my children will keep the tradition alive.&rdquo;
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gold/30" />
            <p className="text-gold text-[10px] tracking-[0.35em] uppercase" style={{ fontFamily:"var(--font-inter)" }}>Ustad Muhammad Wajid Kashigar</p>
            <div className="h-px w-16 bg-gold/30" />
          </div>
        </div>
      </section>

      {/* CRAFT PROCESS */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Ancient Technique" title="How Kashikari is Made" center description="A meticulous four-stage process passed through seven generations of the Kashigar family." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { n:"01", title:"Red Clay Formation", desc:"Traditional red clay is hand-shaped using moulds crafted by the family over generations — the same clay used to restore Multan's historic shrines." },
              { n:"02", title:"Pattern Drawing", desc:"Geometric and floral designs are hand-drawn with a fine stylus, referencing centuries-old pattern books passed within the Thaheem family." },
              { n:"03", title:"Oxide Pigment Filling", desc:"Deep cobalt blue, white, and turquoise oxide pigments are applied by hand into the etched designs, creating the signature Multani palette." },
              { n:"04", title:"Glaze & Kiln Firing", desc:"A clear glaze is applied, then the piece is kiln-fired — locking in colour and achieving the signature luminous, water-resistant finish." },
            ].map((s)=>(
              <div key={s.n}>
                <p className="text-cobalt/10 text-7xl font-light leading-none mb-4" style={{ fontFamily:"var(--font-cormorant)" }}>{s.n}</p>
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <h3 className="text-cobalt text-xl italic mb-3" style={{ fontFamily:"var(--font-cormorant)" }}>{s.title}</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-28 bg-cream-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Press & Media" title="As Featured In" center />
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { outlet:"Dawn Newspaper", date:"November 4, 2021", title:"Lone artisan sees Kashigari a dying art", excerpt:"Ustad Muhammad Wajid — the only one among his brothers still practising — speaks about preserving a 300-year family legacy in the face of modernisation." },
              { outlet:"Dawn · Non-Fiction", date:"2024", title:"Legacies in Clay", excerpt:"From Ustad Hasan Bakhsh to Ubaid Wajid, a dynasty of Kashigars whose glazed tiles adorn the shrines, tombs, and mosques of Multan." },
            ].map((a,i)=>(
              <article key={i} className="border border-cobalt/10 p-8 hover:border-gold/50 transition-colors group">
                <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily:"var(--font-inter)" }}>{a.outlet} · {a.date}</p>
                <h3 className="text-cobalt text-2xl italic leading-snug group-hover:text-cobalt-800" style={{ fontFamily:"var(--font-cormorant)" }}>{a.title}</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed mt-4" style={{ fontFamily:"var(--font-inter)" }}>{a.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/press" className="inline-flex items-center gap-2 text-cobalt text-[11px] tracking-[0.2em] uppercase font-semibold group" style={{ fontFamily:"var(--font-inter)" }}>All Press &amp; Media <span className="transition-transform group-hover:translate-x-1">→</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cobalt-900/50 text-[10px] tracking-[0.4em] uppercase mb-4" style={{ fontFamily:"var(--font-inter)" }}>Commission a Piece</p>
          <h2 className="text-cobalt-900 text-4xl sm:text-5xl italic font-light" style={{ fontFamily:"var(--font-cormorant)" }}>Own a Piece of Living History</h2>
          <p className="mt-5 text-cobalt-900/65 text-sm leading-relaxed max-w-lg mx-auto" style={{ fontFamily:"var(--font-inter)" }}>Commission a bespoke Kashikari tile panel, vase, or architectural installation. Each commission is handcrafted using authentic red clay and centuries-old techniques.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="px-10 py-4 bg-cobalt-900 text-cream text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-cobalt-800 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>Shop &amp; Commission</Link>
            <Link href="/contact" className="px-10 py-4 border border-cobalt-900/30 text-cobalt-900 text-[11px] tracking-[0.25em] uppercase hover:border-cobalt-900 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

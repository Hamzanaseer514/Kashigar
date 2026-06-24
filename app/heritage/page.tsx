import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "The Naqashi Heritage" };

export default function HeritagePage() {
  return (
    <>
      <PageHero
        eyebrow="The Naqashi Heritage"
        title="Three Centuries of Living Art"
        description="The story of the Thaheem family — seven generations of Kashigars who have shaped the visual soul of Multan, Pakistan."
      />

      {/* WHAT IS KASHIKARI */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div>
              <SectionHeader eyebrow="The Ancient Craft" title="What is Kashikari?" description="Kashikari — also called Kashigari — is the traditional art of hand-painting and glazing geometric and floral patterns onto ceramic surfaces." />
              <div className="mt-8 space-y-4 text-charcoal-600 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
                <p>In Sindh and Multan, the craftsman who practices this art is called a <em>Kashigar</em>. Multan — known as the City of Saints — has been one of South Asia&apos;s great centres of ceramic art for over a millennium, its blue-tiled shrines and mosques visible for miles across the southern Punjab plain.</p>
                <p>The defining characteristic of authentic Multani Kashikari is the use of <strong>red clay</strong> — a harder, more durable material than the cheap China clay now widely used by commercial producers. Only red clay tiles can withstand the structural demands of monument restoration.</p>
                <p>The signature colour palette — deep cobalt blue, white, turquoise, and occasional manganese purple — derives from natural mineral oxide pigments applied by hand before a clear glaze is poured and the piece kiln-fired.</p>
              </div>
            </div>

            {/* Process steps visual */}
            <div className="space-y-0">
              {[
                { n:"I",   title:"Clay is Shaped",     desc:"Red clay, sourced and prepared by hand, is formed into tiles, vessels, or architectural elements using moulds refined over generations.", img:"/images/wajid-kashigar-2.jpg" },
                { n:"II",  title:"Design is Drawn",    desc:"The craftsman draws arabesque geometric and floral patterns freehand using a fine stylus — no stencil, no machine. Each line is memory.", img:"/images/wajid-drawing-tile-pattern.jpg" },
                { n:"III", title:"Pigment is Applied", desc:"Cobalt oxide (blue), tin oxide (white), and copper oxide (turquoise) pigments are filled into the drawn grooves by hand.", img:"/images/kashikari-carved-tile-closeup.jpg" },
                { n:"IV",  title:"Glaze & Fire",       desc:"A transparent glaze is applied over the pigments. The piece is kiln-fired at high temperature, fusing colour and glaze into the clay permanently.", img:"/images/wajid-at-kiln.jpg" },
              ].map((s, i) => (
                <div key={s.n} className={`flex gap-0 ${i % 2 === 0 ? "bg-cream-100" : "bg-cream-200"}`}>
                  <div className="w-24 flex-shrink-0 relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-4 p-6 flex-1">
                    <span className="text-cobalt/20 text-5xl font-light leading-none flex-shrink-0 mt-1" style={{ fontFamily:"var(--font-cormorant)" }}>{s.n}</span>
                    <div>
                      <p className="text-cobalt text-base italic mb-1.5" style={{ fontFamily:"var(--font-cormorant)" }}>{s.title}</p>
                      <p className="text-charcoal-600 text-xs leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY TREE */}
      <section className="py-28 bg-cobalt-900 relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-10" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Family Lineage" title="The Kashigar Dynasty" center light description="Seven generations of the Thaheem (Ansari) family — a 300-year lineage of master craftsmen." />

          <div className="mt-20 max-w-2xl mx-auto">
            {[
              { gen:"Est. 17th Century", names:["Thaheem (Ansari) Forebears"], note:"The family tradition begins." },
              { gen:"3rd – 4th Generation", names:["Ustad Hassan Bakhsh", "Ustad Ali Ahmad", "Ustad Khuda Bakhsh", "Ustad Muhammad Ramzan"], note:"Multiple branches of the family flourish simultaneously." },
              { gen:"5th Generation", names:["Ustad Allah Diwaya"], note:"Aga Khan Award for Architecture (1984) for the restoration of Hazrat Shah Rukn-e-Alam Mausoleum, Multan.", highlight:true },
              { gen:"6th Generation", names:["Ustad Muhammad Wajid Kashigar"], note:"Born 1964. The sole remaining Kashigar using traditional red clay. Workshop: Jan Muhammad Colony, Multan.", highlight:true },
              { gen:"7th Generation", names:["Ubaid Wajid Kashigar"], note:"Currently learning the family craft. Actively documenting Kashikari for a new audience.", highlight:true },
            ].map((row, i) => (
              <div key={i} className="relative pl-12 pb-10 last:pb-0">
                {/* Connector */}
                {i < 4 && <div className="absolute left-3.5 top-6 bottom-0 w-px bg-gold/20" />}
                <div className={`absolute left-0 top-1.5 w-7 h-7 flex items-center justify-center ${row.highlight ? "bg-gold" : "bg-cobalt border border-gold/30"}`}>
                  <svg viewBox="0 0 12 12" className={`w-3 h-3 ${row.highlight ? "text-cobalt-900" : "text-gold/50"}`} fill="currentColor">
                    <path d="M6 0L12 6L6 12L0 6Z" />
                  </svg>
                </div>
                <p className="text-gold/60 text-[10px] tracking-[0.25em] uppercase mb-1.5" style={{ fontFamily:"var(--font-inter)" }}>{row.gen}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {row.names.map((n) => (
                    <span key={n} className={`text-sm italic px-3 py-1 ${row.highlight ? "text-cream bg-cobalt-800" : "text-cream/60 bg-cobalt-800/40"}`} style={{ fontFamily:"var(--font-cormorant)" }}>{n}</span>
                  ))}
                </div>
                {row.note && <p className="text-cream/40 text-xs leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>{row.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGA KHAN AWARD */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeader eyebrow="Highest Recognition" title="The Aga Khan Award for Architecture" center description="1984 — The world's most prestigious recognition of excellence in the built environment." />
            <div className="mt-14 bg-cobalt-900 relative overflow-hidden">
              <div className="absolute inset-0 tile-pattern opacity-10" />
              <div className="relative p-10 sm:p-14">
                <div className="grid sm:grid-cols-3 gap-8 items-start">
                  <div className="sm:col-span-2 space-y-4 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
                    <p className="text-cream/80">In 1984, the family workshop of Ustad Allah Diwaya — father of Muhammad Wajid — received the Aga Khan Award for Architecture, one of the world&apos;s most prestigious recognitions of excellence in architecture and the built environment.</p>
                    <p className="text-cream/60">The award was given for the family&apos;s contribution to the <strong className="text-cream/80">restoration of the Hazrat Shah Rukn-e-Alam Mausoleum</strong> in Multan in 1985 — a 14th-century Sufi shrine considered one of the finest examples of Timurid and Tughluq architecture in South Asia.</p>
                    <p className="text-cream/60">Muhammad Wajid, then a young apprentice, worked alongside his father on this landmark project. The experience shaped his commitment to authentic red clay Kashikari and monument-quality craftsmanship.</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border border-gold/20 p-6 text-center">
                      <p className="text-gold text-4xl italic font-light" style={{ fontFamily:"var(--font-cormorant)" }}>1984</p>
                      <p className="text-cream/50 text-[10px] tracking-[0.2em] uppercase mt-2" style={{ fontFamily:"var(--font-inter)" }}>Year Awarded</p>
                    </div>
                    <div className="border border-gold/20 p-6 text-center">
                      <p className="text-cream/80 text-sm italic" style={{ fontFamily:"var(--font-cormorant)" }}>Shah Rukn-e-Alam Mausoleum</p>
                      <p className="text-cream/50 text-[10px] tracking-[0.2em] uppercase mt-2" style={{ fontFamily:"var(--font-inter)" }}>Project Recognised</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENDANGERED ART */}
      <section className="py-28 bg-cream-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="An Art at Risk" title="The Threat to Kashikari" center description="The commercialisation of blue pottery and the decline of authentic instruction have pushed traditional Kashikari to the edge." />
          <div className="mt-14 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon:"⬡", title:"China Clay Replaces Red Clay", desc:"Commercial producers have switched to cheap, lightweight China clay. Unlike red clay, it cannot be used for the restoration of historical monuments — but it is far cheaper to produce." },
              { icon:"◈", title:"Institutions Lost Their Way", desc:"The Blue Pottery Institute of Multan — once a centre for authentic instruction — now, in Wajid's words, operates as a commercial entity, issuing diplomas without employing original artists." },
              { icon:"◇", title:"Family Abandonment", desc:"Of Ustad Allah Diwaya's seven sons, only Muhammad Wajid remained in the craft. His brothers moved to other occupations. The Soomro family — another historic Kashigar lineage — has had no active members for over a decade." },
            ].map((c) => (
              <div key={c.title} className="text-center p-8 bg-cream border border-cobalt/10">
                <p className="text-cobalt text-3xl mb-4">{c.icon}</p>
                <h3 className="text-cobalt text-lg italic mb-3" style={{ fontFamily:"var(--font-cormorant)" }}>{c.title}</h3>
                <p className="text-charcoal-600 text-xs leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 max-w-2xl mx-auto text-center border-t border-cobalt/10 pt-10">
            <p className="text-cobalt text-2xl italic mb-4" style={{ fontFamily:"var(--font-cormorant)" }}>Wajid&apos;s Proposal</p>
            <p className="text-charcoal-600 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>Ustad Muhammad Wajid has proposed a training facility for 25 students requiring four kanals of land from the government. He asks that the art be preserved by appointing authentic artists — not commercial instructors — to train the next generation.</p>
            <p className="mt-6 text-stone text-xs italic" style={{ fontFamily:"var(--font-inter)" }}>&ldquo;Art be preserved by appointing original artists, or this art will die.&rdquo; — Ustad Muhammad Wajid</p>
          </div>
        </div>
      </section>
    </>
  );
}

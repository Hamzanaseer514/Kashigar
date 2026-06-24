import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "Workshops & Teaching" };

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops & Teaching"
        title="Learn from the Source"
        description="Study Kashikari directly under Ustad Muhammad Wajid Kashigar — one of the last authentic practitioners of this 300-year-old art form."
      />

      {/* PHILOSOPHY */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeader eyebrow="Teaching Philosophy" title="The Guru-Shagird Tradition" center description="Kashikari has never been taught from a textbook. It is passed hand to hand, eye to eye." />
            <div className="mt-12 space-y-4 text-charcoal-600 text-sm leading-relaxed text-center" style={{ fontFamily:"var(--font-inter)" }}>
              <p>For centuries, the craft of Kashikari was transmitted through the <em>guru-shagird</em> relationship — master and apprentice, sharing a workshop, sharing a fire. The apprentice watched, then imitated, then was corrected, then learned.</p>
              <p>Wajid teaches the same way. There are no shortcuts. You will learn to prepare clay with your hands, to feel when a consistency is right. You will learn to draw a geometric pattern until your hand does not need your eye. You will learn that a misjudged pigment weight cannot be corrected after firing.</p>
              <p>What you take home from these workshops is not a tile. It is a fragment of a living tradition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOP OFFERINGS */}
      <section className="py-28 bg-cream-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Workshop Offerings" title="Choose Your Path" center />
          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {[
              {
                tier:"Introduction",
                duration:"1 Day",
                group:"Up to 6 participants",
                price:"By arrangement",
                colour:"bg-cream border border-cobalt/15",
                accent:"text-cobalt",
                items:[
                  "Introduction to Kashikari history & lineage",
                  "Handling red clay — texture, density, form",
                  "Basic geometric pattern drawing",
                  "Pigment introduction & colour theory",
                  "Take home one finished tile (kiln-fired by workshop)",
                ],
              },
              {
                tier:"Immersive",
                duration:"3 Days",
                group:"Up to 4 participants",
                price:"By arrangement",
                colour:"bg-cobalt text-cream",
                accent:"text-gold",
                items:[
                  "Full process from raw clay to kiln-fired tile",
                  "Advanced pattern drawing — arabesque & geometric",
                  "Multi-colour oxide pigment application",
                  "Glazing techniques",
                  "Monument restoration context",
                  "Take home two finished pieces",
                ],
                featured:true,
              },
              {
                tier:"Master Class",
                duration:"1 Week",
                group:"1–2 participants only",
                price:"By arrangement",
                colour:"bg-cream border border-cobalt/15",
                accent:"text-cobalt",
                items:[
                  "Complete immersion in the family workshop",
                  "Study of historical pattern books",
                  "Architectural tile panel production",
                  "Understanding monument-grade red clay work",
                  "Daily practice under direct supervision",
                  "Certificate of completion",
                ],
              },
            ].map((w) => (
              <div key={w.tier} className={`relative p-8 ${w.colour} ${w.featured ? "shadow-xl" : ""}`}>
                {w.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1">
                    <span className="text-cobalt-900 text-[9px] tracking-[0.3em] uppercase font-semibold" style={{ fontFamily:"var(--font-inter)" }}>Most Popular</span>
                  </div>
                )}
                <p className={`${w.accent} text-[10px] tracking-[0.3em] uppercase mb-2`} style={{ fontFamily:"var(--font-inter)" }}>{w.duration}</p>
                <h3 className={`text-2xl italic mb-1 ${w.featured?"text-cream":"text-cobalt"}`} style={{ fontFamily:"var(--font-cormorant)" }}>{w.tier}</h3>
                <p className={`text-[11px] mb-6 ${w.featured?"text-cream/50":"text-stone"}`} style={{ fontFamily:"var(--font-inter)" }}>{w.group}</p>
                <div className={`h-px ${w.featured?"bg-cream/15":"bg-cobalt/10"} mb-6`} />
                <ul className="space-y-2.5">
                  {w.items.map((item) => (
                    <li key={item} className={`flex items-start gap-3 text-xs leading-snug ${w.featured?"text-cream/70":"text-charcoal-600"}`} style={{ fontFamily:"var(--font-inter)" }}>
                      <svg viewBox="0 0 12 12" className={`w-2.5 h-2.5 flex-shrink-0 mt-0.5 ${w.accent}`} fill="currentColor"><path d="M6 0L12 6L6 12L0 6Z"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={`mt-8 pt-6 ${w.featured?"border-t border-cream/15":"border-t border-cobalt/10"} flex items-center justify-between`}>
                  <span className={`text-xs ${w.featured?"text-cream/40":"text-stone"}`} style={{ fontFamily:"var(--font-inter)" }}>{w.price}</span>
                  <a href="/contact" className={`text-[10px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-1.5 group ${w.featured?"text-gold":"text-cobalt"}`} style={{ fontFamily:"var(--font-inter)" }}>
                    Enquire <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone text-xs mt-8" style={{ fontFamily:"var(--font-inter)" }}>
            All workshops take place at the family workshop, Jan Muhammad Colony, Masoom Shah Road, Multan. Workshops available by prior arrangement only.
          </p>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Curriculum" title="What You Will Learn" center />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title:"History & Context", desc:"The 700-year history of Kashikari in Multan, the Thaheem family lineage, and the role of blue ceramic art in South Asian heritage architecture." },
              { title:"Material Knowledge", desc:"How red clay differs from China clay and why it matters. How to select, prepare, and form clay by hand." },
              { title:"Pattern Drawing", desc:"The geometric principles behind Islamic star patterns, arabesque florals, and the specific Multani tile design vocabulary." },
              { title:"Oxide Pigments", desc:"Understanding cobalt blue, tin white, copper turquoise, and manganese oxide — their chemical properties and how to apply them by hand without bleeding." },
              { title:"Glazing Technique", desc:"How clear glaze is applied to preserve pigment and produce the luminous finish that defines authentic Kashikari." },
              { title:"Kiln Process", desc:"Understanding firing temperatures, how the kiln transforms pigments and glaze, and how to assess a finished fired piece." },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-cobalt/10 hover:border-gold/40 transition-colors">
                <div className="w-6 h-0.5 bg-gold mb-4" />
                <h3 className="text-cobalt text-lg italic mb-3" style={{ fontFamily:"var(--font-cormorant)" }}>{item.title}</h3>
                <p className="text-charcoal-600 text-xs leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="py-28 bg-cobalt-900 relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-10" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Book a Workshop" title="Make an Enquiry" center light description="All workshops are by prior arrangement. Please write to us with your preferred dates, group size, and workshop type." />
          <form className="mt-12 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream/50 text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Your Name</label>
                <input type="text" className="w-full bg-cobalt-800 border border-cream/15 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 placeholder:text-cream/25" style={{ fontFamily:"var(--font-inter)" }} placeholder="Full name" />
              </div>
              <div>
                <label className="block text-cream/50 text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Email</label>
                <input type="email" className="w-full bg-cobalt-800 border border-cream/15 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 placeholder:text-cream/25" style={{ fontFamily:"var(--font-inter)" }} placeholder="your@email.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream/50 text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Workshop Type</label>
                <select className="w-full bg-cobalt-800 border border-cream/15 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50" style={{ fontFamily:"var(--font-inter)" }}>
                  <option value="">Select workshop</option>
                  <option>Introduction — 1 Day</option>
                  <option>Immersive — 3 Days</option>
                  <option>Master Class — 1 Week</option>
                </select>
              </div>
              <div>
                <label className="block text-cream/50 text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Group Size</label>
                <input type="number" min={1} max={6} className="w-full bg-cobalt-800 border border-cream/15 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 placeholder:text-cream/25" style={{ fontFamily:"var(--font-inter)" }} placeholder="Number of participants" />
              </div>
            </div>
            <div>
              <label className="block text-cream/50 text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Preferred Dates & Additional Notes</label>
              <textarea rows={4} className="w-full bg-cobalt-800 border border-cream/15 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold/50 placeholder:text-cream/25 resize-none" style={{ fontFamily:"var(--font-inter)" }} placeholder="Tell us when you'd like to visit and any specific interests..." />
            </div>
            <button type="submit" className="w-full py-4 bg-gold text-cobalt-900 text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-gold-400 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "Awards & Achievements" };

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Awards & Achievements"
        title="A Record of Recognition"
        description="Honours awarded to the Kashigar family across generations — from international architecture awards to media recognition."
      />

      {/* FEATURED AWARD */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Family's Greatest Honour" title="Aga Khan Award for Architecture" center />

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="relative bg-cobalt-900 overflow-hidden">
              <div className="absolute inset-0 tile-pattern opacity-15" />
              <div className="relative grid lg:grid-cols-[1fr_320px] gap-0">
                <div className="p-12 sm:p-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gold flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 28 28" className="w-7 h-7 text-cobalt-900" fill="currentColor">
                        <path d="M14 2L26 14L14 26L2 14Z"/><path d="M14 7L21 14L14 21L7 14Z" fill="#FAF7F2" opacity="0.3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gold text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily:"var(--font-inter)" }}>1984</p>
                      <p className="text-cream text-sm" style={{ fontFamily:"var(--font-inter)" }}>Aga Khan Award for Architecture</p>
                    </div>
                  </div>

                  <h3 className="text-cream text-3xl sm:text-4xl italic font-light leading-snug mb-6" style={{ fontFamily:"var(--font-cormorant)" }}>
                    Restoration of Hazrat Shah Rukn-e-Alam Mausoleum, Multan
                  </h3>

                  <div className="space-y-4 text-cream/60 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
                    <p>Awarded to <strong className="text-cream/80">Ustad Allah Diwaya</strong> — father of Ustad Muhammad Wajid Kashigar — for the family team&apos;s contribution to the restoration of one of South Asia&apos;s most significant medieval monuments.</p>
                    <p>The Hazrat Shah Rukn-e-Alam Mausoleum, built between 1320 and 1324 AD, is considered among the finest examples of Tughluq architecture in the subcontinent. The restoration project in 1985 required the painstaking reproduction of authentic Kashikari tile-work using traditional red clay — work that only the Kashigar family could produce.</p>
                    <p>The Aga Khan Award for Architecture, established in 1977, is one of the world&apos;s most prestigious recognitions of excellence in the built environment, with particular emphasis on projects that serve Muslim communities and heritage.</p>
                  </div>
                </div>

                <div className="bg-gold/10 border-l border-gold/20 p-10 flex flex-col justify-between">
                  <div className="space-y-6">
                    {[
                      ["Award", "Aga Khan Award for Architecture"],
                      ["Year", "1984"],
                      ["Recipient", "Ustad Allah Diwaya"],
                      ["Project", "Hazrat Shah Rukn-e-Alam Mausoleum"],
                      ["Location", "Multan, Punjab, Pakistan"],
                      ["Project Date", "1985 Restoration"],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <p className="text-gold/60 text-[9px] tracking-[0.3em] uppercase mb-0.5" style={{ fontFamily:"var(--font-inter)" }}>{k}</p>
                        <p className="text-cream/80 text-xs leading-snug" style={{ fontFamily:"var(--font-inter)" }}>{v}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-cream/10">
                    <p className="text-gold/40 text-[9px] tracking-widest uppercase" style={{ fontFamily:"var(--font-inter)" }}>Family Contribution</p>
                    <p className="text-cream/50 text-xs mt-1 leading-snug" style={{ fontFamily:"var(--font-inter)" }}>Young Muhammad Wajid (then ~21) worked alongside his father on this landmark restoration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28 bg-cream-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Timeline" title="Milestones & Recognition" center />
          <div className="mt-16 max-w-3xl mx-auto">
            {[
              { year:"17th C.", colour:"bg-stone", event:"Thaheem Ansari Family Begins the Craft", detail:"The family tradition of Kashikari begins in Multan. The exact generation is not recorded, but oral history traces the craft back over 300 years." },
              { year:"1950s–70s", colour:"bg-cobalt/60", event:"Ustad Allah Diwaya Rises to Mastery", detail:"Father of Muhammad Wajid. Trains all seven sons in the craft. Leads the family workshop to regional prominence." },
              { year:"1984", colour:"bg-gold", event:"Aga Khan Award for Architecture", detail:"Ustad Allah Diwaya receives one of the world's most prestigious architecture awards for his contribution to restoring Hazrat Shah Rukn-e-Alam Mausoleum." },
              { year:"1985", colour:"bg-cobalt/60", event:"Hazrat Shah Rukn-e-Alam Restoration Complete", detail:"The landmark restoration is completed. Muhammad Wajid contributes alongside his father. The project cements the family's status as Multan's premier Kashigar family." },
              { year:"Various", colour:"bg-cobalt/60", event:"Hazrat Musa Pak Shaheed Tomb Restoration", detail:"Father and son work together on the restoration of another significant Multani shrine." },
              { year:"2021", colour:"bg-cobalt/60", event:"Featured in Dawn Newspaper", detail:"\"Lone artisan sees Kashigari a dying art\" — Muhammad Wajid speaks about the challenges facing authentic Kashikari." },
              { year:"2024", colour:"bg-cobalt/60", event:"Featured in Dawn — Non-Fiction", detail:"\"Legacies in Clay\" — the Kashigar family&apos;s multi-generational story is documented in a major feature." },
              { year:"2025", colour:"bg-gold", event:"Ubaid Wajid Kashigar — 7th Generation", detail:"Wajid&apos;s son Ubaid becomes active in the craft and its documentation. Featured by @open_studios_pakistan in conversation about the process and generational learning." },
            ].map((item, i) => (
              <div key={i} className="relative pl-14 pb-10 last:pb-0">
                {i < 7 && <div className="absolute left-[1.15rem] top-6 bottom-0 w-px bg-cobalt/10" />}
                <div className={`absolute left-0 top-0.5 w-9 h-9 flex items-center justify-center ${item.colour === "bg-gold" ? "bg-gold" : "bg-cobalt/10 border border-cobalt/20"}`}>
                  <svg viewBox="0 0 10 10" className={`w-2.5 h-2.5 ${item.colour==="bg-gold"?"text-cobalt-900":"text-cobalt"}`} fill="currentColor">
                    <path d="M5 0L10 5L5 10L0 5Z"/>
                  </svg>
                </div>
                <div className="pt-1">
                  <span className="inline-block bg-cobalt/8 text-cobalt-800 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 mb-2" style={{ fontFamily:"var(--font-inter)" }}>{item.year}</span>
                  <h3 className="text-cobalt text-xl italic leading-snug" style={{ fontFamily:"var(--font-cormorant)" }}>{item.event}</h3>
                  <p className="text-charcoal-600 text-xs leading-relaxed mt-2" style={{ fontFamily:"var(--font-inter)" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE RECOGNITION */}
      <section className="py-24 bg-cobalt relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-10" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-6" style={{ fontFamily:"var(--font-inter)" }}>Institutional Recognition</p>
          <h2 className="text-cream text-4xl sm:text-5xl italic font-light" style={{ fontFamily:"var(--font-cormorant)" }}>Named in Pakistan&apos;s Craft Heritage</h2>
          <p className="mt-5 max-w-2xl mx-auto text-cream/55 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
            The Thaheem family Kashigars — including Ustad Khuda Bakhsh and Ustad Muhammad Wajid — are named in Pakistan&apos;s national craft heritage documentation, the WCC-Asia Pacific Encyclopaedia of Crafts, and multiple academic records of South Asian decorative arts.
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "CV / Curriculum Vitae" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-cobalt text-2xl italic font-light whitespace-nowrap" style={{ fontFamily:"var(--font-cormorant)" }}>{title}</h2>
        <div className="h-px flex-1 bg-gold/30" />
      </div>
      {children}
    </div>
  );
}

function Entry({ year, title, subtitle, note }: { year?: string; title: string; subtitle?: string; note?: string }) {
  return (
    <div className="grid sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 py-4 border-b border-cobalt/8 last:border-0">
      {year && <span className="text-stone text-xs pt-0.5 whitespace-nowrap" style={{ fontFamily:"var(--font-inter)" }}>{year}</span>}
      <div>
        <p className="text-charcoal text-sm font-medium" style={{ fontFamily:"var(--font-inter)" }}>{title}</p>
        {subtitle && <p className="text-charcoal-600 text-xs mt-0.5" style={{ fontFamily:"var(--font-inter)" }}>{subtitle}</p>}
        {note && <p className="text-stone text-xs mt-1 italic" style={{ fontFamily:"var(--font-inter)" }}>{note}</p>}
      </div>
    </div>
  );
}

export default function CVPage() {
  return (
    <>
      <PageHero
        eyebrow="Curriculum Vitae"
        title="Professional Record"
        description="A living document of craft, heritage, and recognition spanning six generations and three centuries."
      />

      <div className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header card */}
          <div className="bg-cobalt-900 p-10 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 tile-pattern opacity-10" />
            <div className="relative flex flex-col sm:flex-row gap-6 sm:items-end justify-between">
              <div>
                <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-3" style={{ fontFamily:"var(--font-inter)" }}>Ustad</p>
                <h1 className="text-cream text-4xl sm:text-5xl italic font-light" style={{ fontFamily:"var(--font-cormorant)" }}>Muhammad Wajid Kashigar</h1>
                <p className="text-cream/50 text-sm mt-2" style={{ fontFamily:"var(--font-inter)" }}>6th Generation Kashigar · Master Craftsman</p>
              </div>
              <div className="text-right text-cream/50 text-xs space-y-1" style={{ fontFamily:"var(--font-inter)" }}>
                <p>Jan Muhammad Colony</p>
                <p>Masoom Shah Road, Multan</p>
                <p>Punjab, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Personal */}
          <Section title="Personal Information">
            <div className="grid sm:grid-cols-2 gap-x-12">
              {[
                ["Date of Birth", "1964"],
                ["Place of Birth", "Multan, Punjab, Pakistan"],
                ["Family Lineage", "Thaheem (Ansari)"],
                ["Generation", "6th Generation Kashigar"],
                ["Son / Successor", "Ubaid Wajid Kashigar (7th Gen.)"],
                ["Workshop Location", "Jan Muhammad Colony, Masoom Shah Rd, Multan"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 py-2.5 border-b border-cobalt/8">
                  <span className="text-stone text-xs w-36 flex-shrink-0" style={{ fontFamily:"var(--font-inter)" }}>{k}</span>
                  <span className="text-charcoal-600 text-xs" style={{ fontFamily:"var(--font-inter)" }}>{v}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Education & Training */}
          <Section title="Education & Training">
            <Entry year="1970s–80s" title="Apprenticeship under Ustad Allah Diwaya" subtitle="Family Workshop, Jan Muhammad Colony, Multan" note="Mastered all stages of Kashikari: clay preparation, pattern drawing, oxide pigment application, glazing, and kiln firing." />
            <Entry year="1980s" title="Advanced study of Naqashi and Gulkari" subtitle="Family tradition, Multan" note="Trained in the full suite of decorative crafts practiced by the Thaheem family." />
            <Entry year="1985" title="On-site training in monument restoration" subtitle="Hazrat Shah Rukn-e-Alam Mausoleum, Multan" note="Worked alongside father Ustad Allah Diwaya on the Aga Khan Award-winning restoration project." />
          </Section>

          {/* Professional Experience */}
          <Section title="Professional Experience">
            <Entry year="1985–Present" title="Master Kashigar & Workshop Owner" subtitle="Family Workshop, Jan Muhammad Colony, Multan" note="Sole remaining practitioner in Multan using traditional red clay for Kashikari production. Accepts commissions for monument restoration, private collectors, and architectural installations." />
            <Entry year="1985" title="Restoration Craftsman" subtitle="Hazrat Shah Rukn-e-Alam Mausoleum, Multan" note="Contributed to the award-winning restoration of one of Multan's most important Sufi shrines." />
            <Entry year="Various" title="Restoration Craftsman" subtitle="Hazrat Musa Pak Shaheed Tomb, Multan" note="Restored historic tile work on this significant Multani shrine." />
            <Entry year="Various" title="Architectural Tile Craftsman" subtitle="Mosques, Shrines & Private Commissions, Multan region" note="Produced bespoke geometric and floral tile panels for restoration and new construction projects." />
          </Section>

          {/* Awards */}
          <Section title="Awards & Honours">
            <Entry year="1984" title="Aga Khan Award for Architecture" subtitle="Awarded to Ustad Allah Diwaya (father) — family team contribution" note="Recognised for the restoration of Hazrat Shah Rukn-e-Alam Mausoleum, Multan. One of the world's most prestigious awards in architecture and the built environment." />
          </Section>

          {/* Skills */}
          <Section title="Craft Skills & Specialisations">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Kashikari — Traditional Red Clay Tile Work",
                "Naqashi — Decorative Paintwork",
                "Gulkari — Floral Ornamental Work",
                "Monument & Shrine Restoration",
                "Geometric & Arabesque Pattern Design",
                "Oxide Pigment Colour Application",
                "Traditional Kiln Firing Techniques",
                "Architectural Installation",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3 py-2.5 border-b border-cobalt/8">
                  <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
                  <span className="text-charcoal-600 text-xs" style={{ fontFamily:"var(--font-inter)" }}>{skill}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Media */}
          <Section title="Press & Media">
            <Entry year="Nov 2021" title={'“Lone artisan sees Kashigari a dying art”'} subtitle="Dawn Newspaper — Shakeel Ahmed, Multan Correspondent" />
            <Entry year="2024" title={'“Non-fiction: Legacies in Clay”'} subtitle="Dawn Newspaper" />
            <Entry year="Oct 2025" title="Documentary Reel — Muhammad Wajid Kashigar" subtitle="@shahzamanbaloch, Instagram" />
            <Entry year="Oct 2025" title={'“In conversation with Ubaid Wajid Kashigar, 7th generation craftsman”'} subtitle="@open_studios_pakistan, Instagram" />
          </Section>

          {/* Family Lineage */}
          <Section title="Family Lineage (Known Generations)">
            {[
              ["1st–3rd Gen.", "Thaheem (Ansari) forebears — Est. 17th Century"],
              ["4th Gen.", "Ustad Hassan Bakhsh"],
              ["4th Gen. (branch)", "Ustad Ali Ahmad · Ustad Muhammad Ramzan · Ustad Khuda Bakhsh"],
              ["5th Gen.", "Ustad Allah Diwaya — Aga Khan Award Recipient (1984)"],
              ["6th Gen.", "Ustad Muhammad Wajid Kashigar (b. 1964)"],
              ["7th Gen.", "Ubaid Wajid Kashigar — active craftsman & Instagram @ubaid_wajid_"],
            ].map(([gen, name]) => (
              <Entry key={gen} year={gen} title={name} />
            ))}
          </Section>

          {/* Download */}
          <div className="mt-8 border-t border-cobalt/15 pt-8 flex items-center justify-between">
            <p className="text-stone text-xs" style={{ fontFamily:"var(--font-inter)" }}>Last updated: 2025</p>
            <button className="px-6 py-2.5 bg-cobalt text-cream text-[11px] tracking-[0.2em] uppercase hover:bg-cobalt-800 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = { title: "Shop / Commissions" };

const products = [
  { title:"Classic Geometric Tile",  size:"15×15 cm",    price:"On request", cat:"Tiles",     avail:true,  img:"/images/kashikari-carved-tile-closeup.jpg" },
  { title:"Large Floor Tile Panel",  size:"30×30 cm",    price:"On request", cat:"Tiles",     avail:true,  img:"/images/wajid-drawing-tile-pattern.jpg" },
  { title:"Arabesque Vase — Small",  size:"20 cm height",price:"On request", cat:"Vessels",   avail:true,  img:"/images/kashikari-vessels-production.jpg" },
  { title:"Cobalt Calligraphy Vase", size:"40 cm height",price:"On request", cat:"Vessels",   avail:false, img:"/images/kashikari-calligraphy-vase.jpg" },
  { title:"Decorative Tabletop",     size:"30×40 cm",    price:"On request", cat:"Decorative",avail:true,  img:"/images/wajid-workshop-display.jpg" },
  { title:"Architectural Finial",    size:"Custom",      price:"On request", cat:"Architectural",avail:true,img:"/images/kashikari-architectural-pieces.jpg" },
];

function ImgPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,#1B3A6B,#0E1F3A)" }} />
      <div className="absolute inset-0 tile-pattern opacity-30" />
    </div>
  );
}

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop / Commissions"
        title="Acquire the Craft"
        description="Available works and bespoke commissions — each piece handcrafted in Multan using authentic red clay and centuries-old techniques."
      />

      {/* NOTICE */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <svg viewBox="0 0 16 16" className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor"><path d="M8 0L16 8L8 16L0 8Z"/></svg>
          <p className="text-charcoal-600 text-xs" style={{ fontFamily:"var(--font-inter)" }}>
            All pieces are handcrafted to order. Prices vary by size, complexity, and commission type. Please enquire for a quote.
          </p>
        </div>
      </div>

      {/* AVAILABLE WORKS */}
      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Available Works" title="Standard Pieces" description="Regularly produced works that can be ordered within 4–8 weeks." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={i} className={`group border transition-colors ${p.avail ? "border-cobalt/10 hover:border-gold/40" : "border-cobalt/5 opacity-60"}`}>
                <div className="aspect-square w-full relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-cobalt text-lg italic leading-snug" style={{ fontFamily:"var(--font-cormorant)" }}>{p.title}</h3>
                    {!p.avail && (
                      <span className="flex-shrink-0 text-[9px] tracking-[0.2em] uppercase bg-cobalt/5 text-stone px-2 py-1" style={{ fontFamily:"var(--font-inter)" }}>Enquire</span>
                    )}
                  </div>
                  <p className="text-stone text-[11px]" style={{ fontFamily:"var(--font-inter)" }}>{p.size} · {p.cat}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-cobalt text-sm font-medium" style={{ fontFamily:"var(--font-inter)" }}>{p.price}</span>
                    <a href="/contact" className="text-[10px] tracking-[0.2em] uppercase text-cobalt font-semibold inline-flex items-center gap-1.5 group/btn" style={{ fontFamily:"var(--font-inter)" }}>
                      Order <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION PROCESS */}
      <section className="py-28 bg-cobalt-900 relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern opacity-10" />
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Custom Commissions" title="The Commission Process" center light description="Every bespoke commission begins with a conversation. Here is how it works." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n:"01", title:"Initial Enquiry", desc:"Contact us with your vision — size, purpose, pattern preference, and timeline. We will respond within 3 working days." },
              { n:"02", title:"Design Consultation", desc:"Ustad Wajid discusses the design with you directly. A pattern proposal and material specification is prepared." },
              { n:"03", title:"Production", desc:"The piece is handcrafted in the family workshop. Red clay, hand-drawn pattern, oxide pigments, glaze, kiln firing. Typical lead time: 6–12 weeks." },
              { n:"04", title:"Delivery", desc:"The finished piece is carefully packaged and dispatched. For architectural installations, on-site fitting can be arranged within Multan." },
            ].map((s) => (
              <div key={s.n} className="relative">
                <p className="text-cream/10 text-6xl font-light leading-none mb-4" style={{ fontFamily:"var(--font-cormorant)" }}>{s.n}</p>
                <div className="w-6 h-0.5 bg-gold mb-4" />
                <h3 className="text-cream text-xl italic mb-2" style={{ fontFamily:"var(--font-cormorant)" }}>{s.title}</h3>
                <p className="text-cream/50 text-xs leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION FORM */}
      <section className="py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Place an Order" title="Commission Request" center description="Fill in the form below and Ustad Wajid's workshop will be in touch within 3 working days." />
          <form className="mt-12 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Full Name</label>
                <input type="text" className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-stone/50" style={{ fontFamily:"var(--font-inter)" }} placeholder="Your name" />
              </div>
              <div>
                <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Email Address</label>
                <input type="email" className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-stone/50" style={{ fontFamily:"var(--font-inter)" }} placeholder="your@email.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Piece Type</label>
                <select className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60" style={{ fontFamily:"var(--font-inter)" }}>
                  <option value="">Select type</option>
                  <option>Decorative Tile</option>
                  <option>Tile Panel (Architectural)</option>
                  <option>Vase / Vessel</option>
                  <option>Tabletop</option>
                  <option>Frame</option>
                  <option>Monument / Shrine Restoration</option>
                  <option>Other — describe below</option>
                </select>
              </div>
              <div>
                <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Approximate Size</label>
                <input type="text" className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-stone/50" style={{ fontFamily:"var(--font-inter)" }} placeholder="e.g. 30×30 cm, 40 cm tall" />
              </div>
            </div>
            <div>
              <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Commission Details</label>
              <textarea rows={5} className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-stone/50 resize-none" style={{ fontFamily:"var(--font-inter)" }} placeholder="Describe your vision — pattern preferences, colour palette, intended use, timeline, quantity required..." />
            </div>
            <button type="submit" className="w-full py-4 bg-cobalt text-cream text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-cobalt-800 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>
              Submit Commission Request
            </button>
            <p className="text-stone text-xs text-center" style={{ fontFamily:"var(--font-inter)" }}>We respond within 3 working days. All prices quoted on request.</p>
          </form>
        </div>
      </section>
    </>
  );
}

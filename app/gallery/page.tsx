"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const categories = ["All", "Tiles", "Vessels", "Architectural", "Heritage Restoration", "Decorative"];

const works = [
  // ── BLOCK 1 ───────────────────────────────────────────────────────────
  { title:"Drawing the Pattern",                  cat:"Tiles",               size:"large",  year:"2024", img:"/images/wajid-drawing-tile-pattern.jpg" },
  { title:"Carved Tile — Floral Motif",           cat:"Tiles",               size:"square", year:"2024", img:"/images/kashikari-carved-tile-closeup.jpg" },
  { title:"Hand in Red Clay",                     cat:"Tiles",               size:"square", year:"2024", img:"/images/wajid-workshop-reel.jpg" },
  // ── NEW 1 — Ubaid drawing in full workshop interior ───────────────────
  { title:"Ubaid at Work — Workshop Interior",    cat:"Heritage Restoration",size:"large",  year:"2024", img:"/images/ubaid-drawing-in-workshop.jpg" },
  { title:"Floral Tabletop Panel",                cat:"Decorative",          size:"square", year:"2023", img:"/images/multan-pottery-4.jpg" },
  { title:"Blue & White Handi Vase",              cat:"Vessels",             size:"square", year:"2022", img:"/images/multan-pottery-5.jpg" },
  // ── BLOCK 2 ───────────────────────────────────────────────────────────
  { title:"Ustad & Ubaid — Father and Son",       cat:"Heritage Restoration",size:"large",  year:"2024", img:"/images/wajid-ubaid-portrait.jpg" },
  { title:"Geometric Border Tile Strip",          cat:"Tiles",               size:"square", year:"2023", img:"/images/multan-pottery-3.jpg" },
  { title:"Classic Multani Blue Tile",            cat:"Tiles",               size:"square", year:"2021", img:"/images/multan-pottery-2.jpg" },
  // ── NEW 2 — Cobalt floral serving dish ────────────────────────────────
  { title:"Cobalt Floral Serving Dish",           cat:"Decorative",          size:"tall",   year:"2024", img:"/images/kashikari-floral-serving-dish.jpg" },
  { title:"Workshop — A Living Museum",           cat:"Architectural",       size:"wide",   year:"2023", img:"/images/wajid-workshop-display.jpg" },
  { title:"Geometric Star Tile",                  cat:"Tiles",               size:"square", year:"2024", img:"/images/kashikari-carved-tile-closeup.jpg" },
  { title:"Production — Three Stages",            cat:"Vessels",             size:"square", year:"2023", img:"/images/kashikari-vessels-production.jpg" },
  // ── BLOCK 3 ───────────────────────────────────────────────────────────
  { title:"Passing the Knowledge — 6th to 7th",  cat:"Heritage Restoration",size:"wide",   year:"2024", img:"/images/wajid-teaching-ubaid.jpg" },
  { title:"Calligraphy Vase — Cobalt & White",    cat:"Vessels",             size:"tall",   year:"2023", img:"/images/kashikari-calligraphy-vase.jpg" },
  // ── NEW 3 — Shrine gate with Kashikari tile archway ───────────────────
  { title:"Shrine Gate — Kashikari Tile Archway", cat:"Heritage Restoration",size:"wide",   year:"2020", img:"/images/shrine-gate-kashikari-tiles.jpg" },
  { title:"Shrine Restoration — Vase & Column",   cat:"Heritage Restoration",size:"large",  year:"2020", img:"/images/kashikari-vase-and-column.jpg" },
  { title:"Ustad Wajid at the Kiln",              cat:"Heritage Restoration",size:"tall",   year:"2019", img:"/images/wajid-at-kiln.jpg" },
  { title:"Cobalt Glazed Serving Dish",           cat:"Decorative",          size:"square", year:"2024", img:"/images/multan-pottery-4.jpg" },
  // ── NEW 4 — Calligraphy jar close-up ──────────────────────────────────
  { title:"Calligraphy Jar — Arabic Inscriptions",cat:"Vessels",             size:"square", year:"2023", img:"/images/kashikari-calligraphy-jar.jpg" },
  { title:"Cobalt Vase — Arabesque Series",       cat:"Vessels",             size:"square", year:"2021", img:"/images/multan-pottery-2.jpg" },
  // ── BLOCK 4 ───────────────────────────────────────────────────────────
  { title:"Portrait — Ustad Muhammad Wajid",     cat:"Heritage Restoration",size:"large",  year:"2021", img:"/images/wajid-kashigar-1.jpg" },
  { title:"Clay Tile Setting — Outdoor Workshop", cat:"Architectural",       size:"square", year:"2023", img:"/images/wajid-kashigar-2.jpg" },
  { title:"Eight-Pointed Star Tile Panel",        cat:"Tiles",               size:"square", year:"2022", img:"/images/multan-pottery-1.jpg" },
  // ── NEW 5 — Ubaid painting a dish ─────────────────────────────────────
  { title:"Ubaid — Painting a Ceremonial Dish",   cat:"Heritage Restoration",size:"tall",   year:"2024", img:"/images/ubaid-painting-dish.jpg" },
  { title:"Learning the Craft — Ubaid at Work",   cat:"Heritage Restoration",size:"large",  year:"2024", img:"/images/ubaid-learning-craft.jpg" },
  { title:"Architectural Finials & Tile Panels",  cat:"Architectural",       size:"square", year:"2022", img:"/images/kashikari-architectural-pieces.jpg" },
  // ── NEW 6 — Shah Rukn-e-Alam dome tiles (historic) ────────────────────
  { title:"Shah Rukn-e-Alam — Dome Tile Detail",  cat:"Heritage Restoration",size:"large",  year:"1985", img:"/images/shah-rukn-e-alam-dome-tiles.jpg" },
];

function ImgPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0" style={{ background:"linear-gradient(135deg,#1B3A6B,#0E1F3A)" }} />
      <div className="absolute inset-0 tile-pattern opacity-35" />
    </div>
  );
}

function aspectClass(size: string) {
  switch (size) {
    case "tall":  return "row-span-2";
    case "wide":  return "col-span-2";
    case "large": return "col-span-2 row-span-2";
    default:      return "";
  }
}

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Gallery & Portfolio"
        title="Works in Clay & Colour"
        description="Hand-drawn. Hand-painted. Kiln-fired. Each work is a conversation between ancient pattern and living hand."
      />

      {/* Filter bar */}
      <div className="sticky top-16 lg:top-20 z-40 bg-cream border-b border-cobalt/10 shadow-sm shadow-cobalt/5">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`flex-shrink-0 px-5 py-4 text-[10px] tracking-[0.2em] uppercase transition-all border-b-2 ${
                  active === c
                    ? "text-cobalt border-gold"
                    : "text-charcoal-600 border-transparent hover:text-cobalt hover:border-cobalt/20"
                }`}
                style={{ fontFamily:"var(--font-inter)" }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px] [grid-auto-flow:dense]">
            {filtered.map((w, i) => (
              <div key={i} className={`group relative overflow-hidden cursor-pointer ${aspectClass(w.size)}`}>
                {w.img
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={w.img} alt={w.title} className="absolute inset-0 w-full h-full object-cover" />
                  : <ImgPlaceholder />
                }
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cobalt-900/0 group-hover:bg-cobalt-900/70 transition-colors duration-300" />
                {/* Info on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gold text-[9px] tracking-[0.3em] uppercase mb-1" style={{ fontFamily:"var(--font-inter)" }}>{w.cat} · {w.year}</p>
                  <p className="text-cream text-base italic leading-snug" style={{ fontFamily:"var(--font-cormorant)" }}>{w.title}</p>
                  <p className="text-cream/50 text-[9px] tracking-wider uppercase mt-2" style={{ fontFamily:"var(--font-inter)" }}>Traditional Kashikari · Multan</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-stone text-sm" style={{ fontFamily:"var(--font-inter)" }}>No works in this category yet.</p>
            </div>
          )}

          <p className="mt-10 text-center text-stone text-xs" style={{ fontFamily:"var(--font-inter)" }}>
            Showing {filtered.length} of {works.length} works · Jan Muhammad Colony, Multan
          </p>
        </div>
      </section>

      {/* Commission CTA */}
      <section className="py-20 bg-cobalt">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gold/70 text-[10px] tracking-[0.4em] uppercase mb-4" style={{ fontFamily:"var(--font-inter)" }}>Own the Work</p>
          <h2 className="text-cream text-4xl italic font-light" style={{ fontFamily:"var(--font-cormorant)" }}>Commission a Bespoke Piece</h2>
          <p className="mt-4 text-cream/55 text-sm leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>Each commission is handcrafted to your specifications using authentic red clay and centuries-old techniques.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop" className="px-8 py-3.5 bg-gold text-cobalt-900 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-gold-400 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>Commission a Piece</a>
            <a href="/contact" className="px-8 py-3.5 border border-cream/25 text-cream text-[11px] tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors" style={{ fontFamily:"var(--font-inter)" }}>Ask a Question</a>
          </div>
        </div>
      </section>
    </>
  );
}

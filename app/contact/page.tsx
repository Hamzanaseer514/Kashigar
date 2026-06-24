import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Visit the workshop in Multan, enquire about commissions, or get in touch for press and collaboration enquiries."
      />

      <section className="py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 xl:gap-24">

            {/* FORM */}
            <div>
              <p className="text-gold text-[10px] tracking-[0.35em] uppercase mb-6" style={{ fontFamily:"var(--font-inter)" }}>Send a Message</p>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Name</label>
                    <input type="text" className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-stone/50" style={{ fontFamily:"var(--font-inter)" }} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Email</label>
                    <input type="email" className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-stone/50" style={{ fontFamily:"var(--font-inter)" }} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Subject</label>
                  <select className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60" style={{ fontFamily:"var(--font-inter)" }}>
                    <option value="">Select a subject</option>
                    <option>Commission / Order Enquiry</option>
                    <option>Workshop Booking</option>
                    <option>Press / Media</option>
                    <option>Research / Academic</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-cobalt text-[10px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily:"var(--font-inter)" }}>Message</label>
                  <textarea rows={6} className="w-full border border-cobalt/20 bg-transparent text-charcoal text-sm px-4 py-3 focus:outline-none focus:border-gold/60 placeholder:text-stone/50 resize-none" style={{ fontFamily:"var(--font-inter)" }} placeholder="Write your message here..." />
                </div>
                <button type="submit" className="w-full py-4 bg-cobalt text-cream text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-cobalt-800 transition-colors" style={{ fontFamily:"var(--font-inter)" }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* INFO */}
            <div className="space-y-8">
              {/* Workshop address */}
              <div>
                <p className="text-gold text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily:"var(--font-inter)" }}>The Workshop</p>
                <div className="bg-cobalt-900 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 tile-pattern opacity-10" />
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-6">
                      <svg viewBox="0 0 20 20" className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor"><path d="M10 0C6.13 0 3 3.13 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5S11.38 9.5 10 9.5z"/></svg>
                      <div>
                        <p className="text-cream text-sm font-medium" style={{ fontFamily:"var(--font-inter)" }}>Jan Muhammad Colony</p>
                        <p className="text-cream/60 text-xs mt-1 leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>Masoom Shah Road<br />Multan, Punjab<br />Pakistan</p>
                      </div>
                    </div>

                    <a
                      href="https://maps.app.goo.gl/TCQEmkAjhjVexEuP6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 border border-gold/30 text-gold text-[10px] tracking-[0.25em] uppercase text-center hover:border-gold hover:bg-gold/5 transition-colors"
                      style={{ fontFamily:"var(--font-inter)" }}
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative bg-cobalt aspect-video overflow-hidden">
                <div className="absolute inset-0 tile-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg viewBox="0 0 20 20" className="w-10 h-10 text-gold/40 mx-auto mb-2" fill="currentColor"><path d="M10 0C6.13 0 3 3.13 3 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S8.62 4.5 10 4.5s2.5 1.12 2.5 2.5S11.38 9.5 10 9.5z"/></svg>
                    <p className="text-cream/30 text-xs" style={{ fontFamily:"var(--font-inter)" }}>Multan, Pakistan</p>
                    <p className="text-cream/20 text-[10px] mt-1" style={{ fontFamily:"var(--font-inter)" }}>Map loading...</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-gold text-[10px] tracking-[0.35em] uppercase mb-4" style={{ fontFamily:"var(--font-inter)" }}>Follow the Craft</p>
                <a
                  href="https://www.instagram.com/ubaid_wajid_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:text-cobalt transition-colors"
                >
                  <div className="w-10 h-10 bg-cobalt/8 group-hover:bg-cobalt/15 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-cobalt" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal text-sm font-medium" style={{ fontFamily:"var(--font-inter)" }}>@ubaid_wajid_</p>
                    <p className="text-stone text-xs" style={{ fontFamily:"var(--font-inter)" }}>Ubaid Wajid Kashigar · Instagram</p>
                  </div>
                </a>
              </div>

              {/* Note */}
              <div className="border-t border-cobalt/10 pt-6">
                <p className="text-stone text-xs leading-relaxed" style={{ fontFamily:"var(--font-inter)" }}>
                  Workshop visits are by prior appointment only. Please write to us first. We respond to all enquiries within 3 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

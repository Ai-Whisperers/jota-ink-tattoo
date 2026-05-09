"use client"
import content from "@/content/es.json"
import Link from "next/link"

const c = content as any
const t = c.trabajo || {}
const cats = t.categories || []

export default function Trabajo() {
  return (
    <div>
      <section className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)" }}>
        <h1 className="text-4xl sm:text-5xl font-black mb-4"
          dangerouslySetInnerHTML={{ __html: t.hero?.headline }} />
        <p className="text-foreground/60 max-w-xl mx-auto">{t.hero?.subheadline}</p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {cats.map((cat: string, i: number) => (
            <span key={i} className="px-4 py-2 rounded-full border border-border text-sm text-foreground/70 hover:border-accent/50 hover:text-accent transition-all cursor-default">
              {cat}
            </span>
          ))}
        </div>

        <div className="text-center py-16">
          <div className="text-6xl mb-6">🎨</div>
          <p className="text-foreground/50 mb-8 max-w-lg mx-auto">{t.galleryPlaceholder}</p>
          <a href="https://www.instagram.com/jottaink_/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 font-semibold hover:opacity-90 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Ver en Instagram
          </a>
        </div>
      </section>
    </div>
  )
}

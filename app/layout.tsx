import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import content from "@/content/es.json"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://superspuma.paragu-ai.com"),
  title: { default: "Superspuma — Colchones y Sommiers", template: "%s | Superspuma" },
  description: "Colchones y sommiers en Paraguay. Fabricación propia. Envío a todo el país.",
  openGraph: { title: "Superspuma", description: "Colchones y sommiers.", locale: "es_PY", type: "website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        <meta name="theme-color" content="#1B3A5C" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}

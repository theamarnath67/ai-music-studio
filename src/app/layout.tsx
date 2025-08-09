import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Music Studio - Generate Music from Text',
  description: 'Create original music from text prompts using advanced AI technology. Generate melodies, beats, and complete songs instantly.',
  keywords: 'AI music generation, text to music, music creation, AI composer, music generator',
  authors: [{ name: 'AI Music Studio' }],
  openGraph: {
    title: 'AI Music Studio - Generate Music from Text',
    description: 'Create original music from text prompts using advanced AI technology.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

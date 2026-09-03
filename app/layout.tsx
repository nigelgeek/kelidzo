import type { Metadata } from 'next'
import { Fraunces, Work_Sans, Space_Mono } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-label',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kelidzo, Where Culture Lives.',
  description:
    'Kelidzo documents the people, stories, and culture of African and Black communities across Western Canada and the diaspora.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-cream font-body text-ink antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
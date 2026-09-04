'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import StampButton from './StampButton'

const mainNav = [
  { label: 'Stories', to: '/stories' },
  { label: 'Community', to: '/community' },
  { label: 'Opportunities', to: '/opportunities' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'About', to: '/about' },
  { label: 'Studio', to: '/studio' },
]

/**
 * Two-tier nav (Section 4): a slim utility row (socials, search,
 * newsletter) above the main nav row. "Work With Kelidzo" CTA is
 * visually distinct from the main nav links (Section 5).
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (to: string) => pathname === to

  return (
    <header className="border-b border-brown/20 bg-cream">
      {/* Utility row */}
      <div className="border-b border-brown/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4 font-label text-xs uppercase tracking-wider text-brown">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">X</a>
            <a href="#" className="hover:text-gold">YouTube</a>
          </div>
          <div className="flex items-center gap-4 font-label text-xs uppercase tracking-wider text-brown">
            <Link href="/search" className="hover:text-gold">Search</Link>
            <Link href="/#newsletter" className="hover:text-gold">Newsletter</Link>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight text-ink">
          Kelidzo
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={`font-label text-sm uppercase tracking-wider transition-colors ${
                isActive(item.to) ? 'text-gold' : 'text-ink hover:text-gold'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <StampButton to="/contact" variant="secondary">
            Work With Kelidzo
          </StampButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="font-label text-sm uppercase tracking-wider text-ink lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-brown/10 bg-cream px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setMenuOpen(false)}
                className={`font-label text-sm uppercase tracking-wider ${
                  isActive(item.to) ? 'text-gold' : 'text-ink hover:text-gold'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <StampButton to="/contact" variant="secondary" className="mt-2">
              Work With Kelidzo
            </StampButton>
          </div>
        </nav>
      )}
    </header>
  )
}
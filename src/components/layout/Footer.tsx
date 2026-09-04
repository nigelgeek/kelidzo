import Link from 'next/link'

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Stories', to: '/stories' },
      { label: 'Archive', to: '/archive' },
      { label: 'Community', to: '/community' },
      { label: 'Search', to: '/search' },
    ],
  },
  {
    title: 'Kelidzo',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Studio', to: '/studio' },
      { label: 'Programmes', to: '/programmes' },
      { label: 'Opportunities', to: '/opportunities' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact', to: '/contact' },
      { label: 'Newsletter', to: '/#newsletter' },
      { label: 'Instagram', to: '/contact' },
      { label: 'X', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/contact' },
      { label: 'Terms', to: '/contact' },
      { label: 'Accessibility', to: '/contact' },
    ],
  },
]

/**
 * Footer, four link columns (Explore / Kelidzo / Connect / Legal)
 * + socials (Section 5). Includes the compact newsletter variant.
 */
export default function Footer() {
  return (
    <footer className="border-t border-brown/20 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl font-semibold text-ink">
              Kelidzo
            </Link>
            <p className="mt-3 font-label text-xs uppercase tracking-wider text-brown">
              Where Culture Lives.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-label text-xs uppercase tracking-widest text-brown">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.to}
                      className="font-body text-sm text-ink hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-brown/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-label text-xs uppercase tracking-wider text-brown">
            © 2026 Kelidzo. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-label text-xs uppercase tracking-wider text-brown">
            <Link href="/contact" className="hover:text-gold">Privacy</Link>
            <Link href="/contact" className="hover:text-gold">Terms</Link>
            <Link href="/contact" className="hover:text-gold">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
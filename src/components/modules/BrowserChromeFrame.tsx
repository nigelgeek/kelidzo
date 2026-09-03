import type { ReactNode } from 'react'

interface BrowserChromeFrameProps {
  url: string
  children: ReactNode
}

/**
 * Browser-chrome frame, reserved ONLY for Studio/Selected Work
 * screenshots, never used elsewhere (Section 3).
 */
export default function BrowserChromeFrame({ url, children }: BrowserChromeFrameProps) {
  return (
    <div className="border border-brown/30 bg-cream-deep">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-brown/20 bg-cream px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-brown/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-brown/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-brown/40" />
        <span className="ml-3 flex-1 truncate border border-brown/20 bg-cream px-3 py-1 font-label text-xs text-brown">
          {url}
        </span>
      </div>
      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  )
}
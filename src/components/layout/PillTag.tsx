import type { ReactNode } from 'react'

interface PillTagProps {
  children: ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}

/**
 * Pill tag, bordered pill for categories everywhere (Section 3).
 * Never inline comma-separated lists; always a pill.
 */
export default function PillTag({
  children,
  active = false,
  onClick,
  className = '',
}: PillTagProps) {
  const base = 'pill'
  const state = active
    ? 'border-gold text-gold'
    : 'border-brown/40 text-brown hover:border-gold hover:text-gold'

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} ${state} cursor-pointer ${className}`}
      >
        {children}
      </button>
    )
  }

  return <span className={`${base} ${state} ${className}`}>{children}</span>
}
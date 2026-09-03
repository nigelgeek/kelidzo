import { useMemo } from 'react'

interface FolioLabelProps {
  /** The current section number, e.g. 4 */
  current: number
  /** The total number of sections on the template, e.g. 11 */
  total: number
  label?: string
  className?: string
}

/**
 * Folio label, printed-dossier-style number (Section 3).
 * Auto-incrementing per page/section via props rather than hardcoded.
 */
export default function FolioLabel({
  current,
  total,
  label,
  className = '',
}: FolioLabelProps) {
  const padded = useMemo(
    () => String(current).padStart(2, '0'),
    [current],
  )
  const paddedTotal = useMemo(
    () => String(total).padStart(2, '0'),
    [total],
  )

  return (
    <span className={`folio-label ${className}`}>
      {label ? `${label}, ` : ''}
      {padded} / {paddedTotal}
    </span>
  )
}
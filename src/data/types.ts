// ============================================================
// Kelidzo content types.
// NOTE: All content in src/data/ is clearly-placeholder mock
// data. Replace with real editorial content before launch.
// ============================================================

export type PillarName =
  | 'Culture'
  | 'Community'
  | 'Creativity'
  | 'Conversation'
  | 'Opportunity'

export interface Author {
  name: string
  avatar: string // placeholder portrait description / image path
  role?: string
}

export interface Story {
  id: string
  slug: string
  title: string
  dek: string
  excerpt: string
  image: string
  imageAlt: string
  pillar: PillarName
  author: Author
  publishedAt: string
  readTime: string
}

export interface Pillar {
  name: PillarName
  description: string
  folio: string
}

export interface Opportunity {
  id: string
  slug: string
  title: string
  type: string // e.g. "Grant", "Commission", "Call"
  deadline: string
  org: string
  description: string
}

export interface Programme {
  id: string
  slug: string
  title: string
  type: string // e.g. "Workshop", "Residency", "Series"
  date: string
  format: string // e.g. "In person", "Online", "Hybrid"
  description: string
}

export type ArchiveKind = 'interview' | 'photo' | 'story' | 'event'

export interface ArchiveItem {
  id: string
  slug: string
  title: string
  kind: ArchiveKind
  place: string
  year: string
  topic: string
  image: string
  imageAlt: string
}

export interface Contributor {
  name: string
  avatar: string
  role: string
}
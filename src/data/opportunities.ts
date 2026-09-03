import type { Opportunity } from './types'

// ============================================================
// PLACEHOLDER OPPORTUNITIES, replace with real editorial
// content before launch. Orgs are generic stand-ins.
// ============================================================
export const opportunities: Opportunity[] = [
  {
    id: 'o1',
    slug: 'documentary-grant',
    title: 'Documentary Production Grant',
    type: 'Grant',
    deadline: '2026-10-01',
    org: 'Western Canada Arts Fund',
    description:
      'Up to $15,000 for documentary projects that centre under-documented stories from the diaspora.',
  },
  {
    id: 'o2',
    slug: 'first-voice-commission',
    title: 'First Voice Commission',
    type: 'Commission',
    deadline: '2026-09-15',
    org: 'Kelidzo Studio',
    description:
      'A paid commission for a first-time writer or photographer to produce a feature for the archive.',
  },
  {
    id: 'o3',
    slug: 'community-residency',
    title: 'Community Residency',
    type: 'Residency',
    deadline: '2026-11-01',
    org: 'Neighbourhood Arts Collective',
    description:
      'A six-week residency embedded in a community kitchen, documenting the people who feed the block.',
  },
  {
    id: 'o4',
    slug: 'oral-history-call',
    title: 'Oral History Recording Call',
    type: 'Call',
    deadline: '2026-09-30',
    org: 'Archive of Voices',
    description:
      'We are accepting nominations of elders whose stories should be recorded before they are lost.',
  },
  {
    id: 'o5',
    slug: 'young-makers-fund',
    title: 'Young Makers Fund',
    type: 'Grant',
    deadline: '2026-12-01',
    org: 'Youth Culture Trust',
    description:
      'Micro-grants for young makers aged 16–25 to start a project, a zine, or a first exhibition.',
  },
]
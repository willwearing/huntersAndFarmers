import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { PreviewCards } from '@/components/sections/PreviewCards'

const stats = [
  { value: 'Australia-wide', label: 'National search capability' },
  { value: '16+ Roles', label: 'Individual contributor to leadership' },
  { value: 'Sales + RevOps', label: 'Commercial hiring focus' },
  { value: 'Brief to shortlist', label: 'Structured hiring process' },
]

const previewCards = [
  {
    title: 'For Employers',
    description: 'See the role coverage, hiring process, and support model for commercial teams.',
    href: '/employers',
  },
  {
    title: 'Our Services',
    description: 'Review permanent, retained, and bespoke recruitment options.',
    href: '/services',
  },
  {
    title: 'Contact',
    description: 'Book a call and align on your role requirements.',
    href: '/contact',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <Stats stats={stats} />
      <PreviewCards cards={previewCards} />
    </>
  )
}

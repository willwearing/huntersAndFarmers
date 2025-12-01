import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { PreviewCards } from '@/components/sections/PreviewCards'

const stats = [
  { value: '16+', label: 'Sales Roles We Recruit' },
  { value: 'All Levels', label: 'From Admin to Director' },
  { value: 'Sales Experience', label: 'Our Consultants Know Sales' },
  { value: 'Simple & Effective', label: 'Focused on What Works' },
]

const previewCards = [
  {
    title: 'Who We Are',
    description: 'Learn about our mission, values, and the people behind our success.',
    href: '/about',
  },
  {
    title: 'What We Do',
    description: 'Discover our approach, services, and how we deliver value.',
    href: '/services',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team to learn more.',
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


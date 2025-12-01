import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { PreviewCards } from '@/components/sections/PreviewCards'

const stats = [
  { value: '35+', label: 'Years of Evolution' },
  { value: '$81BN+', label: 'AUM' },
  { value: '6,400+', label: 'Employees Globally' },
  { value: '140+', label: 'Employee Locations' },
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


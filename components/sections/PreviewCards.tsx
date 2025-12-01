import Link from 'next/link'
import { Card } from '@/components/ui/card'

interface PreviewCard {
  title: string
  description: string
  href: string
}

interface PreviewCardsProps {
  cards: PreviewCard[]
}

export function PreviewCards({ cards }: PreviewCardsProps) {
  return (
    <section className="py-section px-6">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Link key={index} href={card.href}>
              <Card className="border border-neutral-200 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-h3 font-semibold mb-3 text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-body text-neutral-600">
                  {card.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


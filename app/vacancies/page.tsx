import type { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Current Vacancies | Hunters and Farmers',
  description: 'View current sales roles we\'re recruiting. Register your ideal role if you don\'t see a match.',
}

const vacancies = [
  {
    title: 'Sales Executive',
    location: 'Melbourne',
    compensation: '$85,000 plus super plus comms',
    sector: 'Logistics',
  },
  {
    title: 'Business Development Manager',
    location: 'S.E Melbourne',
    compensation: '$100,000 - $120,000 plus super plus comms',
    sector: 'FMCG',
  },
  {
    title: 'Account Manager',
    location: 'Melbourne',
    compensation: 'Uncapped comms',
    sector: 'Logistics',
  },
]

export default function VacanciesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-section-lg px-6">
        <div className="mx-auto max-w-content">
          <h1 className="text-h1 font-semibold text-neutral-900">
            Current roles we're recruiting
          </h1>
          <p className="mt-6 max-w-3xl text-body-lg text-neutral-600">
            If you can't see a vacancy that interests you, register your ideal role and we will be in touch.
          </p>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vacancies.map((vacancy, index) => (
              <Card
                key={index}
                className="border border-neutral-200 p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-h3 font-semibold mb-4 text-neutral-900">
                  {vacancy.title}
                </h3>
                <div className="space-y-2 text-body text-neutral-700">
                  <p>
                    <span className="font-medium">Location:</span> {vacancy.location}
                  </p>
                  <p>
                    <span className="font-medium">Compensation:</span> {vacancy.compensation}
                  </p>
                  <p>
                    <span className="font-medium">Sector:</span> {vacancy.sector}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


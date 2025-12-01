import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Hunters and Farmers',
  description: 'Learn about Hunters and Farmers - simple, effective recruitment focused on connecting great sales professionals with businesses.',
}

const roles = [
  'Sales Director',
  'National Sales Manager',
  'State Sales Manager',
  'Field Sales Manager',
  'Channel Sales Manager',
  'New Business Sales Manager',
  'Account Executive',
  'Sales Executive',
  'Account Manager',
  'Business Development Manager',
  'Sales Consultant',
  'National Account Manager',
  'Key Account Manager',
  'Sales Engineer',
  'Sales Representative',
  'Territory / Area Manager',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-section-lg px-6">
        <div className="mx-auto max-w-content">
          <h1 className="text-h1 font-semibold text-neutral-900">
            About us
          </h1>
          <p className="mt-6 max-w-3xl text-body-lg text-neutral-600 leading-relaxed">
            At Hunters and Farmers, we keep recruitment simple, effective, and focused on what works. We're not here to reinvent the wheel – we're here to connect great sales professionals with businesses.
          </p>
          <p className="mt-4 max-w-3xl text-body-lg text-neutral-600 leading-relaxed">
            With experience recruiting across all levels, from Sales Administrators to Sales Directors, we're well placed to be able to assist you in finding what you need, be that your next position or your next hire.
          </p>
          <p className="mt-4 max-w-3xl text-body-lg text-neutral-600 leading-relaxed">
            What sets us apart is that our consultants have worked in sales roles themselves, so they know firsthand what it takes to succeed in the field. This real-world insight, combined with proven recruitment expertise, allows us to deliver a straightforward, consultative service.
          </p>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-content">
          <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
            What We Recruit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((role) => (
              <div key={role} className="text-body text-neutral-700">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


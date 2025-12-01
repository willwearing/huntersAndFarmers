import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Hunters and Farmers',
  description: 'Discover our recruitment services: Permanent Search, Retained Search, and Bespoke Recruitment Solutions.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-section-lg px-6">
        <div className="mx-auto max-w-content">
          <h1 className="text-h1 font-semibold text-neutral-900">
            Our Services
          </h1>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-content">
          <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
            Permanent Search
          </h2>
          <p className="max-w-3xl text-body-lg text-neutral-600 leading-relaxed mb-8">
            This is our most common recruitment process and enables us to fully understand what you require in your next hire and allows you to know how we will find the top talent you require.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-h3 font-semibold mb-4 text-neutral-900">
                Discovery
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed mb-2">
                In understanding your organisation, we'll:
              </p>
              <ul className="max-w-3xl text-body text-neutral-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Examine your organisation's history, mission, vision, strategy, structure, and culture, identifying the specific challenges and opportunities relevant to both the organisation and the role.</li>
                <li>Define your needs, provide new perspectives, and challenge assumptions where appropriate.</li>
                <li>Create tailored candidate specifications, including detailed job descriptions.</li>
                <li>Confirm the search strategy, scope, and parameters, and agree on target candidates and timelines.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 font-semibold mb-4 text-neutral-900">
                Identification
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed mb-2">
                To pinpoint suitable permanent talent, we'll:
              </p>
              <ul className="max-w-3xl text-body text-neutral-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Carry out focused research and sourcing using our existing talent network, complemented by market mapping to uncover passive candidates.</li>
                <li>Promote the role across digital job boards, industry-specific websites, and social media to attract and engage active job seekers.</li>
                <li>Present a long-list candidate report for your review.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 font-semibold mb-4 text-neutral-900">
                Screening
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed mb-2">
                In evaluating identified prospects, we'll:
              </p>
              <ul className="max-w-3xl text-body text-neutral-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Screen candidates to evaluate their experience and suitability for the role.</li>
                <li>Invite qualified candidates for in-person interviews to assess technical skills, behavioural competencies, motivations, and cultural fit.</li>
                <li>Perform preliminary background checks on shortlisted permanent candidates.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 font-semibold mb-4 text-neutral-900">
                Review and Assessment
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed mb-2">
                Once we've narrowed down our selection, we'll:
              </p>
              <ul className="max-w-3xl text-body text-neutral-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Present short-listed candidates with a full breakdown of the screening process.</li>
                <li>Help you with the selection of the candidates for interview</li>
                <li>Provide each candidate with an interview briefing package</li>
                <li>Coordinate all interviews</li>
                <li>Attend panel interviews, if requested</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 font-semibold mb-4 text-neutral-900">
                Hiring
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed mb-2">
                When you've chosen your preferred new team member, we'll:
              </p>
              <ul className="max-w-3xl text-body text-neutral-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Finalise all pre-employment checks</li>
                <li>Facilitate offer negotiations</li>
                <li>Confirm the commencement date and help the candidate through their resignation process and notice period</li>
                <li>Advise unsuccessful candidates with honest and detailed feedback</li>
              </ul>
            </div>

            <div>
              <h3 className="text-h3 font-semibold mb-4 text-neutral-900">
                Commencing and review
              </h3>
              <p className="max-w-3xl text-body text-neutral-700 leading-relaxed mb-2">
                To ensure a successful integration, we'll:
              </p>
              <ul className="max-w-3xl text-body text-neutral-700 leading-relaxed space-y-2 list-disc list-inside">
                <li>Prepare the candidate to start their new role</li>
                <li>Check in with them regularly whilst they work their notice period.</li>
                <li>Remain in contact with both you and your successful candidate for six months after commencement to ensure effective integration into the role</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-content">
          <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
            Retained Search
          </h2>
          <p className="max-w-3xl text-body text-neutral-700 leading-relaxed">
            Our Retained Search service provides a dedicated and prioritised approach to securing the right talent for critical roles. By working exclusively with you, we commit the time and resources needed to conduct a thorough, tailored search, ensuring access to the highest-quality candidates in the market. Regular sourcing updates and reviews throughout the process ensure that you see the entire market and what suits your needs best.
          </p>
        </div>
      </section>

      <section className="py-section px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-content">
          <h2 className="text-h2 font-semibold mb-6 text-neutral-900">
            Bespoke Recruitment Solutions
          </h2>
          <p className="max-w-3xl text-body text-neutral-700 leading-relaxed">
            Our Bespoke Recruitment Solutions are designed to give you flexibility and choice beyond traditional search methods. Whether you require project-based hiring, talent mapping, market insights, or a tailored recruitment campaign, we build solutions around your specific needs. By combining industry expertise, innovative sourcing strategies, and a consultative approach, we deliver the outcomes that you require. Our consultants have experience in mass recruitment campaigns, executive search and through tailored recruitment campaigns, with their finger on the pulse in the market they can provide accurate and up to date market analysis and insights.
          </p>
        </div>
      </section>
    </div>
  )
}


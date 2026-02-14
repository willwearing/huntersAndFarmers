import Link from 'next/link'
import { GradientBackground } from '@/components/ui/GradientBackground'

const roleGroups = [
  {
    title: 'New business & growth roles',
    roles: ['SDR', 'BDR', 'Account Executive', 'Business Development Manager', 'Territory Manager'],
  },
  {
    title: 'Account growth & retention roles',
    roles: ['Account Manager', 'Key Account Manager', 'Customer Success Manager', 'National Account Manager'],
  },
  {
    title: 'Leadership & enablement roles',
    roles: ['Sales Manager', 'State Sales Manager', 'Head of Sales', 'Sales Director', 'Revenue Operations Manager'],
  },
]

export default function EmployersPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 px-6 overflow-hidden border-b border-surface-800">
        <GradientBackground variant="section" />
        <div className="relative z-10 mx-auto max-w-content">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">For employers</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-surface-50 max-w-3xl">
            Australia-wide sales recruitment built around hiring outcomes
          </h1>
          <p className="mt-6 text-lg text-surface-300 max-w-3xl font-body leading-relaxed">
            We partner with hiring managers and founders to run clear, structured searches for revenue teams.
            Our consultants have worked in sales, so we focus on role-fit, commercial impact, and speed-to-hire.
          </p>
          <div className="mt-10">
            <Link
              href="https://calendly.com/huntersandfarmers"
              className="inline-flex items-center rounded-xl bg-accent px-6 py-3 text-white font-semibold hover:shadow-glow transition-all"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface-900 border-b border-surface-800">
        <div className="mx-auto max-w-content">
          <h2 className="text-3xl font-bold text-surface-50">Role coverage beyond SDR / AE / AM</h2>
          <p className="mt-4 text-surface-400 max-w-3xl">
            We support full-funnel hiring plans, from first sales hires through to senior leadership and RevOps.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {roleGroups.map((group) => (
              <article key={group.title} className="rounded-xl border border-surface-700 bg-surface-800/50 p-6">
                <h3 className="text-lg font-semibold text-surface-100">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-surface-300 font-body">
                  {group.roles.map((role) => (
                    <li key={role} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/70" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface-950">
        <div className="mx-auto max-w-content">
          <h2 className="text-3xl font-bold text-surface-50">Explore hiring by market and role</h2>
          <p className="mt-4 text-surface-400 max-w-3xl">
            We&apos;re building location and role hubs to help employers benchmark requirements and hiring timelines.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/employers/australia" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">
              Australia sales recruitment
            </Link>
            <Link href="/employers/australia/sydney" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">
              Sydney sales recruitment
            </Link>
            <Link href="/employers/australia/sales-manager-recruitment" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">
              Sales Manager recruitment
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

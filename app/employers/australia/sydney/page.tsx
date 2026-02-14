import Link from 'next/link'

export default function SydneySalesRecruitmentPage() {
  return (
    <main className="min-h-screen px-6 py-28 bg-surface-900">
      <article className="mx-auto max-w-content">
        <p className="text-sm uppercase tracking-wider text-accent">Employers · Sydney</p>
        <h1 className="mt-4 text-4xl font-bold text-surface-50">Sales Recruitment in Sydney</h1>
        <p className="mt-6 text-surface-300 max-w-3xl leading-relaxed font-body">
          Sydney employers often need a mix of enterprise account executives, mid-market hunters, and experienced account
          managers. We help define role scorecards and run targeted searches for commercial hires in the Sydney market.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-surface-100">Common hiring needs</h2>
        <ul className="mt-4 space-y-2 text-surface-300 font-body">
          <li>• New business AEs for SaaS and technology services</li>
          <li>• Account growth roles for existing customer portfolios</li>
          <li>• Sales Managers to lift team execution and forecast quality</li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/employers/australia" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Australia hub</Link>
          <Link href="/employers/australia/sales-manager-recruitment" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Sales Manager recruitment</Link>
          <Link href="/contact" className="rounded-lg border border-accent/70 px-4 py-2 text-surface-100">Book a hiring brief call</Link>
        </div>
      </article>
    </main>
  )
}

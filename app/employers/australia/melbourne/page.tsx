import Link from 'next/link'

export default function MelbourneSalesRecruitmentPage() {
  return (
    <main className="min-h-screen px-6 py-28 bg-surface-900">
      <article className="mx-auto max-w-content">
        <p className="text-sm uppercase tracking-wider text-accent">Employers · Melbourne</p>
        <h1 className="mt-4 text-4xl font-bold text-surface-50">Sales Recruitment in Melbourne</h1>
        <p className="mt-6 text-surface-300 max-w-3xl leading-relaxed font-body">
          We help Melbourne companies hire revenue talent across new business, account growth, and sales leadership. We run structured briefs and targeted searches that prioritize hiring speed and fit.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/employers/australia" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Australia hub</Link>
          <Link href="/employers/australia/account-executive-recruitment" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Account Executive recruitment</Link>
          <Link href="/contact" className="rounded-lg border border-accent/70 px-4 py-2 text-surface-100">Book a hiring brief call</Link>
        </div>
      </article>
    </main>
  )
}

import Link from 'next/link'

export default function SalesManagerRecruitmentPage() {
  return (
    <main className="min-h-screen px-6 py-28 bg-surface-950">
      <article className="mx-auto max-w-content">
        <p className="text-sm uppercase tracking-wider text-accent">Employers · Role page</p>
        <h1 className="mt-4 text-4xl font-bold text-surface-50">Sales Manager Recruitment Australia</h1>
        <p className="mt-6 text-surface-300 max-w-3xl leading-relaxed font-body">
          Hiring a Sales Manager requires more than tenure checks. We assess leadership style, coaching cadence,
          forecast discipline, and ability to lift team performance in your sales motion.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-surface-100">What we evaluate</h2>
        <ul className="mt-4 space-y-2 text-surface-300 font-body">
          <li>• Team leadership in hunter, farmer, or hybrid environments</li>
          <li>• Pipeline management, forecasting, and deal coaching quality</li>
          <li>• Hiring and onboarding capability for scaling teams</li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/employers" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">For Employers</Link>
          <Link href="/employers/australia" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Australia hub</Link>
          <Link href="/employers/australia/sydney" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Sydney hub</Link>
          <Link href="https://calendly.com/huntersandfarmers" className="rounded-lg border border-accent/70 px-4 py-2 text-surface-100">Book a call</Link>
        </div>
      </article>
    </main>
  )
}

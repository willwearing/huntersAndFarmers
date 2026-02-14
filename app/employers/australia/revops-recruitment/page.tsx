import Link from 'next/link'

export default function RevOpsRecruitmentPage() {
  return (
    <main className="min-h-screen px-6 py-28 bg-surface-950">
      <article className="mx-auto max-w-content">
        <p className="text-sm uppercase tracking-wider text-accent">Employers · Role page</p>
        <h1 className="mt-4 text-4xl font-bold text-surface-50">RevOps Recruitment Australia</h1>
        <p className="mt-6 text-surface-300 max-w-3xl leading-relaxed font-body">
          We recruit RevOps professionals who can improve data hygiene, forecasting reliability, process handoffs, and tooling adoption across the revenue engine.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/employers/australia" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Australia hub</Link>
          <Link href="/employers/australia/perth" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Perth hiring</Link>
          <Link href="https://calendly.com/willwearing" className="rounded-lg border border-accent/70 px-4 py-2 text-surface-100">Book a call</Link>
        </div>

        <section className="mt-16 rounded-xl border border-surface-800 bg-surface-900/50 p-6">
          <h2 className="text-xl font-semibold text-surface-100">Ready to hire?</h2>
          <p className="mt-2 text-surface-300 font-body">Book a quick call and we can align on role scope, timeline, and the shortlist approach.</p>
          <div className="mt-4">
            <Link href="https://calendly.com/willwearing" className="inline-flex rounded-lg border border-accent/70 px-4 py-2 text-surface-100">Book a call</Link>
          </div>
        </section>
      </article>
    </main>
  )
}

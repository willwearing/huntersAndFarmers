import Link from 'next/link'

export default function AustraliaSalesRecruitmentPage() {
  return (
    <main className="min-h-screen px-6 py-28 bg-surface-950">
      <article className="mx-auto max-w-content">
        <p className="text-sm uppercase tracking-wider text-accent">Employers · Australia</p>
        <h1 className="mt-4 text-4xl font-bold text-surface-50">Sales Recruitment Australia</h1>
        <p className="mt-6 text-surface-300 max-w-3xl leading-relaxed font-body">
          Hunters & Farmers supports employers hiring sales talent across Australia. We work on individual contributor,
          management, and leadership mandates with a practical brief-first process.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-surface-100">Typical mandates</h2>
        <ul className="mt-4 space-y-2 text-surface-300 font-body">
          <li>• Growth hiring: SDR, BDR, Account Executive, BDM</li>
          <li>• Expansion hiring: Account Manager, Key Account Manager, Customer Success</li>
          <li>• Leadership hiring: Sales Manager, Head of Sales, Sales Director, RevOps</li>
        </ul>

        <h2 className="mt-12 text-2xl font-semibold text-surface-100">Related pages</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/employers" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">For Employers</Link>
          <Link href="/employers/australia/sydney" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Sydney</Link>
          <Link href="/employers/australia/melbourne" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Melbourne</Link>
          <Link href="/employers/australia/brisbane" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Brisbane</Link>
          <Link href="/employers/australia/perth" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Perth</Link>
          <Link href="/employers/australia/adelaide" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Adelaide</Link>
          <Link href="/employers/australia/sales-manager-recruitment" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Sales Manager recruitment</Link>
          <Link href="/employers/australia/account-executive-recruitment" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Account Executive recruitment</Link>
          <Link href="/employers/australia/bdr-recruitment" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">BDR recruitment</Link>
          <Link href="/employers/australia/revops-recruitment" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">RevOps recruitment</Link>
          <Link href="/employers/australia/customer-success-manager-recruitment" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">CSM recruitment</Link>
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

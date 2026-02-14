import Link from 'next/link'

export default function AccountExecutiveRecruitmentPage() {
  return (
    <main className="min-h-screen px-6 py-28 bg-surface-950">
      <article className="mx-auto max-w-content">
        <p className="text-sm uppercase tracking-wider text-accent">Employers · Role page</p>
        <h1 className="mt-4 text-4xl font-bold text-surface-50">Account Executive Recruitment Australia</h1>
        <p className="mt-6 text-surface-300 max-w-3xl leading-relaxed font-body">
          We recruit Account Executives across SMB, mid-market, and enterprise motions with role-specific scorecards for pipeline creation, close quality, and deal discipline.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/employers/australia" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Australia hub</Link>
          <Link href="/employers/australia/melbourne" className="rounded-lg border border-surface-700 px-4 py-2 text-surface-200 hover:border-accent/60">Melbourne hiring</Link>
          <Link href="https://calendly.com/huntersandfarmers" className="rounded-lg border border-accent/70 px-4 py-2 text-surface-100">Book a hiring brief call</Link>
        </div>
      </article>
    </main>
  )
}

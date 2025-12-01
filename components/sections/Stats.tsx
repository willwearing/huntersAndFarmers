interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-section px-6 bg-neutral-50">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-stat font-bold text-neutral-900">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


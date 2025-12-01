interface Stat {
  value: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-12 px-6 bg-neutral-50">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-h2 font-bold text-neutral-900">
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


export default function TestDesignPage() {
  return (
    <div className="min-h-screen py-section-xl px-6">
      <div className="mx-auto max-w-container">
        <h1 className="text-hero font-semibold text-neutral-900 mb-6">
          Design System Test
        </h1>

        <div className="space-y-section">
          <section>
            <h2 className="text-h2 font-semibold mb-4">Typography</h2>
            <p className="text-hero font-semibold">Hero (72px)</p>
            <p className="text-h1 font-semibold">H1 (48px)</p>
            <p className="text-h2 font-semibold">H2 (36px)</p>
            <p className="text-h3 font-semibold">H3 (24px)</p>
            <p className="text-body-lg">Body Large (18px)</p>
            <p className="text-body">Body (16px)</p>
            <p className="text-small">Small (14px)</p>
            <p className="text-stat font-bold">Stat (64px)</p>
          </section>

          <section>
            <h2 className="text-h2 font-semibold mb-4">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-neutral-50 p-4 border border-neutral-200">
                <p className="text-xs">neutral-50</p>
              </div>
              <div className="bg-neutral-100 p-4 border border-neutral-200">
                <p className="text-xs">neutral-100</p>
              </div>
              <div className="bg-neutral-900 p-4 text-white">
                <p className="text-xs">neutral-900</p>
              </div>
              <div className="bg-accent-500 p-4 text-white">
                <p className="text-xs">accent-500</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-h2 font-semibold mb-4">Spacing</h2>
            <div className="space-y-4">
              <div className="bg-neutral-100 p-section border border-neutral-200">
                <p>Section spacing (96px)</p>
              </div>
              <div className="bg-neutral-100 p-section-lg border border-neutral-200">
                <p>Section large (128px)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


export function RhythmDividers() {
  return (
    <>
      {/* Top soft divider */}
      <div aria-hidden className="pointer-events-none relative h-16 sm:h-24">
        <div className="absolute inset-x-0 -top-10 h-24 sm:h-28 bg-gradient-to-b from-transparent via-white/5 to-white/10 opacity-[0.07]" />
      </div>

      {/* Mid dotted rhythm */}
      <div aria-hidden className="pointer-events-none">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="mt-4 grid grid-cols-12 gap-x-2 opacity-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-2 rounded-full bg-white/5" />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom soft divider */}
      <div aria-hidden className="pointer-events-none relative h-16 sm:h-24">
        <div className="absolute inset-x-0 -bottom-10 h-24 sm:h-28 bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-[0.07]" />
      </div>
    </>
  )
}

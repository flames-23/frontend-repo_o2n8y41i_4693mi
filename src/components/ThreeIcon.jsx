import React, { useEffect, useState, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

const LazySpline = React.lazy(() => import('@splinetool/react-spline'))

function Placeholder({ className = '' }) {
  return (
    <div className={`relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-black ${className}`}>
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(244,114,182,0.18), transparent 40%), radial-gradient(circle at 80% 30%, rgba(192,132,252,0.18), transparent 42%), radial-gradient(circle at 50% 80%, rgba(251,146,60,0.18), transparent 45%)'
      }} />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="rounded-lg bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-inset ring-white/10">3D preview unavailable</div>
      </div>
    </div>
  )
}

export default function ThreeIcon({ scene, className = '' }) {
  const [canLoad, setCanLoad] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let abort = false
    async function check() {
      try {
        if (!scene) throw new Error('No scene URL provided')
        // HEAD request to detect CORS/403 without downloading full asset
        const res = await fetch(scene, { method: 'HEAD' })
        if (!abort) {
          setCanLoad(res.ok)
          setChecked(true)
        }
      } catch {
        if (!abort) {
          setCanLoad(false)
          setChecked(true)
        }
      }
    }
    check()
    return () => { abort = true }
  }, [scene])

  if (!checked) {
    // Skeleton while we decide if we can load
    return (
      <div className={`relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 animate-pulse ${className}`} />
    )
  }

  if (!canLoad) {
    return <Placeholder className={className} />
  }

  return (
    <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur ${className}`}>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-pink-500/5 to-violet-500/10 blur-2xl" />
      <div className="relative aspect-square w-full transition-transform duration-500 will-change-transform group-hover:-translate-y-1 group-hover:rotate-1">
        <ErrorBoundary fallback={<Placeholder />}>
          <Suspense fallback={<Placeholder />}>
            <LazySpline scene={scene} style={{ width: '100%', height: '100%' }} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

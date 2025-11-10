import React, { useEffect, useState, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'

const LazySpline = React.lazy(() => import('@splinetool/react-spline'))

function Placeholder({ className = '', onRetry }) {
  return (
    <div className={`relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-900 to-black ${className}`}>
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(244,114,182,0.18), transparent 40%), radial-gradient(circle at 80% 30%, rgba(192,132,252,0.18), transparent 42%), radial-gradient(circle at 50% 80%, rgba(251,146,60,0.18), transparent 45%)'
      }} />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-inset ring-white/10">
          <span>3D preview unavailable</span>
          {onRetry && (
            <button onClick={onRetry} className="ml-2 rounded bg-white/10 px-2 py-0.5 text-[10px] text-white hover:bg-white/20">Retry</button>
          )}
        </div>
      </div>
    </div>
  )
}

async function probeScene(url) {
  // Be permissive: some CDNs block HEAD or respond as opaque for no-cors.
  try {
    const res = await fetch(url, { method: 'HEAD', mode: 'no-cors', cache: 'no-store' })
    // If we can verify it's okay, or it's opaque (cannot verify), allow render and rely on ErrorBoundary.
    if (res.ok) return { allow: true, reason: 'ok' }
    // opaque responses return ok=false but type==='opaque'
    // Treat as potentially loadable and let ErrorBoundary guard runtime issues.
    if (res.type === 'opaque') return { allow: true, reason: 'opaque' }
    // Some servers disallow HEAD
    if (res.status === 405) return { allow: true, reason: 'head-not-allowed' }
    if (res.status && res.status >= 200 && res.status < 400) return { allow: true, reason: 'status-pass' }
    return { allow: false, reason: `status-${res.status}` }
  } catch (e) {
    // Network/CORS errors: allow and rely on ErrorBoundary
    return { allow: true, reason: 'catch-allow' }
  }
}

export default function ThreeIcon({ scene, className = '' }) {
  const [decision, setDecision] = useState({ checked: false, allow: false })
  const [retryKey, setRetryKey] = useState(0)

  useEffect(() => {
    let active = true
    async function run() {
      if (!scene) {
        if (active) setDecision({ checked: true, allow: false })
        return
      }
      const result = await probeScene(scene)
      if (active) setDecision({ checked: true, allow: result.allow })
    }
    run()
    return () => { active = false }
    // retryKey forces re-probe when user clicks Retry
  }, [scene, retryKey])

  if (!decision.checked) {
    // Skeleton while we decide if we can load
    return (
      <div className={`relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 animate-pulse ${className}`} />
    )
  }

  if (!decision.allow) {
    return <Placeholder className={className} onRetry={() => setRetryKey(k => k + 1)} />
  }

  return (
    <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur ${className}`}>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-pink-500/5 to-violet-500/10 blur-2xl" />
      <div className="relative aspect-square w-full transition-transform duration-500 will-change-transform group-hover:-translate-y-1 group-hover:rotate-1">
        <ErrorBoundary fallback={<Placeholder onRetry={() => setRetryKey(k => k + 1)} />}>
          <Suspense fallback={<Placeholder onRetry={() => setRetryKey(k => k + 1)} />}>
            <LazySpline key={retryKey} scene={scene} style={{ width: '100%', height: '100%' }} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

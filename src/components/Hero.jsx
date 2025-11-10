import React, { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ErrorBoundary from './ErrorBoundary'

const LazySpline = React.lazy(() => import('@splinetool/react-spline'))

function SplineSafe({ scene, className = '' }) {
  const [canLoad, setCanLoad] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let abort = false
    async function check() {
      try {
        if (!scene) throw new Error('No scene URL provided')
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

  if (!checked) return <div className={`h-full w-full ${className}`} />
  if (!canLoad) return null

  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <LazySpline scene={scene} style={{ width: '100%', height: '100%' }} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      {/* Background 3D scene shifted right for balance */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
            <SplineSafe scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
          </div>
        </div>
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl py-28 lg:py-0">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-pink-200 ring-1 ring-inset ring-white/20 backdrop-blur">
              1-Month Beginner Program
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(255,0,122,0.35)]">
              <span className="text-white">Activate </span>
              <span className="bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">Activator</span>
              <span className="text-white">: Decode DSA. No fear, just code.</span>
            </h1>

            <p className="mt-4 text-lg text-violet-100/90">
              The perfect starting point for anyone who wants to conquer Data Structures and Algorithms from scratch.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <form className="lg:col-span-2 bg-black/40 backdrop-blur rounded-xl p-4 ring-1 ring-white/10 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input placeholder="Your name" className="w-full rounded-md border border-white/10 bg-white/5 text-white placeholder:text-white/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" />
                  <input placeholder="Email" type="email" className="w-full rounded-md border border-white/10 bg-white/5 text-white placeholder:text-white/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" />
                  <input placeholder="Phone" className="w-full rounded-md border border-white/10 bg-white/5 text-white placeholder:text-white/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60" />
                  <select className="w-full rounded-md border border-white/10 bg-white/5 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60">
                    <option className="bg-gray-900">Preferred slot</option>
                    <option className="bg-gray-900">Weekday Evenings</option>
                    <option className="bg-gray-900">Weekend Mornings</option>
                  </select>
                </div>
                <button type="button" className="mt-4 w-full rounded-md bg-gradient-to-r from-rose-600 via-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-black hover:brightness-110">
                  Start Your Journey
                </button>
              </form>

              <div className="flex items-center lg:items-start">
                <a href="#what" className="text-pink-300 font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
          </div>

          {/* Right floating 3D badge animation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [20, -10, 20], opacity: 1 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-64 w-64"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-rose-500/20 via-fuchsia-500/10 to-violet-500/20 blur-3xl rounded-full" />
              <div className="relative h-full w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur overflow-hidden">
                <SplineSafe scene="https://prod.spline.design/0a7s7bJ1F8NgWmqa/scene.splinecode" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 bg-fuchsia-500/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 bg-orange-500/20 rounded-full blur-3xl" />
    </section>
  )
}

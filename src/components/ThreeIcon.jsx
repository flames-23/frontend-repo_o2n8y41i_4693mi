import Spline from '@splinetool/react-spline'

export default function ThreeIcon({ scene, className = '' }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur ${className}`}>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-pink-500/5 to-violet-500/10 blur-2xl" />
      <div className="relative aspect-square w-full transition-transform duration-500 will-change-transform group-hover:-translate-y-1 group-hover:rotate-1">
        <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  )
}

import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Problem', href: '#problem' },
    { label: 'What is Activator', href: '#what' },
    { label: "Curriculum", href: '#curriculum' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Leap Program', href: '#leap' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-pink-500/10 to-violet-500/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 via-rose-500 to-fuchsia-500 ring-1 ring-white/20" />
            <span className="font-semibold text-white">Activator</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#enroll" className="ml-4 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-rose-600 via-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500">
              <Sparkles size={16} /> Enroll
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-white/5 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-gray-200">
                {item.label}
              </a>
            ))}
            <a href="#enroll" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-rose-600 via-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-black shadow-sm">
              <Sparkles size={16} /> Enroll
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

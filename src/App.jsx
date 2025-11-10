import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ProblemSection, WhatIsSection, CurriculumSection, TestimonialsSection, LeapSection, CTASection } from './components/Sections'

function App() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WhatIsSection />
        <CurriculumSection />
        <TestimonialsSection />
        <LeapSection />
        <CTASection />
      </main>
      <footer className="py-10 text-center text-sm text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} Activator. All rights reserved.
      </footer>
    </div>
  )
}

export default App

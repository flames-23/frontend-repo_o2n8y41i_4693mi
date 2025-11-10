import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ProblemSection, WhatIsSection, CurriculumSection, TestimonialsSection, LeapSection, CTASection } from './components/Sections'

function App() {
  return (
    <div className="bg-white text-gray-900">
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
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Activator. All rights reserved.
      </footer>
    </div>
  )
}

export default App

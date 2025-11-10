import { CheckCircle2, Layers, Map, Binary, Rocket, Users, ListChecks, Sparkles, Quote } from 'lucide-react'

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-transparent to-white" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Feel like DSA is a mountain you can't climb?</h2>
            <p className="mt-4 text-gray-700">You're not alone. The world of Data Structures and Algorithms can feel overwhelming, full of complex terms and daunting problems. Many students and new coders feel stuck, intimidated, and unsure where to even begin. We built Activator for you.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-black/5 p-8 bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <Map className="text-indigo-600" />
                <span className="font-semibold">From maze to map</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">We turn the tangled mess of concepts into a clear, guided path.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhatIsSection() {
  const bullets = [
    { icon: Sparkles, title: 'Zero to Hero', desc: 'Start from the absolute basics, no prior DSA knowledge required.' },
    { icon: Layers, title: 'Visual Learning', desc: 'See how data structures work with intuitive diagrams and animations.' },
    { icon: ListChecks, title: 'Hands-On Practice', desc: 'Solve beginner-friendly problems designed to build your confidence.' },
    { icon: Users, title: 'Expert Guidance', desc: 'Learn from experienced instructors who understand your struggles.' },
  ]

  return (
    <section id="what" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Activator: Your First Step. Your Solid Foundation.</h2>
            <p className="mt-4 text-gray-700">Activator is a comprehensive, beginner-friendly program designed to demystify DSA. We break down the most essential concepts into bite-sized, easy-to-understand modules. We don't just teach you the theory; we activate your problem-solving skills with hands-on practice.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {bullets.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-black/5 p-5 bg-white shadow-sm">
                  <div className="flex items-center gap-3">
                    <Icon className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-black/5 p-8 bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <Binary className="text-indigo-600" />
                <span className="font-semibold">We make concepts click</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">Animations, visuals, and progressive practice make it stick.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CurriculumSection() {
  const items = [
    { title: 'Arrays & Strings', desc: 'The bedrock of data storage.' },
    { title: 'Linked Lists', desc: 'The dynamic duo of data structures.' },
    { title: 'Stacks & Queues', desc: 'Master the LIFO and FIFO principles.' },
    { title: 'Basic Searching & Sorting', desc: 'Find and organize data efficiently.' },
    { title: 'Time & Space Complexity', desc: "Analyze performance without intimidation." },
    { title: 'Introduction to Recursion', desc: 'Unravel the power of functions calling themselves.' },
  ]

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-gray-900">From Arrays to Linked Lists: Your Curriculum.</h2>
          <a href="#syllabus" className="text-indigo-700 font-semibold hover:underline">View Full Syllabus</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-black/5 p-6 bg-gradient-to-br from-white to-slate-50 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600">
                <CheckCircle2 />
                <h3 className="font-semibold text-gray-900">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'I was terrified of DSA. Activator made me realize I could do it. The way they explain everything is so simple and clear.',
      name: 'Aarav Sharma',
      subtitle: 'IIIT Hyderabad'
    },
    {
      quote: 'Before Activator, I just memorized code. Now, I actually understand the logic and can solve problems on my own. My confidence has skyrocketed.',
      name: 'Priya Patel',
      subtitle: 'Junior Developer'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Hear from Activated Coders.</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/5 p-6 bg-white shadow-sm">
              <Quote className="text-indigo-600" />
              <p className="mt-4 text-gray-800">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(t.name)}`} alt={t.name} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function LeapSection() {
  return (
    <section id="leap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Ready for the next level?</h2>
            <p className="mt-4 text-gray-700">Activator is your powerful launchpad. Once you master the fundamentals, you'll be ready to take the Leap. Our advanced program is designed for serious aspirants aiming for top-tier tech jobs, with challenging coursework and assured placements after training.</p>
            <a href="#leap-program" className="mt-6 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">Explore the Leap Program</a>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-black/5 p-8 bg-white shadow-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <Rocket className="text-indigo-600" />
                <span className="font-semibold">Launch with confidence</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">We prepare you for the real world with projects and mentorship.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section id="enroll" className="py-20 bg-gradient-to-tr from-indigo-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Activate Your Coding Potential Today.</h2>
        <p className="mt-4 text-gray-700">Join the community of coders building a strong foundation.</p>
        <a href="#home" className="mt-6 inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">Enroll in Activator</a>
      </div>
    </section>
  )
}

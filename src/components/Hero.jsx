import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-inset ring-black/5 backdrop-blur">
              1-Month Beginner Program
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Activator: Decode DSA. No fear, just code.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              The perfect starting point for anyone who wants to conquer Data Structures and Algorithms from scratch.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <form className="lg:col-span-2 bg-white/80 backdrop-blur rounded-xl p-4 ring-1 ring-black/5 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input placeholder="Your name" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <input placeholder="Email" type="email" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <input placeholder="Phone" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <select className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Preferred slot</option>
                    <option>Weekday Evenings</option>
                    <option>Weekend Mornings</option>
                  </select>
                </div>
                <button type="button" className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
                  Start Your Journey
                </button>
              </form>

              <div className="flex items-center lg:items-start">
                <a href="#what" className="text-indigo-700 font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
    </section>
  )
}

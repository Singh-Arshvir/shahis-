import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden mt-20"
    >
      {/* Background Image */}
      <img
        src="./img1.jpeg"
        alt="Shahi Engineers"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-[#ff8c00] font-semibold mb-6">
            We Design Your Dreams
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            Shahi Engineers
            <br />& Architects
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8 max-w-xl">
            We provide innovative architecture, engineering solutions and
            construction management tailored to your vision.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-[#ff8c00] hover:bg-orange-600 px-8 py-4 rounded font-semibold text-white transition">
              HIRE US
            </button>

            <button className="border border-white hover:border-[#ff8c00] hover:bg-[#ff8c00] px-8 py-4 rounded font-semibold text-white transition">
              VIEW PROJECTS
            </button>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-[#ff8c00] hover:border-[#ff8c00] transition">
        <ChevronRight />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        <span className="w-8 h-2 rounded-full bg-[#ff8c00]"></span>
        <span className="w-2 h-2 rounded-full bg-white/50"></span>
        <span className="w-2 h-2 rounded-full bg-white/50"></span>
      </div>
    </section>
  )
}

import {
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  Users,
} from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: <BriefcaseBusiness size={28} />,
      number: '8+',
      title: 'Years Experience',
    },
    {
      icon: <Building2 size={28} />,
      number: '120+',
      title: 'Projects Completed',
    },
    {
      icon: <HeartHandshake size={28} />,
      number: '50+',
      title: 'Happy Clients',
    },
    {
      icon: <Users size={28} />,
      number: '15+',
      title: 'Expert Team',
    },
  ]

  return (
    <section id="about" className="bg-[#0f0f0f] text-white py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div>
          <p className="uppercase tracking-[3px] text-[#ff8c00] font-semibold text-sm">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mt-4">
            Designing Spaces,
            <br />
            Building Futures
          </h2>

          <p className="text-gray-400 mt-8 leading-8 text-lg">
            Shahi Engineers & Architects is a multidisciplinary firm
            specializing in architecture, structural engineering, interior
            design and construction management. We create sustainable,
            functional and inspiring spaces that combine innovation with
            precision.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-12">
            {stats.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="text-[#ff8c00]">{item.icon}</div>

                <div>
                  <h3 className="text-2xl font-bold">{item.number}</h3>

                  <p className="text-gray-400 text-sm mt-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 border border-[#ff8c00] text-[#ff8c00] hover:bg-[#ff8c00] hover:text-white transition px-8 py-3 rounded-md font-semibold">
            KNOW MORE
          </button>
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <img
              src="../public/extracted_assets/about.png"
              alt="About Shahi Engineers"
              className="w-full h-[600px] object-cover hover:scale-105 duration-500"
            />
          </div>

          {/* Decorative Border */}
          <div className="absolute -top-5 -right-5 w-full h-full border border-[#ff8c00]/30 rounded-lg -z-10"></div>
        </div>
      </div>
    </section>
  )
}

import {
  PencilRuler,
  Building2,
  Hammer,
  Sofa,
  Compass,
  Landmark,
} from 'lucide-react'

const services = [
  {
    icon: <PencilRuler size={42} />,
    title: 'Architectural Design',
    description:
      'Modern, innovative and sustainable architectural solutions tailored to residential and commercial projects.',
  },
  {
    icon: <Building2 size={42} />,
    title: 'Structural Engineering',
    description:
      'Safe and efficient structural designs ensuring durability, stability and compliance with engineering standards.',
  },
  {
    icon: <Hammer size={42} />,
    title: 'Construction',
    description:
      'Complete construction services from planning to execution with premium quality workmanship.',
  },
  {
    icon: <Sofa size={42} />,
    title: 'Interior Design',
    description:
      'Elegant interior spaces combining aesthetics, functionality and comfort for every project.',
  },
  {
    icon: <Compass size={42} />,
    title: 'Planning & Consultancy',
    description:
      'Professional consultation, feasibility studies and project planning for successful developments.',
  },
  {
    icon: <Landmark size={42} />,
    title: 'Renovation',
    description:
      'Modern renovation and remodeling services that transform existing spaces into inspiring environments.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#161616] text-white py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[3px] text-[#ff8c00] font-semibold text-center">
          Our Services
        </p>

        <h2 className="text-center text-4xl lg:text-5xl font-bold mt-4">
          What We Offer
        </h2>

        <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto leading-8">
          We provide complete architectural and engineering solutions with
          innovation, precision and excellence to deliver projects that exceed
          expectations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#1d1d1d] p-8 rounded-xl border border-gray-800 hover:border-[#ff8c00] transition duration-300"
            >
              <div className="text-[#ff8c00] mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-7">{service.description}</p>

              <a
                className="mt-8 text-[#ff8c00] font-semibold hover:translate-x-2 transition"
                href="#gallery"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

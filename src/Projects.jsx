import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    image: '/img2.jpeg',
    title: 'Luxury Villa',
    category: 'Residential',
  },
  {
    image: '/img3.jpeg',
    title: 'Corporate Office',
    category: 'Commercial',
  },
  {
    image: '/img4.jpeg',
    title: 'Modern Apartment',
    category: 'Architecture',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#101010] text-white py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[3px] text-[#ff8c00] font-semibold">
            Featured Projects
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Our Latest Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Every project reflects our commitment to quality, creativity, and
            engineering excellence. Explore some of our recent architectural and
            construction achievements.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/70 transition duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-12 group-hover:translate-y-0 transition duration-500">
                <span className="inline-block bg-[#ff8c00] text-white text-xs px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>

                    <p className="text-gray-300 mt-2">View Project Details</p>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-[#ff8c00] flex items-center justify-center">
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <a
            className="border border-[#ff8c00] text-[#ff8c00] px-8 py-4 rounded-lg font-semibold hover:bg-[#ff8c00] hover:text-white transition duration-300"
            href="#contact"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  )
}

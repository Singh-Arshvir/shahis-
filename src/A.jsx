import { Mail, MapPin, Phone } from 'lucide-react'
export default function A() {
  return (
    <footer className="bg-[#0b0b0b] text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.svg"
                alt="Shahi Engineers"
                className="w-12 h-12"
              />

              <div>
                <h2 className="text-2xl font-bold">SHAHI</h2>

                <p className="text-xs tracking-[3px] text-gray-400 uppercase">
                  Engineers & Architects
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-7">
              We specialize in architecture, engineering, construction and
              interior design with a commitment to quality, innovation and
              client satisfaction.
            </p>

            <div className="flex gap-4 mt-8"></div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#home" className="hover:text-[#ff8c00] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#ff8c00] transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#ff8c00] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-[#ff8c00] transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#ff8c00] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Services</h3>

            <ul className="space-y-4 text-gray-400">
              <li>Architecture Design</li>

              <li>Structural Engineering</li>

              <li>Construction</li>

              <li>Interior Design</li>

              <li>Project Consultancy</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone className="text-[#ff8c00]" size={20} />

                <p className="text-gray-400">+91 98765 43210</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-[#ff8c00]" size={20} />

                <p className="text-gray-400">info@shahiengineers.com</p>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-[#ff8c00]" size={20} />

                <p className="text-gray-400">Punjab, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Shahi Engineers & Architects. All
            Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#ff8c00] transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#ff8c00] transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

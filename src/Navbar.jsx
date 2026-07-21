import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import './index.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0d0d0d]/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.jpeg" alt="Shahi Engineers" className="w-11 h-11" />

            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">
                SHAHI
              </h1>
              <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
                Engineers & Architects
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className="text-[#ff8c00] font-semibold text-sm transition"
            >
              HOME
            </a>

            <a
              href="#about"
              className="text-white hover:text-[#ff8c00] text-sm"
            >
              ABOUT
            </a>

            <div className="group relative">
              <button className="flex items-center gap-1 text-white hover:text-[#ff8c00] text-sm">
                SERVICES
                <ChevronDown size={15} />
              </button>

              <div className="absolute top-8 left-0 hidden group-hover:block bg-[#161616] rounded shadow-xl overflow-hidden w-52 border border-gray-700">
                <a className="block px-5 py-3 hover:bg-[#ff8c00] hover:text-black text-white">
                  Architecture Design
                </a>
                <a className="block px-5 py-3 hover:bg-[#ff8c00] hover:text-black text-white">
                  Structural Design
                </a>
                <a className="block px-5 py-3 hover:bg-[#ff8c00] hover:text-black text-white">
                  Construction
                </a>
                <a className="block px-5 py-3 hover:bg-[#ff8c00] hover:text-black text-white">
                  Interior Design
                </a>
              </div>
            </div>

            <a
              href="projects"
              className="text-white hover:text-[#ff8c00] text-sm"
            >
              PROJECTS
            </a>

            <a
              href="#gallery"
              className="text-white hover:text-[#ff8c00] text-sm"
            >
              GALLERY
            </a>

            <a
              href="#Contact"
              className="text-white hover:text-[#ff8c00] text-sm"
            >
              CONTACT
            </a>
          </nav>

          {/* Hire Us Button */}
          <div className="hidden lg:block">
            <button className="bg-[#ff8c00] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition">
              HIRE US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[500px] py-5' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-5 text-white">
            <a className="text-[#ff8c00]">HOME</a>
            <a href="about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#projects">PROJECTS</a>
            <a href="#gallery">GALLERY</a>
            <a href="#contact">CONTACT</a>

            <button className="mt-2 bg-[#ff8c00] py-3 rounded font-semibold">
              HIRE US
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

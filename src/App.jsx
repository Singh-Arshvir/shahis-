import React, { useState } from "react";

/* ================= APP ROOT ================= */
export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

/* ================= HEADER ================= */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <h1 className="text-2xl font-bold text-white">SHAHI ARCHITECTS</h1>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="lg:hidden text-gray-300 hover:text-white transition"
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <nav className="hidden lg:flex items-center space-x-6 font-medium text-gray-300">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden border-t border-gray-800 bg-black/95 px-6 py-4`}> 
        <nav className="space-y-3 text-center font-medium text-gray-300">
          <a href="#hero" className="block hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" className="block hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#projects" className="block hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="block hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

/* ================= HERO (VIDEO BACKGROUND) ================= */
function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen w-full overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./assets/video.mp4" // replace with your own video
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center md:text-left max-w-3xl px-6">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          Innovative Architecture
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight text-white">
          Designing Spaces <br /> That Inspire
        </h1>
        <p className="mt-6 text-gray-200 text-lg">
          Shahi Architects delivers modern and sustainable architectural solutions with precision, creativity, and quality.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-green-400 hover:bg-green-300 text-black px-6 py-3 rounded font-semibold transition transform hover:scale-105 text-center"
          >
            Schedule a Consultation
          </a>
          <a
            href="#projects"
            className="border border-gray-500 hover:border-white px-6 py-3 rounded font-semibold transition transform hover:scale-105 text-center text-white"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  const services = [
    { title: "Architecture Design", img: "https://picsum.photos/300/200?random=11" },
    { title: "Interior Design", img: "https://picsum.photos/300/200?random=12" },
    { title: "Urban Planning", img: "https://picsum.photos/300/200?random=13" },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto py-20 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">Our Services</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="w-full max-w-sm flex-1 min-w-[240px] bg-gray-900 p-6 rounded-lg hover:shadow-xl transition"
          >
            <img src={s.img} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="font-semibold text-xl">{s.title}</h3>
            <p className="text-gray-400 mt-2">
              Creative, modern, and sustainable solutions for your projects.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= PROJECTS ================= */
function Projects() {
  const projects = [
    "./assets/img1.jpeg",
    "./assets/img2.jpeg",
    "./assets/img3.jpeg",
    "./assets/img4.jpeg",
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">Our Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
        {projects.map((img, i) => (
          <img key={i} src={img} className="w-full h-60 object-cover rounded-lg shadow-lg" />
        ))}
      </div>
    </section>
  );
}

/* ================= CONTACT (Formspree) ================= */
function Contact() {
  const [status, setStatus] = useState(""); // "" | "SUCCESS" | "ERROR"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xpqoqlva", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border border-gray-700 p-3 rounded bg-transparent text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border border-gray-700 p-3 rounded bg-transparent text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border border-gray-700 p-3 rounded bg-transparent text-white"
          rows="6"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-black font-semibold px-6 py-3 rounded transition transform hover:scale-105"
        >
          Send Message
        </button>

        {/* SUCCESS / ERROR MESSAGES */}
        {status === "SUCCESS" && (
          <p className="text-green-400 mt-4 font-semibold">Thank you! Your message has been sent.</p>
        )}
        {status === "ERROR" && (
          <p className="text-red-400 mt-4 font-semibold">Oops! Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="text-gray-500 text-center py-6 border-t border-gray-800">
      © 2025 Shahi Architects — All Rights Reserved
    </footer>
  );
}
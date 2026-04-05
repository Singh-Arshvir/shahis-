import React, { useState } from "react";

/* ================= APP ================= */
export default function App() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-white min-h-screen">
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800">
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        <h1 className="text-2xl font-bold">SHAHI ARCHITECTS</h1>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-xl">
          ☰
        </button>

        <nav className="hidden lg:flex gap-6 text-gray-300">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden text-center pb-4">
          <a href="#hero" className="block py-2">Home</a>
          <a href="#services" className="block py-2">Services</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&auto=format&fit=crop"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Designing Spaces That Inspire
        </h1>
        <p className="mt-6 text-gray-300">
          Modern architecture with creativity & sustainability.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="#services" className="bg-blue-500 px-6 py-3 rounded hover:scale-105 transition">
            Get Started
          </a>
          <a href="#projects" className="border px-6 py-3 rounded hover:bg-white hover:text-black transition">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  const [selected, setSelected] = useState(null);

  const services = [
    {
      title: "Architecture Design",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop",
      desc: "Modern architectural designs with creativity and precision.",
    },
    {
      title: "Interior Design",
      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&auto=format&fit=crop",
      desc: "Stylish and functional interior spaces tailored to your needs.",
    },
    {
      title: "Urban Planning",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop",
      desc: "Smart city planning with sustainable layouts.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center text-blue-400 mb-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            onClick={() => setSelected(s)}
            className="cursor-pointer bg-white/5 backdrop-blur p-6 rounded-xl border border-gray-800 hover:scale-105 transition"
          >
            <img src={s.img} className="rounded mb-4 h-48 w-full object-cover" />
            <h3 className="text-xl">{s.title}</h3>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <img src={selected.img} className="rounded mb-4" />
            <h3 className="text-xl font-semibold">{selected.title}</h3>
            <p className="text-gray-400 mt-2">{selected.desc}</p>
          </>
        )}
      </Modal>
    </section>
  );
}

/* ================= PROJECTS ================= */
function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
  ];

  return (
    <section id="projects" className="bg-black py-20 px-6 md:px-10">
      <h2 className="text-3xl text-center text-blue-400 mb-10">
        Our Projects
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className="cursor-pointer rounded-lg hover:scale-105 transition"
          />
        ))}
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        <img src={selected} className="rounded mb-4" />
        <p className="text-gray-400">
          Premium architecture project with modern design.
        </p>
      </Modal>
    </section>
  );
}

/* ================= MODAL ================= */
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

      <div className="relative bg-gray-900 p-6 rounded-xl w-[90%] max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xpqoqlva", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setStatus("SUCCESS");
      e.target.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl text-center text-blue-400 mb-8">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur p-8 rounded-xl border border-gray-800"
      >
        <input name="name" placeholder="Name" className="w-full mb-4 p-3 bg-black border border-gray-700 rounded" required />
        <input name="email" type="email" placeholder="Email" className="w-full mb-4 p-3 bg-black border border-gray-700 rounded" required />
        <textarea name="message" placeholder="Message" className="w-full mb-4 p-3 bg-black border border-gray-700 rounded"></textarea>

        <button className="bg-blue-500 px-6 py-3 rounded hover:scale-105 transition">
          Send Message
        </button>

        {status === "SUCCESS" && <p className="text-green-400 mt-4">Message sent!</p>}
        {status === "ERROR" && <p className="text-red-400 mt-4">Error occurred.</p>}
      </form>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
      © 2026 Shahi Architects
    </footer>
  );
}
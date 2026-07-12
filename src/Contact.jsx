import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111111] text-white py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] text-[#ff8c00] font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Build Your Dream Project
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Whether you're planning a residential, commercial, or industrial
            project, our experts are here to help. Send us your requirements,
            and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}

          <div>
            <h3 className="text-3xl font-bold mb-10">Get In Touch</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-[#ff8c00] p-4 rounded-full">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Phone</h4>

                  <p className="text-gray-400 mt-1">+91 8872088177</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#ff8c00] p-4 rounded-full">
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Email</h4>

                  <p className="text-gray-400 mt-1">
                    <a href="mailto:erguri31@gmail.com">erguri31@.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#ff8c00] p-4 rounded-full">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Office</h4>

                  <p className="text-gray-400 mt-1">Punjab, India</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#ff8c00] p-4 rounded-full">
                  <Clock size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Working Hours</h4>

                  <p className="text-gray-400 mt-1">Monday - Saturday</p>

                  <p className="text-gray-400">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          <form
            action="https://formspree.io/f/xzdnpoll"
            method="POST"
            className="bg-[#1b1b1b] p-8 rounded-xl border border-gray-800 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="bg-[#252525] border border-gray-700 rounded-lg px-4 py-4 outline-none focus:border-[#ff8c00]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-[#252525] border border-gray-700 rounded-lg px-4 py-4 outline-none focus:border-[#ff8c00]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="bg-[#252525] border border-gray-700 rounded-lg px-4 py-4 outline-none focus:border-[#ff8c00]"
              />

              <select
                name="service"
                className="bg-[#252525] border border-gray-700 rounded-lg px-4 py-4 outline-none focus:border-[#ff8c00]"
              >
                <option value="">Select Service</option>
                <option>Architecture Design</option>
                <option>Structural Engineering</option>
                <option>Construction</option>
                <option>Interior Design</option>
                <option>Project Consultancy</option>
              </select>
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-4 outline-none focus:border-[#ff8c00]"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              required
              className="w-full bg-[#252525] border border-gray-700 rounded-lg px-4 py-4 outline-none resize-none focus:border-[#ff8c00]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#ff8c00] hover:bg-orange-600 transition duration-300 py-4 rounded-lg font-semibold text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

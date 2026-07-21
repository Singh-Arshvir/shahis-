import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './A.jsx'
import About from './About.jsx'
import './App.css'
import Contact from './Contact.jsx'
import Gallery from './Gallery.jsx'
import Home from './Home.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home />
    <About />
    <Services />
    <Projects />
    <Gallery />
    <Contact />
    <Footer />
  </StrictMode>
)

import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Mail, Menu, X } from 'lucide-react'
import { certifications } from './data/certifications'
import { experience } from './data/experience'
import { projects } from './data/projects'
import { skills } from './data/skills'
import { useActiveSection } from './hooks/useActiveSection'
import { About } from './components/About'
import { AdTech } from './components/AdTech'
import { Architecture } from './components/Architecture'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Chatbot } from './components/Chatbot'
import { DevOps } from './components/DevOps'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Modal } from './components/Modal'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const activeSection = useActiveSection()
  const shellRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [mobileMenuOpen])

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const shell = shellRef.current
    if (!shell) {
      return
    }

    shell.style.setProperty('--spot-x', `${event.clientX}px`)
    shell.style.setProperty('--spot-y', `${event.clientY}px`)
    shell.style.setProperty('--spot-opacity', '1')
  }

  const handlePointerLeave = () => {
    const shell = shellRef.current
    if (!shell) {
      return
    }

    shell.style.setProperty('--spot-opacity', '0')
  }

  return (
    <div ref={shellRef} className="app-shell" onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>
      <div className="app-backdrop" aria-hidden="true" />
      <div className="app-spotlight" aria-hidden="true" />
      <div className="app-orb app-orb-one" aria-hidden="true" />
      <div className="app-orb app-orb-two" aria-hidden="true" />
      <Navbar
        activeSection={activeSection}
        menuOpen={mobileMenuOpen}
        onMenuToggle={() => setMobileMenuOpen((open) => !open)}
        onNavigate={() => setMobileMenuOpen(false)}
      />

      <main>
        <Hero />
        <About />
        <Experience items={experience} />
        <Skills categories={skills} />
        <Architecture />
        <Projects items={projects} onProjectOpen={setSelectedProject} />
        <AdTech />
        <DevOps />
        <Chatbot />
        <Certifications items={certifications} />
        <Education />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject ? <Modal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
      </AnimatePresence>

      <a className="floating-contact" href="#contact" aria-label="Jump to contact section">
        <Mail size={18} />
        <span>Hire Garvit</span>
        <ArrowUpRight size={16} />
      </a>

      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen((open) => !open)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
    </div>
  )
}

export default App

import { motion } from 'framer-motion'
import { ArrowUpRight, Menu } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

type NavbarProps = {
  activeSection: string
  menuOpen: boolean
  onMenuToggle: () => void
  onNavigate: () => void
}

export function Navbar({ activeSection, menuOpen, onMenuToggle, onNavigate }: NavbarProps) {
  return (
    <header className={`navbar ${activeSection !== 'home' ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a className="brand" href="#home" onClick={onNavigate} aria-label="Go to home section">
          GS
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onNavigate}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact" onClick={onNavigate}>
          Let&apos;s Connect <ArrowUpRight size={16} />
        </a>

        <motion.button
          type="button"
          className="nav-toggle"
          whileTap={{ scale: 0.94 }}
          onClick={onMenuToggle}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <Menu size={18} />
        </motion.button>
      </div>
    </header>
  )
}
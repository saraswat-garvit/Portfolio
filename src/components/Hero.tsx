import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export function Hero() {
  return (
    <section id="home" className="hero section-first">
      <div className="hero-copy">
        <motion.span
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {profile.title}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
        >
          Hi, I&apos;m Garvit Saraswat.
        </motion.h1>
        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.6 }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span>{profile.experience}</span>
          <span>Building at {profile.currentCompany}</span>
          <span>Backend, Full Stack, Cloud & DevOps</span>
        </motion.div>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6 }}
        >
          {profile.heroTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a className="button button-primary" href="#projects">
            View My Work <ArrowRight size={16} />
          </a>
          <a className="button button-secondary" href="https://drive.google.com/uc?export=download&id=1JdutuPf_Ny7LCd20StPGE-Nz4BG_9e8T" download>
            Download CV <Download size={16} />
          </a>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.6 }}
        >
          {profile.social.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <Icon size={16} />
                {item.label}
              </a>
            )
          })}
        </motion.div>
      </div>

      <motion.div className="hero-visual" whileHover={{ rotateX: 2, rotateY: -2 }} transition={{ duration: 0.25 }}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="stack-root">
          <motion.div className="stack-node stack-center" animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}>
            <strong>{profile.name}</strong>
            <span>{profile.currentRole}</span>
          </motion.div>

          <div className="stack-node stack-left-top">
            <strong>Frontend</strong>
            <span>React.js · Angular</span>
          </div>

          <div className="stack-node stack-left-bottom">
            <strong>Backend</strong>
            <span>.NET · Node.js</span>
          </div>

          <div className="stack-node stack-right-top">
            <strong>Cloud</strong>
            <span>AWS · Azure</span>
          </div>

          <div className="stack-node stack-right-bottom">
            <strong>DevOps</strong>
            <span>Docker · Kubernetes · CI/CD</span>
          </div>

          <motion.div className="stack-connector stack-connector-v" animate={{ opacity: [0.55, 0.9, 0.55] }} transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY }} />
          <motion.div className="stack-connector stack-connector-h stack-connector-left" animate={{ opacity: [0.4, 0.85, 0.4] }} transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY }} />
          <motion.div className="stack-connector stack-connector-h stack-connector-right" animate={{ opacity: [0.4, 0.85, 0.4] }} transition={{ duration: 5.1, repeat: Number.POSITIVE_INFINITY }} />
        </div>
      </motion.div>
    </section>
  )
}
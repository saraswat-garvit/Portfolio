import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { Section } from './Section'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export function Contact() {
  const [status, setStatus] = useState('')

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="Have an opportunity, project or engineering problem to discuss?"
    >
      <div className="contact-layout">
        <div className="panel contact-links-panel">
          <div className="contact-links">
            {profile.social.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <Icon size={16} />
                  {link.label}
                </a>
              )
            })}
          </div>
          <p className="contact-note">
            {profile.name} is available for engineering conversations, product work and cloud-focused delivery.
          </p>
        </div>

        <motion.form
          className="panel contact-form"
          onSubmit={(event) => {
            event.preventDefault()
            setStatus('Form is ready for email/API integration.')
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <label>
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="Tell me about the opportunity or project..." />
          </label>
          <button type="submit" className="button button-primary">
            Send Message <span>→</span>
          </button>
          <p className="form-status" aria-live="polite">
            {status || 'Connect this form to your preferred email or API service.'}
          </p>
        </motion.form>
      </div>
    </Section>
  )
}
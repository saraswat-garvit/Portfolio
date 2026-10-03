import { motion } from 'framer-motion'
import { Section } from './Section'

type ExperienceItem = {
  company: string
  role: string
  period: string
  summary: string
  bullets: string[]
}

type ExperienceProps = {
  items: ExperienceItem[]
}

export function Experience({ items }: ExperienceProps) {
  return (
    <Section id="experience" eyebrow="Experience" title="Animated timeline of delivery">
      <div className="timeline">
        {items.map((item, index) => (
          <motion.article
            key={item.company}
            className="timeline-card panel"
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="timeline-marker" aria-hidden="true">
              <span />
            </div>
            <span className="timeline-period">{item.period}</span>
            <h3>{item.company}</h3>
            <strong>{item.role}</strong>
            <p>{item.summary}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
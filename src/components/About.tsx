import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering with purpose."
      description="Backend systems, full stack delivery, cloud-native operations, automation and AdTech engineering in one profile."
    >
      <div className="about-grid">
        <motion.div
          className="panel about-copy"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>
            Garvit Saraswat is a {profile.currentRole.toLowerCase()} at {profile.currentCompany} working across scalable backend
            services, polished frontend interfaces and delivery pipelines. The focus is on robust systems, clean APIs,
            cloud deployments and automation that makes engineering teams faster.
          </p>
        </motion.div>

        <div className="stats-grid">
          {profile.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="panel stat-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
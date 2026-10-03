import { motion } from 'framer-motion'
import { architectureSteps } from '../data/architecture'
import { Section } from './Section'

export function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="How I Build"
      title="Engineering architecture, not a text block"
      description="A system-style view of how frontend, APIs, data, containers and cloud layers connect together."
    >
      <div className="architecture-panel panel">
        {architectureSteps.map((step, index) => (
          <motion.div
            key={step}
            className="architecture-step"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
          >
            <div className="architecture-node">{String(index + 1).padStart(2, '0')}</div>
            <strong>{step}</strong>
            {index < architectureSteps.length - 1 ? <span className="architecture-line" aria-hidden="true" /> : null}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
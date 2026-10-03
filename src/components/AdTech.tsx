import { motion } from 'framer-motion'
import { Section } from './Section'

const flow = ['Request', 'AdTech API', 'Backend Services', 'Database', 'Processing', 'Response']
const techs = ['.NET', 'Node.js', 'SQL Server', 'MongoDB', 'RabbitMQ', 'SignalR']

export function AdTech() {
  return (
    <Section
      id="adtech"
      eyebrow="AdTech"
      title="Building at AdTech scale"
      description="A section with a different tone to reflect the scale, motion and throughput of ad-tech systems."
    >
      <div className="adtech-panel panel">
        <div className="adtech-flow">
          {flow.map((step, index) => (
            <motion.div
              key={step}
              className="adtech-step"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              {step}
            </motion.div>
          ))}
        </div>

        <div className="adtech-tech-row">
          {techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </Section>
  )
}
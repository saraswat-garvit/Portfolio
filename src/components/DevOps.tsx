import { motion } from 'framer-motion'
import { Section } from './Section'

const stages = ['CODE', 'BUILD', 'TEST', 'CONTAINERIZE', 'DEPLOY', 'MONITOR']
const platformTech = ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Azure DevOps', 'Linux', 'Python']

export function DevOps() {
  return (
    <Section
      id="devops"
      eyebrow="Cloud & DevOps"
      title="Dashboard-style delivery pipeline"
      description="A sequential pipeline that communicates build quality, release flow and operational discipline."
    >
      <div className="devops-layout">
        <div className="panel pipeline-panel">
          {stages.map((stage, index) => (
            <motion.div
              key={stage}
              className="pipeline-step"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{stage}</strong>
            </motion.div>
          ))}
        </div>

        <div className="platform-tech-grid">
          {platformTech.map((tech) => (
            <div key={tech} className="panel platform-tech-card">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
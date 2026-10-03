import { motion } from 'framer-motion'
import { Section } from './Section'

type CertificationsProps = {
  items: string[]
}

export function Certifications({ items }: CertificationsProps) {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Validated learning and platform breadth">
      <div className="cert-grid">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className="panel cert-card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
          >
            <span className="cert-index">0{index + 1}</span>
            <strong>{item}</strong>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
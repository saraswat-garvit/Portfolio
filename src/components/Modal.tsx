import { motion } from 'framer-motion'
import { X } from 'lucide-react'

type Project = {
  title: string
  description: string
  tags: string[]
  visual: string
  details: string[]
}

type ModalProps = {
  project: Project
  onClose: () => void
}

export function Modal({ project, onClose }: ModalProps) {
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="modal-card panel"
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>
        <span className="project-visual">{project.visual}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Section } from './Section'

type Project = {
  title: string
  description: string
  tags: string[]
  visual: string
  details: string[]
}

type ProjectsProps = {
  items: Project[]
  onProjectOpen: (project: Project) => void
}

export function Projects({ items, onProjectOpen }: ProjectsProps) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Interactive product cards"
      description="A curated set of technical work surfaces presented like a product portfolio, not a resume dump."
    >
      <div className="projects-grid">
        {items.map((project) => (
          <motion.button
            key={project.title}
            type="button"
            className="panel project-card"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onProjectOpen(project)}
          >
            <span className="project-visual">{project.visual}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="project-link">
              Explore <ArrowUpRight size={16} />
            </span>
          </motion.button>
        ))}
      </div>
    </Section>
  )
}
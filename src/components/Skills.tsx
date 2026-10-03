import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Section } from './Section'

type SkillItem = { name: string; description: string }
type SkillCategory = { category: string; items: SkillItem[] }

type SkillsProps = {
  categories: SkillCategory[]
}

export function Skills({ categories }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const displayedCategories = useMemo(
    () => (activeCategory === 'All' ? categories : categories.filter((category) => category.category === activeCategory)),
    [activeCategory, categories],
  )

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technology Universe"
      description="A filtered, interactive view of the stack used across product, platform and delivery work."
    >
      <div className="filter-row">
        {['All', ...categories.map((category) => category.category)].map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'filter active' : 'filter'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {displayedCategories.map((category, index) => (
          <motion.section
            key={category.category}
            className="panel skill-category"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ delay: index * 0.04, duration: 0.5 }}
          >
            <div className="skill-head">
              <Sparkles size={16} />
              <h3>{category.category}</h3>
            </div>
            <div className="skill-chip-grid">
              {category.items.map((item) => (
                <div key={item.name} className="skill-chip" title={item.description}>
                  <strong>{item.name}</strong>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </Section>
  )
}
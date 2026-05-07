import { motion } from 'framer-motion'
import GlassCard from '@/components/cards/GlassCard'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects } from '@/data/projects'

interface ProjectsGridProps {
  limit?: number
  showHeader?: boolean
}

export default function ProjectsGrid({ limit, showHeader = true }: ProjectsGridProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <SectionHeader
            badge="Live Systems"
            title="Innovation Ecosystem"
            subtitle="Active platforms focused on behavioral intelligence, veteran advocacy, and human growth systems."
          />
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayProjects.map((project, index) => (
            <GlassCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              status={project.status}
              delay={index * 0.05}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

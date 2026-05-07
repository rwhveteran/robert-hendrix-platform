import { motion } from 'framer-motion'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Live Platforms"
          title="Innovation Ecosystem Projects"
          subtitle="Active operational systems focused on behavioral intelligence, veteran advocacy, crisis prevention, and human growth platforms."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectsGrid showHeader={false} />
        </motion.div>
      </div>
    </div>
  )
}

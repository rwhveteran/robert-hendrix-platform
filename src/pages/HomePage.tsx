import Hero from '@/components/sections/Hero'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import DatabaseSection from '@/components/sections/DatabaseSection'
import ResearchPreview from '@/components/sections/ResearchPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsGrid limit={6} />
      <DatabaseSection />
      <ResearchPreview />
    </>
  )
}

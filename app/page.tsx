import { Hero } from "@/components/ecosystem/hero"
import { Navbar } from "@/components/ecosystem/navbar"
import { ProjectsGrid } from "@/components/ecosystem/projects-grid"
import { Footer } from "@/components/ecosystem/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Footer />
    </main>
  )
}

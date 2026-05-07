"use client"

import { motion } from "framer-motion"
import { GlassCard } from "./glass-card"
import { projects } from "@/lib/data/projects"

export function ProjectsGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Live Operational Systems
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            16+ platforms focused on behavioral intelligence, veteran advocacy, and human growth infrastructure.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlassCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              status={project.status}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

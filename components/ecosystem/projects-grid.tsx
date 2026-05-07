"use client"

import { motion } from "framer-motion"
import { GlassCard } from "./glass-card"
import { projects } from "@/lib/data/projects"

export function ProjectsGrid() {
  return (
    <section className="py-32 px-6">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="section-label mx-auto mb-6">
            <span className="live-dot" />
            Operational Ecosystem
          </div>
          <h2 className="section-title">
            Live <span className="hero-accent">Systems</span>
          </h2>
          <p className="section-subtitle">
            16+ platforms focused on behavioral intelligence, veteran advocacy, 
            and longitudinal human growth infrastructure.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
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

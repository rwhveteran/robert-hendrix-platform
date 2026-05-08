"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"

interface GlassCardProps {
  title: string
  description: string
  tags?: string[]
  status?: "live" | "development" | "research"
  href?: string
  delay?: number
  className?: string
}

const statusLabels = {
  live: "Live System",
  development: "In Development",
  research: "Research Phase",
}

export function GlassCard({
  title,
  description,
  tags = [],
  status = "live",
  href,
  delay = 0,
  className,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`project-card ${className || ''}`}
    >
      {/* Preview Area */}
      <div className="project-image">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-32 h-32 rounded-full blur-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(0,194,168,0.4), rgba(124,58,237,0.3))' }}
          />
        </div>
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(135deg, rgba(0,194,168,0.08), rgba(124,58,237,0.08))' }}
        />
      </div>

      {/* Content */}
      <div className="project-content">
        {/* Status Indicator */}
        <div className="flex items-center justify-between mb-4">
          <div className="live-status">
            <span className="live-dot" />
            <span>{statusLabels[status]}</span>
          </div>
          {href && (
            <ExternalLink className="w-4 h-4 text-white/40" />
          )}
        </div>

        {/* Title */}
        <h3 className="project-title">{title}</h3>

        {/* Description */}
        <p className="project-description line-clamp-2">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="section-label text-[10px] py-1 px-3 mb-0"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Hover Content - View Project Button */}
        <div className="project-hover-content">
          <a href={href || "#"} className="project-btn">
            View Project
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

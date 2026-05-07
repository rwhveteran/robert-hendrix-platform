"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  title: string
  description: string
  tags?: string[]
  status?: "live" | "development" | "research"
  href?: string
  delay?: number
  className?: string
}

const statusColors = {
  live: "bg-emerald-500",
  development: "bg-amber-500",
  research: "bg-blue-500",
}

const statusLabels = {
  live: "Live",
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
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 cursor-pointer",
        "transition-all duration-500",
        "hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10",
        className
      )}
    >
      {/* Status Indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", statusColors[status])}></span>
            <span className={cn("relative inline-flex rounded-full h-2 w-2", statusColors[status])}></span>
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            {statusLabels[status]}
          </span>
        </div>
        {href && (
          <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      {/* Preview Area */}
      <div className="relative h-32 mb-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-cyan-500/20 blur-xl"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent" />
      </div>
    </motion.div>
  )
}

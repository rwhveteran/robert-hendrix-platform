import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  title: string
  description: string
  tags?: string[]
  status?: 'live' | 'development' | 'research'
  href?: string
  delay?: number
  className?: string
}

const statusColors = {
  live: 'bg-emerald-500',
  development: 'bg-amber-500',
  research: 'bg-blue-500',
}

const statusLabels = {
  live: 'Live',
  development: 'In Development',
  research: 'Research Phase',
}

export default function GlassCard({
  title,
  description,
  tags = [],
  status = 'live',
  href,
  delay = 0,
  className,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        'group relative glass rounded-2xl p-6 cursor-pointer',
        'transition-all duration-500',
        'hover:glow-border hover:shadow-xl hover:shadow-primary/10',
        className
      )}
    >
      {/* Status Indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', statusColors[status])}></span>
            <span className={cn('relative inline-flex rounded-full h-2 w-2', statusColors[status])}></span>
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {statusLabels[status]}
          </span>
        </div>
        {href && (
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      {/* Preview Area */}
      <div className="relative h-32 mb-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-primary/20 blur-xl"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

import { motion } from 'framer-motion'
import { Database, Brain, GitBranch, Activity, Zap, Shield, LineChart, Layers } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedChart from '@/components/charts/AnimatedChart'
import { cn } from '@/lib/utils'

const features = [
  { icon: Database, label: 'Database-Driven Directories', description: 'Massive interconnected resource databases' },
  { icon: Brain, label: 'Behavioral Intake Logic', description: 'Intelligent assessment and routing systems' },
  { icon: GitBranch, label: 'Cross-Referencing Systems', description: 'Multi-dimensional data correlation' },
  { icon: Activity, label: 'AI-Assisted Intelligence', description: 'Machine learning behavioral analysis' },
  { icon: Shield, label: 'Legal Reference Systems', description: 'Compliance and regulatory frameworks' },
  { icon: Zap, label: 'Recommendation Engines', description: 'Personalized pathway suggestions' },
  { icon: LineChart, label: 'Signal Detection', description: 'Early warning pattern recognition' },
  { icon: Layers, label: 'Longitudinal Tracking', description: 'Long-term progress monitoring' },
]

export default function DatabaseSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Intelligence Infrastructure"
          title="Database & Systems Architecture"
          subtitle="Powering behavioral intelligence through advanced data systems, AI algorithms, and longitudinal tracking platforms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass rounded-xl p-4 flex items-start gap-4 group cursor-pointer hover:glow-border transition-all duration-300"
              >
                <div className={cn(
                  'p-2 rounded-lg bg-primary/10 text-primary',
                  'group-hover:bg-primary group-hover:text-primary-foreground transition-colors'
                )}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm mb-1">{feature.label}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-6 glow-border"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-foreground">Live System Analytics</h3>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
            </div>

            <AnimatedChart />

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              {[
                { label: 'Active Users', value: '2,847' },
                { label: 'Data Points', value: '1.2M' },
                { label: 'Accuracy', value: '94.7%' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

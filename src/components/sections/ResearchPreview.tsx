import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Clock, BarChart3, Users } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const stats = [
  { icon: Clock, value: '24', label: 'Months', sublabel: 'Research Duration' },
  { icon: Brain, value: '156', label: 'Markers', sublabel: 'Behavioral Indicators' },
  { icon: BarChart3, value: '1.2M', label: 'Data Points', sublabel: 'Analyzed' },
  { icon: Users, value: '847', label: 'Participants', sublabel: 'Study Cohort' },
]

export default function ResearchPreview() {
  return (
    <section className="py-24 px-6 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeader
          badge="Research Initiative"
          title="24-Month ADHD Behavioral Intelligence Research"
          subtitle="First-of-its-kind longitudinal behavioral intelligence research focused on executive dysfunction, attention drift, cognitive overload, and behavioral pattern tracking."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center glow-border cursor-pointer transition-all duration-300"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4"
              >
                <stat.icon className="w-6 h-6" />
              </motion.div>
              <div className="text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Research Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-primary mb-2">Executive Dysfunction</h4>
              <p className="text-sm text-muted-foreground">
                Mapping attention drift patterns, task initiation barriers, and cognitive load thresholds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Momentum Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Tracking behavioral momentum indicators and identifying sustainable productivity patterns.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Pattern Recognition</h4>
              <p className="text-sm text-muted-foreground">
                Longitudinal behavioral marker analysis for predictive intervention systems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/research"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Full Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

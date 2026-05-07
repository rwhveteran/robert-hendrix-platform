import { motion } from 'framer-motion'
import { Brain, Clock, BarChart3, Users, TrendingUp, Target, Layers, Zap } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedChart from '@/components/charts/AnimatedChart'
import { cn } from '@/lib/utils'

const researchStats = [
  { icon: Clock, value: '24', unit: 'Months', label: 'Research Duration' },
  { icon: Brain, value: '156', unit: 'Markers', label: 'Behavioral Indicators' },
  { icon: BarChart3, value: '1.2M', unit: 'Points', label: 'Data Collected' },
  { icon: Users, value: '847', unit: 'Participants', label: 'Study Cohort' },
]

const researchAreas = [
  {
    icon: Target,
    title: 'Executive Dysfunction Mapping',
    description: 'Comprehensive analysis of task initiation barriers, planning deficits, and execution breakdowns across diverse contexts.',
    metrics: ['Task Completion Rates', 'Initiation Delay Times', 'Planning Accuracy'],
  },
  {
    icon: TrendingUp,
    title: 'Attention Drift Patterns',
    description: 'Longitudinal tracking of attention sustainability, drift triggers, and recovery mechanisms in real-world environments.',
    metrics: ['Drift Frequency', 'Recovery Time', 'Trigger Identification'],
  },
  {
    icon: Layers,
    title: 'Cognitive Load Analysis',
    description: 'Quantifying cognitive overload thresholds and developing predictive models for sustainable productivity.',
    metrics: ['Load Thresholds', 'Overload Signals', 'Capacity Patterns'],
  },
  {
    icon: Zap,
    title: 'Momentum Intelligence',
    description: 'Understanding behavioral momentum dynamics and their role in sustained executive function performance.',
    metrics: ['Momentum Indicators', 'Sustainability Index', 'Intervention Points'],
  },
]

const findings = [
  { value: '73%', label: 'Improvement in task initiation when using momentum-based scheduling' },
  { value: '89%', label: 'Accuracy in predicting attention drift episodes 15 minutes in advance' },
  { value: '61%', label: 'Reduction in cognitive overload incidents with early warning systems' },
  { value: '94.7%', label: 'Marker detection accuracy across the behavioral intelligence platform' },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Longitudinal Research Initiative</span>
          </motion.div>
          
          <SectionHeader
            title="24-Month ADHD Behavioral Intelligence Research"
            subtitle="First-of-its-kind longitudinal behavioral intelligence research focused on executive dysfunction, attention drift, cognitive overload, momentum analysis, and behavioral pattern tracking."
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {researchStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center glow-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold gradient-text">{stat.value}</span>
                <span className="text-lg text-muted-foreground">{stat.unit}</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <SectionHeader
            badge="Research Focus"
            title="Core Research Areas"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-8 glow-border transition-all duration-300"
              >
                <div className={cn(
                  'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4',
                  'bg-primary/10 text-primary'
                )}>
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8 mb-20 glow-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Key Research Findings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {findings.map((finding, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/30"
              >
                <span className="text-3xl font-bold gradient-text shrink-0">{finding.value}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{finding.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Dashboard Preview */}
        <div>
          <SectionHeader
            badge="Live Data"
            title="Research Analytics Dashboard"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 glow-border"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-foreground">Behavioral Pattern Analysis</h4>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-muted-foreground">Live Analysis</span>
              </div>
            </div>
            
            <AnimatedChart />
            
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-xl font-bold gradient-text">847</div>
                <div className="text-xs text-muted-foreground">Active Participants</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold gradient-text-gold">156</div>
                <div className="text-xs text-muted-foreground">Markers Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold gradient-text">94.7%</div>
                <div className="text-xs text-muted-foreground">Detection Accuracy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

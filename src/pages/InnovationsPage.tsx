import { motion } from 'framer-motion'
import { Brain, Users, Home, Activity, Shield, Lightbulb } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const innovations = [
  {
    icon: Brain,
    category: 'Behavioral Intelligence',
    title: 'ADHD Behavioral Cognitive Engine',
    description: 'Revolutionary executive function tracking with attention drift analysis, momentum mapping, and longitudinal pattern recognition.',
    features: ['Executive Function Tracking', 'Attention Drift Analysis', 'Momentum Mapping', 'Pattern Recognition'],
    status: 'live',
  },
  {
    icon: Home,
    category: 'Veteran Housing',
    title: 'VETDirect Housing Stabilization',
    description: 'End-to-end veteran housing platform from homeless to home base, integrating HUD-VASH support with crisis navigation.',
    features: ['Housing Pipeline', 'HUD-VASH Integration', 'Crisis Navigation', 'Recovery Tracking'],
    status: 'live',
  },
  {
    icon: Activity,
    category: 'Crisis Prevention',
    title: '14-Mark Eviction Diversion System',
    description: 'Early-warning intervention system using behavioral markers to prevent housing instability before crisis.',
    features: ['Early Warning Signals', 'Intervention Triggers', 'Support Routing', 'Outcome Tracking'],
    status: 'live',
  },
  {
    icon: Users,
    category: 'Community Growth',
    title: 'De La Calle Al Negocio',
    description: 'Street vendor to business owner pipeline with permit compliance, legal frameworks, and operational readiness.',
    features: ['Permit Navigation', 'Compliance Tracking', 'Business Planning', 'Growth Metrics'],
    status: 'live',
  },
  {
    icon: Shield,
    category: 'Mental Health',
    title: 'Veterans EMHA Alert System',
    description: 'Emergency mental health alert platform connecting veterans with trusted support networks during crisis escalation.',
    features: ['Crisis Detection', 'Network Alerts', 'Support Coordination', 'Follow-up Systems'],
    status: 'development',
  },
  {
    icon: Lightbulb,
    category: 'Life Skills',
    title: 'Five x 5 Life Skills Framework',
    description: 'Comprehensive human growth model focusing on discipline, structure, communication, resilience, and recovery.',
    features: ['Assessment Tools', 'Progress Tracking', 'Skill Building', 'Growth Mapping'],
    status: 'live',
  },
]

export default function InnovationsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Core Innovations"
          title="Breakthrough Systems"
          subtitle="Pioneering platforms that combine behavioral intelligence, operational excellence, and human-centered design."
        />

        <div className="space-y-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="glass rounded-2xl p-8 glow-border transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Icon and Category */}
                <div className="flex flex-col items-start">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={cn(
                      'p-4 rounded-xl mb-4',
                      'bg-primary/10 text-primary'
                    )}
                  >
                    <innovation.icon className="w-8 h-8" />
                  </motion.div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {innovation.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={cn(
                      'relative flex h-2 w-2',
                      innovation.status === 'live' && 'text-emerald-500',
                      innovation.status === 'development' && 'text-amber-500'
                    )}>
                      <span className={cn(
                        'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                        innovation.status === 'live' && 'bg-emerald-400',
                        innovation.status === 'development' && 'bg-amber-400'
                      )}></span>
                      <span className={cn(
                        'relative inline-flex rounded-full h-2 w-2',
                        innovation.status === 'live' && 'bg-emerald-500',
                        innovation.status === 'development' && 'bg-amber-500'
                      )}></span>
                    </span>
                    <span className="text-xs text-muted-foreground capitalize">
                      {innovation.status}
                    </span>
                  </div>
                </div>

                {/* Center: Title and Description */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{innovation.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{innovation.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {innovation.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted/50 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

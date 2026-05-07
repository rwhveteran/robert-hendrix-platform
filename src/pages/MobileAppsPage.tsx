import { motion } from 'framer-motion'
import { 
  Eye, Zap, Brain, AlertTriangle, Calendar, Activity, 
  Target, FileText, MessageSquare, Map, Smartphone
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const mobileApps = [
  { 
    icon: Eye, 
    name: 'Vision Tracker', 
    description: 'Goal visualization and progress tracking with daily check-ins',
    category: 'Goals',
    status: 'live',
  },
  { 
    icon: Zap, 
    name: 'Momentum Tracker', 
    description: 'Daily momentum and energy monitoring with trend analysis',
    category: 'Energy',
    status: 'live',
  },
  { 
    icon: Brain, 
    name: 'ADHD Marker App', 
    description: 'Behavioral marker logging and pattern analysis',
    category: 'Behavioral',
    status: 'live',
  },
  { 
    icon: AlertTriangle, 
    name: 'Veteran Crisis App', 
    description: 'Crisis support and emergency contact activation',
    category: 'Veterans',
    status: 'live',
  },
  { 
    icon: Calendar, 
    name: 'Daily Recovery Tracker', 
    description: 'Recovery milestone tracking and accountability',
    category: 'Recovery',
    status: 'live',
  },
  { 
    icon: Activity, 
    name: 'Behavioral Signal Monitor', 
    description: 'Real-time behavioral signal detection and alerts',
    category: 'Intelligence',
    status: 'development',
  },
  { 
    icon: Target, 
    name: 'Goal Execution Tracker', 
    description: 'Task breakdown and execution progress monitoring',
    category: 'Goals',
    status: 'live',
  },
  { 
    icon: FileText, 
    name: 'Executive Summary Mobile', 
    description: 'Daily executive function summaries and insights',
    category: 'Intelligence',
    status: 'live',
  },
  { 
    icon: MessageSquare, 
    name: 'Thought Capture System', 
    description: 'Quick thought and idea capture with categorization',
    category: 'Capture',
    status: 'live',
  },
  { 
    icon: Map, 
    name: 'Recovery Pathways', 
    description: 'Guided recovery journey tracking and navigation',
    category: 'Recovery',
    status: 'development',
  },
]

const categories = ['All', 'Goals', 'Behavioral', 'Veterans', 'Recovery', 'Intelligence', 'Capture', 'Energy']

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Mobile Ecosystem</span>
          </motion.div>
          
          <SectionHeader
            title="Mobile Applications"
            subtitle="Companion apps designed for on-the-go behavioral tracking, crisis support, and personal growth monitoring."
          />
        </div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                index === 0 
                  ? 'bg-primary text-primary-foreground' 
                  : 'glass text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {mobileApps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass rounded-2xl p-6 cursor-pointer glow-border transition-all duration-300 group"
            >
              {/* App Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={cn(
                  'w-14 h-14 rounded-2xl flex items-center justify-center mb-4',
                  'bg-gradient-to-br from-primary/20 to-primary/5',
                  'group-hover:from-primary/30 group-hover:to-primary/10 transition-all'
                )}
              >
                <app.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Status */}
              <div className="flex items-center gap-2 mb-3">
                <span className={cn(
                  'relative flex h-2 w-2',
                )}>
                  <span className={cn(
                    'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                    app.status === 'live' ? 'bg-emerald-400' : 'bg-amber-400'
                  )}></span>
                  <span className={cn(
                    'relative inline-flex rounded-full h-2 w-2',
                    app.status === 'live' ? 'bg-emerald-500' : 'bg-amber-500'
                  )}></span>
                </span>
                <span className="text-xs text-muted-foreground capitalize">{app.status}</span>
              </div>

              {/* Name */}
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {app.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {app.description}
              </p>

              {/* Category Tag */}
              <span className="inline-block px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground">
                {app.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Platform Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-strong rounded-2xl p-8 text-center glow-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Cross-Platform Ecosystem</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            All mobile applications sync seamlessly with web platforms, creating a unified behavioral intelligence ecosystem that works wherever you are.
          </p>
          
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold gradient-text">iOS</span>
              </div>
              <span className="text-xs text-muted-foreground">iPhone & iPad</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold gradient-text">A</span>
              </div>
              <span className="text-xs text-muted-foreground">Android</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold gradient-text">Web</span>
              </div>
              <span className="text-xs text-muted-foreground">Browser</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

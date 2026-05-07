import { motion } from 'framer-motion'
import { Brain, Heart, Shield, Zap, Mail, Github, Linkedin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { cn } from '@/lib/utils'

const values = [
  { 
    icon: Brain, 
    title: 'Behavioral Intelligence', 
    description: 'Deep understanding of human cognition, executive function, and behavioral patterns that drive personal growth and recovery.' 
  },
  { 
    icon: Shield, 
    title: 'Veteran Advocacy', 
    description: 'Dedicated to serving those who served, with specialized platforms for housing stability, crisis prevention, and life rebuilding.' 
  },
  { 
    icon: Heart, 
    title: 'Human-Centered Design', 
    description: 'Every system built with empathy, accessibility, and real-world impact as core design principles.' 
  },
  { 
    icon: Zap, 
    title: 'Operational Excellence', 
    description: 'Live, production-grade platforms that operate 24/7 with reliability, scalability, and continuous improvement.' 
  },
]

const timeline = [
  { year: '2022', title: 'Research Initiation', description: 'Began 24-month ADHD behavioral intelligence case study' },
  { year: '2023', title: 'Platform Development', description: 'Launched first veteran advocacy platforms including VETDirect and VETGuide LA' },
  { year: '2024', title: 'Ecosystem Expansion', description: 'Expanded to 16+ live operational systems across behavioral, veteran, and community domains' },
  { year: '2025', title: 'Research Publication', description: 'Completed longitudinal research with breakthrough findings in executive dysfunction patterns' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-8"
          >
            <span className="text-4xl font-bold gradient-text">RH</span>
          </motion.div>
          
          <SectionHeader
            badge="About"
            title="Robert Hendrix"
            subtitle="Building behavioral intelligence systems, veteran advocacy platforms, and human growth ecosystems that transform lives through technology and empathy."
          />
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
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
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="mb-24">
          <SectionHeader
            badge="Journey"
            title="Building the Ecosystem"
          />
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-8',
                  index % 2 === 0 ? 'md:text-right' : ''
                )}
              >
                <div className={cn(
                  'glass rounded-xl p-6',
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                )}>
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <h4 className="text-foreground font-semibold mt-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                </div>
                <div className={cn(
                  'hidden md:flex items-center',
                  index % 2 === 0 ? 'order-2 justify-start' : 'order-1 justify-end'
                )}>
                  <div className="w-4 h-4 rounded-full bg-primary glow-border" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-12 text-center glow-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Interested in collaboration, research partnerships, or implementing these systems for your organization?
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="p-3 rounded-xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 rounded-xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

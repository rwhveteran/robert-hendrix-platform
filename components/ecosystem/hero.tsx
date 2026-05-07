"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Database, BarChart3 } from "lucide-react"

const heroButtons = [
  { label: "Explore Ecosystem", href: "/projects", icon: Sparkles, primary: true },
  { label: "View Live Systems", href: "/innovations", icon: Database },
  { label: "Research Platforms", href: "/research", icon: BarChart3 },
]

export function Hero() {
  return (
    <section className="hero-section">
      {/* Hero Glow Background */}
      <div className="hero-glow" />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 animated-grid opacity-30 pointer-events-none" />

      <div className="container relative z-10">
        <div className="hero-content">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            <span className="live-dot" />
            Live Operational Intelligence
          </motion.div>

          {/* Main Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title"
          >
            <span>Behavioral</span>
            <br />
            <span className="hero-accent">Intelligence.</span>
            <br />
            <span>Veteran</span>
            <br />
            <span className="hero-accent">Advocacy.</span>
          </motion.h1>

          {/* Hero Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtext"
          >
            Live operational systems focused on behavioral intelligence, executive function, 
            veteran support infrastructure, crisis prevention, recovery systems, and 
            longitudinal human growth platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-buttons"
          >
            {heroButtons.map((btn, idx) => (
              <motion.div
                key={btn.label}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={btn.href}
                  className={btn.primary ? "primary-btn" : "secondary-btn"}
                >
                  <btn.icon className="w-5 h-5 mr-2" />
                  {btn.label}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-12 left-8 right-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "16+", label: "Live Platforms" },
            { value: "24mo", label: "Research Study" },
            { value: "10+", label: "Mobile Apps" },
            { value: "100%", label: "Veteran Focused" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="project-card p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

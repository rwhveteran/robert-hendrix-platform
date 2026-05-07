"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Database, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"

const heroButtons = [
  { label: "Explore Ecosystem", href: "/projects", icon: Sparkles, primary: true },
  { label: "View Live Systems", href: "/innovations", icon: Database },
  { label: "Research Platforms", href: "/research", icon: BarChart3 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-gray-400">
            Live Operational Intelligence
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
        >
          <span className="block text-white">Behavioral Intelligence.</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mt-2">
            Veteran Advocacy.
          </span>
          <span className="block text-white mt-2">Human Growth Systems.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed text-balance"
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
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {heroButtons.map((btn) => (
            <motion.div
              key={btn.label}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={btn.href}
                className={cn(
                  "group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all duration-300",
                  btn.primary
                    ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:shadow-lg hover:shadow-cyan-500/25"
                    : "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10"
                )}
              >
                <btn.icon className="w-5 h-5" />
                {btn.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
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
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

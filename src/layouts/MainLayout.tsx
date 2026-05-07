import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'
import ParticleField from '@/components/motion/ParticleField'

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 animated-grid opacity-30" />
        <ParticleField />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Outlet />
      </motion.main>
      
      <Footer />
    </div>
  )
}

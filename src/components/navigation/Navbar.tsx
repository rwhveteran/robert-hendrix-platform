import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/about', label: 'About Robert' },
  { href: '/innovations', label: 'Innovations' },
  { href: '/projects', label: 'Projects' },
  { href: '/mobileapps', label: 'Mobile Apps' },
  { href: '/research', label: 'Research' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl',
          'rounded-2xl transition-all duration-500',
          isScrolled
            ? 'glass-strong glow-border shadow-2xl'
            : 'bg-transparent border border-transparent'
        )}
      >
        <nav className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Activity className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full" />
            </motion.div>
            <span className="font-semibold text-lg tracking-tight">
              <span className="text-foreground">Robert</span>
              <span className="text-primary ml-1">Hendrix</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors',
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/about"
              className={cn(
                'px-5 py-2.5 text-sm font-medium rounded-xl',
                'bg-primary text-primary-foreground',
                'hover:shadow-lg hover:shadow-primary/25 transition-all duration-300',
                'hover:-translate-y-0.5'
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl glass-strong rounded-2xl p-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                      location.pathname === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 pt-4 border-t border-border"
              >
                <Link
                  to="/about"
                  className={cn(
                    'block w-full px-4 py-3 text-center text-base font-medium rounded-xl',
                    'bg-primary text-primary-foreground'
                  )}
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/about", label: "About Robert" },
  { href: "/innovations", label: "Innovations" },
  { href: "/projects", label: "Projects" },
  { href: "/mobileapps", label: "Mobile Apps" },
  { href: "/research", label: "Research" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl",
          "rounded-2xl transition-all duration-500",
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-transparent border border-transparent"
        )}
      >
        <nav className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Activity className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full" />
            </motion.div>
            <span className="font-semibold text-lg tracking-tight">
              <span className="text-white">Robert</span>
              <span className="text-cyan-400 ml-1">Hendrix</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-cyan-400 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/about"
              className={cn(
                "px-5 py-2.5 text-sm font-medium rounded-xl",
                "bg-gradient-to-r from-cyan-500 to-teal-500 text-black",
                "hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300",
                "hover:-translate-y-0.5"
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors text-white"
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
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:hidden"
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
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
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
                className="mt-4 pt-4 border-t border-white/10"
              >
                <Link
                  href="/about"
                  className={cn(
                    "block w-full px-4 py-3 text-center text-base font-medium rounded-xl",
                    "bg-gradient-to-r from-cyan-500 to-teal-500 text-black"
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

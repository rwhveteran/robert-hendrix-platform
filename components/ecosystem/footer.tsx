"use client"

import Link from "next/link"
import { Activity, Github, Linkedin, Mail, Twitter } from "lucide-react"

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Mobile Apps", href: "/mobileapps" },
]

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-cyan-400" />
              <span className="font-semibold text-lg">
                <span className="text-white">Robert</span>
                <span className="text-cyan-400 ml-1">Hendrix</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Building behavioral intelligence systems, veteran advocacy platforms, 
              and human growth infrastructure for meaningful impact.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Ecosystem</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Robert Hendrix Innovation Ecosystem. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Behavioral Intelligence • Veteran Advocacy • Human Growth
          </p>
        </div>
      </div>
    </footer>
  )
}

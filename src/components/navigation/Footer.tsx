import { Link } from 'react-router-dom'
import { Activity, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const footerLinks = {
  ecosystem: [
    { label: 'About', href: '/about' },
    { label: 'Innovations', href: '/innovations' },
    { label: 'Projects', href: '/projects' },
    { label: 'Research', href: '/research' },
  ],
  platforms: [
    { label: 'ADHD Engine', href: '/projects' },
    { label: 'VETDirect', href: '/projects' },
    { label: 'VETGuide LA', href: '/projects' },
    { label: 'Mobile Apps', href: '/mobileapps' },
  ],
  connect: [
    { label: 'GitHub', href: '#', icon: Github },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Email', href: '#', icon: Mail },
  ],
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Activity className="w-8 h-8 text-primary" />
              <span className="font-semibold text-lg">
                <span className="text-foreground">Robert</span>
                <span className="text-primary ml-1">Hendrix</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Building behavioral intelligence systems, veteran advocacy platforms, and human growth ecosystems.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.connect.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ecosystem</h3>
            <ul className="space-y-3">
              {footerLinks.ecosystem.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platforms</h3>
            <ul className="space-y-3">
              {footerLinks.platforms.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">System Status</h3>
            <div className="glass rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm text-foreground">All Systems Operational</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Live behavioral intelligence platforms running 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Robert Hendrix Innovation Ecosystem. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Behavioral Intelligence. Veteran Advocacy. Human Growth.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.links.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.links.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-3xl font-display font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              ARF
            </motion.h3>
            <p className="text-white/60 text-sm mb-4">
              Full Stack Developer & AI Enthusiast building intelligent solutions for tomorrow.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-white/70" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-white/60 hover:text-electric transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-electric transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-electric transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="text-white/50">
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white/50 mb-4 md:mb-0 flex items-center">
            © {currentYear} A R Mohammed Fasil. Made with{' '}
            <Heart size={14} className="mx-1 text-neon-pink" fill="currentColor" /> and lots of{' '}
            <span className="ml-1">☕</span>
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 glass rounded-xl hover:bg-white/10 transition-colors group"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-electric group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-50" />
    </footer>
  );
}
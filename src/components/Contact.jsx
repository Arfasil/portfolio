import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Coffee } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'electric'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'neon-pink'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'deep-purple'
    }
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.links.github, label: 'GitHub', color: 'electric' },
    { icon: Linkedin, href: personalInfo.links.linkedin, label: 'LinkedIn', color: 'deep-purple' },
    { icon: Code, href: personalInfo.links.leetcode, label: 'LeetCode', color: 'neon-pink' },
    { icon: Coffee, href: personalInfo.links.geeksforgeeks, label: 'GeeksforGeeks', color: 'cyber-yellow' }
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Get in Touch</h3>
              
              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 rounded-lg bg-${method.color}/10`}>
                      <method.icon className={`text-${method.color}`} size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-1">{method.label}</p>
                      <p className="text-sm font-medium group-hover:text-electric transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-white/50 mb-4">Connect on Social</p>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className={`text-${social.color} group-hover:scale-110 transition-transform`} size={20} />
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-sm text-white/70">
                Open to full-time positions, internships, and freelance projects in AI/ML and 
                full-stack development. Expected graduation: June 2026.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary px-8 py-4 bg-gradient-to-r from-electric to-deep-purple rounded-xl font-semibold text-white shadow-lg hover:shadow-electric/50 transition-all flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>

            <p className="text-xs text-white/40 text-center mt-6">
              I typically respond within 24-48 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
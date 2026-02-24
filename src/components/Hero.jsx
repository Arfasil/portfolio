import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-deep-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-8">
            <Sparkles size={16} className="text-electric" />
            <span className="text-sm font-medium">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text inline-block">
              Fasil
            </span>
          </motion.h1>

          {/* Subtitle with Typing Effect */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-display font-medium text-white/80 mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['React', 'Python', 'AI/ML', 'MERN Stack', 'Flask', 'TensorFlow'].map((tech, index) => (
              <motion.span
                key={tech}
                className="glass px-4 py-2 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 240, 255, 0.1)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              className="btn-primary group px-8 py-4 bg-gradient-to-r from-electric to-deep-purple rounded-xl font-semibold text-white shadow-lg hover:shadow-electric/50 transition-all flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <Code2 size={20} className="group-hover:rotate-12 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 glass rounded-xl font-semibold hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            {[
              { icon: Github, href: personalInfo.links.github, label: 'GitHub' },
              { icon: Linkedin, href: personalInfo.links.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-xl hover:bg-white/10 transition-all group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={24} className="text-white/60 group-hover:text-electric transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <a href="#about" className="flex flex-col items-center text-white/40 hover:text-electric transition-colors">
              <span className="text-xs uppercase tracking-wider mb-2">Scroll Down</span>
              <ArrowDown size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
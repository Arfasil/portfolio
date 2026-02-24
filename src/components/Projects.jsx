import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI/ML', 'Web Development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            A collection of projects showcasing my skills in AI, web development, and problem-solving
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-electric to-deep-purple text-white shadow-lg'
                    : 'glass hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.1 }
        }
      }}
      className="glass rounded-2xl overflow-hidden card-hover group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image/Icon */}
      <div className="relative h-48 bg-gradient-to-br from-electric/20 via-deep-purple/20 to-neon-pink/20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric to-deep-purple opacity-0 group-hover:opacity-20 transition-opacity"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-6xl font-display font-bold text-white/10"
            animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
          >
            {project.title.slice(0, 2).toUpperCase()}
          </motion.div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="glass px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-electric transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 mb-3">{project.subtitle}</p>
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs text-white/50">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Features */}
        {project.features && (
          <ul className="space-y-2 mb-4 text-sm text-white/60">
            {project.features.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-electric mr-2">•</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            <span>Code</span>
          </motion.a>
          
          <motion.button
            className="flex items-center space-x-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
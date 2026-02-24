import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Palette, Brain, Award, Users } from 'lucide-react';
import { skills, coursework } from '../data/portfolio';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skillCategories = [
    { 
      title: 'Programming', 
      icon: Code, 
      skills: skills.programming,
      color: 'electric'
    },
    { 
      title: 'Web Development', 
      icon: Palette, 
      skills: skills.webDev,
      color: 'deep-purple'
    },
    { 
      title: 'Databases', 
      icon: Database, 
      skills: skills.databases,
      color: 'neon-pink'
    },
    { 
      title: 'AI & Tools', 
      icon: Brain, 
      skills: [...skills.tools, ...skills.familiar],
      color: 'cyber-yellow'
    }
  ];

  const stats = [
    { icon: Code, label: 'Problems Solved', value: '300+' },
    { icon: Award, label: 'Hackathons', value: '5+' },
    { icon: Users, label: 'Projects', value: '15+' }
  ];

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass rounded-2xl p-8 text-center card-hover"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-electric" />
              <div className="text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Building the Future, One Line at a Time
            </h3>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I'm a final-year Information Science student at Siddaganga Institute of Technology with a passion for 
                <span className="text-electric font-semibold"> artificial intelligence </span> and 
                <span className="text-electric font-semibold"> full-stack development</span>. 
                My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.
              </p>
              <p>
                From building emotion detection systems to developing conservation technology for wildlife monitoring, 
                I thrive at the intersection of AI and practical applications. I've contributed to 
                <span className="text-neon-pink font-semibold"> 10+ projects </span> and competed in multiple hackathons, 
                including a top 20 finish in a national-level competition among 500+ teams.
              </p>
              <p>
                When I'm not coding, you'll find me solving algorithmic challenges on competitive programming platforms, 
                contributing to open-source projects, or exploring the latest advances in machine learning and web technologies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-8 card-hover"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl bg-${category.color}/10`}>
                  <category.icon className={`text-${category.color}`} size={24} />
                </div>
                <h3 className="text-xl font-display font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-sm border border-white/10 hover:border-electric/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-center">
            Relevant Coursework
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coursework.map((course, index) => (
              <motion.div
                key={course}
                className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <span className="text-sm text-white/70">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
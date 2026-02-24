import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Code, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { achievements, education, experience } from '../data/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems = [
    {
      type: 'achievement',
      icon: Trophy,
      title: 'National Hackathon Finalist',
      subtitle: 'Top 20 / 500+ teams',
      date: '2024',
      description: 'Selected among the top finalists in the 24-hour National-level Hackathon conducted by Shridevi Institute',
      color: 'cyber-yellow'
    },
    {
      type: 'experience',
      icon: Code,
      title: 'AI BREWERY - AI Club Member',
      subtitle: 'Siddaganga Institute of Technology',
      date: '2023 - Present',
      description: 'Contributed to 10+ projects and hackathons, organized workshops, and managed AI-focused events',
      color: 'electric'
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'BMSCE Hackaphasia',
      subtitle: 'Full-Stack Development',
      date: '2024',
      description: 'Collaborated with team to develop a full-stack web solution at BMSCE Hackathon',
      color: 'neon-pink'
    },
    {
      type: 'achievement',
      icon: GraduationCap,
      title: 'Advanced DSA Training',
      subtitle: 'GeeksforGeeks',
      date: '2024',
      description: 'Completed 8-week Advanced Data Structures & Algorithms Live Training Program',
      color: 'deep-purple'
    },
    {
      type: 'achievement',
      icon: Code,
      title: '300+ Problems Solved',
      subtitle: 'Competitive Programming',
      date: 'Ongoing',
      description: 'Active problem solver on LeetCode, GeeksforGeeks, and CodeChef platforms',
      color: 'electric'
    }
  ];

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
            Journey & Achievements
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A timeline of milestones, competitions, and continuous learning
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <GraduationCap className="text-electric" size={24} />
                <span className="text-xs text-white/50">{edu.period}</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{edu.institution}</h3>
              <p className="text-sm text-white/70 mb-3">{edu.degree}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/50">{edu.location}</span>
                {edu.cgpa && (
                  <span className="px-3 py-1 bg-electric/10 text-electric rounded-full text-sm font-semibold">
                    CGPA: {edu.cgpa}
                  </span>
                )}
                {edu.percentage && (
                  <span className="px-3 py-1 bg-electric/10 text-electric rounded-full text-sm font-semibold">
                    {edu.percentage}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric via-deep-purple to-neon-pink"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-display font-bold text-center mb-10">
            Key Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-electric/10 flex items-center justify-center">
                  {achievement.icon === 'trophy' && <Trophy className="text-electric" size={24} />}
                  {achievement.icon === 'award' && <Award className="text-electric" size={24} />}
                  {achievement.icon === 'code' && <Code className="text-electric" size={24} />}
                  {achievement.icon === 'graduation-cap' && <GraduationCap className="text-electric" size={24} />}
                </div>
                <h4 className="font-display font-bold mb-2 text-sm">{achievement.title}</h4>
                <p className="text-xs text-white/60 mb-2">{achievement.description}</p>
                <span className="text-xs text-white/50">{achievement.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, isInView }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pr-0'}`}>
        <motion.div
          className="glass rounded-2xl p-6 card-hover"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className={`p-2 rounded-lg bg-${item.color}/10`}>
              <item.icon className={`text-${item.color}`} size={20} />
            </div>
            <span className="text-xs text-white/50">{item.date}</span>
          </div>
          <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
          <p className="text-sm text-white/70 mb-3">{item.subtitle}</p>
          <p className="text-sm text-white/60">{item.description}</p>
        </motion.div>
      </div>

      {/* Center Node */}
      <motion.div
        className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-electric to-deep-purple -translate-x-1/2 z-10 shadow-lg"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        whileHover={{ scale: 1.5 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-electric"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      </motion.div>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-4">
            Blog & Articles
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Thoughts on technology, AI, and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-white/60 mb-4">
              <span className="text-electric font-semibold">Stay tuned!</span> More articles coming soon on AI/ML, 
              web development, and competitive programming.
            </p>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-electric to-deep-purple rounded-xl font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Newsletter
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Blog Post Modal (placeholder) */}
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
}

function BlogCard({ post, index, isInView, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
      onClick={onClick}
    >
      {/* Header with gradient */}
      <div className="h-40 bg-gradient-to-br from-electric/20 via-deep-purple/20 to-neon-pink/20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric to-deep-purple opacity-0 group-hover:opacity-30 transition-opacity"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute bottom-4 left-4">
          <span className="glass px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Tag size={12} />
            <span>{post.category}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-4 text-xs text-white/50 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className="font-display font-bold text-xl mb-3 group-hover:text-electric transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <motion.div
          className="flex items-center space-x-2 text-electric text-sm font-semibold"
          whileHover={{ x: 5 }}
        >
          <span>Read More</span>
          <ArrowRight size={16} />
        </motion.div>
      </div>
    </motion.article>
  );
}

function BlogModal({ post, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass rounded-3xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="glass px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <button
            onClick={onClose}
            className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
          >
            ✕
          </button>
        </div>

        <h2 className="text-3xl font-display font-bold mb-4">{post.title}</h2>

        <div className="flex items-center space-x-4 text-sm text-white/50 mb-6">
          <div className="flex items-center space-x-1">
            <Calendar size={16} />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <p className="text-white/60 italic">
            Full article content coming soon...
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
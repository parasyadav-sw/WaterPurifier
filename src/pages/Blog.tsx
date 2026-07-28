import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import { Calendar, User, Clock } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Water Intelligence</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Health, technology, and eco-conservation articles
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Stay informed about municipal water contamination updates, differences in reverse osmosis membranes, and simple methods to reduce household plastic pollution.
        </p>
      </div>

      {/* Blog Listing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {blogs.map((post) => (
          <article
            key={post.slug}
            className="card bg-mist/35 border border-line/10 rounded-radius overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Vector Article Image */}
            <div className="h-48 bg-mist-deep/30 flex items-center justify-center p-6 border-b border-line/10">
              <svg viewBox="0 0 200 200" fill="none" className="h-full opacity-65">
                <rect x="20" y="40" width="160" height="120" rx="6" fill="var(--mist-deep)" stroke="var(--teal)" strokeWidth="1.5" />
                <line x1="35" y1="65" x2="165" y2="65" stroke="var(--navy)" strokeWidth="3" />
                <line x1="35" y1="85" x2="165" y2="85" stroke="var(--line)" strokeWidth="1.5" />
                <line x1="35" y1="105" x2="165" y2="105" stroke="var(--line)" strokeWidth="1.5" />
                <line x1="35" y1="125" x2="115" y2="125" stroke="var(--line)" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-3">
                <span className="card-tag text-[10px] font-bold text-teal-deep uppercase tracking-wider">{post.category}</span>
                <span className="text-[11.5px] text-ink-soft flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2 hover:text-teal transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-[14px] text-ink-soft leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center border-t border-line/5 pt-4 mt-auto text-[12.5px] text-ink-soft">
                <span>{post.date}</span>
                <Link to={`/blog/${post.slug}`} className="font-semibold text-navy hover:text-teal">
                  Read Article →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

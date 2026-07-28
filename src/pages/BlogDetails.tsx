import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

export const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(() => {
    return blogs.find((b) => b.slug === slug);
  }, [slug]);

  if (!post) {
    return (
      <div className="wrap py-24 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Article Not Found</h1>
        <p className="text-ink-soft mb-8">The requested article could not be found in our database.</p>
        <Link to="/blog" className="btn-primary">
          Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-10 md:py-16 max-w-4xl"
    >
      <Link to="/blog" className="btn-ghost inline-flex items-center gap-1.5 mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Blog List
      </Link>

      <article>
        {/* Header */}
        <header className="mb-8 border-b border-line/10 pb-6">
          <span className="card-tag text-xs font-bold text-teal-deep uppercase tracking-wider block mb-2">{post.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-[13.5px] text-ink-soft">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-teal" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-teal" /> {post.readTime}</span>
          </div>
        </header>

        {/* Content body */}
        <div className="prose max-w-none text-ink text-[16px] md:text-[17px] leading-relaxed flex flex-col gap-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Footer / Call to action */}
      <section className="bg-mist/30 border border-line/10 rounded-radius p-8 text-center mt-16 max-w-2xl mx-auto shadow-sm">
        <h3 className="text-lg font-bold text-navy mb-2">Want to evaluate your drinking water?</h3>
        <p className="text-[13.5px] text-ink-soft mb-6 leading-relaxed">
          Book a free test. Our local engineer will test your tap water TDS and pH levels directly at your home and provide advice on suitable purification methods.
        </p>
        <Link to="/book-water-test" className="btn-primary">
          Schedule Free Home TDS Test
        </Link>
      </section>

    </motion.div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Rahul Deshmukh", city: "Bengaluru", text: "The Whole Home filter solved our tiles staining and hair fall issues completely. Highly recommend their professional installation team.", rating: 5 },
    { name: "Priya Nair", city: "Mumbai", text: "Countertop Pro is so portable and convenient. Perfect for rental apartments. The TDS levels dropped from 480 to 22 ppm instantly.", rating: 5 },
    { name: "Vikram Sen", city: "Delhi", text: "We subscribed to their annual maintenance contract (AMC). The filters arrive on time and their service technicians are extremely helpful.", rating: 5 },
    { name: "Sneha Reddy", city: "Hyderabad", text: "Excellent water taste! Our previous RO made the water taste flat and bitter. The alkaline mineralizer in this system makes a huge difference.", rating: 5 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Customer Love</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 tracking-tight">What our users say</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reviews.map((test, idx) => (
          <div key={idx} className="p-8 bg-paper border border-line/10 rounded-radius shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <p className="text-[15px] text-ink-soft italic leading-relaxed mb-6">"{test.text}"</p>
            <div className="flex items-center justify-between border-t border-line/5 pt-4 mt-auto">
              <div className="flex flex-col">
                <span className="font-bold text-navy text-[14.5px]">{test.name}</span>
                <span className="text-[12px] text-ink-soft">{test.city}</span>
              </div>
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

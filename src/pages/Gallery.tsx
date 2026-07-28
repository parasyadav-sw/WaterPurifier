import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ShowcaseItem {
  id: number;
  category: 'domestic' | 'commercial' | 'industrial';
  title: string;
  location: string;
  tag: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const [tab, setTab] = useState<string>('all');

  const items: ShowcaseItem[] = [
    {
      id: 1,
      category: 'domestic',
      title: 'Countertop Pro Installation',
      location: 'Indiranagar, Bengaluru',
      tag: 'Modular Kitchen Counter',
      description: 'Plug-and-play adapter connected directly to the aerator tap. Tubing routed neatly along the corner tiles.'
    },
    {
      id: 2,
      category: 'domestic',
      title: 'Under-Sink RO setup',
      location: 'Whitefield, Bengaluru',
      tag: 'Hidden Cabinet Fit',
      description: 'Purifier unit and 8L steel pressure tank mounted inside cabinet under kitchen sink. Sleek faucet fits deck.'
    },
    {
      id: 3,
      category: 'commercial',
      title: 'Commercial RO System',
      location: 'HSR Layout Office Cafe',
      tag: 'Pantry Coffee Dispenser',
      description: 'LPH 50 system supplying pure water directly to coffee machinery, ice dispensers, and drinking faucets.'
    },
    {
      id: 4,
      category: 'industrial',
      title: 'Industrial RO plant',
      location: 'Peenya Industrial Area',
      tag: 'ISO 250 LPH Plant',
      description: 'Heavy skid-mounted sand pre-filters, carbon vessels, and high-pressure vertical multi-stage pumps.'
    },
    {
      id: 5,
      category: 'domestic',
      title: 'Aura Premium Wall Mounted',
      location: 'Koramangala Apartment',
      tag: 'Wall Centerpiece',
      description: 'Glossy cabinet mounted above kitchen sink. White tubing drilled safely through tiles to water line.'
    },
    {
      id: 6,
      category: 'commercial',
      title: 'Multi-stage UV sterilizer',
      location: 'Fortis Clinic Wash Area',
      tag: 'Sanitary Water Supply',
      description: 'Stainless steel UV sterilizer chambers connected to lab sinks, ensuring microbe-free washouts.'
    }
  ];

  const filteredItems = items.filter((item) => tab === 'all' || item.category === tab);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Customer Showcases</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Our installations in action
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Take a look at how our technical teams plumb and fit water purifiers in kitchens, office pantries, healthcare clinics, and factories.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-10 border-b border-line/10 pb-6 max-w-xl mx-auto">
        {[
          { id: 'all', label: 'All Photos' },
          { id: 'domestic', label: 'Home Setups' },
          { id: 'commercial', label: 'Commercial' },
          { id: 'industrial', label: 'Industrial' }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-2.5 rounded-full text-[13.5px] font-semibold border transition-all duration-300 ${
              tab === t.id
                ? "bg-navy text-white border-navy shadow-sm"
                : "bg-paper text-ink-soft border-line/15 hover:bg-mist/35 hover:text-navy"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Gallery Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="card bg-mist/35 border border-line/10 rounded-radius overflow-hidden hover:shadow-md transition-all duration-300"
          >
            {/* Vector Placeholder representing installation layout */}
            <div className="h-56 bg-mist-deep/40 flex items-center justify-center p-6 border-b border-line/10">
              <svg viewBox="0 0 200 200" fill="none" className="h-full">
                <rect x="30" y="30" width="140" height="140" rx="8" fill="var(--mist-deep)" stroke="var(--teal)" strokeWidth="2" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="30" fill="var(--teal)" opacity="0.15" />
                <path d="M70 100 H130 M100 70 V130" stroke="var(--teal)" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="5" fill="var(--gold)" />
              </svg>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="card-tag text-[10px] font-bold text-teal-deep uppercase tracking-wider">{item.tag}</span>
                <span className="text-[11px] font-semibold text-ink-soft">{item.location}</span>
              </div>
              <h3 className="text-base font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-[13px] text-ink-soft leading-relaxed">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

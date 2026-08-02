import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, Product } from '../data/products';
import { useBooking } from '../context/BookingContext';

export const Products: React.FC = () => {
  const { openBooking } = useBooking();
  const [searchParams] = useSearchParams();
  const [filterTab, setFilterTab] = useState<string>('all');

  // Filter based on URL queries (e.g. /products?filter=ro)
  useEffect(() => {
    const filterQuery = searchParams.get('filter');
    if (filterQuery) {
      setFilterTab(filterQuery);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((p) => {
    if (filterTab === 'all') return true;
    if (filterTab === 'domestic') return p.category.includes('Domestic');
    if (filterTab === 'commercial') return p.category.includes('Commercial');
    if (filterTab === 'industrial') return p.category.includes('Industrial');
    
    // Technology-specific filters
    const nameUpper = p.name.toUpperCase();
    const tagUpper = p.tag.toUpperCase();
    
    if (filterTab === 'ro') return nameUpper.includes('RO') || tagUpper.includes('RO');
    if (filterTab === 'uv') return nameUpper.includes('UV') || tagUpper.includes('UV');
    if (filterTab === 'alkaline') return nameUpper.includes('ALKALINE') || tagUpper.includes('ALKALINE');
    if (filterTab === 'copper') return nameUpper.includes('COPPER') || nameUpper.includes('+CU') || nameUpper.includes(' CU') || tagUpper.includes('COPPER');
    if (filterTab === 'ss') return nameUpper.includes('STEEL') || nameUpper.includes('STAINLESS') || nameUpper.includes('SS ') || tagUpper.includes('STAINLESS') || tagUpper.includes('STEEL');
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Product Catalog</span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Purification systems for every household and industry
        </h1>
        <p className="text-ink-soft leading-relaxed">
          From advanced domestic RO+UV kitchen purifiers to high-capacity commercial purification systems, discover the ideal safety standard for your water.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 sm:mb-12 border-b border-line/10 pb-5 sm:pb-6 max-w-5xl mx-auto">
        {[
          { id: 'all', label: 'All Systems' },
          { id: 'domestic', label: 'Home Purifiers' },
          { id: 'commercial', label: 'Commercial' },
          { id: 'industrial', label: 'Industrial Plants' },
          { id: 'ro', label: 'RO Tech' },
          { id: 'uv', label: 'UV Sterilizers' },
          { id: 'alkaline', label: 'Alkaline Boost' },
          { id: 'copper', label: 'Active Copper' },
          { id: 'ss', label: 'Stainless Steel' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterTab(tab.id)}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 min-h-[44px] rounded-full text-[12px] sm:text-[13.5px] font-semibold border transition-all duration-300 ${
              filterTab === tab.id
                ? "bg-navy text-white border-navy shadow-sm"
                : "bg-paper text-ink-soft border-line/15 hover:bg-mist/35 hover:text-navy"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-mist/20 rounded-radius border border-line/10 max-w-xl mx-auto">
          <p className="text-ink-soft text-[15px] font-bold">No products found matching the selected filter.</p>
          <button onClick={() => setFilterTab('all')} className="btn-primary mt-4">
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((p) => (
            <article
              key={p.slug}
              className="product-card bg-paper border border-line/10 rounded-radius overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 relative"
            >
              {p.tag && (
                <div className="product-badge absolute top-4 left-4 bg-navy text-white text-[9.5px] font-bold py-1 px-3 rounded-radius-sm uppercase tracking-wider shadow-sm z-10">
                  {p.tag}
                </div>
              )}
              
              {/* Product Image */}
              <div className="h-56 bg-white flex items-center justify-center border-b border-line/10 overflow-hidden p-6 relative">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="card-tag text-xs font-bold text-teal-deep">{p.tag}</span>
                  <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider">{p.category.replace(' Water Filters', '')}</span>
                </div>
                <h3 className="text-base font-bold text-navy mb-2 hover:text-teal transition-colors line-clamp-2">
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className="text-[13px] text-ink-soft leading-relaxed mb-6 flex-grow line-clamp-3">
                  {p.tagline}
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-t border-line/10 pt-4 mt-auto">
                  <span className="text-lg font-extrabold text-navy">{p.price}</span>
                  <div className="flex items-center gap-2">
                    <Link to={`/products/${p.slug}`} className="btn-ghost">
                      View Specs
                    </Link>
                    <button onClick={() => openBooking(p.name)} className="btn-primary btn-compact">
                      Book Demo
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </motion.div>
  );
};

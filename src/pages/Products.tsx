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
    if (filterTab === 'domestic') return p.category.includes('Domestic') || p.category.includes('Countertop') || p.category.includes('Wall');
    if (filterTab === 'commercial') return p.category.includes('Commercial');
    if (filterTab === 'industrial') return p.category.includes('Industrial');
    if (filterTab === 'ro') return p.category.includes('RO') || p.category.includes('Domestic') || p.category.includes('Whole');
    if (filterTab === 'uv') return p.category.includes('UV');
    if (filterTab === 'uf') return p.category.includes('UF');
    if (filterTab === 'softeners') return p.category.includes('Softener');
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Purification systems for every household and industry
        </h1>
        <p className="text-ink-soft leading-relaxed">
          From compact plug-and-play kitchen countertop filters to high-performance heavy industrial RO skids, discover the ideal safety standard for your water.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 border-b border-line/10 pb-6 max-w-4xl mx-auto">
        {[
          { id: 'all', label: 'All Systems' },
          { id: 'domestic', label: 'Home Filters' },
          { id: 'commercial', label: 'Commercial' },
          { id: 'industrial', label: 'Industrial Plants' },
          { id: 'ro', label: 'RO Membrane' },
          { id: 'uv', label: 'Active UV' },
          { id: 'uf', label: 'Gravity UF' },
          { id: 'softeners', label: 'Water Softeners' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-[13.5px] font-semibold border transition-all duration-300 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <article
              key={p.slug}
              className={`product-card bg-mist/35 border border-line/10 rounded-radius overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 relative ${
                p.slug === 'whole-home' ? 'border-2 border-teal bg-paper shadow-sm' : ''
              }`}
            >
              {p.slug === 'whole-home' && (
                <div className="product-badge absolute top-4 left-4 bg-teal text-white text-[11px] font-bold py-1 px-3 rounded-radius-sm">
                  Best Seller
                </div>
              )}
              
              {/* Product Image */}
              <div className="h-48 bg-mist-deep/30 flex items-center justify-center border-b border-line/10 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="card-tag text-xs font-bold text-teal-deep">{p.tag}</span>
                  <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider">{p.category}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 hover:text-teal transition-colors">
                  <Link to={`/products/${p.slug}`}>{p.name}</Link>
                </h3>
                <p className="text-[14px] text-ink-soft leading-relaxed mb-6 flex-grow">
                  {p.tagline}
                </p>
                <div className="flex justify-between items-center border-t border-line/10 pt-4 mt-auto">
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

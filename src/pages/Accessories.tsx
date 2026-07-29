import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { accessories, Accessory } from '../data/accessories';
import { Check, Info, ShieldCheck, X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const Accessories: React.FC = () => {
  const { openBooking } = useBooking();
  const [selectedAcc, setSelectedAcc] = useState<Accessory | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Replacement Parts</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Genuine cartridges and components
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Maintain your system's filtration efficiency with certified replacement cartridges, membrane cores, high-pressure pumps, and leak-free PE tubing kits.
        </p>
      </div>

      {/* Grid of Accessories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {accessories.map((acc) => (
          <article
            key={acc.slug}
            onClick={() => setSelectedAcc(acc)}
            className="card bg-mist/35 border border-line/10 rounded-radius p-6 flex flex-col justify-between hover:shadow-md cursor-pointer hover:border-teal transition-all duration-300"
          >
            <div>
              {acc.image && (
                <div className="h-32 rounded-radius-sm overflow-hidden mb-3">
                  <img src={acc.image} alt={acc.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              <span className="card-tag text-[10px] font-bold text-teal-deep uppercase tracking-wider">Spare Parts</span>
              <h3 className="text-[17px] font-bold text-navy mt-1 mb-2">
                {acc.name}
              </h3>
              <p className="text-[13px] text-ink-soft leading-relaxed mb-4 line-clamp-3">
                {acc.tagline}
              </p>
            </div>
            <div className="flex justify-between items-center border-t border-line/5 pt-4 mt-auto">
              <span className="text-base font-extrabold text-navy">{acc.price}</span>
              <span className="text-[12px] font-semibold text-teal underline underline-offset-2">
                View Details
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Detailed overlay modal for single accessory */}
      <AnimatePresence>
        {selectedAcc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAcc(null)}
              className="absolute inset-0 bg-navy-deep/45 backdrop-blur-[6px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative z-10 w-full max-w-lg rounded-radius bg-paper p-6 md:p-8 shadow-lg border border-line/10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedAcc(null)}
                className="absolute top-5 right-5 text-ink-soft hover:text-navy"
                aria-label="Close details"
              >
                <X className="w-5.5 h-5.5" />
              </button>

              <span className="card-tag text-[10px] font-bold text-teal-deep uppercase tracking-wider block">Spare Parts Details</span>
              <h2 className="text-xl md:text-2xl font-bold text-navy mt-1 mb-3">{selectedAcc.name}</h2>
              <p className="text-[14px] text-ink-soft leading-relaxed mb-6">{selectedAcc.description}</p>

              {/* Price & Cartridge life details */}
              <div className="grid grid-cols-2 gap-4 bg-mist/30 border border-line/5 rounded-radius-sm p-4 mb-6 text-[14px]">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider">Retail Price</span>
                  <span className="text-xl font-extrabold text-navy mt-0.5">{selectedAcc.price}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider">Average Lifespan</span>
                  <span className="text-base font-bold text-teal-deep mt-1">{selectedAcc.lifespan}</span>
                </div>
              </div>

              {/* Compatibility & Specs */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex gap-2 items-start text-[13.5px]">
                  <Info className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-ink-soft"><strong className="text-navy font-bold">Compatibility:</strong> {selectedAcc.compatibility}</span>
                </div>
                <div className="flex gap-2 items-start text-[13.5px]">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-ink-soft"><strong className="text-navy font-bold">Lifespan Info:</strong> Predetermined based on standard municipal water. High silt can accelerate wear.</span>
                </div>
              </div>

              {/* Features list */}
              <div className="flex flex-col gap-2.5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy">Key Highlights</h4>
                {selectedAcc.features.map((feat, i) => (
                  <div key={i} className="flex gap-2 items-start text-[13.5px]">
                    <span className="w-4.5 h-4.5 rounded-full bg-teal/10 flex items-center justify-center text-teal flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-ink-soft">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Specs Details */}
              <div className="border border-line/10 rounded-radius-sm overflow-hidden bg-paper mb-6">
                {Object.entries(selectedAcc.specifications).map(([k, v], idx) => (
                  <div key={idx} className="grid grid-cols-2 p-3 text-[13px] border-b border-line/5 last:border-b-0">
                    <span className="text-ink-soft font-medium">{k}</span>
                    <span className="text-navy font-bold text-right">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 border-t border-line/5 pt-4">
                <button
                  onClick={() => setSelectedAcc(null)}
                  className="btn-ghost"
                >
                  Close Details
                </button>
                <button
                  onClick={() => {
                    setSelectedAcc(null);
                    openBooking(`Replacement Part: ${selectedAcc.name}`);
                  }}
                  className="btn-primary"
                >
                  Order Part / Book Swap
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

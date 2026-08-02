import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

interface SpecsCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecsCompareModal: React.FC<SpecsCompareModalProps> = ({ isOpen, onClose }) => {
  const { openBooking } = useBooking();

  // Esc key closure
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBookDemo = () => {
    onClose();
    openBooking("Enrich Ritz Pro 2X RO+UV");
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy-deep/40 backdrop-blur-[8px]"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative z-10 w-full max-w-4xl rounded-radius bg-paper/90 border border-line/10 p-5 sm:p-6 md:p-10 shadow-lg backdrop-blur-lg max-h-[90vh] max-h-[90dvh] overflow-y-auto overscroll-contain"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-ink-soft hover:text-navy transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5.5 h-5.5" />
        </button>

        <h2 className="text-xl md:text-2xl font-bold text-navy mb-2 tracking-tight">Product Specifications Comparison</h2>
        <p className="text-[14.5px] text-ink-soft mb-6">
          Find the exact engineering specifications suited for your water quality and volume requirements.
        </p>

        {/* Scrollable table wrapper */}
        <div className="comparison-scroll overflow-x-auto border border-line/10 rounded-radius-sm mb-6">
          <table className="compare-table w-full text-[14.5px] text-left border-collapse">
            <thead>
              <tr className="bg-mist-deep/40">
                <th className="p-4 border-b border-line/10 text-navy font-bold">Feature</th>
                <th className="p-4 border-b border-line/10 text-navy font-bold">Sure Delight 2X UV+UF</th>
                <th className="p-4 border-b border-line/10 text-navy font-bold bg-mist/60 border-x-2 border-teal/20">
                  Enrich Ritz Pro 2X RO+UV (Best Seller)
                </th>
                <th className="p-4 border-b border-line/10 text-navy font-bold">UTC UV Booster</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "MRP Price", countertop: "₹10,999", wholehome: "₹23,999", undersink: "₹16,499" },
                { label: "Installation Type", countertop: "Wall Mount / Countertop", wholehome: "Wall Mount / Countertop", undersink: "Under-the-Counter (UTC)" },
                { label: "Filtration Stages", countertop: "7 Stages", wholehome: "9 Stages", undersink: "6 Stages" },
                { label: "Ideal TDS Range", countertop: "Upto 200 ppm (Municipal)", wholehome: "Upto 2000 ppm (Borewell/Tank)", undersink: "Upto 200 ppm (Municipal)" },
                { label: "Purifying Capacity", countertop: "12 L/hr", wholehome: "20 L/hr", undersink: "15 L/hr" },
                { label: "Active UV Shield", countertop: "Yes (UV e-Boiling)", wholehome: "Yes (Advanced UV LED)", undersink: "Yes (UV Booster)" },
                { label: "Dispense Type", countertop: "Press-Fit Tap", wholehome: "Press-Fit Tap & Continuous", undersink: "Premium Faucet" },
                { label: "Tank Volume", countertop: "7 Litres (Stainless Steel)", wholehome: "6 Litres (Stainless Steel)", undersink: "8 Litres (External tank)" },
                { label: "Power Backup", countertop: "Yes (Gravity dispense)", wholehome: "Yes", undersink: "Yes" }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-line/10 hover:bg-mist/10">
                  <td className="p-4 font-bold text-navy">{row.label}</td>
                  <td className="p-4 text-ink-soft">{row.countertop}</td>
                  <td className="p-4 font-semibold text-navy bg-mist/30 border-x-2 border-teal/10">
                    {row.wholehome}
                  </td>
                  <td className="p-4 text-ink-soft">{row.undersink}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer actions */}
        <div className="flex justify-end gap-4 border-t border-line/10 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="btn-ghost"
          >
            Close Specs
          </button>
          <button
            type="button"
            onClick={handleBookDemo}
            className="btn-primary"
          >
            Book Ritz Pro Demo
          </button>
        </div>
      </motion.div>
    </div>
  );
};

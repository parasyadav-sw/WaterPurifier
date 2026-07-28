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
    openBooking("Whole Home RO+UV");
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
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
        className="relative z-10 w-full max-w-4xl rounded-radius bg-paper/90 border border-line/10 p-6 md:p-10 shadow-lg backdrop-blur-lg max-h-[90vh] overflow-y-auto"
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
                <th className="p-4 border-b border-line/10 text-navy font-bold">Countertop Pro</th>
                <th className="p-4 border-b border-line/10 text-navy font-bold bg-mist/60 border-x-2 border-teal/20">
                  Whole Home RO+UV (Best Seller)
                </th>
                <th className="p-4 border-b border-line/10 text-navy font-bold">Under-Sink Compact</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "MRP Price", countertop: "₹6,999", wholehome: "₹14,499", undersink: "₹9,299" },
                { label: "Installation Type", countertop: "Countertop (Plug & Play)", wholehome: "Inlet Mainline (Wall Mount)", undersink: "Under-Sink cabinet" },
                { label: "Filtration Stages", countertop: "5 Stages (RO+Carbon)", wholehome: "7 Stages (RO+UV+Mineralizer)", undersink: "6 Stages (RO+Carbon+UV)" },
                { label: "Ideal TDS Range", countertop: "50 - 600 ppm", wholehome: "100 - 1500+ ppm", undersink: "50 - 1000 ppm" },
                { label: "Purifying Capacity", countertop: "8 L/hr", wholehome: "20 L/hr", undersink: "12 L/hr" },
                { label: "Active UV Shield", countertop: "No", wholehome: "Yes (Stainless Steel Chamber)", undersink: "Yes (Inline LED UV)" },
                { label: "Dispense Type", countertop: "Manual Cup lever", wholehome: "Press-Fit Tap & Continuous", undersink: "Dedicated Gooseneck Faucet" },
                { label: "Tank Volume", countertop: "4 Litres (Detachable)", wholehome: "10 Litres (Food-grade ABS)", undersink: "8 Litres (Pressurized steel)" },
                { label: "Power Backup", countertop: "No", wholehome: "Yes (Gravity-feed output)", undersink: "Yes" }
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
            Book Whole Home Demo
          </button>
        </div>
      </motion.div>
    </div>
  );
};

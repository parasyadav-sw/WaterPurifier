import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, Service } from '../data/services';
import { Check, ClipboardList, Clock, Info, X } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const Services: React.FC = () => {
  const { openBooking } = useBooking();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Technical Support</span>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Professional maintenance and support services
        </h1>
        <p className="text-ink-soft leading-relaxed">
          From emergency leak repairs and standard installations to Annual Maintenance Contracts (AMC) and laboratory water quality testing, our certified experts ensure constant safety.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc) => (
          <article
            key={svc.slug}
            onClick={() => setSelectedService(svc)}
            className="card bg-mist/35 border border-line/10 rounded-radius p-7 flex flex-col justify-between hover:shadow-md cursor-pointer hover:border-teal transition-all duration-300"
          >
            <div>
              {svc.image && (
                <div className="h-40 rounded-radius-sm overflow-hidden mb-4">
                  <img src={svc.image} alt={svc.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
              <span className="card-tag text-[10px] font-bold text-teal-deep uppercase tracking-wider block">Service Category</span>
              <h3 className="text-lg font-bold text-navy mt-1 mb-2">{svc.name}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed mb-6 line-clamp-3">
                {svc.tagline}
              </p>
            </div>
            <div className="flex justify-between items-center border-t border-line/5 pt-4 mt-auto">
              <span className="text-[14.5px] font-extrabold text-navy">{svc.price}</span>
              <span className="text-[13px] font-semibold text-teal underline underline-offset-2">
                Configure Service →
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Detailed overlay modal for single service */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-navy-deep/45 backdrop-blur-[8px]"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative z-10 w-full max-w-xl rounded-radius bg-paper p-6 md:p-10 shadow-lg border border-line/10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-ink-soft hover:text-navy"
                aria-label="Close details"
              >
                <X className="w-5.5 h-5.5" />
              </button>

              <span className="card-tag text-[10px] font-bold text-teal-deep uppercase tracking-wider block">Service Information</span>
              <h2 className="text-xl md:text-2xl font-bold text-navy mt-1 mb-3">{selectedService.name}</h2>
              <p className="text-[14.5px] text-ink-soft leading-relaxed mb-6">{selectedService.description}</p>

              {/* Price & Service SLA */}
              <div className="grid grid-cols-2 gap-4 bg-mist/30 border border-line/5 rounded-radius-sm p-4 mb-6 text-[14px]">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider">Starting Price</span>
                  <span className="text-lg font-extrabold text-navy mt-0.5">{selectedService.price}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider">Service SLA</span>
                  <span className="text-base font-bold text-teal-deep mt-1 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Within 2-4 Hours
                  </span>
                </div>
              </div>

              {/* Features list */}
              <div className="flex flex-col gap-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-1">What's Covered</h4>
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-[14px]">
                    <span className="w-4.5 h-4.5 rounded-full bg-teal/10 flex items-center justify-center text-teal flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-ink-soft leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Step-by-Step Process */}
              <div className="flex flex-col gap-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-1 flex items-center gap-1.5">
                  <ClipboardList className="w-4 h-4 text-teal" /> Our Process Flow
                </h4>
                <div className="flex flex-col gap-2.5 pl-2 border-l border-line/10">
                  {selectedService.process.map((step, i) => (
                    <div key={i} className="text-[13.5px] text-ink-soft">
                      <strong className="text-navy font-bold">{i+1}. </strong> {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Note */}
              <div className="flex gap-2 items-start text-[13px] bg-mist/20 border border-line/10 rounded-radius-sm p-4 mb-6">
                <Info className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <p className="text-ink-soft">
                  Bookings made online receive a direct phone confirmation within 15 minutes. Emergency repair calls are dispatched with highest priority.
                </p>
              </div>

              <div className="flex justify-end gap-3 border-t border-line/5 pt-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="btn-ghost"
                >
                  Close Details
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    openBooking(`Service: ${selectedService.name}`);
                  }}
                  className="btn-primary"
                >
                  Book Service Visit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

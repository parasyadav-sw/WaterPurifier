import React from 'react';
import { motion } from 'framer-motion';

export const TermsConditions: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-16 max-w-3xl"
    >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy mb-6 tracking-tight">Terms & Conditions</h1>
      <div className="prose text-ink-soft leading-relaxed flex flex-col gap-6 text-[15px]">
        <p>Last updated: July 28, 2026</p>
        <p>Please read these Terms and Conditions carefully before using our water purification booking services. By accessing our forms, booking tests, or ordering cartridges, you agree to be bound by these Terms.</p>
        
        <h2 className="text-xl font-bold text-navy mt-4">1. Service Scheduling</h2>
        <p>Bookings are subject to technical availability. While we make every attempt to dispatch technicians within 2-4 hours, peak periods can cause delivery delays.</p>

        <h2 className="text-xl font-bold text-navy mt-4">2. Installation Approvals</h2>
        <p>Technicians will perform plumbing adaptations near kitchen cold water pipes. Customers must obtain necessary permissions from landlords or apartment associations prior to drilling brackets or pipes.</p>
      </div>
    </motion.div>
  );
};

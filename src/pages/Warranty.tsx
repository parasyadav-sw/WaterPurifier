import React from 'react';
import { motion } from 'framer-motion';

export const Warranty: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-16 max-w-3xl"
    >
      <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 tracking-tight">Warranty Policy</h1>
      <div className="prose text-ink-soft leading-relaxed flex flex-col gap-6 text-[15px]">
        <p>Aquapure guarantees all newly purchased water purifier units against defects in materials and workmanship for a period of **One (1) Year** from the date of installation.</p>
        
        <h2 className="text-xl font-bold text-navy mt-4">What is Covered</h2>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Defects in internal electrical components including booster pumps, solenoid valves, and low pressure switches.</li>
          <li>Power adapter boards and control panel LEDs.</li>
          <li>First-year RO membranes and inline cartridges under normal municipal water parameters.</li>
        </ul>

        <h2 className="text-xl font-bold text-navy mt-4">What is Excluded</h2>
        <p>This warranty does not cover damages caused by physical impact accidents, low-pressure dry running, running hot water through the inlet lines, or customer attempts to dismantle internal pipelines without certified technician supervision.</p>
      </div>
    </motion.div>
  );
};

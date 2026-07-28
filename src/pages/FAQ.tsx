import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const faqs = [
    { q: "What is TDS and what level is safe for drinking water?", a: "TDS stands for Total Dissolved Solids. It represents the concentration of dissolved minerals, salts, and metals in water. A level between 50 and 150 ppm is considered ideal for tasting sweet and providing proper hydration, while levels above 500 ppm indicate hard, mineral-heavy water requiring RO filtration." },
    { q: "How often do filters need to be changed?", a: "Sediment pre-filters should be replaced every 3-6 months. Internal carbon block and mineralizer cartridges generally last 9-12 months. TFC RO membranes last between 12 and 18 months, depending on your input water quality." },
    { q: "What is the difference between RO, UV, and UF?", a: "RO (Reverse Osmosis) physically filters dissolved salts and heavy metals down to 0.0001 microns. UV (Ultraviolet) uses UV-C rays to sterilize the DNA of living viruses and bacteria. UF (Ultra Filtration) uses a 0.1-micron mesh to remove mud and biological cysts without needing electricity." },
    { q: "Is the installation service free?", a: "Yes, every new Aquapure water purifier purchase includes free professional installation and flow calibration by our certified technician." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12 max-w-4xl"
    >
      <div className="text-center mb-12">
        <span className="eyebrow">FAQ Help Center</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 tracking-tight">Frequently Asked Questions</h1>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-line/10 rounded-radius-sm overflow-hidden bg-mist/10">
            <button
              onClick={() => setActive(active === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left font-bold text-navy hover:bg-mist/30 transition-colors"
            >
              <span>{faq.q}</span>
              <span className="text-teal font-normal text-xl">{active === idx ? "−" : "+"}</span>
            </button>
            {active === idx && (
              <div className="p-5 border-t border-line/10 text-[14.5px] text-ink-soft leading-relaxed bg-paper">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

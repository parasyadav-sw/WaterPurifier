import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart, Award } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Our Story</span>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Purity, technology, and trust
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Founded in Bengaluru, Aquapure is driven by a simple mission: design premium, reliable, and eco-friendly water purification systems tailored specifically to handle chemical and hard-water challenges across Indian states.
        </p>
      </div>

      {/* Grid of Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
        <div className="p-6 bg-mist/20 border border-line/10 rounded-radius flex flex-col gap-3 shadow-sm text-center items-center">
          <img src="/images/about/manufacturing.jpg" alt="Our Mission" className="w-full h-32 object-cover rounded-radius-sm" />
          <h3 className="text-base font-bold text-navy">Our Mission</h3>
          <p className="text-[13px] text-ink-soft leading-relaxed">
            Eliminate dissolved toxic chemicals and single-use plastics from every household tap, delivering lab-tested purity.
          </p>
        </div>
        <div className="p-6 bg-mist/20 border border-line/10 rounded-radius flex flex-col gap-3 shadow-sm text-center items-center">
          <img src="/images/about/quality-inspection.jpg" alt="Engineering Focus" className="w-full h-32 object-cover rounded-radius-sm" />
          <h3 className="text-base font-bold text-navy">Engineering Focus</h3>
          <p className="text-[13px] text-ink-soft leading-relaxed">
            Utilize hyper-filtration membranes, stainless steel UV-C chambers, and active mineral reintroduction to maintain mineral profiles.
          </p>
        </div>
        <div className="p-6 bg-mist/20 border border-line/10 rounded-radius flex flex-col gap-3 shadow-sm text-center items-center">
          <img src="/images/about/customer-support.jpg" alt="Trust & Service" className="w-full h-32 object-cover rounded-radius-sm" />
          <h3 className="text-base font-bold text-navy">Trust & Service</h3>
          <p className="text-[13px] text-ink-soft leading-relaxed">
            Support every purchase with proactive cartridge shipments, on-site installations, and responsive customer help lines.
          </p>
        </div>
        <div className="p-6 bg-mist/20 border border-line/10 rounded-radius flex flex-col gap-3 shadow-sm text-center items-center">
          <img src="/images/about/team-engineers.jpg" alt="Certifications" className="w-full h-32 object-cover rounded-radius-sm" />
          <h3 className="text-base font-bold text-navy">Certifications</h3>
          <p className="text-[13px] text-ink-soft leading-relaxed">
            Conforms to NSF standard 58, ISO 9001 quality audits, and IS 16240 national safety certifications.
          </p>
        </div>
      </div>

      {/* Certifications Banner */}
      <section className="bg-mist border border-line/10 rounded-radius p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">Laboratory Audits & Certifications</h2>
        <p className="text-[14.5px] text-ink-soft leading-relaxed max-w-2xl mx-auto mb-8">
          Aquapure filters undergo regular independent testing to ensure they physically remove lead, arsenic, fluorides, chlorine, microplastics, and pathogenetic bacteria. Our manufacturing plants maintain ISO 9001:2015 certifications.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
          <span className="text-[12px] font-bold text-navy border border-line/25 px-5 py-2.5 rounded-radius-sm bg-paper shadow-sm">WQA Gold Seal</span>
          <span className="text-[12px] font-bold text-navy border border-line/25 px-5 py-2.5 rounded-radius-sm bg-paper shadow-sm">NSF/ANSI 58 Tested</span>
          <span className="text-[12px] font-bold text-navy border border-line/25 px-5 py-2.5 rounded-radius-sm bg-paper shadow-sm">ISO 9001 Certified</span>
          <span className="text-[12px] font-bold text-navy border border-line/25 px-5 py-2.5 rounded-radius-sm bg-paper shadow-sm">BIS IS 16240 Standard</span>
        </div>
      </section>

    </motion.div>
  );
};

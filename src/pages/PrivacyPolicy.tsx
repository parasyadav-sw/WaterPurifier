import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicy: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-16 max-w-3xl"
    >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy mb-6 tracking-tight">Privacy Policy</h1>
      <div className="prose text-ink-soft leading-relaxed flex flex-col gap-6 text-[15px]">
        <p>Last updated: July 28, 2026</p>
        <p>Aquapure Water Systems Private Limited (\"we\", \"our\", or \"us\") operates the Aquapure website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
        
        <h2 className="text-xl font-bold text-navy mt-4">1. Information Collection and Use</h2>
        <p>We collect several different types of information for various purposes to provide and improve our Service to you, including name, phone number, address, and local water quality metrics when scheduling tests.</p>

        <h2 className="text-xl font-bold text-navy mt-4">2. Sharing of Personal Data</h2>
        <p>We do not sell or share your contact parameters with third-party advertising companies. Your details are strictly used to schedule service appointments and dispatch technicians to your local address.</p>

        <h2 className="text-xl font-bold text-navy mt-4">3. Security of Data</h2>
        <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your Personal Data.</p>
      </div>
    </motion.div>
  );
};

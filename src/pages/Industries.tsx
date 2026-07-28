import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Coffee, ShieldAlert, Award, FileSpreadsheet } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

interface Industry {
  id: string;
  name: string;
  capacity: string;
  standard: string;
  description: string;
  solution: string;
  benefits: string[];
}

export const Industries: React.FC = () => {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<string>('office');

  const industries: Industry[] = [
    {
      id: "home",
      name: "Apartments & Residential Societies",
      capacity: "10,000 to 50,000 Litres/day",
      standard: "IS 10500 Drinking Water Guidelines",
      description: "Complete mainline setups for multi-story residential buildings. Handles high-turbidity municipal blends and hard borewell tanker water, ensuring soft scale-free supply to geysers, washing machines, and kitchens.",
      solution: "Jumbo Mainline Filters & Industrial Water Softener Skid",
      benefits: [
        "Prevents hard-water scaling in high-cost plumbing pipelines",
        "Reduces hair fall, skin dryness, and soap usage across all apartments",
        "Decreases periodic maintenance costs for boilers and water heaters"
      ]
    },
    {
      id: "office",
      name: "Corporate Offices & Pantries",
      capacity: "200 to 1,000 Litres/day",
      standard: "BEE & OHSAS Safety Regulations",
      description: "Direct-connect drinking water filtration for office floors, pantries, and cafeteria stations. Connects seamlessly to multiple hot/cold dispensers, providing continuous cold water to staff.",
      solution: "Commercial High-Output System (LPH 50)",
      benefits: [
        "Provides safe drinking water to employees, boosting health and safety compliance",
        "Reduces corporate expenses by 60% compared to heavy 20-litre water can deliveries",
        "Integrates directly with office coffee makers and refrigerator ice lines"
      ]
    },
    {
      id: "hospital",
      name: "Hospitals, Clinics & Healthcare",
      capacity: "500 to 5,000 Litres/day",
      standard: "NABH Sanitation Standards",
      description: "Ultra-secure purification meeting clinical sanitation guidelines. Integrates multi-stage RO with high-dose UV sterilization to ensure pyrogen-free and microbe-free water in wash areas, wards, and labs.",
      solution: "Stainless-Steel Skid RO+UV Clinical Systems",
      benefits: [
        "Provides 100% biological protection, critical for vulnerable patients",
        "Supplies pure water for clinical autoclaves, dialyzers, and sterilizers",
        "Corrosion-resistant stainless steel skids ensure longevity"
      ]
    },
    {
      id: "restaurant",
      name: "Restaurants, Cafes & Kitchens",
      capacity: "500 to 2,000 Litres/day",
      standard: "FSSAI Food Safety Standards",
      description: "Pure water is the secret to high-quality cooking and baking. Our systems remove chlorine smell and scaling minerals, protecting commercial dishwashers, steamers, and espresso machines from failure.",
      solution: "Dual-RO High-Volume Commercial Skid",
      benefits: [
        "Prevents scale deposits inside costly espresso machines and kitchen steamers",
        "Ensures consistent flavors in bakery doughs, broths, and hot beverages",
        "Reduces dishwasher staining, keeping glasses clear"
      ]
    },
    {
      id: "laboratory",
      name: "Laboratories & Research Centers",
      capacity: "50 to 300 Litres/day",
      standard: "ASTM Type II Pure Reagent Standards",
      description: "Deionized and hyper-filtered water for chemical reagents, battery refills, slide cleanings, and scientific experimentation. Reduces TDS to absolute zero and removes trace chemical residues.",
      solution: "Commercial RO + Mixed-Bed Deionization Skid",
      benefits: [
        "Achieves zero TDS reagent-grade water, preventing chemical experimental errors",
        "Stops silicate, phosphate, and heavy metal interferences",
        "Compact tabletop skid mounting fits small laboratory spaces"
      ]
    },
    {
      id: "factory",
      name: "Factories & Manufacturing Plants",
      capacity: "2,000 to 20,000 Litres/day",
      standard: "ISO 9001 Process Water Standards",
      description: "Heavy-duty industrial skid installations providing process water for cooling towers, chemical manufacturing, packaging lines, and factory staff canteen stations.",
      solution: "Industrial RO Plant (LPH 250 to 2000)",
      benefits: [
        "Protects high-cost factory tooling from rust corrosion and lime scaling",
        "Guarantees reliable quality matching process specifications",
        "Fully automated sand and carbon backwash systems run with minimal supervision"
      ]
    }
  ];

  const active = industries.find((i) => i.id === activeTab) || industries[1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Sector Solutions</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Commercial and industrial water systems
        </h1>
        <p className="text-ink-soft leading-relaxed">
          From cafe pantries to multi-national factory skids, we design, build, and maintain high-volume water purification systems conforming to national safety guidelines.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 max-w-3xl mx-auto">
        {industries.map((ind) => (
          <button
            key={ind.id}
            onClick={() => setActiveTab(ind.id)}
            className={`px-5 py-2.5 rounded-full text-[13.5px] font-semibold border transition-all duration-300 ${
              activeTab === ind.id
                ? "bg-navy text-white border-navy shadow-sm"
                : "bg-paper text-ink-soft border-line/15 hover:bg-mist/35 hover:text-navy"
            }`}
          >
            {ind.name.split(' & ')[0]}
          </button>
        ))}
      </div>

      {/* Tab Content Card */}
      <div className="bg-paper border border-line/10 rounded-radius p-6 md:p-10 shadow-sm max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Info Column (7 Cols) */}
        <div className="md:col-span-8 flex flex-col gap-6">
          <div>
            <span className="card-tag text-[10px] font-bold text-teal-deep uppercase tracking-wider block">Industry Segment</span>
            <h2 className="text-2xl font-bold text-navy mt-1 mb-3">{active.name}</h2>
            <p className="text-[14.5px] text-ink-soft leading-relaxed">{active.description}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-1">Key Advantages</h4>
            {active.benefits.map((b, idx) => (
              <div key={idx} className="flex gap-2.5 items-start text-[14px]">
                <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center text-teal flex-shrink-0 mt-0.5">
                  <Award className="w-3 h-3" />
                </span>
                <span className="text-ink-soft leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Details Column (4 Cols) */}
        <div className="md:col-span-4 bg-mist/20 border border-line/10 rounded-radius p-5 flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-ink-soft uppercase tracking-wider">Required Capacity</span>
            <span className="text-base font-extrabold text-navy mt-0.5">{active.capacity}</span>
          </div>

          <div className="flex flex-col border-t border-line/10 pt-4">
            <span className="text-[10px] font-bold text-ink-soft uppercase tracking-wider">Regulatory Standards</span>
            <span className="text-[13.5px] font-semibold text-teal-deep mt-0.5 flex items-center gap-1">
              <FileSpreadsheet className="w-4 h-4 text-teal" /> {active.standard}
            </span>
          </div>

          <div className="flex flex-col border-t border-line/10 pt-4">
            <span className="text-[10px] font-bold text-ink-soft uppercase tracking-wider">Recommended Setup</span>
            <span className="text-[14px] font-bold text-navy mt-1">{active.solution}</span>
          </div>

          <button
            onClick={() => openBooking(`Industrial Consultation: ${active.name}`)}
            className="btn-primary w-full justify-center mt-2"
          >
            Request Site Consultation
          </button>
        </div>

      </div>
    </motion.div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Sliders, Settings } from 'lucide-react';

interface Tech {
  id: string;
  name: string;
  howItWorks: string;
  advantages: string[];
  maintenance: string;
  applications: string;
  microscopeSvg: React.ReactNode;
}

export const Technologies: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string>('ro');

  const techs: Tech[] = [
    {
      id: 'ro',
      name: 'Reverse Osmosis (RO)',
      howItWorks: 'Forces raw pressurized water through a semi-permeable thin-film composite membrane with pores measuring 0.0001 microns. Rejects dissolved salts, heavy metals, pesticides, and biological elements, sending them to the drain line while letting only pure water pass.',
      advantages: [
        'Removes dissolved chemical salts and toxic heavy metals (lead, arsenic, fluorides)',
        'Reduces water hardness and salty taste',
        'Stops 99% of bacteria and viruses physically'
      ],
      maintenance: 'RO membrane element should be replaced every 12 to 18 months or after filtering 6,000 Litres.',
      applications: 'Essential for groundwater, tanker supply, or any input TDS exceeding 250 ppm.',
      microscopeSvg: (
        <>
          <line x1="20" y1="80" x2="80" y2="20" stroke="var(--teal)" strokeWidth="4" />
          <circle cx="28" cy="36" r="4.5" fill="#475569" />
          <circle cx="42" cy="66" r="3.5" fill="#64748B" />
          <circle cx="68" cy="30" r="2" fill="var(--teal)" />
          <circle cx="78" cy="46" r="2" fill="var(--teal)" />
        </>
      )
    },
    {
      id: 'uv',
      name: 'Active Ultraviolet (UV)',
      howItWorks: 'Exposes flowing water to shortwave ultraviolet (UV-C) rays at a 253.7nm wavelength inside a stainless steel chamber. The UV energy penetrates microorganism cells, disrupting their DNA, preventing them from reproducing or causing infection.',
      advantages: [
        'Kills 99.99% of biological pathogens (E. coli, viruses, protozoan cysts)',
        '100% chemical-free purification process',
        'Preserves all natural minerals without altering taste'
      ],
      maintenance: 'UV tube requires replacement every 9,000 burning hours or once a year.',
      applications: 'Low TDS municipal tap water that carries potential biological safety concerns.',
      microscopeSvg: (
        <>
          <circle cx="50" cy="50" r="40" fill="rgba(139, 92, 246, 0.25)" />
          <rect x="45" y="15" width="10" height="70" fill="#C084FC" rx="3" />
          <circle cx="28" cy="45" r="3" fill="#10B981" opacity="0.4" />
          <line x1="22" y1="39" x2="34" y2="51" stroke="var(--danger)" strokeWidth="1.5" />
        </>
      )
    },
    {
      id: 'uf',
      name: 'Ultra Filtration (UF)',
      howItWorks: 'Uses a bundle of hollow-fiber membranes with a 0.1-micron pore size. Suspended particles, clay, mud, organic debris, and bacteria are physically filtered out of the stream by gravity, allowing water and dissolved minerals to pass.',
      advantages: [
        'Operates entirely on gravity feed without electricity or running water pressure',
        'Physically strain out micro-mud, turbidity, and organic particles',
        'Extremely durable filter fibers'
      ],
      maintenance: 'Hollow fiber bundle should be backwashed monthly using a syringe tool and replaced every 12 months.',
      applications: 'Pre-treatment, gravity filters, or clean municipal inputs with slight turbidity.',
      microscopeSvg: (
        <>
          <line x1="50" y1="15" x2="50" y2="85" stroke="var(--teal)" strokeWidth="6" />
          <circle cx="38" cy="30" r="2" fill="#0F172A" />
          <circle cx="36" cy="55" r="1.5" fill="#0F172A" />
          <circle cx="68" cy="45" r="2.5" fill="var(--teal)" opacity="0.6" />
        </>
      )
    },
    {
      id: 'carbon',
      name: 'Activated Carbon block',
      howItWorks: 'Utilizes high-grade compressed coconut-shell activated carbon blocks. The organic media bonds chemically with passing dissolved molecules, adsorbing chlorine, pesticides, weed killers, and bad tastes.',
      advantages: [
        'High adsorption efficiency for organic chemical compounds',
        'Stops chlorine oxidation from damaging delicate RO membranes',
        'Refines water taste and eliminates stale odors'
      ],
      maintenance: 'Carbon blocks require replacement every 6 to 9 months or after filtering 4,000 Litres.',
      applications: 'Pre-RO filtration stages and final polishing filters.',
      microscopeSvg: (
        <>
          <rect x="25" y="25" width="50" height="50" fill="#1E293B" rx="6" />
          <circle cx="35" cy="35" r="2" fill="var(--paper)" opacity="0.4" />
          <circle cx="65" cy="45" r="2" fill="var(--paper)" opacity="0.4" />
          <circle cx="30" cy="20" r="3.5" fill="#84CC16" />
          <line x1="30" y1="20" x2="35" y2="28" stroke="#84CC16" strokeWidth="1" />
        </>
      )
    },
    {
      id: 'sediment',
      name: 'Sediment Filtration',
      howItWorks: 'Raw water flows through a graded-density spun polypropylene cartridge. Suspended physical sediments (larger than 5 microns) are trapped within the polypropylene matrix, protecting pipes and valves from sand or mud build-up.',
      advantages: [
        'Stops suspended silt, sand, mud, and pipe rust flakes physically',
        'High dirt-holding capacity preserves internal purifier pumps',
        'Low pressure drop does not restrict water flow speed'
      ],
      maintenance: 'Sediment pre-filter should be replaced every 3 to 6 months depending on raw water turbidity.',
      applications: 'Inlet mainline pre-filtration for all water purifiers.',
      microscopeSvg: (
        <>
          <line x1="50" y1="10" x2="50" y2="90" stroke="var(--teal)" strokeWidth="3" />
          <circle cx="30" cy="30" r="4.5" fill="#8B5A2B" />
          <circle cx="34" cy="65" r="5" fill="#A0522D" />
          <path d="M68 45 Q71 50 68 55 Q65 50 68 45 Z" fill="var(--teal)" opacity="0.7" />
        </>
      )
    },
    {
      id: 'mineral',
      name: 'Active Mineralizer',
      howItWorks: 'An inline cartridge loaded with natural mineral stones. As pure RO water passes through, it dissolves trace, controlled quantities of essential calcium, magnesium, sodium, and potassium ions back into the stream.',
      advantages: [
        'Restores essential minerals and electrolytes removed by RO membranes',
        'Improves water taste, making it taste fresh and sweet',
        'Neutralizes water acidity, raising the pH to a healthy alkaline level (7.5-8.0)'
      ],
      maintenance: 'Mineralizer inline cartridge requires replacement every 12 months.',
      applications: 'Post-RO treatment stage for all drinking water purifiers.',
      microscopeSvg: (
        <>
          <path d="M20 40 Q40 30 60 40 T100 40" fill="none" stroke="var(--teal)" strokeWidth="2" opacity="0.4" />
          <circle cx="35" cy="36" r="6" fill="var(--gold)" opacity="0.8" />
          <circle cx="58" cy="62" r="5" fill="var(--teal)" opacity="0.9" />
          <text x="35" y="39" fontSize="6px" fill="#fff" textAnchor="middle" fontWeight="bold">Ca</text>
          <text x="58" y="65" fontSize="6px" fill="#fff" textAnchor="middle" fontWeight="bold">Mg</text>
        </>
      )
    }
  ];

  const active = techs.find((t) => t.id === activeTech) || techs[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Our Science</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          How our filtration technologies work
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Explore the engineering details behind reverse osmosis, ultraviolet sterilization, and mineral restoration, and see how we guarantee absolute purity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
        
        {/* Left selector menu (Column 4) */}
        <div className="lg:col-span-4 flex flex-col gap-2 bg-mist border border-line/10 rounded-radius p-5 md:p-6 justify-between">
          <div>
            <span className="text-[11px] font-bold text-teal-deep uppercase tracking-wider block mb-4">Select Technology</span>
            <div className="flex flex-col gap-2">
              {techs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTech(t.id)}
                  className={`text-left p-4 rounded-radius-sm transition-all duration-300 font-bold ${
                    activeTech === t.id
                      ? "bg-paper text-navy shadow-sm border border-line/5"
                      : "bg-transparent text-ink-soft hover:bg-navy/5"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-ink-soft leading-relaxed border-t border-line/5 pt-4">
            All Aquapure technologies conform to IS 16240 and NSF 58 guidelines.
          </div>
        </div>

        {/* Right content view (Column 8) */}
        <div className="lg:col-span-8 bg-paper border border-line/10 rounded-radius p-7 md:p-10 flex flex-col justify-between gap-6 shadow-sm">
          <div>
            <span className="card-tag text-xs font-bold text-teal-deep uppercase tracking-wider block">Technology Core</span>
            <h2 className="text-2xl font-bold text-navy mt-2 mb-4">{active.name}</h2>
            
            {/* Live microscope circle */}
            <div className="flex justify-center mb-6">
              <div className="microscope-ring w-[120px] h-[120px] rounded-full border-3 border-teal relative bg-mist flex items-center justify-center overflow-hidden shadow-inner">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="var(--line)" strokeWidth="1" />
                  <g>{active.microscopeSvg}</g>
                </svg>
                <div className="lens-glow absolute inset-0 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              {/* How it works */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center text-teal flex-shrink-0 mt-0.5">
                  <Cpu className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-navy">How it works</h4>
                  <p className="text-[14px] text-ink-soft leading-relaxed mt-1">{active.howItWorks}</p>
                </div>
              </div>

              {/* Advantages */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-navy">Advantages</h4>
                  <ul className="list-disc pl-4 mt-1.5 flex flex-col gap-1.5 text-[14px] text-ink-soft leading-relaxed">
                    {active.advantages.map((adv, idx) => <li key={idx}>{adv}</li>)}
                  </ul>
                </div>
              </div>

              {/* Maintenance */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-mist-deep flex items-center justify-center text-navy flex-shrink-0 mt-0.5">
                  <Settings className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-navy">Maintenance Interval</h4>
                  <p className="text-[14px] text-ink-soft leading-relaxed mt-1">{active.maintenance}</p>
                </div>
              </div>

              {/* Applications */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-full bg-mist-deep flex items-center justify-center text-navy flex-shrink-0 mt-0.5">
                  <Sliders className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-navy">Applications</h4>
                  <p className="text-[14px] text-ink-soft leading-relaxed mt-1">{active.applications}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

import React, { useState } from 'react';

interface Stage {
  num: string;
  title: string;
  summary: string;
  tag: string;
  desc: string;
  removes: string[];
  svgElements: React.ReactNode;
}

export const FiltrationExplorer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages: Record<number, Stage> = {
    1: {
      num: "01",
      title: "Sediment Pre-Filter",
      summary: "Removes sand, silt, and rust",
      tag: "Stage 01 — Mechanical Filtration",
      desc: "As raw water enters the system, it passes through a multi-layered polypropylene wrap. This stage traps larger suspended matter like sand, mud, and rust scales, protecting subsequent sensitive membranes from blockage.",
      removes: ["Rust", "Silt", "Sand", "Coarse Mud"],
      svgElements: (
        <>
          {/* Rust chunks (large) */}
          <circle cx="30" cy="30" r="4" fill="#8B5A2B" opacity="0.8" />
          <circle cx="35" cy="65" r="5" fill="#A0522D" opacity="0.9" />
          {/* Silt lines */}
          <line x1="50" y1="10" x2="50" y2="90" stroke="var(--teal)" strokeWidth="3" />
          <line x1="53" y1="10" x2="53" y2="90" stroke="var(--paper)" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Sand grains blocked */}
          <circle cx="42" cy="22" r="2.5" fill="#C9A66B" />
          <circle cx="40" cy="48" r="3" fill="#C9A66B" />
          <circle cx="44" cy="78" r="2" fill="#C9A66B" />
          {/* Clean drops passing */}
          <path d="M65 40 Q68 45 65 50 Q62 45 65 40 Z" fill="var(--teal)" opacity="0.6" />
          <path d="M75 55 Q78 60 75 65 Q72 60 75 55 Z" fill="var(--teal)" opacity="0.8" />
        </>
      )
    },
    2: {
      num: "02",
      title: "Carbon Block Filter",
      summary: "Neutralizes chlorine and odors",
      tag: "Stage 02 — Chemical Adsorption",
      desc: "Made of compressed activated carbon granules, this filter has millions of microscopic pores. It chemically adsorbs chlorine, trihalomethanes (THMs), volatile organic chemicals (VOCs), and pesticides, neutralizing bad chemical tastes and smells.",
      removes: ["Chlorine", "Pesticides", "Odors", "THMs"],
      svgElements: (
        <>
          {/* Charcoal block pattern */}
          <rect x="25" y="25" width="50" height="50" fill="#1E293B" rx="6" />
          {/* Pores inside block */}
          <circle cx="35" cy="35" r="1.5" fill="var(--paper)" opacity="0.3" />
          <circle cx="45" cy="55" r="1.5" fill="var(--paper)" opacity="0.3" />
          <circle cx="65" cy="45" r="1.5" fill="var(--paper)" opacity="0.3" />
          <circle cx="55" cy="65" r="1.5" fill="var(--paper)" opacity="0.3" />
          {/* Chlorine molecules binding */}
          <circle cx="28" cy="20" r="3" fill="#84CC16" />
          <line x1="28" y1="20" x2="32" y2="26" stroke="#84CC16" strokeWidth="1" />
          <circle cx="72" cy="75" r="3" fill="#84CC16" />
          <line x1="72" y1="75" x2="68" y2="69" stroke="#84CC16" strokeWidth="1" />
        </>
      )
    },
    3: {
      num: "03",
      title: "Sediment Fine Filter",
      summary: "Traps microparticles down to 5µm",
      tag: "Stage 03 — Micron-Level Polish",
      desc: "A secondary sediment cartridge with a denser spun structure. It works as a micro-polisher, capturing smaller particles down to 5 microns (like colloidal clay or fine carbon dust) to protect the sensitive RO membrane downstream.",
      removes: ["Colloidal Silt", "Carbon Dust", "Turbidity"],
      svgElements: (
        <>
          {/* Dense fiber net */}
          <line x1="45" y1="15" x2="45" y2="85" stroke="var(--teal)" strokeWidth="6" />
          <line x1="52" y1="15" x2="52" y2="85" stroke="var(--teal)" strokeWidth="4" opacity="0.7" />
          {/* Tiny trapped carbon particles */}
          <circle cx="40" cy="30" r="1.5" fill="#03045E" />
          <circle cx="41" cy="55" r="1.2" fill="#03045E" />
          <circle cx="38" cy="70" r="1" fill="#03045E" />
          {/* Crystal clear output */}
          <circle cx="68" cy="35" r="2.5" fill="var(--teal)" opacity="0.7" />
          <circle cx="72" cy="60" r="2" fill="var(--teal)" opacity="0.7" />
        </>
      )
    },
    4: {
      num: "04",
      title: "RO Membrane Core",
      summary: "Strips lead, arsenic, and heavy metals",
      tag: "Stage 04 — Hyper-Filtration Core",
      desc: "Water is forced under high pressure through a composite thin-film membrane with pores measuring 0.0001 microns. It rejects 99% of heavy metals (lead, mercury, arsenic), fluorides, nitrates, salts, and radioactive elements, sending them down the drain line.",
      removes: ["Lead", "Arsenic", "Mercury", "Fluoride", "TDS"],
      svgElements: (
        <>
          {/* Diagonal membrane line */}
          <line x1="20" y1="80" x2="80" y2="20" stroke="var(--teal)" strokeWidth="4" />
          {/* Rebounding heavy metals */}
          <circle cx="25" cy="38" r="4" fill="#475569" />
          <path d="M 25 38 L 15 32 M 15 32 L 20 30 M 15 32 L 17 37" stroke="#475569" strokeWidth="1" />
          <circle cx="40" cy="68" r="3.5" fill="#64748B" />
          <path d="M 40 68 L 30 74 L 32 69 M 30 74 L 35 76" stroke="#64748B" strokeWidth="1" />
          {/* Pure water molecules passing through */}
          <circle cx="62" cy="32" r="2" fill="var(--teal)" />
          <circle cx="75" cy="45" r="2" fill="var(--teal)" />
        </>
      )
    },
    5: {
      num: "05",
      title: "Post-Carbon Cartridge",
      summary: "Polishes taste and organic matter",
      tag: "Stage 05 — Taste Refinement",
      desc: "A final polishing filter filled with premium coconut-shell activated carbon. It acts as a safety backup, neutralizing any residual gases or odors that may have accumulated in the storage tank, resulting in a sweet, refreshing taste.",
      removes: ["Residual Gases", "Stale Taste", "Trace Organics"],
      svgElements: (
        <>
          <circle cx="50" cy="50" r="30" fill="none" stroke="var(--teal)" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="45" cy="40" r="3" fill="var(--teal)" opacity="0.4" />
          <circle cx="55" cy="60" r="4" fill="var(--teal)" opacity="0.3" />
          {/* Sparkles */}
          <path d="M 35 30 L 37 35 L 42 35 L 38 38 L 40 43 L 35 40 L 30 43 L 32 38 L 28 35 L 33 35 Z" fill="var(--gold)" opacity="0.8" />
          <path d="M 65 65 L 66 68 L 69 68 L 67 70 L 68 73 L 65 71 L 62 73 L 63 70 L 61 68 L 64 68 Z" fill="var(--gold)" opacity="0.8" />
        </>
      )
    },
    6: {
      num: "06",
      title: "UV Sterilizer",
      summary: "Eliminates 99.9% viruses and bacteria",
      tag: "Stage 06 — Ultraviolet Sterilization",
      desc: "Equipped with a high-intensity cold-cathode UV lamp. The water is exposed to targeted 254nm ultraviolet light which disrupts the DNA of any remaining microscopic pathogens, viruses, and bacteria, rendering them completely harmless.",
      removes: ["Bacteria", "Viruses", "Protozoa", "Cysts"],
      svgElements: (
        <>
          {/* Violet Glow */}
          <circle cx="50" cy="50" r="40" fill="rgba(139, 92, 246, 0.25)" />
          {/* UV Tube */}
          <rect x="45" y="15" width="10" height="70" fill="#C084FC" rx="3" />
          {/* Damaged Pathogens */}
          <path d="M 25 45 C 20 40 22 30 28 35 C 34 40 30 50 25 45" fill="#2DD4BF" opacity="0.4" />
          <line x1="22" y1="35" x2="28" y2="45" stroke="var(--danger)" strokeWidth="1.5" />
          <path d="M 72 55 C 68 50 70 42 76 46 C 82 50 78 60 72 55" fill="#2DD4BF" opacity="0.3" />
          <line x1="70" y1="46" x2="76" y2="54" stroke="var(--danger)" strokeWidth="1.5" />
        </>
      )
    },
    7: {
      num: "07",
      title: "Active Mineralizer",
      summary: "Restores essential calcium and magnesium",
      tag: "Stage 07 — Mineralization & pH Balance",
      desc: "Since pure RO water can be slightly acidic and stripped of all elements, this cartridge dissolves trace amounts of natural calcium, magnesium, and potassium ions back into the stream. This balances the pH to a healthy alkaline range (7.5-8.0) and adds essential electrolytes.",
      removes: ["Acidic pH", "Mineral Deficiency"],
      svgElements: (
        <>
          {/* Flowing streams */}
          <path d="M20 40 Q40 30 60 40 T100 40" fill="none" stroke="var(--teal)" strokeWidth="2" opacity="0.5" />
          <path d="M20 60 Q40 50 60 60 T100 60" fill="none" stroke="var(--teal)" strokeWidth="2" opacity="0.5" />
          {/* Minerals */}
          <circle cx="35" cy="36" r="5" fill="var(--gold)" opacity="0.8" />
          <circle cx="55" cy="62" r="4.5" fill="var(--teal)" opacity="0.9" />
          <circle cx="75" cy="34" r="4" fill="var(--gold)" opacity="0.8" />
          <text x="35" y="39" fontSize="5px" fill="#fff" textAnchor="middle" fontWeight="bold">Ca</text>
          <text x="55" y="65" fontSize="5px" fill="#fff" textAnchor="middle" fontWeight="bold">Mg</text>
        </>
      )
    }
  };

  const active = stages[activeStage];

  return (
    <div className="feature-grid grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
      {/* Left Column Stage selector */}
      <div className="card stage-card bg-mist border border-line/10 rounded-radius p-6 md:p-8 flex flex-col justify-between">
        <div>
          <span className="card-tag text-xs font-bold text-teal-deep uppercase tracking-wider">
            Interactive Filtration Stages
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-navy mt-3 mb-2">
            Explore the 7-Stage Process
          </h3>
          <p className="text-[14.5px] text-ink-soft leading-relaxed">
            Click on any stage below to inspect the microscopic purification action taking place inside the chamber.
          </p>
        </div>

        {/* Buttons List */}
        <div className="stage-nav-list flex flex-col gap-2.5 mt-6" role="tablist" aria-label="Filtration Stages">
          {Object.entries(stages).map(([id, stage]) => {
            const numId = parseInt(id);
            const isSelected = activeStage === numId;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveStage(numId)}
                className={`stage-btn flex items-center gap-4 text-left p-3 md:p-4 rounded-radius-sm transition-all duration-300 w-full ${
                  isSelected ? "bg-paper shadow-sm border border-line/5" : "bg-transparent hover:bg-navy/5"
                }`}
              >
                <span className="stage-num text-lg font-bold text-gold">{stage.num}</span>
                <div className="stage-btn-info flex flex-col">
                  <span className="stage-title text-[14.5px] font-bold text-navy">{stage.title}</span>
                  <span className="stage-summary text-xs text-ink-soft">{stage.summary}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column Dynamic Detail View */}
      <div className="card-pair flex flex-col gap-6">
        <div className="card explorer-visual-card bg-mist border border-line/10 rounded-radius p-7 md:p-8 flex flex-col justify-between gap-5 min-h-[420px] shadow-sm">
          <div>
            <span className="card-tag text-xs font-bold text-teal-deep uppercase tracking-wider">
              {active.tag}
            </span>
            <h3 className="text-xl font-bold text-navy mt-2 mb-3">{active.title}</h3>
            <p className="text-[14.5px] text-ink-soft leading-relaxed">{active.desc}</p>
          </div>

          {/* Microscope illustration */}
          <div className="explorer-illustration bg-paper border border-line/10 rounded-radius-sm p-6 flex flex-col items-center justify-center gap-3">
            <div className="microscope-ring rounded-full border-3 border-teal relative bg-mist flex items-center justify-center overflow-hidden shadow-inner">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="var(--line)" strokeWidth="1" />
                <g id="microscope-elements">
                  {active.svgElements}
                </g>
              </svg>
              <div className="lens-glow absolute inset-0 pointer-events-none" />
            </div>
            <span className="illustration-label text-[11px] font-semibold text-ink-soft uppercase tracking-wide">
              Target Contaminants Removed
            </span>
          </div>

          {/* Removed tags */}
          <div className="removed-tags flex flex-wrap gap-2">
            {active.removes.map((tag) => (
              <span key={tag} className="tag bg-paper border border-line/10 px-4 py-1.5 rounded-full text-[13px] font-medium text-navy">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Small Verification Previews */}
        <div className="mini-cards grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card bg-mist border border-line/10 rounded-radius p-6">
            <span className="card-tag text-xs font-bold text-teal-deep uppercase tracking-wide">Verification</span>
            <h3 className="text-base font-bold text-navy mt-1 mb-2">NSF & WQA Certified</h3>
            <p className="text-[13.5px] text-ink-soft leading-relaxed">Independently validated against standard 53 and 58 protocols.</p>
          </div>
          <div className="card bg-mist border border-line/10 rounded-radius p-6">
            <span className="card-tag text-xs font-bold text-teal-deep uppercase tracking-wide">Proactive Care</span>
            <h3 className="text-base font-bold text-navy mt-1 mb-2">Auto Refills</h3>
            <p className="text-[13.5px] text-ink-soft leading-relaxed">Replacement cartridges arrive at your doorstep before your old filters expire.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

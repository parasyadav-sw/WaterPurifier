import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

interface Particle {
  id: number;
  type: 'heavy-metal' | 'chemical' | 'microbe';
  x: number;
  y: number;
  duration: number;
  delay: number;
}

export const TdsSimulator: React.FC = () => {
  const [source, setSource] = useState<string>('borewell');
  const [tds, setTds] = useState<number>(450);

  // Calculate filtered output TDS
  const outputTds = useMemo(() => {
    let factor = 0.05; // 95% reduction
    if (source === 'municipal') factor = 0.07;
    if (source === 'borewell') factor = 0.04;
    return Math.max(12, Math.round(tds * factor + 4));
  }, [source, tds]);

  // Determine safety status badge details
  const waterStatus = useMemo(() => {
    if (tds < 200) {
      return {
        badgeClass: "safe-water",
        text: "Soft Water",
        reco: "Countertop Pro",
        recoSlug: "countertop-pro",
        desc: source === 'municipal'
          ? "Municipal water at this level is relatively soft but often contains heavy chemical chlorine residues and sediment odors."
          : "Low mineral content, but groundwater can still house trace microplastics and pesticide runoffs from local fields."
      };
    } else if (tds >= 200 && tds < 600) {
      return {
        badgeClass: "hard-water",
        text: "Hard Water",
        reco: "Under-Sink Compact",
        recoSlug: "ro-filters",
        desc: source === 'borewell'
          ? "Groundwater carries standard hardness (calcium and magnesium carbonate), which forms white scaling on faucets and causes dry skin."
          : "Average TDS indicating scaling risk. Municipal pipes often pick up rust sediment and heavy metals along distribution channels."
      };
    } else if (tds >= 600 && tds < 1000) {
      return {
        badgeClass: "unsafe-water",
        text: "Highly Hard",
        reco: "Whole Home RO+UV",
        recoSlug: "whole-home",
        desc: "High dissolved solids causing bitter taste, plumbing corrosion, scale deposits, and reduced efficiency of heating appliances. RO purification is recommended."
      };
    } else {
      return {
        badgeClass: "unsafe-water",
        text: "Unsafe / Toxic",
        reco: "Whole Home RO+UV",
        recoSlug: "whole-home",
        desc: "Dangerous TDS level typical of deep borewells or tanker water. High probability of fluorides, nitrates, arsenic, and lead. Multi-stage RO+UV filtration is mandatory."
      };
    }
  }, [source, tds]);

  // Generate stable particle coordinates based on TDS count
  const particles = useMemo<Particle[]>(() => {
    const count = Math.min(60, Math.floor(tds / 18));
    return Array.from({ length: count }).map((_, idx) => {
      const rand = Math.random();
      const type = rand < 0.4 ? 'heavy-metal' : rand < 0.7 ? 'chemical' : 'microbe';
      // Deterministic pseudo-randomness for layout coordinates so it doesn't shake on slider updates
      const x = Math.sin(idx + 1) * 45 + 50; // spread around 50%
      const y = Math.cos(idx + 2) * 40 + 45; // spread around 45%
      const duration = 5 + (idx % 5);
      const delay = -(idx % 4);
      return { id: idx, type, x, y, duration, delay };
    });
  }, [tds]);

  // Calculate clean water overlay height and aquarium tint
  const aquariumStyle = useMemo(() => {
    let background = '';
    let cleanLineHeight = '';
    
    if (tds < 200) {
      background = 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(0,119,182,0.1) 100%)';
      cleanLineHeight = '85%';
    } else if (tds >= 200 && tds < 600) {
      background = 'linear-gradient(180deg, rgba(0,180,216,0.08) 0%, rgba(0,119,182,0.12) 100%)';
      cleanLineHeight = '65%';
    } else {
      background = 'linear-gradient(180deg, rgba(0,180,216,0.18) 0%, rgba(74,96,112,0.15) 100%)';
      cleanLineHeight = '40%';
    }

    return { background, cleanLineHeight };
  }, [tds]);

  return (
    <div className="tds-widget glass max-w-5xl mx-auto border border-line/10 rounded-radius p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left panel controls */}
      <div>
        <div className="control-group">
          <label htmlFor="water-source" className="block text-[13px] font-bold uppercase tracking-wider text-ink-soft mb-2.5">
            Water Supply Source
          </label>
          <select
            id="water-source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="input-select"
          >
            <option value="municipal">Municipal / Tap Corporation</option>
            <option value="borewell">Borewell / Ground Water</option>
            <option value="tanker">Private Tanker Supply</option>
          </select>
        </div>

        <div className="control-group mb-8">
          <div className="slider-header flex justify-between items-center mb-2.5">
            <label htmlFor="tds-range" className="text-[13px] font-bold uppercase tracking-wider text-ink-soft">
              Input TDS Level
            </label>
            <span id="tds-value-display" className="text-navy font-semibold">
              <strong className="text-teal text-xl font-bold">{tds}</strong> ppm
            </span>
          </div>
          <input
            type="range"
            id="tds-range"
            min="50"
            max="1500"
            value={tds}
            onChange={(e) => setTds(parseInt(e.target.value))}
            className="input-slider cursor-pointer"
          />
          <div className="slider-markers flex justify-between mt-2 text-xs text-ink-soft">
            <span>50 ppm</span>
            <span>750 ppm</span>
            <span>1500 ppm</span>
          </div>
        </div>

        {/* Diagnosis Status */}
        <div className="bg-mist/30 rounded-radius-sm p-5 border border-line/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] font-bold text-navy">Water Status:</span>
            <span className={`badge ${waterStatus.badgeClass}`}>
              {waterStatus.text}
            </span>
          </div>
          <p className="text-[14px] text-ink-soft leading-relaxed mt-2.5">
            {waterStatus.desc}
          </p>
        </div>
      </div>

      {/* Right panel visualizer */}
      <div className="flex flex-col gap-5 bg-mist-deep/20 rounded-radius-sm p-5 border border-line/5">
        <div className="flex justify-between items-center">
          <h4 className="text-[14px] font-bold text-navy">Live Contaminant Micro-View</h4>
          <span className="pulse-indicator">Interactive View</span>
        </div>

        {/* Aquarium microscope simulation */}
        <div
          className="h-[180px] md:h-[240px] rounded-radius-sm border border-line/10 relative overflow-hidden transition-all duration-500"
          style={{ background: aquariumStyle.background }}
        >
          {/* Floating Contaminant Particles */}
          {particles.map((p) => (
            <div
              key={p.id}
              className={`particle ${p.type} absolute pointer-events-none rounded-full`}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`
              }}
            />
          ))}

          {/* Liquid filtration efficiency indicator line */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-teal/10 border-t-2 border-dashed border-teal transition-all duration-500"
            style={{ height: aquariumStyle.cleanLineHeight }}
          />
        </div>

        {/* Recommendations Output */}
        <div className="grid grid-cols-2 gap-4 border-t border-line/10 pt-4 mt-auto">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">Expected Output TDS</span>
            <span className="text-lg font-bold text-teal-deep">{outputTds} ppm</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft">Recommended System</span>
            <Link
              to={`/products/${waterStatus.recoSlug}`}
              className="text-base font-bold text-navy hover:text-teal underline underline-offset-2 transition-colors"
            >
              {waterStatus.reco}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

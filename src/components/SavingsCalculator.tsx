import React, { useState, useMemo } from 'react';
import { DollarSign, Droplet, ShieldCheck, Leaf } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [familySize, setFamilySize] = useState<number>(4);
  const [usage, setUsage] = useState<number>(3); // L/person/day

  const stats = useMemo(() => {
    const dailyLitres = Math.round(familySize * usage);
    
    // Financial: Canned water costs ₹15/L. monthly subscription equivalent is ₹450
    const monthlyBottled = dailyLitres * 15 * 30;
    const monthlyAmortization = 450;
    const moneySavedVal = Math.max(0, monthlyBottled - monthlyAmortization);

    // Cartridge lifespan: 6000 litres capacity, capped 6-18 months
    const monthlyConsumption = dailyLitres * 30;
    let lifeMonths = Math.round(6000 / monthlyConsumption);
    lifeMonths = Math.max(6, Math.min(18, lifeMonths));

    // Plastic bottles: 1 L = 1 plastic bottle avoided
    const annualBottlesVal = Math.round(dailyLitres * 365);

    return {
      dailyLitres,
      moneySaved: `₹${moneySavedVal.toLocaleString('en-IN')}`,
      cartridgeLife: `${lifeMonths} ${lifeMonths === 1 ? 'Month' : 'Months'}`,
      bottlesSaved: annualBottlesVal.toLocaleString('en-IN')
    };
  }, [familySize, usage]);

  return (
    <div className="calculator-box glass max-w-5xl mx-auto rounded-radius p-5 sm:p-6 md:p-10 border border-line/10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
      
      {/* Inputs Column */}
      <div className="flex flex-col gap-6">
        <div className="control-group">
          <div className="slider-header flex justify-between items-center mb-2.5">
            <label htmlFor="family-size" className="text-[13px] font-bold uppercase tracking-wider text-ink-soft">
              Family Size / Users
            </label>
            <span id="family-display" className="text-navy font-semibold">
              <strong className="text-teal text-xl font-bold">{familySize}</strong> {familySize === 1 ? 'Person' : 'People'}
            </span>
          </div>
          <input
            type="range"
            id="family-size"
            min="1"
            max="10"
            value={familySize}
            onChange={(e) => setFamilySize(parseInt(e.target.value))}
            className="input-slider cursor-pointer"
          />
        </div>

        <div className="control-group">
          <div className="slider-header flex justify-between items-center mb-2.5">
            <label htmlFor="water-usage" className="text-[13px] font-bold uppercase tracking-wider text-ink-soft">
              Daily Consumption per Person
            </label>
            <span id="usage-display" className="text-navy font-semibold">
              <strong className="text-teal text-xl font-bold">{usage.toFixed(1)}</strong> L/day
            </span>
          </div>
          <input
            type="range"
            id="water-usage"
            min="1"
            max="6"
            step="0.5"
            value={usage}
            onChange={(e) => setUsage(parseFloat(e.target.value))}
            className="input-slider cursor-pointer"
          />
        </div>

        {/* Dynamic summary text */}
        <div className="input-summary-text text-[14px] text-ink-soft bg-mist/30 border border-line/10 rounded-radius-sm p-4 leading-relaxed mt-2">
          Based on a daily requirement of <strong className="text-navy font-bold">{stats.dailyLitres}</strong> Litres of clean water for cooking, drinking, and brewing hot beverages in your household.
        </div>
      </div>

      {/* Results Column */}
      <div className="calculator-results flex flex-col gap-3 sm:gap-4">
        
        {/* Money saved */}
        <div className="result-tile bg-mist/30 border border-line/10 rounded-radius-sm p-3.5 sm:p-4 md:p-5 flex items-start gap-3 sm:gap-3.5 md:gap-4 shadow-sm">
          <div className="result-icon-box w-9 h-9 md:w-11 md:h-11 rounded-full bg-paper border border-line/5 shadow-sm flex items-center justify-center text-teal flex-shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
          <div className="result-data flex flex-col">
            <span className="result-label text-[11px] font-bold uppercase tracking-wider text-ink-soft">Monthly Financial Savings</span>
            <span className="result-val text-2xl font-extrabold text-navy my-0.5">{stats.moneySaved}</span>
            <span className="result-sub text-xs text-ink-soft">Compared to bottled/canned water deliveries</span>
          </div>
        </div>

        {/* Cartridge Lifespan */}
        <div className="result-tile bg-mist/30 border border-line/10 rounded-radius-sm p-3.5 sm:p-4 md:p-5 flex items-start gap-3 sm:gap-3.5 md:gap-4 shadow-sm">
          <div className="result-icon-box w-9 h-9 md:w-11 md:h-11 rounded-full bg-paper border border-line/5 shadow-sm flex items-center justify-center text-gold flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="result-data flex flex-col">
            <span className="result-label text-[11px] font-bold uppercase tracking-wider text-ink-soft">Est. Cartridge Lifespan</span>
            <span className="result-val text-2xl font-extrabold text-navy my-0.5">{stats.cartridgeLife}</span>
            <span className="result-sub text-xs text-ink-soft">Before automatic cartridge refill triggers</span>
          </div>
        </div>

        {/* Bottles Saved */}
        <div className="result-tile bg-mist/30 border border-line/10 rounded-radius-sm p-3.5 sm:p-4 md:p-5 flex items-start gap-3 sm:gap-3.5 md:gap-4 shadow-sm">
          <div className="result-icon-box w-9 h-9 md:w-11 md:h-11 rounded-full bg-paper border border-line/5 shadow-sm flex items-center justify-center text-success flex-shrink-0">
            <Leaf className="w-5 h-5" />
          </div>
          <div className="result-data flex flex-col">
            <span className="result-label text-[11px] font-bold uppercase tracking-wider text-ink-soft">Plastic Bottles Avoided</span>
            <span className="result-val text-2xl font-extrabold text-navy my-0.5">{stats.bottlesSaved}</span>
            <span className="result-sub text-xs text-ink-soft">Single-use plastic bottles kept out of oceans yearly</span>
          </div>
        </div>

      </div>

    </div>
  );
};

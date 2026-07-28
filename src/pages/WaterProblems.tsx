import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, Droplet, ArrowRight, Check } from 'lucide-react';

interface Problem {
  id: string;
  name: string;
  symptoms: string;
  hazards: string;
  solution: string;
  solutionSlug: string;
  removesBy: string;
}

export const WaterProblems: React.FC = () => {
  const problems: Problem[] = [
    {
      id: "tds",
      name: "High TDS (Total Dissolved Solids)",
      symptoms: "Bitter or salty water taste, thick white powder deposits on vessels, dry throat after drinking.",
      hazards: "Indicative of dissolved limestone, calcium salts, or toxic elements like nitrates and industrial runoff.",
      solution: "Domestic RO+UV Purifier",
      solutionSlug: "domestic-filters",
      removesBy: "RO Membrane Core (removes 95% of dissolved salts)"
    },
    {
      id: "hardness",
      name: "Hard Water (Calcium & Magnesium)",
      symptoms: "White scaling on shower heads, geyser failures, poor lathering of soap, skin rashes, hair fall.",
      hazards: "Locks pores on skin and hair, clogs internal geyser heating coils, increases detergent usage by 40%.",
      solution: "Automated Water Softener",
      solutionSlug: "water-softeners",
      removesBy: "Ion Exchange Cation Resin columns"
    },
    {
      id: "iron",
      name: "Iron & Rust Turbidity",
      symptoms: "Yellow or reddish water tint, metallic taste, reddish stains on bathroom tiles and clothes.",
      hazards: "Stains clothes, oxidizes household plumbing fittings, and alters cooking flavors.",
      solution: "Whole Home mainline Purifier",
      solutionSlug: "whole-home",
      removesBy: "20-inch Jumbo Sediment Cartridges"
    },
    {
      id: "chlorine",
      name: "Chlorine Chemical Taste",
      symptoms: "Strong swimming-pool chemical odor, bitter taste, bleached clothes after wash.",
      hazards: "Dry skin, respiratory irritation from steam, and damage to household RO membranes.",
      solution: "Activated Carbon block",
      solutionSlug: "accessories",
      removesBy: "Compressed coconut-shell activated carbon blocks"
    },
    {
      id: "bacteria",
      name: "Biological Pathogens (Bacteria & Cysts)",
      symptoms: "Turbid or muddy appearance (though often completely invisible, odorless, and tasteless).",
      hazards: "Gastroenteritis, cholera, typhoid, stomach cramps, and diarrheal cystic infections.",
      solution: "Active UV Disinfection System",
      solutionSlug: "uv-filters",
      removesBy: "Ultraviolet DNA disruption tube"
    },
    {
      id: "microplastics",
      name: "Microplastics & Nanoplastics",
      symptoms: "Completely invisible under regular light. Found in municipal pipelines.",
      hazards: "Chemical accumulation inside vital organs, cellular damage, and hormone disruption.",
      solution: "Under-Sink RO system",
      solutionSlug: "ro-filters",
      removesBy: "TFC RO Membrane filtration (rejections down to 0.0001 microns)"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Water Quality Guide</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Common tap water problems and their solutions
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Groundwater, municipal pipes, and private tankers carry different levels of mineral and chemical impurities. Identify your local water issues and select the appropriate purification system.
        </p>
      </div>

      {/* Problems list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {problems.map((prob) => (
          <article
            key={prob.id}
            className="p-6 md:p-8 bg-mist/35 border border-line/10 rounded-radius flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-danger-bg flex items-center justify-center text-danger">
                  <ShieldAlert className="w-5.5 h-5.5" />
                </div>
                <h3 className="text-lg font-bold text-navy">{prob.name}</h3>
              </div>

              <div className="flex flex-col gap-4 text-[14px]">
                <div>
                  <span className="text-xs font-bold text-navy block mb-1">Common Symptoms</span>
                  <p className="text-ink-soft leading-relaxed">{prob.symptoms}</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-navy block mb-1">Potential Hazards</span>
                  <p className="text-ink-soft leading-relaxed">{prob.hazards}</p>
                </div>
              </div>
            </div>

            {/* Solution mapping panel */}
            <div className="bg-paper border border-line/10 rounded-radius-sm p-4 mt-6 flex flex-col gap-3">
              <div className="flex gap-2 items-center text-[13.5px]">
                <Check className="w-4 h-4 text-teal flex-shrink-0" />
                <span className="text-ink-soft">
                  <strong className="text-navy font-bold">Action:</strong> {prob.removesBy}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-line/5 pt-3 mt-1">
                <span className="text-[12.5px] font-bold text-ink-soft uppercase tracking-wider">Recommended Setup</span>
                <Link
                  to={`/products`}
                  className="text-[13.5px] font-bold text-teal hover:underline flex items-center gap-1"
                >
                  {prob.solution} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Free Test CTA */}
      <section className="bg-mist border border-line/10 rounded-radius p-8 md:p-12 text-center max-w-4xl mx-auto mt-16 shadow-sm">
        <h3 className="text-xl md:text-2xl font-bold text-navy mb-3">Unsure about your water quality?</h3>
        <p className="text-[14.5px] text-ink-soft mb-6 max-w-xl mx-auto">
          Book our technician for a free home visit. We will test your tap water TDS and pH levels right in front of you using digital calibrators and provide a full analysis report.
        </p>
        <Link to="/book-water-test" className="btn-primary">
          Schedule Free TDS Test Visit
        </Link>
      </section>

    </motion.div>
  );
};

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: string;
  tag: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  video: string;
  features: string[];
  specifications: Record<string, string>;
  capacity: string;
  stages: string[];
  benefits: string[];
  warranty: string;
  installation: string[];
  faq: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const products: Product[] = [
  {
    slug: "domestic-filters",
    name: "Domestic RO+UV Purifier",
    category: "Domestic Water Filters",
    price: "₹14,499",
    tag: "Essential Home",
    tagline: "Ultra-pure drinking water for health-conscious households.",
    description: "Aquapure's Domestic RO+UV system is engineered to handle municipal and municipal-borewell blends, delivering pure, safe drinking water containing active calcium and magnesium mineral enhancements.",
    image: "/images/products/domestic-ro-filter.jpg",
    gallery: ["/images/products/domestic-ro-filter.jpg", "/images/products/countertop-pro.jpg", "/images/products/whole-home-system.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "7-Stage RO + UV + Active Mineralizer technology",
      "Advanced TDS Regulator matching taste to input water hardness",
      "Smart App companion flags filter life in real time",
      "Food-grade high-capacity storage tank"
    ],
    specifications: {
      "Purification Capacity": "15 to 20 Litres per hour",
      "Storage Tank Volume": "10 Litres",
      "Dimensions (WxDxH)": "380 x 270 x 480 mm",
      "Net Weight": "9.5 kg",
      "Power Consumption": "36 Watts",
      "Input Water TDS Range": "100 to 2000 ppm",
      "Mounting Type": "Wall Mounted / Countertop"
    },
    capacity: "10 Litres Storage / 20 L/hr throughput",
    stages: [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine & Pesticide Adsorption)",
      "Micro-Sediment Polishing Filter (5 Micron trap)",
      "Thin-Film Composite RO Membrane (Lead & Fluoride rejection)",
      "Post-Carbon Taste Enhancer",
      "Inline UV Sterilization Chamber (DNA pathogen disruption)",
      "Active Mineralizer Cartridge (Electrolyte pH restoration)"
    ],
    benefits: [
      "Strips out toxic lead, arsenic, nitrates, and microscopic pathogens",
      "Restores essential alkalinity and natural sweet taste",
      "Ensures zero dry-out cartridge damage via low pressure automatic shutoff",
      "Saves up to 600 single-use plastic water bottles monthly"
    ],
    warranty: "1 Year Comprehensive Warranty (including RO Membrane & filters)",
    installation: [
      "Technician arrives within 2 hours of booking approval.",
      "Inlet adapter valve secured directly to under-sink or countertop tap.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level (safely between 25-50 ppm)."
    ],
    faq: [
      {
        q: "What is the post-filtration TDS level?",
        a: "Our RO system safely reduces TDS by 93% to 96%. For an input of 500 ppm, output will hover around 25 to 35 ppm, retaining healthy mineral counts."
      },
      {
        q: "When should the filters be replaced?",
        a: "Typically between 9 to 12 months. Our companion app and front indicators will alert you before filter efficiency degrades."
      }
    ],
    relatedSlugs: ["under-sink-compact", "countertop-pro", "water-softeners"]
  },
  {
    slug: "commercial-filters",
    name: "Commercial High-Output System",
    category: "Commercial Water Filters",
    price: "₹45,999",
    tag: "Offices & Cafes",
    tagline: "High-capacity purification for office floors, clinics, and restaurants.",
    description: "Designed for commercial applications requiring high volume throughput without compromising mineral quality. Delivers continuous, high-volume flow under heavy daily workloads.",
    image: "/images/products/commercial-ro-system.jpg",
    gallery: ["/images/products/commercial-ro-system.jpg", "/images/products/industrial-water-treatment.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "Dual RO Membrane high-pressure throughput",
      "Stainless steel UV sterilization cylinder",
      "Fully automated pressure pump controls",
      "Skid-mounted visual flow meters"
    ],
    specifications: {
      "Purification Capacity": "50 to 100 Litres per hour",
      "Storage Tank Volume": "External Tank compatible (50L to 100L)",
      "Dimensions (WxDxH)": "550 x 380 x 850 mm",
      "Net Weight": "24 kg",
      "Power Consumption": "120 Watts",
      "Input Water TDS Range": "100 to 2500 ppm",
      "Mounting Type": "Floor Standing Skid"
    },
    capacity: "50-100 L/hr continuous flow",
    stages: [
      "Coarse Jumbo sediment pre-filter",
      "Granular Activated Carbon filter",
      "Carbon Block micro-adsorption",
      "Dual High-Capacity RO Membranes",
      "Stainless Steel UV Chamber Sterilizer",
      "Alkaline pH taste adjuster"
    ],
    benefits: [
      "Provides standard water purity for coffee machines, ovens, and drinking stations",
      "Minimizes scale build-up inside costly commercial kitchen machinery",
      "Robust stainless steel framing resists corrosion in damp kitchen setups",
      "Handles municipal, tanker, and groundwater inputs seamlessly"
    ],
    warranty: "1 Year Comprehensive Commercial Warranty",
    installation: [
      "Specialist site analysis check performed before setup.",
      "Plumbed into primary kitchen cold line or pantry inlet.",
      "Connects to pressure tank or overhead dispensers.",
      "Flow metrics, pressure levels, and TDS calibrated."
    ],
    faq: [
      {
        q: "Can this system run without an external tank?",
        a: "Yes, it supports direct pressure lines, but we recommend a 50-litre storage pressure tank to manage peak hour dispense speeds."
      },
      {
        q: "What is the monthly maintenance cost?",
        a: "AMC plans start at ₹999/month, covering cartridge replacements, sanitization, and priority emergency repair calls."
      }
    ],
    relatedSlugs: ["industrial-filters", "under-sink-compact", "domestic-filters"]
  },
  {
    slug: "industrial-filters",
    name: "Industrial RO Plant (LPH 250)",
    category: "Industrial Water Filters",
    price: "₹1,25,000",
    tag: "Heavy Industry",
    tagline: "Large-scale process water purification for factories and laboratories.",
    description: "High-spec industrial filtration plant constructed with heavy-gauge stainless steel skid framing, automated sand/carbon backwash media, and multi-stage pressure indicators.",
    image: "/images/products/industrial-water-treatment.jpg",
    gallery: ["/images/products/industrial-water-treatment.jpg", "/images/products/commercial-ro-system.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "Industrial sand and carbon media filter vessels with manual backwash valves",
      "High-pressure vertical multistage pump",
      "Digital flow sensors and conductivity meters",
      "Auto-flush membrane cleaning cycle"
    ],
    specifications: {
      "Purification Capacity": "250 Litres per hour",
      "Skid Construction": "304 Stainless Steel Frame",
      "Power Rating": "1.5 kW",
      "Dimensions": "1200 x 600 x 1600 mm",
      "Recovery Rate": "Up to 55-60%",
      "Input TDS Tolerated": "Up to 4000 ppm"
    },
    capacity: "250 L/hr output capacity",
    stages: [
      "Multi-grade sand filter vessel",
      "Activated carbon media vessel",
      "Micro-fine cartridge pre-filtration",
      "High-Pressure RO Membrane Skid",
      "Post-treatment Chlorine Dosing / UV sterilization",
      "Deionization column (Optional for Lab Grade)"
    ],
    benefits: [
      "Delivers pure process water conforming to ISO/ISI industrial purity standards",
      "Eliminates heavy metals, toxic chemical wastes, and organic compounds",
      "Automated backwashing prolongs membrane lifetime to 2-3 years",
      "Configurable for laboratory reagent, battery water, or manufacturing use"
    ],
    warranty: "1 Year Skid & Pump Warranty",
    installation: [
      "Requires dedicated 3-phase power line and drain channel setup.",
      "Engineered layout and plumbing connections mapped on-site.",
      "Backwash cycles calibrated against input turbidity.",
      "Technician conducts 2-day testing trial."
    ],
    faq: [
      {
        q: "Does this require a dedicated technician to operate?",
        a: "No, the system is fully automatic. Operators only need to check daily inlet pressure and run weekly backwashes by turning dial valves."
      },
      {
        q: "Is a water softener pre-treatment required?",
        a: "If your water hardness exceeds 800 ppm, we highly recommend adding our automatic sand/softener pretreatment skid to prolong membrane life."
      }
    ],
    relatedSlugs: ["commercial-filters", "water-softeners", "whole-home"]
  },
  {
    slug: "ro-filters",
    name: "Classic Under-Sink RO system",
    category: "RO Water Filters",
    price: "₹11,999",
    tag: "Hidden Fit",
    tagline: "Out of sight, ultra-secure RO filtration.",
    description: "Fits inside your kitchen cabinet under the sink. Paired with a sleek, chrome gooseneck faucet mounted directly beside your standard tap.",
    image: "/images/products/under-sink-ro.jpg",
    gallery: ["/images/products/under-sink-ro.jpg", "/images/products/countertop-pro.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "Under-cabinet placement saves counter space",
      "Heavy-duty pressurised tank ensures constant high-flow dispensing",
      "Full 5-stage reverse osmosis core",
      "Premium lead-free chrome faucet included"
    ],
    specifications: {
      "Purification Capacity": "12 to 15 Litres per hour",
      "Storage Tank Volume": "8 Litres (Pressurised steel)",
      "Dimensions (Unit)": "340 x 180 x 420 mm",
      "Dimensions (Tank)": "280 x 280 x 380 mm",
      "Net Weight": "8.8 kg",
      "Input TDS Tolerated": "100 to 1500 ppm"
    },
    capacity: "8 Litres Pressurized Tank / 15 L/hr flow",
    stages: [
      "Sediment Filter (5 Micron)",
      "Granular Activated Carbon",
      "Carbon Block Filter",
      "RO Membrane Core (0.0001 Micron)",
      "Taste Polishing post-carbon"
    ],
    benefits: [
      "Zero clutter on kitchen counters",
      "High-pressure dispense speed even when water supply is low",
      "Strips heavy minerals, chemical residues, scale, and micro-metals",
      "Direct plumbing connection prevents manual top-ups"
    ],
    warranty: "1 Year Standard Warranty",
    installation: [
      "Under-sink cabinet cleaned and checked.",
      "Sink deck drilled (if required) to fit faucet.",
      "Inlet feed-valve connected to cold line.",
      "Tanks pressurized and checked for leaks."
    ],
    faq: [
      {
        q: "How does the pressurized tank work?",
        a: "A rubber diaphragm inside the tank holds the filtered water under air pressure. This ensures that water flows quickly from the faucet, even when the RO system is operating slowly in the background."
      },
      {
        q: "Does this require electric power?",
        a: "Yes, it uses power to drive the internal booster pump to push water through the RO membrane."
      }
    ],
    relatedSlugs: ["under-sink-compact", "domestic-filters", "countertop-pro"]
  },
  {
    slug: "uv-filters",
    name: "Active UV Disinfection System",
    category: "UV Water Filters",
    price: "₹8,499",
    tag: "Microbe Protection",
    tagline: "Stops viruses and bacteria without chemical residues.",
    description: "Designed for areas with low TDS (municipal water supply) that carry bacterial risk. This system sterilizes tap water using UV radiation while keeping all natural minerals.",
    image: "/images/products/uv-disinfection.jpg",
    gallery: ["/images/products/uv-disinfection.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "High-power 11W Philips UV Sterilization tube",
      "Stainless steel chamber prevents UV degradation and corrosion",
      "UV Fail alarm halts dispensing if lamp stops working",
      "Direct gravity-feed filter stages"
    ],
    specifications: {
      "Purification Capacity": "30 Litres per hour",
      "Storage Tank Volume": "No storage (Instant Flow)",
      "Power Rating": "15 Watts",
      "Input Water TDS Limits": "Under 250 ppm recommended",
      "Flow Rate": "1.5 Litres per minute",
      "Chamber Material": "304 Food-grade Stainless Steel"
    },
    capacity: "30 L/hr instant dispensing",
    stages: [
      "Sediment cartridge (Pre-filtration)",
      "Carbon block adsorption filter",
      "Fine sediment micro-polishing filter",
      "Active UV Disinfection Chamber"
    ],
    benefits: [
      "Keeps all beneficial calcium and magnesium minerals",
      "Kills 99.99% of bacteria, viruses, and microbial cysts",
      "High flow rate allows instant glass filling",
      "Zero waste-water generation"
    ],
    warranty: "1 Year Warranty (lamp element excluded)",
    installation: [
      "Wall-mounted directly above sink.",
      "Standard plumbing connection established.",
      "UV chamber lamp fitted and seals tested.",
      "Technician checks lamp status alarm indicator."
    ],
    faq: [
      {
        q: "Does a UV filter reduce water hardness?",
        a: "No, UV filtration only sterilizes living pathogens. If you have hard water or salty taste (high TDS), you should use an RO system instead."
      },
      {
        q: "What is the life of the UV lamp?",
        a: "The lamp should be replaced every 9,000 burning hours or once a year for safety."
      }
    ],
    relatedSlugs: ["domestic-filters", "uf-filters", "countertop-pro"]
  },
  {
    slug: "uf-filters",
    name: "Ultra-Filtration (UF) Gravity Filter",
    category: "UF Water Filters",
    price: "₹4,999",
    tag: "Zero Electricity",
    tagline: "Non-electric gravity-fed cyst removal.",
    description: "Perfect for clean municipal tap water that has occasional muddy turbidity or biological contaminants. Operates without electricity or running water pressure.",
    image: "/images/products/uf-gravity-filter.jpg",
    gallery: ["/images/products/uf-gravity-filter.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "Zero electricity usage — operates entirely on gravity feed",
      "Hollow-fiber UF membrane strips cysts, mold, and bacteria",
      "Large top and bottom storage chambers",
      "Durable food-grade break-resistant construction"
    ],
    specifications: {
      "Total Storage Capacity": "16 Litres (8L raw / 8L purified)",
      "Purification Rate": "10 to 15 Litres per day",
      "Filter Material": "Hollow Fiber Hydrophilic Membrane",
      "Pore Size": "0.1 Micron",
      "Warranty": "6 Months Cartridge Warranty"
    },
    capacity: "16 Litres total storage (8L Clean)",
    stages: [
      "Micron pre-filter wrap (dust/mud capture)",
      "Activated Carbon block (odor/chlorine removal)",
      "0.1-micron UF membrane bundle"
    ],
    benefits: [
      "Works during power outages and low tap pressure situations",
      "Strips out physical silt, microplastics, pathogens, and cysts",
      "Extremely low cartridge cost compared to RO systems",
      "Lightweight desktop placement"
    ],
    warranty: "6 Months standard warranty",
    installation: [
      "Tabletop setup — no drilling or plumbing plumbing needed.",
      "Chambers thoroughly washed and assembled.",
      "Cartridges soaked in clean water for 15 minutes before insertion.",
      "Flow rate checked."
    ],
    faq: [
      {
        q: "Does this filter remove dissolved salt?",
        a: "No, UF membranes have a 0.1-micron pore size which blocks pathogens and mud but allows dissolved minerals and salts to pass. Useful if your water TDS is already in a healthy range (under 200 ppm)."
      },
      {
        q: "How do I clean the UF membrane?",
        a: "We supply a syringe tool to push clean water backward through the membrane to flush out accumulated sediment."
      }
    ],
    relatedSlugs: ["countertop-pro", "uv-filters", "domestic-filters"]
  },
  {
    slug: "countertop-pro",
    name: "Countertop Pro (Plug & Play)",
    category: "Countertop Filters",
    price: "₹6,999",
    tag: "Zero Setup",
    tagline: "No drilling, no plumbers, instant table placement.",
    description: "Perfect for renters or smaller apartments. Sits neatly on your kitchen counter, connecting directly to your existing faucet via a selector valve knob.",
    image: "/images/products/countertop-pro.jpg",
    gallery: ["/images/products/countertop-pro.jpg", "/images/products/domestic-ro-filter.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "Fitted with bypass diverter valve (attaches directly to sink faucet)",
      "Compact glassmorphic countertop layout",
      "Easily detachable, portable layout for relocations",
      "Dual filtration core"
    ],
    specifications: {
      "Purification Capacity": "15 Litres per hour",
      "Dimensions": "220 x 200 x 360 mm",
      "Net Weight": "4.2 kg",
      "Power Required": "None (Gravity-tap pressure driven)",
      "Faucet Adapter Size": "Fits standard 22mm & 24mm taps"
    },
    capacity: "15 L/hr instant flow rate",
    stages: [
      "Polypropylene pre-filter wrap",
      "Premium multi-stage coconut carbon cartridge",
      "Trace Mineral addition block"
    ],
    benefits: [
      "Zero cabinet drilling required",
      "Quick selector switch flips between filtered drinking water and tap spray",
      "Portability allows you to pack and carry it in a backpack",
      "Provides premium, fresh-tasting mineral water"
    ],
    warranty: "1 Year Manufacturer Warranty",
    installation: [
      "Diverter valve threaded onto tap aerator nozzle.",
      "Adapter rings matched to tap width.",
      "Hose lines routed tidy along counter edge.",
      "Filtered water line flushed for 5 minutes."
    ],
    faq: [
      {
        q: "Will this system fit pull-out spray faucets?",
        a: "No, countertop diverter systems only mount to standard threaded aerator faucets. They are incompatible with pull-out shower spray taps."
      },
      {
        q: "How often should I swap the filter?",
        a: "The multi-stage core should be replaced every 4,000 Litres or 6-8 months, depending on daily drinking water usage."
      }
    ],
    relatedSlugs: ["under-sink-compact", "domestic-filters", "ro-filters"]
  },
  {
    slug: "wall-mounted-filters",
    name: "Aura Premium RO+UV+Alkaline",
    category: "Wall Mounted Filters",
    price: "₹13,999",
    tag: "Classic Wall Fit",
    tagline: "The aesthetic kitchen centerpiece with active alkaline balance.",
    description: "Aquapure's classic wall-mounted purifier features a transparent level indicator window, a glossy scratch-resistant faceplate, and 7 stages of active mineral balancing.",
    image: "/images/products/wall-mounted-premium.jpg",
    gallery: ["/images/products/wall-mounted-premium.jpg", "/images/products/domestic-ro-filter.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "Stunning minimalist cabinet layout with status LEDs",
      "Active Alkaline Mineral cartridge balances water pH to 8.0",
      "Transparent food-grade storage chamber with level float",
      "Auto-flushing system clears sediment from membranes"
    ],
    specifications: {
      "Purification Capacity": "15 Litres per hour",
      "Storage Tank Volume": "9 Litres",
      "Dimensions (WxDxH)": "360 x 280 x 460 mm",
      "Power Rating": "38 Watts",
      "TDS Range Tolerated": "100 to 1800 ppm"
    },
    capacity: "9 Litres Storage / 15 L/hr speed",
    stages: [
      "Pre-sediment filter cartridge",
      "Carbon Block pre-filter",
      "Fine sediment micro-polisher",
      "High-rejection TFC RO Membrane",
      "Alkaline Mineral Cartridge",
      "Post-carbon cartridge",
      "UV Sterilizer Tube"
    ],
    benefits: [
      "Aesthetic layout complements modern kitchen designs",
      "Maintains natural pH balance of purified water between 7.5 and 8.2",
      "Protects against pathogens, viruses, and chemicals",
      "Audible filter-life alarms prevent stale water usage"
    ],
    warranty: "1 Year Comprehensive Warranty",
    installation: [
      "Wall bracket anchored to kitchen tiles.",
      "Drilled connections established for inlet and waste drain lines.",
      "Unit hung and checked with level indicators.",
      "TDS calibrations checked."
    ],
    faq: [
      {
        q: "What does the Alkaline filter do?",
        a: "Standard RO systems can lower water pH, making it slightly acidic. Our Alkaline filter restores natural minerals (calcium and magnesium) which raises pH back to a healthy alkaline range (7.5-8.2), making it better for hydration."
      },
      {
        q: "Is there water waste in this system?",
        a: "Yes, like all RO systems, it rejects high-TDS water. The waste water can be collected and used for watering plants, mopping floors, or washing utensils."
      }
    ],
    relatedSlugs: ["domestic-filters", "ro-filters", "countertop-pro"]
  },
  {
    slug: "whole-home",
    name: "Whole Home mainline Purifier",
    category: "Whole House Filters",
    price: "₹14,499",
    tag: "Complete Protection",
    tagline: "Purify every single tap in your household.",
    description: "Fitted directly to your primary overhead tank delivery line. Strains out suspended silt, sand, mud, and chlorine odors, providing soft, clean water to all showers, washrooms, and wash areas.",
    image: "/images/products/whole-home-system.jpg",
    gallery: ["/images/products/whole-home-system.jpg", "/images/products/commercial-ro-system.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "Heavy-flow dual-housing mainline filtration",
      "Bypasses pressure drops via high-flow filter weaves",
      "Stops plumbing scale, staining on tiles, and laundry damage",
      "Heavy-gauge pressure release buttons"
    ],
    specifications: {
      "Flow Capacity": "1500 to 2000 Litres per hour",
      "Pipe Size Connections": "1 inch / 0.75 inch inlet ports",
      "Dimensions": "420 x 220 x 650 mm",
      "Working Pressure": "1 to 6 bar pressure",
      "Cartridge Size": "20 inch Jumbo"
    },
    capacity: "1500 L/hr mainline volume",
    stages: [
      "20-inch Jumbo Sediment Cartridge (Rust & sand removal)",
      "20-inch Jumbo Activated Carbon Block (Chlorine & odor adsorption)"
    ],
    benefits: [
      "Stops hard scale build-up inside bathroom pipes, showers, and geysers",
      "Reduces hair fall, skin dryness, and protects clothes from washing discoloration",
      "Provides pre-filtered water to domestic RO purifiers and washing machines",
      "Extremely long filter cartridge lifetime (up to 50,000 Litres)"
    ],
    warranty: "1 Year Housing Warranty",
    installation: [
      "Technician anchors filter frame near mainline pump outlet.",
      "Plumbed with shut-off bypass valves for easy manual replacement.",
      "Main line pressure tests performed to check seals."
    ],
    faq: [
      {
        q: "Does this remove dissolved salts (TDS)?",
        a: "No, this is a mainline filtration system designed to remove physical particles, mud, rust, chlorine, and chemical odors. For drinking water, we recommend using a drinking-grade RO system in the kitchen."
      },
      {
        q: "Will this decrease tap water pressure?",
        a: "Our Jumbo cartridges are designed for high flow capacity. Under normal municipal pressures (above 1.5 bar), pressure drop is minimal (less than 0.1 bar)."
      }
    ],
    relatedSlugs: ["water-softeners", "industrial-filters", "commercial-filters"]
  },
  {
    slug: "water-softeners",
    name: "Automated Water Softener (20L)",
    category: "Water Softeners",
    price: "₹38,999",
    tag: "Zero Hardness",
    tagline: "Stops scale deposits completely via automated ion exchange.",
    description: "An automatic water softener system containing high-capacity food-grade resin beads. It extracts hardness minerals (calcium and magnesium) and replaces them with sodium ions, preventing plumbing scale completely.",
    image: "/images/products/water-softener.jpg",
    gallery: ["/images/products/water-softener.jpg"],
    video: "videos/hero background.mp4",
    features: [
      "Automatic digital timer controller valve triggers regeneration cycles",
      "High-exchange food-grade resin bed",
      "Large salt brine tank for manual salt top-ups",
      "Heavy duty FRP pressure cylinder"
    ],
    specifications: {
      "Softening Capacity": "1000 Litres per hour max",
      "Resin Volume": "20 Litres",
      "Brine Tank Volume": "35 Litres",
      "Regeneration Type": "Automatic Volume / Time Triggered",
      "Dimensions": "320 x 320 x 1100 mm"
    },
    capacity: "1000 L/hr maximum flow",
    stages: [
      "Fine mesh sand trap (pre-filtration)",
      "Strong Acid Cation Resin column (Ion Exchange)"
    ],
    benefits: [
      "Stops white crusty scaling on faucets, bathroom walls, and geysers",
      "Makes soaps and shampoo lather easily, reducing consumption by 40%",
      "Improves hair texture and prevents skin irritation caused by hard salts",
      "Prolongs the life of expensive washing machines and dishwashers"
    ],
    warranty: "1 Year Valve & Cylinder Warranty",
    installation: [
      "Softener positioned on flat slab near mainline pump inlet.",
      "Brine hose routed to drain line.",
      "Resin column loaded and manual flush cycle run.",
      "Automatic regeneration timer set based on local water hardness levels."
    ],
    faq: [
      {
        q: "What maintenance does this require?",
        a: "You only need to top up coarse salt (refined salt tablets) in the brine tank once or twice a month, depending on water hardness. The system automatically manages the backwashing and resin cleaning cycles."
      },
      {
        q: "Does this water become safe for drinking?",
        a: "Softening removes hardness minerals but does not filter out chemicals, heavy metals, or microbes. We recommend a drinking-grade RO system to purify softened water for drinking."
      }
    ],
    relatedSlugs: ["whole-home", "industrial-filters", "commercial-filters"]
  }
];

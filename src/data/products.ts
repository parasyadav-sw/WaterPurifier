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
    "slug": "domestic-filters",
    "name": "Domestic RO+UV Purifier",
    "category": "Domestic Water Filters",
    "price": "₹14,499",
    "tag": "Essential Home",
    "tagline": "Ultra-pure drinking water for health-conscious households.",
    "description": "Aquapure's Domestic RO+UV system is engineered to handle municipal and municipal-borewell blends, delivering pure, safe drinking water containing active calcium and magnesium mineral enhancements.",
    "image": "/images/products/domestic-ro-filter.jpg",
    "gallery": [
      "/images/products/domestic-ro-filter.jpg",
      "/images/products/countertop-pro.jpg",
      "/images/products/whole-home-system.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "7-Stage RO + UV + Active Mineralizer technology",
      "Advanced TDS Regulator matching taste to input water hardness",
      "Smart App companion flags filter life in real time",
      "Food-grade high-capacity storage tank"
    ],
    "specifications": {
      "Purification Capacity": "15 to 20 Litres per hour",
      "Storage Tank Volume": "10 Litres",
      "Dimensions (WxDxH)": "380 x 270 x 480 mm",
      "Net Weight": "9.5 kg",
      "Power Consumption": "36 Watts",
      "Input Water TDS Range": "100 to 2000 ppm",
      "Mounting Type": "Wall Mounted / Countertop"
    },
    "capacity": "10 Litres Storage / 20 L/hr throughput",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine & Pesticide Adsorption)",
      "Micro-Sediment Polishing Filter (5 Micron trap)",
      "Thin-Film Composite RO Membrane (Lead & Fluoride rejection)",
      "Post-Carbon Taste Enhancer",
      "Inline UV Sterilization Chamber (DNA pathogen disruption)",
      "Active Mineralizer Cartridge (Electrolyte pH restoration)"
    ],
    "benefits": [
      "Strips out toxic lead, arsenic, nitrates, and microscopic pathogens",
      "Restores essential alkalinity and natural sweet taste",
      "Ensures zero dry-out cartridge damage via low pressure automatic shutoff",
      "Saves up to 600 single-use plastic water bottles monthly"
    ],
    "warranty": "1 Year Comprehensive Warranty (including RO Membrane & filters)",
    "installation": [
      "Technician arrives within 2 hours of booking approval.",
      "Inlet adapter valve secured directly to under-sink or countertop tap.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level (safely between 25-50 ppm)."
    ],
    "faq": [
      {
        "q": "What is the post-filtration TDS level?",
        "a": "Our RO system safely reduces TDS by 93% to 96%. For an input of 500 ppm, output will hover around 25 to 35 ppm, retaining healthy mineral counts."
      },
      {
        "q": "When should the filters be replaced?",
        "a": "Typically between 9 to 12 months. Our companion app and front indicators will alert you before filter efficiency degrades."
      }
    ],
    "relatedSlugs": [
      "alkaline-pen-water-ionizer",
      "org-ionpot-alkaline-system",
      "org-alkalinizer"
    ]
  },
  {
    "slug": "commercial-filters",
    "name": "Commercial High-Output System",
    "category": "Commercial Water Filters",
    "price": "₹45,999",
    "tag": "Offices & Cafes",
    "tagline": "High-capacity purification for office floors, clinics, and restaurants.",
    "description": "Designed for commercial applications requiring high volume throughput without compromising mineral quality. Delivers continuous, high-volume flow under heavy daily workloads.",
    "image": "/images/products/commercial-ro-system.jpg",
    "gallery": [
      "/images/products/commercial-ro-system.jpg",
      "/images/products/industrial-water-treatment.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Dual RO Membrane high-pressure throughput",
      "Stainless steel UV sterilization cylinder",
      "Fully automated pressure pump controls",
      "Skid-mounted visual flow meters"
    ],
    "specifications": {
      "Purification Capacity": "50 to 100 Litres per hour",
      "Storage Tank Volume": "External Tank compatible (50L to 100L)",
      "Dimensions (WxDxH)": "550 x 380 x 850 mm",
      "Net Weight": "24 kg",
      "Power Consumption": "120 Watts",
      "Input Water TDS Range": "100 to 2500 ppm",
      "Mounting Type": "Floor Standing Skid"
    },
    "capacity": "50-100 L/hr continuous flow",
    "stages": [
      "Coarse Jumbo sediment pre-filter",
      "Granular Activated Carbon filter",
      "Carbon Block micro-adsorption",
      "Dual High-Capacity RO Membranes",
      "Stainless Steel UV Chamber Sterilizer",
      "Alkaline pH taste adjuster"
    ],
    "benefits": [
      "Provides standard water purity for coffee machines, ovens, and drinking stations",
      "Minimizes scale build-up inside costly commercial kitchen machinery",
      "Robust stainless steel framing resists corrosion in damp kitchen setups",
      "Handles municipal, tanker, and groundwater inputs seamlessly"
    ],
    "warranty": "1 Year Comprehensive Commercial Warranty",
    "installation": [
      "Specialist site analysis check performed before setup.",
      "Plumbed into primary kitchen cold line or pantry inlet.",
      "Connects to pressure tank or overhead dispensers.",
      "Flow metrics, pressure levels, and TDS calibrated."
    ],
    "faq": [
      {
        "q": "Can this system run without an external tank?",
        "a": "Yes, it supports direct pressure lines, but we recommend a 50-litre storage pressure tank to manage peak hour dispense speeds."
      },
      {
        "q": "What is the monthly maintenance cost?",
        "a": "AMC plans start at ₹999/month, covering cartridge replacements, sanitization, and priority emergency repair calls."
      }
    ],
    "relatedSlugs": [
      "kent-elite-2-plus-commercial-purifier",
      "kent-elite-plus-commercial-purifier",
      "kent-galaxy-commercial-purifier"
    ]
  },
  {
    "slug": "industrial-filters",
    "name": "Industrial RO Plant (LPH 250)",
    "category": "Industrial Water Filters",
    "price": "₹1,25,000",
    "tag": "Heavy Industry",
    "tagline": "Large-scale process water purification for factories and laboratories.",
    "description": "High-spec industrial filtration plant constructed with heavy-gauge stainless steel skid framing, automated sand/carbon backwash media, and multi-stage pressure indicators.",
    "image": "/images/products/industrial-water-treatment.jpg",
    "gallery": [
      "/images/products/industrial-water-treatment.jpg",
      "/images/products/commercial-ro-system.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Industrial sand and carbon media filter vessels with manual backwash valves",
      "High-pressure vertical multistage pump",
      "Digital flow sensors and conductivity meters",
      "Auto-flush membrane cleaning cycle"
    ],
    "specifications": {
      "Purification Capacity": "250 Litres per hour",
      "Skid Construction": "304 Stainless Steel Frame",
      "Power Rating": "1.5 kW",
      "Dimensions": "1200 x 600 x 1600 mm",
      "Recovery Rate": "Up to 55-60%",
      "Input TDS Tolerated": "Up to 4000 ppm"
    },
    "capacity": "250 L/hr output capacity",
    "stages": [
      "Multi-grade sand filter vessel",
      "Activated carbon media vessel",
      "Micro-fine cartridge pre-filtration",
      "High-Pressure RO Membrane Skid",
      "Post-treatment Chlorine Dosing / UV sterilization",
      "Deionization column (Optional for Lab Grade)"
    ],
    "benefits": [
      "Delivers pure process water conforming to ISO/ISI industrial purity standards",
      "Eliminates heavy metals, toxic chemical wastes, and organic compounds",
      "Automated backwashing prolongs membrane lifetime to 2-3 years",
      "Configurable for laboratory reagent, battery water, or manufacturing use"
    ],
    "warranty": "1 Year Skid & Pump Warranty",
    "installation": [
      "Requires dedicated 3-phase power line and drain channel setup.",
      "Engineered layout and plumbing connections mapped on-site.",
      "Backwash cycles calibrated against input turbidity.",
      "Technician conducts 2-day testing trial."
    ],
    "faq": [
      {
        "q": "Does this require a dedicated technician to operate?",
        "a": "No, the system is fully automatic. Operators only need to check daily inlet pressure and run weekly backwashes by turning dial valves."
      },
      {
        "q": "Is a water softener pre-treatment required?",
        "a": "If your water hardness exceeds 800 ppm, we highly recommend adding our automatic sand/softener pretreatment skid to prolong membrane life."
      }
    ],
    "relatedSlugs": [
      "industrial-ro-standard-plant",
      "industrial-ro-pre-treatment-system",
      "org-automatic-dm-plant-10x54"
    ]
  },
  {
    "slug": "ro-filters",
    "name": "Classic Under-Sink RO system",
    "category": "RO Water Filters",
    "price": "₹11,999",
    "tag": "Hidden Fit",
    "tagline": "Out of sight, ultra-secure RO filtration.",
    "description": "Fits inside your kitchen cabinet under the sink. Paired with a sleek, chrome gooseneck faucet mounted directly beside your standard tap.",
    "image": "/images/products/under-sink-ro.jpg",
    "gallery": [
      "/images/products/under-sink-ro.jpg",
      "/images/products/countertop-pro.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Under-cabinet placement saves counter space",
      "Heavy-duty pressurised tank ensures constant high-flow dispensing",
      "Full 5-stage reverse osmosis core",
      "Premium lead-free chrome faucet included"
    ],
    "specifications": {
      "Purification Capacity": "12 to 15 Litres per hour",
      "Storage Tank Volume": "8 Litres (Pressurised steel)",
      "Dimensions (Unit)": "340 x 180 x 420 mm",
      "Dimensions (Tank)": "280 x 280 x 380 mm",
      "Net Weight": "8.8 kg",
      "Input TDS Tolerated": "100 to 1500 ppm"
    },
    "capacity": "8 Litres Pressurized Tank / 15 L/hr flow",
    "stages": [
      "Sediment Filter (5 Micron)",
      "Granular Activated Carbon",
      "Carbon Block Filter",
      "RO Membrane Core (0.0001 Micron)",
      "Taste Polishing post-carbon"
    ],
    "benefits": [
      "Zero clutter on kitchen counters",
      "High-pressure dispense speed even when water supply is low",
      "Strips heavy minerals, chemical residues, scale, and micro-metals",
      "Direct plumbing connection prevents manual top-ups"
    ],
    "warranty": "1 Year Standard Warranty",
    "installation": [
      "Under-sink cabinet cleaned and checked.",
      "Sink deck drilled (if required) to fit faucet.",
      "Inlet feed-valve connected to cold line.",
      "Tanks pressurized and checked for leaks."
    ],
    "faq": [
      {
        "q": "How does the pressurized tank work?",
        "a": "A rubber diaphragm inside the tank holds the filtered water under air pressure. This ensures that water flows quickly from the faucet, even when the RO system is operating slowly in the background."
      },
      {
        "q": "Does this require electric power?",
        "a": "Yes, it uses power to drive the internal booster pump to push water through the RO membrane."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "uv-filters",
    "name": "Active UV Disinfection System",
    "category": "UV Water Filters",
    "price": "₹8,499",
    "tag": "Microbe Protection",
    "tagline": "Stops viruses and bacteria without chemical residues.",
    "description": "Designed for areas with low TDS (municipal water supply) that carry bacterial risk. This system sterilizes tap water using UV radiation while keeping all natural minerals.",
    "image": "/images/products/uv-disinfection.jpg",
    "gallery": [
      "/images/products/uv-disinfection.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "High-power 11W Philips UV Sterilization tube",
      "Stainless steel chamber prevents UV degradation and corrosion",
      "UV Fail alarm halts dispensing if lamp stops working",
      "Direct gravity-feed filter stages"
    ],
    "specifications": {
      "Purification Capacity": "30 Litres per hour",
      "Storage Tank Volume": "No storage (Instant Flow)",
      "Power Rating": "15 Watts",
      "Input Water TDS Limits": "Under 250 ppm recommended",
      "Flow Rate": "1.5 Litres per minute",
      "Chamber Material": "304 Food-grade Stainless Steel"
    },
    "capacity": "30 L/hr instant dispensing",
    "stages": [
      "Sediment cartridge (Pre-filtration)",
      "Carbon block adsorption filter",
      "Fine sediment micro-polishing filter",
      "Active UV Disinfection Chamber"
    ],
    "benefits": [
      "Keeps all beneficial calcium and magnesium minerals",
      "Kills 99.99% of bacteria, viruses, and microbial cysts",
      "High flow rate allows instant glass filling",
      "Zero waste-water generation"
    ],
    "warranty": "1 Year Warranty (lamp element excluded)",
    "installation": [
      "Wall-mounted directly above sink.",
      "Standard plumbing connection established.",
      "UV chamber lamp fitted and seals tested.",
      "Technician checks lamp status alarm indicator."
    ],
    "faq": [
      {
        "q": "Does a UV filter reduce water hardness?",
        "a": "No, UV filtration only sterilizes living pathogens. If you have hard water or salty taste (high TDS), you should use an RO system instead."
      },
      {
        "q": "What is the life of the UV lamp?",
        "a": "The lamp should be replaced every 9,000 burning hours or once a year for safety."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "uf-filters",
    "name": "Ultra-Filtration (UF) Gravity Filter",
    "category": "UF Water Filters",
    "price": "₹4,999",
    "tag": "Zero Electricity",
    "tagline": "Non-electric gravity-fed cyst removal.",
    "description": "Perfect for clean municipal tap water that has occasional muddy turbidity or biological contaminants. Operates without electricity or running water pressure.",
    "image": "/images/products/uf-gravity-filter.jpg",
    "gallery": [
      "/images/products/uf-gravity-filter.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Zero electricity usage — operates entirely on gravity feed",
      "Hollow-fiber UF membrane strips cysts, mold, and bacteria",
      "Large top and bottom storage chambers",
      "Durable food-grade break-resistant construction"
    ],
    "specifications": {
      "Total Storage Capacity": "16 Litres (8L raw / 8L purified)",
      "Purification Rate": "10 to 15 Litres per day",
      "Filter Material": "Hollow Fiber Hydrophilic Membrane",
      "Pore Size": "0.1 Micron",
      "Warranty": "6 Months Cartridge Warranty"
    },
    "capacity": "16 Litres total storage (8L Clean)",
    "stages": [
      "Micron pre-filter wrap (dust/mud capture)",
      "Activated Carbon block (odor/chlorine removal)",
      "0.1-micron UF membrane bundle"
    ],
    "benefits": [
      "Works during power outages and low tap pressure situations",
      "Strips out physical silt, microplastics, pathogens, and cysts",
      "Extremely low cartridge cost compared to RO systems",
      "Lightweight desktop placement"
    ],
    "warranty": "6 Months standard warranty",
    "installation": [
      "Tabletop setup — no drilling or plumbing plumbing needed.",
      "Chambers thoroughly washed and assembled.",
      "Cartridges soaked in clean water for 15 minutes before insertion.",
      "Flow rate checked."
    ],
    "faq": [
      {
        "q": "Does this filter remove dissolved salt?",
        "a": "No, UF membranes have a 0.1-micron pore size which blocks pathogens and mud but allows dissolved minerals and salts to pass. Useful if your water TDS is already in a healthy range (under 200 ppm)."
      },
      {
        "q": "How do I clean the UF membrane?",
        "a": "We supply a syringe tool to push clean water backward through the membrane to flush out accumulated sediment."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "countertop-pro",
    "name": "Countertop Pro (Plug & Play)",
    "category": "Countertop Filters",
    "price": "₹6,999",
    "tag": "Zero Setup",
    "tagline": "No drilling, no plumbers, instant table placement.",
    "description": "Perfect for renters or smaller apartments. Sits neatly on your kitchen counter, connecting directly to your existing faucet via a selector valve knob.",
    "image": "/images/products/countertop-pro.jpg",
    "gallery": [
      "/images/products/countertop-pro.jpg",
      "/images/products/domestic-ro-filter.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Fitted with bypass diverter valve (attaches directly to sink faucet)",
      "Compact glassmorphic countertop layout",
      "Easily detachable, portable layout for relocations",
      "Dual filtration core"
    ],
    "specifications": {
      "Purification Capacity": "15 Litres per hour",
      "Dimensions": "220 x 200 x 360 mm",
      "Net Weight": "4.2 kg",
      "Power Required": "None (Gravity-tap pressure driven)",
      "Faucet Adapter Size": "Fits standard 22mm & 24mm taps"
    },
    "capacity": "15 L/hr instant flow rate",
    "stages": [
      "Polypropylene pre-filter wrap",
      "Premium multi-stage coconut carbon cartridge",
      "Trace Mineral addition block"
    ],
    "benefits": [
      "Zero cabinet drilling required",
      "Quick selector switch flips between filtered drinking water and tap spray",
      "Portability allows you to pack and carry it in a backpack",
      "Provides premium, fresh-tasting mineral water"
    ],
    "warranty": "1 Year Manufacturer Warranty",
    "installation": [
      "Diverter valve threaded onto tap aerator nozzle.",
      "Adapter rings matched to tap width.",
      "Hose lines routed tidy along counter edge.",
      "Filtered water line flushed for 5 minutes."
    ],
    "faq": [
      {
        "q": "Will this system fit pull-out spray faucets?",
        "a": "No, countertop diverter systems only mount to standard threaded aerator faucets. They are incompatible with pull-out shower spray taps."
      },
      {
        "q": "How often should I swap the filter?",
        "a": "The multi-stage core should be replaced every 4,000 Litres or 6-8 months, depending on daily drinking water usage."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "wall-mounted-filters",
    "name": "Aura Premium RO+UV+Alkaline",
    "category": "Wall Mounted Filters",
    "price": "₹13,999",
    "tag": "Classic Wall Fit",
    "tagline": "The aesthetic kitchen centerpiece with active alkaline balance.",
    "description": "Aquapure's classic wall-mounted purifier features a transparent level indicator window, a glossy scratch-resistant faceplate, and 7 stages of active mineral balancing.",
    "image": "/images/products/wall-mounted-premium.jpg",
    "gallery": [
      "/images/products/wall-mounted-premium.jpg",
      "/images/products/domestic-ro-filter.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Stunning minimalist cabinet layout with status LEDs",
      "Active Alkaline Mineral cartridge balances water pH to 8.0",
      "Transparent food-grade storage chamber with level float",
      "Auto-flushing system clears sediment from membranes"
    ],
    "specifications": {
      "Purification Capacity": "15 Litres per hour",
      "Storage Tank Volume": "9 Litres",
      "Dimensions (WxDxH)": "360 x 280 x 460 mm",
      "Power Rating": "38 Watts",
      "TDS Range Tolerated": "100 to 1800 ppm"
    },
    "capacity": "9 Litres Storage / 15 L/hr speed",
    "stages": [
      "Pre-sediment filter cartridge",
      "Carbon Block pre-filter",
      "Fine sediment micro-polisher",
      "High-rejection TFC RO Membrane",
      "Alkaline Mineral Cartridge",
      "Post-carbon cartridge",
      "UV Sterilizer Tube"
    ],
    "benefits": [
      "Aesthetic layout complements modern kitchen designs",
      "Maintains natural pH balance of purified water between 7.5 and 8.2",
      "Protects against pathogens, viruses, and chemicals",
      "Audible filter-life alarms prevent stale water usage"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Wall bracket anchored to kitchen tiles.",
      "Drilled connections established for inlet and waste drain lines.",
      "Unit hung and checked with level indicators.",
      "TDS calibrations checked."
    ],
    "faq": [
      {
        "q": "What does the Alkaline filter do?",
        "a": "Standard RO systems can lower water pH, making it slightly acidic. Our Alkaline filter restores natural minerals (calcium and magnesium) which raises pH back to a healthy alkaline range (7.5-8.2), making it better for hydration."
      },
      {
        "q": "Is there water waste in this system?",
        "a": "Yes, like all RO systems, it rejects high-TDS water. The waste water can be collected and used for watering plants, mopping floors, or washing utensils."
      }
    ],
    "relatedSlugs": []
  },
  {
    "slug": "whole-home",
    "name": "Whole Home mainline Purifier",
    "category": "Whole House Filters",
    "price": "₹14,499",
    "tag": "Complete Protection",
    "tagline": "Purify every single tap in your household.",
    "description": "Fitted directly to your primary overhead tank delivery line. Strains out suspended silt, sand, mud, and chlorine odors, providing soft, clean water to all showers, washrooms, and wash areas.",
    "image": "/images/products/whole-home-system.jpg",
    "gallery": [
      "/images/products/whole-home-system.jpg",
      "/images/products/commercial-ro-system.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Heavy-flow dual-housing mainline filtration",
      "Bypasses pressure drops via high-flow filter weaves",
      "Stops plumbing scale, staining on tiles, and laundry damage",
      "Heavy-gauge pressure release buttons"
    ],
    "specifications": {
      "Flow Capacity": "1500 to 2000 Litres per hour",
      "Pipe Size Connections": "1 inch / 0.75 inch inlet ports",
      "Dimensions": "420 x 220 x 650 mm",
      "Working Pressure": "1 to 6 bar pressure",
      "Cartridge Size": "20 inch Jumbo"
    },
    "capacity": "1500 L/hr mainline volume",
    "stages": [
      "20-inch Jumbo Sediment Cartridge (Rust & sand removal)",
      "20-inch Jumbo Activated Carbon Block (Chlorine & odor adsorption)"
    ],
    "benefits": [
      "Stops hard scale build-up inside bathroom pipes, showers, and geysers",
      "Reduces hair fall, skin dryness, and protects clothes from washing discoloration",
      "Provides pre-filtered water to domestic RO purifiers and washing machines",
      "Extremely long filter cartridge lifetime (up to 50,000 Litres)"
    ],
    "warranty": "1 Year Housing Warranty",
    "installation": [
      "Technician anchors filter frame near mainline pump outlet.",
      "Plumbed with shut-off bypass valves for easy manual replacement.",
      "Main line pressure tests performed to check seals."
    ],
    "faq": [
      {
        "q": "Does this remove dissolved salts (TDS)?",
        "a": "No, this is a mainline filtration system designed to remove physical particles, mud, rust, chlorine, and chemical odors. For drinking water, we recommend using a drinking-grade RO system in the kitchen."
      },
      {
        "q": "Will this decrease tap water pressure?",
        "a": "Our Jumbo cartridges are designed for high flow capacity. Under normal municipal pressures (above 1.5 bar), pressure drop is minimal (less than 0.1 bar)."
      }
    ],
    "relatedSlugs": [
      "org-scalefree-antiscalant-bag",
      "org-ro-scalefree",
      "org-com-ro-scalefree"
    ]
  },
  {
    "slug": "water-softeners",
    "name": "Automated Water Softener (20L)",
    "category": "Water Softeners",
    "price": "₹38,999",
    "tag": "Zero Hardness",
    "tagline": "Stops scale deposits completely via automated ion exchange.",
    "description": "An automatic water softener system containing high-capacity food-grade resin beads. It extracts hardness minerals (calcium and magnesium) and replaces them with sodium ions, preventing plumbing scale completely.",
    "image": "/images/products/water-softener.jpg",
    "gallery": [
      "/images/products/water-softener.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Automatic digital timer controller valve triggers regeneration cycles",
      "High-exchange food-grade resin bed",
      "Large salt brine tank for manual salt top-ups",
      "Heavy duty FRP pressure cylinder"
    ],
    "specifications": {
      "Softening Capacity": "1000 Litres per hour max",
      "Resin Volume": "20 Litres",
      "Brine Tank Volume": "35 Litres",
      "Regeneration Type": "Automatic Volume / Time Triggered",
      "Dimensions": "320 x 320 x 1100 mm"
    },
    "capacity": "1000 L/hr maximum flow",
    "stages": [
      "Fine mesh sand trap (pre-filtration)",
      "Strong Acid Cation Resin column (Ion Exchange)"
    ],
    "benefits": [
      "Stops white crusty scaling on faucets, bathroom walls, and geysers",
      "Makes soaps and shampoo lather easily, reducing consumption by 40%",
      "Improves hair texture and prevents skin irritation caused by hard salts",
      "Prolongs the life of expensive washing machines and dishwashers"
    ],
    "warranty": "1 Year Valve & Cylinder Warranty",
    "installation": [
      "Softener positioned on flat slab near mainline pump inlet.",
      "Brine hose routed to drain line.",
      "Resin column loaded and manual flush cycle run.",
      "Automatic regeneration timer set based on local water hardness levels."
    ],
    "faq": [
      {
        "q": "What maintenance does this require?",
        "a": "You only need to top up coarse salt (refined salt tablets) in the brine tank once or twice a month, depending on water hardness. The system automatically manages the backwashing and resin cleaning cycles."
      },
      {
        "q": "Does this water become safe for drinking?",
        "a": "Softening removes hardness minerals but does not filter out chemicals, heavy metals, or microbes. We recommend a drinking-grade RO system to purify softened water for drinking."
      }
    ],
    "relatedSlugs": [
      "org-water-softener-bft",
      "org-bathroom-softener",
      "org-water-softener-10a"
    ]
  },
  {
    "slug": "alkaline-pen-water-ionizer",
    "name": "Alkaline Pen Water Ionizer",
    "category": "Domestic Water Filters",
    "price": "On Request",
    "tag": "Innovation",
    "tagline": "Portable alkaline water pen that converts regular water into antioxidant-rich alkaline water instantly.",
    "description": "Portable alkaline water pen that converts regular water into antioxidant-rich alkaline water instantly. Travel-friendly wellness solution for health-conscious individuals.",
    "image": "/images/products/alkaline-water-solutions-alkaline-pen-water-ionizer.jpg",
    "gallery": [
      "/images/products/alkaline-water-solutions-alkaline-pen-water-ionizer.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "Portable compact design",
      "Spec 2": "pH 8.5–9.5 output",
      "Spec 3": "ORP reduction technology",
      "Spec 4": "Rechargeable USB",
      "Food": "grade materials",
      "Travel": "ready"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "domestic-filters",
      "org-ionpot-alkaline-system",
      "org-alkalinizer"
    ]
  },
  {
    "slug": "org-ionpot-alkaline-system",
    "name": "ORG IonPot Alkaline System",
    "category": "Domestic Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Advanced IonPot ionization system producing alkaline and acidic water streams for drinking, cooking, and surface sanitization.",
    "description": "Advanced IonPot ionization system producing alkaline and acidic water streams for drinking, cooking, and surface sanitization. Premium 5-plate technology.",
    "image": "/images/products/alkaline-water-solutions-org-ionpot-alkaline-system.jpg",
    "gallery": [
      "/images/products/alkaline-water-solutions-org-ionpot-alkaline-system.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "Dual stream output",
      "5 platinum": "titanium plates",
      "Spec 3": "pH 4.5–11 range",
      "Self": "cleaning electrolysis",
      "Spec 5": "LCD control panel",
      "ORP": "200 to -400 mV"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "domestic-filters",
      "alkaline-pen-water-ionizer",
      "org-alkalinizer"
    ]
  },
  {
    "slug": "org-alkalinizer",
    "name": "ORG Alkalinizer",
    "category": "Domestic Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Inline alkaline enhancement system compatible with existing RO setups.",
    "description": "Inline alkaline enhancement system compatible with existing RO setups. Adds essential minerals post-filtration for balanced, health-promoting water.",
    "image": "/images/products/alkaline-water-solutions-org-alkalinizer.jpg",
    "gallery": [
      "/images/products/alkaline-water-solutions-org-alkalinizer.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "6": "month cartridge life",
      "Spec 1": "Inline RO compatible",
      "Spec 2": "Mineral enrichment balls",
      "Spec 3": "pH 7.5–8.5 output",
      "Spec 5": "Universal fit",
      "Spec 6": "Easy DIY replacement"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "domestic-filters",
      "alkaline-pen-water-ionizer",
      "org-ionpot-alkaline-system"
    ]
  },
  {
    "slug": "kent-elite-2-plus-commercial-purifier",
    "name": "Kent Elite 2 Plus Commercial Purifier",
    "category": "Commercial Water Filters",
    "price": "On Request",
    "tag": "Commercial",
    "tagline": "High-output commercial RO purifier delivering 2000 litres per day of pure water.",
    "description": "High-output commercial RO purifier delivering 2000 litres per day of pure water. Designed for offices, restaurants, and high-footfall commercial premises.",
    "image": "/images/products/commercial-purifiers-kent-elite-2-plus-commercial-purifier.jpg",
    "gallery": [
      "/images/products/commercial-purifiers-kent-elite-2-plus-commercial-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "2000 LPD output",
      "Spec 2": "SS storage tank",
      "Spec 3": "RO + UV purification",
      "Auto shut": "off float",
      "Spec 5": "Wall/floor mountable",
      "Spec 6": "Low maintenance"
    },
    "capacity": "2000 LPD output",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "commercial-filters",
      "kent-elite-plus-commercial-purifier",
      "kent-galaxy-commercial-purifier"
    ]
  },
  {
    "slug": "kent-elite-plus-commercial-purifier",
    "name": "Kent Elite Plus Commercial Purifier",
    "category": "Commercial Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Premium commercial RO system with enhanced output for corporate cafeterias and institutional kitchens requiring continuous high-volume water supply.",
    "description": "Premium commercial RO system with enhanced output for corporate cafeterias and institutional kitchens requiring continuous high-volume water supply.",
    "image": "/images/products/commercial-purifiers-kent-elite-plus-commercial-purifier.jpg",
    "gallery": [
      "/images/products/commercial-purifiers-kent-elite-plus-commercial-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "Enhanced LPD output",
      "Spec 2": "SS304 tank",
      "Multi": "stage RO + UV",
      "Spec 4": "TDS controller",
      "Spec 5": "Auto purification",
      "Spec 6": "Service indicator"
    },
    "capacity": "Enhanced LPD output",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "commercial-filters",
      "kent-elite-2-plus-commercial-purifier",
      "kent-galaxy-commercial-purifier"
    ]
  },
  {
    "slug": "kent-galaxy-commercial-purifier",
    "name": "Kent Galaxy Commercial Purifier",
    "category": "Commercial Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Wall-mounted commercial RO system for offices and small businesses.",
    "description": "Wall-mounted commercial RO system for offices and small businesses. Compact footprint with high daily output and easy dispensing.",
    "image": "/images/products/commercial-purifiers-kent-galaxy-commercial-purifier.jpg",
    "gallery": [
      "/images/products/commercial-purifiers-kent-galaxy-commercial-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "Wall mounted",
      "Spec 2": "High daily output",
      "Spec 3": "Hot & cold options",
      "Spec 4": "RO + UV",
      "Spec 5": "Touchless dispensing",
      "Spec 6": "Capacity indicator"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "commercial-filters",
      "kent-elite-2-plus-commercial-purifier",
      "kent-elite-plus-commercial-purifier"
    ]
  },
  {
    "slug": "kent-perk-countertop-purifier",
    "name": "Kent Perk Countertop Purifier",
    "category": "Commercial Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Countertop commercial water purifier with inline direct supply.",
    "description": "Countertop commercial water purifier with inline direct supply. No tank needed — continuous pure water flow for small offices and reception areas.",
    "image": "/images/products/commercial-purifiers-kent-perk-countertop-purifier.jpg",
    "gallery": [
      "/images/products/commercial-purifiers-kent-perk-countertop-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "No tank design",
      "Spec 2": "Direct line connection",
      "Spec 3": "RO + UV inline",
      "Space": "saving countertop",
      "Spec 5": "Chrome dispensing tap",
      "Spec 6": "Easy filter change"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "commercial-filters",
      "kent-elite-2-plus-commercial-purifier",
      "kent-elite-plus-commercial-purifier"
    ]
  },
  {
    "slug": "kent-perk-star-commercial-purifier",
    "name": "Kent Perk Star Commercial Purifier",
    "category": "Commercial Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Premium Perk Star with stainless steel body and enhanced UV sterilization.",
    "description": "Premium Perk Star with stainless steel body and enhanced UV sterilization. Delivers consistently safe pure water for busy commercial environments.",
    "image": "/images/products/commercial-purifiers-kent-perk-star-commercial-purifier.jpg",
    "gallery": [
      "/images/products/commercial-purifiers-kent-perk-star-commercial-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "SS body construction",
      "Spec 2": "Enhanced UV stage",
      "Spec 3": "No storage tank",
      "Spec 4": "Direct flow design",
      "Spec 5": "BIS certified",
      "Spec 6": "Commercial grade"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "commercial-filters",
      "kent-elite-2-plus-commercial-purifier",
      "kent-elite-plus-commercial-purifier"
    ]
  },
  {
    "slug": "org-water-softener-bft",
    "name": "ORG Water Softener BFT",
    "category": "Water Softeners",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Water Softener BFT\n100R BFT\n100E BFT\n150R BFT\n150E BFT\n200R BFT\n200E BFT...",
    "description": "Water Softener BFT\n100R BFT\n100E BFT\n150R BFT\n150E BFT\n200R BFT\n200E BFT",
    "image": "/images/products/autosoft-org-water-softener-bft.jpg",
    "gallery": [
      "/images/products/autosoft-org-water-softener-bft.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "Model\t 100R BFT\t 100E BFT\t150R BFT*\t150E BFT\t200R BFT*\t200E BFT",
      "Spec 2": "Max. Flow Rate\t3000 LPH\t3500 LPH\t3000 LPH\t3500 LPH\t3000 LPH\t3500 LPH",
      "Spec 3": "OBSA (Basis on 200 ppm)\t75000 Ltr\t75000 Ltr\t156250 Ltr\t156250 Ltr\t131250 Ltr\t131250 Ltr",
      "Spec 4": "OBR (Basis on 200 ppm)\t18750 Ltr\t18750 Ltr\t31250 Ltr\t31250 Ltr\t43750 Ltr\t43750 Ltr",
      "Spec 5": "Resin Tank Volume\t103 Ltr\t103 Ltr\t145 Ltr\t145 Ltr\t185 Ltr\t185 Ltr",
      "Spec 6": "Resin Quantity\t75 Ltr\t75 Ltr\t125 Ltr\t125 Ltr\t175 Ltr\t175 Ltr",
      "Spec 7": "Salt Tank Volume \t100 Ltr\t100 Ltr\t200 Ltr\t200 Ltr\t200 Ltr\t200 Ltr",
      "Spec 8": "Salt Required / Regeneration\t12 kg\t12 kg\t19 kg\t19 kg\t27 kg\t27 kg",
      "Spec 9": "Salt Qty.(OBSA) / No's of Regeneration\t45 kg / 4\t45 kg / 4\t94 kg / 5\t94 kg / 5\t79 kg / 3\t79 kg / 3",
      "Working Pressure\t0.15": "0.6 MPA\t0.15 - 0.6 MPA\t0.15 - 0.6 MPA\t0.15 - 0.6 MPA\t0.15 - 0.6 MPA\t0.15 - 0.6 MPA",
      "Inlet": "Outlet Size\t1\"\t1\"\t1\"\t1\"\t1\"\t1\"",
      "Spec 12": "Dimensions in mm\tL830 X W480 X H1760\tL830 X W480 X H1760\tL940 X W580 X H2030\tL940 X W580 X H2030\tL1040 X W580 X H2030\tL1040 X W580 X H2030"
    },
    "capacity": "Max. Flow Rate\t3000 LPH\t3500 LPH\t3000 LPH\t3500 LPH\t3000 LPH\t3500 LPH",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "water-softeners",
      "org-bathroom-softener",
      "org-water-softener-10a"
    ]
  },
  {
    "slug": "org-ro-plant-e-25-25-lph",
    "name": "ORG RO Plant E-25 (25 LPH)",
    "category": "Commercial Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Institutional RO plant delivering 25 litres per hour of safe drinking water.",
    "description": "Institutional RO plant delivering 25 litres per hour of safe drinking water. Designed for small schools, clinics, and community water points.",
    "image": "/images/products/institutional-ro-org-ro-plant-e-25-25-lph.jpg",
    "gallery": [
      "/images/products/institutional-ro-org-ro-plant-e-25-25-lph.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "25 LPH output",
      "Spec 2": "SS304 storage tank",
      "Spec 3": "RO + UV combo",
      "Spec 4": "Wall/floor mount",
      "Spec 5": "TDS monitoring",
      "Spec 6": "Low power draw"
    },
    "capacity": "25 LPH output",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "commercial-filters",
      "kent-elite-2-plus-commercial-purifier",
      "kent-elite-plus-commercial-purifier"
    ]
  },
  {
    "slug": "org-ro-plant-e-50-50-lph",
    "name": "ORG RO Plant E-50 (50 LPH)",
    "category": "Commercial Water Filters",
    "price": "On Request",
    "tag": "Institutional",
    "tagline": "Mid-capacity institutional RO for schools, offices, and community halls.",
    "description": "Mid-capacity institutional RO for schools, offices, and community halls. Delivers 50 litres per hour with automatic operation and minimal maintenance.",
    "image": "/images/products/institutional-ro-org-ro-plant-e-50-50-lph.jpg",
    "gallery": [
      "/images/products/institutional-ro-org-ro-plant-e-50-50-lph.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "50 LPH capacity",
      "Spec 2": "Auto purification",
      "Spec 3": "SS tank",
      "Spec 4": "UV sterilization",
      "Spec 5": "TDS controller",
      "Multi": "stage pre-filter"
    },
    "capacity": "50 LPH capacity",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "commercial-filters",
      "kent-elite-2-plus-commercial-purifier",
      "kent-elite-plus-commercial-purifier"
    ]
  },
  {
    "slug": "org-100-lph-ro-plant-pro",
    "name": "ORG 100 LPH RO Plant Pro",
    "category": "Commercial Water Filters",
    "price": "On Request",
    "tag": "High Capacity",
    "tagline": "High-output 100 LPH institutional RO plant for college campuses, hospitals, and corporate canteens.",
    "description": "High-output 100 LPH institutional RO plant for college campuses, hospitals, and corporate canteens. Includes Pro-grade 4021 membrane assembly.",
    "image": "/images/products/institutional-ro-org-100-lph-ro-plant-pro.jpg",
    "gallery": [
      "/images/products/institutional-ro-org-100-lph-ro-plant-pro.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "4021": "Pro membrane",
      "Spec 1": "100 LPH output",
      "Spec 3": "Dual pump system",
      "Auto shut": "off",
      "FRP pre": "filter",
      "Spec 6": "Remote monitoring ready"
    },
    "capacity": "100 LPH output",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "commercial-filters",
      "kent-elite-2-plus-commercial-purifier",
      "kent-elite-plus-commercial-purifier"
    ]
  },
  {
    "slug": "industrial-ro-standard-plant",
    "name": "Industrial RO Standard Plant",
    "category": "Industrial Water Filters",
    "price": "On Request",
    "tag": "Industrial",
    "tagline": "Industrial-grade reverse osmosis system for manufacturing, food processing, and pharmaceutical water treatment requirements.",
    "description": "Industrial-grade reverse osmosis system for manufacturing, food processing, and pharmaceutical water treatment requirements.",
    "image": "/images/products/industrial-water-treatment-industrial-ro-standard-plant.jpg",
    "gallery": [
      "/images/products/industrial-water-treatment-industrial-ro-standard-plant.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "Customizable LPH capacity",
      "SS316 high": "pressure pump",
      "Multi": "media pre-filter",
      "Spec 4": "Antiscalant dosing port",
      "Spec 5": "PLC control optional",
      "Skid": "mounted design"
    },
    "capacity": "Customizable LPH capacity",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "industrial-filters",
      "industrial-ro-pre-treatment-system",
      "org-automatic-dm-plant-10x54"
    ]
  },
  {
    "slug": "industrial-ro-pre-treatment-system",
    "name": "Industrial RO Pre-Treatment System",
    "category": "Industrial Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Complete pre-treatment assembly for industrial RO plants including sand filtration, carbon filtration, and antiscalant dosing to maximize membrane life.",
    "description": "Complete pre-treatment assembly for industrial RO plants including sand filtration, carbon filtration, and antiscalant dosing to maximize membrane life.",
    "image": "/images/products/industrial-water-treatment-industrial-ro-pre-treatment-system.jpg",
    "gallery": [
      "/images/products/industrial-water-treatment-industrial-ro-pre-treatment-system.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Multi": "media sand filter",
      "Spec 2": "Activated carbon filter",
      "Spec 3": "Antiscalant dosing",
      "Softener pre": "treatment",
      "Spec 5": "Auto backwash",
      "Spec 6": "Flow metering"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "industrial-filters",
      "industrial-ro-standard-plant",
      "org-automatic-dm-plant-10x54"
    ]
  },
  {
    "slug": "org-automatic-dm-plant-10x54",
    "name": "ORG Automatic DM Plant 10x54",
    "category": "Industrial Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Fully automatic demineralization plant producing ultra-pure water for laboratories, battery manufacturing, and boiler feed applications.",
    "description": "Fully automatic demineralization plant producing ultra-pure water for laboratories, battery manufacturing, and boiler feed applications.",
    "image": "/images/products/industrial-water-treatment-org-automatic-dm-plant-10x54.jpg",
    "gallery": [
      "/images/products/industrial-water-treatment-org-automatic-dm-plant-10x54.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "10x54 vessel size",
      "Spec 2": "Mixed bed resin",
      "Spec 3": "Conductivity monitoring",
      "Spec 4": "Auto regeneration cycle",
      "Spec 5": "FRP/MSRL vessels",
      "Ultra": "pure output"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "industrial-filters",
      "industrial-ro-standard-plant",
      "industrial-ro-pre-treatment-system"
    ]
  },
  {
    "slug": "org-automatic-uf-system",
    "name": "ORG Automatic UF System",
    "category": "Industrial Water Filters",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Automatic ultrafiltration system for industrial and institutional water treatment.",
    "description": "Automatic ultrafiltration system for industrial and institutional water treatment. Removes suspended solids, bacteria, and colloids without chemicals.",
    "image": "/images/products/industrial-water-treatment-org-automatic-uf-system.jpg",
    "gallery": [
      "/images/products/industrial-water-treatment-org-automatic-uf-system.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "Hollow fibre UF membrane",
      "Spec 2": "Auto backwash",
      "Chemical": "free operation",
      "Spec 4": "High flux design",
      "Spec 5": "SS frame skid",
      "Spec 6": "Low energy consumption"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "industrial-filters",
      "industrial-ro-standard-plant",
      "industrial-ro-pre-treatment-system"
    ]
  },
  {
    "slug": "org-bathroom-softener",
    "name": "ORG Bathroom Softener",
    "category": "Water Softeners",
    "price": "₹41,499",
    "tag": "Premium",
    "tagline": "Elegant designed, cabinet type water softener.",
    "description": "Elegant designed, cabinet type water softener. Fully automatic microprocessor-controlling operation. Can be easily install on wall and ready to use. Automatic OBR calculation & settings. Alarm - time to add salt. Leakage protection indicator. Display - current time, remaining soft water & current flow. Inbuilt brine tank, brine valve and float assembly. Can be use for bathroom, washing machine and dish washer.",
    "image": "/images/products/autosoft-org-bathroom-softener.jpg",
    "gallery": [
      "/images/products/autosoft-org-bathroom-softener.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {},
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "water-softeners",
      "org-water-softener-bft",
      "org-water-softener-10a"
    ]
  },
  {
    "slug": "org-water-softener-10a",
    "name": "ORG Water Softener 10A",
    "category": "Water Softeners",
    "price": "₹35,000",
    "tag": "Premium",
    "tagline": "Easy to install and ready to use.",
    "description": "Easy to install and ready to use. Elegant designed, cabinet type water softener. Fully automatic microprocessor-controlling operation. Display - current time, remaining soft water & current flow. Inbuilt brine tank, brine valve and float assembly. Can be use for bathroom, washing machine and dish washer.",
    "image": "/images/products/autosoft-org-water-softener-10a.jpg",
    "gallery": [
      "/images/products/autosoft-org-water-softener-10a.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {},
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "water-softeners",
      "org-water-softener-bft",
      "org-bathroom-softener"
    ]
  },
  {
    "slug": "org-water-softener-mini-pro-nano-pro",
    "name": "ORG Water Softener Mini Pro / Nano Pro",
    "category": "Water Softeners",
    "price": "₹10,299",
    "tag": "Premium",
    "tagline": "Can be easily Install on wall and ready to use.",
    "description": "Can be easily Install on wall and ready to use. Inbuilt brine tank with salt perforated bottom plate. No need to fill water manually in salt tank. Electricity not required. Incorporated multiport valve make easy backwash and regeneration. Can be use for bathroom, washing machine and dish washer. Upgraded Design: The new model features a sleek, modern design for enhanced aesthetics.",
    "image": "/images/products/autosoft-org-water-softener-mini-pro-nano-pro.jpg",
    "gallery": [
      "/images/products/autosoft-org-water-softener-mini-pro-nano-pro.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {},
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "water-softeners",
      "org-water-softener-bft",
      "org-bathroom-softener"
    ]
  },
  {
    "slug": "kent-grand-plus-ro-water-purifier",
    "name": "Kent Grand Plus RO Water Purifier",
    "category": "RO Water Purifiers",
    "price": "On Request",
    "tag": "Best Seller",
    "tagline": "India's No.",
    "description": "India's No.1 Water Purifier. Multi-stage RO + UV + UF + TDS Control purification for 100% safe drinking water. 9L storage, wall-mountable design.",
    "image": "/images/products/ro-purifiers-kent-grand-plus-ro-water-purifier.jpg",
    "gallery": [
      "/images/products/ro-purifiers-kent-grand-plus-ro-water-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "4": "stage purification",
      "Spec 1": "9L storage tank",
      "Spec 2": "RO + UV + UF purification",
      "TDS controller built": "in",
      "Spec 4": "UV LED indicator",
      "Spec 6": "Wall mountable"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine Adsorption)",
      "Reverse Osmosis Membrane (Dissolved Solids removal)",
      "Post-Carbon Taste Enhancer"
    ],
    "benefits": [
      "Strips out dissolved salts, heavy metals, and arsenic",
      "Provides sweet, clean tasting water",
      "Protects household health from chemical contaminants"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-ace-iot-ro-purifier",
      "kent-pearl-iot-water-purifier",
      "kent-sapphire-iot-purifier"
    ]
  },
  {
    "slug": "kent-ace-iot-ro-purifier",
    "name": "Kent Ace IoT RO Purifier",
    "category": "RO Water Purifiers",
    "price": "On Request",
    "tag": "Smart IoT",
    "tagline": "Smart IoT-enabled RO purifier with real-time water quality monitoring via mobile app.",
    "description": "Smart IoT-enabled RO purifier with real-time water quality monitoring via mobile app. 8L storage with RO + UV + UF multi-stage purification.",
    "image": "/images/products/ro-purifiers-kent-ace-iot-ro-purifier.jpg",
    "gallery": [
      "/images/products/ro-purifiers-kent-ace-iot-ro-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "8L storage capacity",
      "Spec 2": "IoT app monitoring",
      "Spec 3": "RO + UV + UF",
      "Spec 4": "Filter change alert",
      "In": "tank UV sterilization",
      "Auto": "flush tech"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine Adsorption)",
      "Reverse Osmosis Membrane (Dissolved Solids removal)",
      "Post-Carbon Taste Enhancer"
    ],
    "benefits": [
      "Strips out dissolved salts, heavy metals, and arsenic",
      "Provides sweet, clean tasting water",
      "Protects household health from chemical contaminants"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-grand-plus-ro-water-purifier",
      "kent-pearl-iot-water-purifier",
      "kent-sapphire-iot-purifier"
    ]
  },
  {
    "slug": "kent-pearl-iot-water-purifier",
    "name": "Kent Pearl IoT Water Purifier",
    "category": "RO Water Purifiers",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Premium IoT-enabled purifier with 8L tank and advanced multi-stage filtration.",
    "description": "Premium IoT-enabled purifier with 8L tank and advanced multi-stage filtration. Get live water quality data on your smartphone.",
    "image": "/images/products/ro-purifiers-kent-pearl-iot-water-purifier.jpg",
    "gallery": [
      "/images/products/ro-purifiers-kent-pearl-iot-water-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "8L storage",
      "Spec 2": "IoT connectivity",
      "Spec 3": "RO + UV + UF",
      "Spec 4": "TDS indicator",
      "Spec 5": "Smart alerts",
      "Spec 6": "Compact design"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine Adsorption)",
      "Reverse Osmosis Membrane (Dissolved Solids removal)",
      "Post-Carbon Taste Enhancer"
    ],
    "benefits": [
      "Strips out dissolved salts, heavy metals, and arsenic",
      "Provides sweet, clean tasting water",
      "Protects household health from chemical contaminants"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-grand-plus-ro-water-purifier",
      "kent-ace-iot-ro-purifier",
      "kent-sapphire-iot-purifier"
    ]
  },
  {
    "slug": "kent-sapphire-iot-purifier",
    "name": "Kent Sapphire IoT Purifier",
    "category": "RO Water Purifiers",
    "price": "On Request",
    "tag": "IoT Design",
    "tagline": "Sleek IoT-enabled purifier with stainless steel storage tank and multi-stage RO + UV + UF purification.",
    "description": "Sleek IoT-enabled purifier with stainless steel storage tank and multi-stage RO + UV + UF purification. Ideal for modern urban homes.",
    "image": "/images/products/ro-purifiers-kent-sapphire-iot-purifier.jpg",
    "gallery": [
      "/images/products/ro-purifiers-kent-sapphire-iot-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "8L SS tank",
      "Spec 2": "Touchless IoT control",
      "Spec 3": "RO + UV + UF + TDS",
      "Spec 4": "Zero water wastage tech",
      "Spec 5": "LED filter indicator",
      "Spec 6": "Wall mountable"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine Adsorption)",
      "Reverse Osmosis Membrane (Dissolved Solids removal)",
      "Post-Carbon Taste Enhancer"
    ],
    "benefits": [
      "Strips out dissolved salts, heavy metals, and arsenic",
      "Provides sweet, clean tasting water",
      "Protects household health from chemical contaminants"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-grand-plus-ro-water-purifier",
      "kent-ace-iot-ro-purifier",
      "kent-pearl-iot-water-purifier"
    ]
  },
  {
    "slug": "kent-sterling-iot-purifier",
    "name": "Kent Sterling IoT Purifier",
    "category": "RO Water Purifiers",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Feature-rich IoT RO purifier with mineral RO technology retaining essential minerals.",
    "description": "Feature-rich IoT RO purifier with mineral RO technology retaining essential minerals. Built for large families needing consistent pure water.",
    "image": "/images/products/ro-purifiers-kent-sterling-iot-purifier.jpg",
    "gallery": [
      "/images/products/ro-purifiers-kent-sterling-iot-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "8L storage",
      "Spec 2": "Mineral RO technology",
      "Spec 3": "IoT app enabled",
      "Spec 4": "UV + UF combo",
      "Auto": "shutoff",
      "Spec 6": "High recovery rate"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine Adsorption)",
      "Reverse Osmosis Membrane (Dissolved Solids removal)",
      "Post-Carbon Taste Enhancer"
    ],
    "benefits": [
      "Strips out dissolved salts, heavy metals, and arsenic",
      "Provides sweet, clean tasting water",
      "Protects household health from chemical contaminants"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-grand-plus-ro-water-purifier",
      "kent-ace-iot-ro-purifier",
      "kent-pearl-iot-water-purifier"
    ]
  },
  {
    "slug": "kent-supreme-iot-purifier",
    "name": "Kent Supreme IoT Purifier",
    "category": "RO Water Purifiers",
    "price": "On Request",
    "tag": "Flagship",
    "tagline": "Supreme tier RO purifier with zero water wastage technology and IoT monitoring.",
    "description": "Supreme tier RO purifier with zero water wastage technology and IoT monitoring. Delivers the highest purity for Indian water conditions.",
    "image": "/images/products/ro-purifiers-kent-supreme-iot-purifier.jpg",
    "gallery": [
      "/images/products/ro-purifiers-kent-supreme-iot-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "9L storage",
      "Spec 2": "Zero wastage RO",
      "Spec 3": "IoT monitoring",
      "Spec 4": "Copper + Alkaline option",
      "In": "tank UV sterilization",
      "Spec 6": "NSF certified membrane"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine Adsorption)",
      "Reverse Osmosis Membrane (Dissolved Solids removal)",
      "Post-Carbon Taste Enhancer"
    ],
    "benefits": [
      "Strips out dissolved salts, heavy metals, and arsenic",
      "Provides sweet, clean tasting water",
      "Protects household health from chemical contaminants"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-grand-plus-ro-water-purifier",
      "kent-ace-iot-ro-purifier",
      "kent-pearl-iot-water-purifier"
    ]
  },
  {
    "slug": "kent-crystal-plus-ro-purifier",
    "name": "Kent Crystal Plus RO Purifier",
    "category": "RO Water Purifiers",
    "price": "On Request",
    "tag": "Essential Home",
    "tagline": "Compact countertop RO purifier with UV sterilization.",
    "description": "Compact countertop RO purifier with UV sterilization. Space-efficient design perfect for kitchens where wall-mounting isn't feasible.",
    "image": "/images/products/ro-purifiers-kent-crystal-plus-ro-purifier.jpg",
    "gallery": [
      "/images/products/ro-purifiers-kent-crystal-plus-ro-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "7L storage",
      "Spec 2": "Countertop design",
      "Spec 3": "RO + UV",
      "Spec 4": "TDS controller",
      "Sediment pre": "filter",
      "Spec 6": "Low power consumption"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine Adsorption)",
      "Reverse Osmosis Membrane (Dissolved Solids removal)",
      "Post-Carbon Taste Enhancer"
    ],
    "benefits": [
      "Strips out dissolved salts, heavy metals, and arsenic",
      "Provides sweet, clean tasting water",
      "Protects household health from chemical contaminants"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-grand-plus-ro-water-purifier",
      "kent-ace-iot-ro-purifier",
      "kent-pearl-iot-water-purifier"
    ]
  },
  {
    "slug": "kent-grand-iot-water-purifier",
    "name": "Kent Grand+ IoT Water Purifier",
    "category": "RO Water Purifiers",
    "price": "On Request",
    "tag": "Top Rated",
    "tagline": "Top-of-the-line Grand+ IoT purifier with the highest storage capacity and premium 5-stage multi-technology purification system.",
    "description": "Top-of-the-line Grand+ IoT purifier with the highest storage capacity and premium 5-stage multi-technology purification system.",
    "image": "/images/products/ro-purifiers-kent-grand-iot-water-purifier.jpg",
    "gallery": [
      "/images/products/ro-purifiers-kent-grand-iot-water-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "5": "stage purification",
      "Spec 1": "11L storage tank",
      "Spec 3": "IoT + app control",
      "Spec 4": "Smart UV indicator",
      "Auto": "flush system",
      "Spec 6": "Large family capacity"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter (Rust & Silt Removal)",
      "Activated Carbon Block (Chlorine Adsorption)",
      "Reverse Osmosis Membrane (Dissolved Solids removal)",
      "Post-Carbon Taste Enhancer"
    ],
    "benefits": [
      "Strips out dissolved salts, heavy metals, and arsenic",
      "Provides sweet, clean tasting water",
      "Protects household health from chemical contaminants"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-grand-plus-ro-water-purifier",
      "kent-ace-iot-ro-purifier",
      "kent-pearl-iot-water-purifier"
    ]
  },
  {
    "slug": "org-scalefree-antiscalant-bag",
    "name": "ORG ScaleFree Antiscalant Bag",
    "category": "Whole House Filters",
    "price": "₹25",
    "tag": "Premium",
    "tagline": "High-grade slow-dissolving polyphosphate anti-scaling media bags.",
    "description": "High-grade slow-dissolving polyphosphate anti-scaling media bags. Available in modular incremental industrial dosing profiles.",
    "image": "/images/products/scalefree-range-org-scalefree-antiscalant-bag.jpg",
    "gallery": [
      "/images/products/scalefree-range-org-scalefree-antiscalant-bag.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Premium Polyphosphate Material",
      "Media Bag Packaging Configurations",
      "Available sizes: 10g, 100g, 200g, 500g, 1000g"
    ],
    "specifications": {
      "Origin": "Genuine OEM"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "whole-home",
      "org-ro-scalefree",
      "org-com-ro-scalefree"
    ]
  },
  {
    "slug": "org-ro-scalefree",
    "name": "ORG RO ScaleFree",
    "category": "Whole House Filters",
    "price": "₹299",
    "tag": "Premium",
    "tagline": "Specially designed transparent ABS antiscalant housing to defend residential RO booster pumps, membranes, and flow restrictors against harsh water scaling.",
    "description": "Specially designed transparent ABS antiscalant housing to defend residential RO booster pumps, membranes, and flow restrictors against harsh water scaling. Refillable and clear for rapid capacity checks.",
    "image": "/images/products/scalefree-range-org-ro-scalefree.jpg",
    "gallery": [
      "/images/products/scalefree-range-org-ro-scalefree.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Max. Flow: 60 LPH | Max. Pressure: 4 kg/cm2",
      "Polyphosphate Media: 21 grams",
      "Openable, Refillable & Reusable Transparent ABS Housing",
      "Inlet Size: 1/4\" Quick Fit"
    ],
    "specifications": {
      "Origin": "Genuine OEM"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "whole-home",
      "org-scalefree-antiscalant-bag",
      "org-com-ro-scalefree"
    ]
  },
  {
    "slug": "org-com-ro-scalefree",
    "name": "ORG COM-RO ScaleFree",
    "category": "Whole House Filters",
    "price": "₹1,299",
    "tag": "Premium",
    "tagline": "Heavy-duty polyphosphate scale prevention unit explicitly optimized for commercial-scale reverse osmosis pre-filtration processing pipelines.",
    "description": "Heavy-duty polyphosphate scale prevention unit explicitly optimized for commercial-scale reverse osmosis pre-filtration processing pipelines.",
    "image": "/images/products/scalefree-range-org-com-ro-scalefree.jpg",
    "gallery": [
      "/images/products/scalefree-range-org-com-ro-scalefree.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Max. Flow: 200 LPH | Max. Pressure: 3 kg/cm2",
      "Polyphosphate Volume: 130 grams",
      "Sturdy 3/8\" Direct Fluid Connection Terminals",
      "Transparent MOC ABS Structure"
    ],
    "specifications": {
      "Origin": "Genuine OEM"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "whole-home",
      "org-scalefree-antiscalant-bag",
      "org-ro-scalefree"
    ]
  },
  {
    "slug": "org-scalefree-appliances",
    "name": "ORG ScaleFree Appliances",
    "category": "Whole House Filters",
    "price": "₹2,499",
    "tag": "Premium",
    "tagline": "Targeted anti-scale appliance adapter system.",
    "description": "Targeted anti-scale appliance adapter system. Perfect for extending the lifespan of domestic washing machines, automatic dishwashers, and toilet flush systems.",
    "image": "/images/products/scalefree-range-org-scalefree-appliances.jpg",
    "gallery": [
      "/images/products/scalefree-range-org-scalefree-appliances.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Max. Flow: 500 LPH | Max. Pressure: 4 kg/cm2",
      "Polyphosphate Load: 175 grams",
      "1/2\" & 3/4\" Universal Union Connector Adapters",
      "Visible Transparent Level Design"
    ],
    "specifications": {
      "Origin": "Genuine OEM"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "whole-home",
      "org-scalefree-antiscalant-bag",
      "org-ro-scalefree"
    ]
  },
  {
    "slug": "shower-scalefree",
    "name": "Shower Scalefree",
    "category": "Whole House Filters",
    "price": "₹2,499",
    "tag": "Premium",
    "tagline": "Compact high-flow showerhead adapter module designed to inhibit scaling deposition and maintain dynamic spray pressure properties.",
    "description": "Compact high-flow showerhead adapter module designed to inhibit scaling deposition and maintain dynamic spray pressure properties.",
    "image": "/images/products/scalefree-range-shower-scalefree.jpg",
    "gallery": [
      "/images/products/scalefree-range-shower-scalefree.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Direct Inline Shower Mount Threads",
      "Maintains Optimal Fluid Dispensing Holes",
      "Protects Skin and Hair from Scale Stains"
    ],
    "specifications": {
      "Origin": "Genuine OEM"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "whole-home",
      "org-scalefree-antiscalant-bag",
      "org-ro-scalefree"
    ]
  },
  {
    "slug": "org-scalefree-tank",
    "name": "ORG ScaleFree Tank",
    "category": "Whole House Filters",
    "price": "₹3,499",
    "tag": "Premium",
    "tagline": "Innovative floating antiscalant device relying on stable Archimedes buoyancy principles.",
    "description": "Innovative floating antiscalant device relying on stable Archimedes buoyancy principles. The upper air chamber keeps it floating while the base slowly disperses polyphosphate media across your primary storage reservoir.",
    "image": "/images/products/scalefree-range-org-scalefree-tank.jpg",
    "gallery": [
      "/images/products/scalefree-range-org-scalefree-tank.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Buoyancy Floating Design (Air/Media Split Matrix)",
      "Polyphosphate Capacity: 310 grams",
      "Top-up Cycle Duration: ~6 Months",
      "Constantly moves with water turbulence for distribution"
    ],
    "specifications": {
      "Origin": "Genuine OEM"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "whole-home",
      "org-scalefree-antiscalant-bag",
      "org-ro-scalefree"
    ]
  },
  {
    "slug": "kent-maxx-uv-water-purifier",
    "name": "Kent Maxx UV Water Purifier",
    "category": "UV Water Purifiers",
    "price": "On Request",
    "tag": "Best Value",
    "tagline": "Trusted UV + UF purifier for areas with low TDS municipal water.",
    "description": "Trusted UV + UF purifier for areas with low TDS municipal water. Eliminates bacteria and viruses without chemicals. 7L storage capacity.",
    "image": "/images/products/uv-purifiers-kent-maxx-uv-water-purifier.jpg",
    "gallery": [
      "/images/products/uv-purifiers-kent-maxx-uv-water-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "7L storage",
      "Spec 2": "UV + UF dual purification",
      "Spec 3": "TDS up to 500 ppm",
      "Spec 4": "No electricity for UF",
      "Spec 5": "Compact wall mount",
      "Spec 6": "German technology"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Cartridge Filter",
      "Activated Carbon Block Filter",
      "Active UV Sterilization Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-smart-uv-water-purifier",
      "kent-ultra-plus-uv-purifier",
      "kent-ultra-storage-uv-purifier"
    ]
  },
  {
    "slug": "kent-smart-uv-water-purifier",
    "name": "Kent Smart UV Water Purifier",
    "category": "UV Water Purifiers",
    "price": "On Request",
    "tag": "Smart",
    "tagline": "Smart UV purifier with IoT monitoring and real-time lamp status alerts.",
    "description": "Smart UV purifier with IoT monitoring and real-time lamp status alerts. Ideal for municipal water sources with TDS below 500.",
    "image": "/images/products/uv-purifiers-kent-smart-uv-water-purifier.jpg",
    "gallery": [
      "/images/products/uv-purifiers-kent-smart-uv-water-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "8L storage",
      "Spec 2": "IoT UV monitoring",
      "Spec 3": "UF membrane",
      "Spec 4": "Filter change alert",
      "Spec 5": "Compact design",
      "Spec 6": "Low operating cost"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Cartridge Filter",
      "Activated Carbon Block Filter",
      "Active UV Sterilization Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-maxx-uv-water-purifier",
      "kent-ultra-plus-uv-purifier",
      "kent-ultra-storage-uv-purifier"
    ]
  },
  {
    "slug": "kent-ultra-plus-uv-purifier",
    "name": "Kent Ultra Plus UV Purifier",
    "category": "UV Water Purifiers",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "High-performance UV purifier with 11W UV lamp and UF membrane for superior bacteria elimination.",
    "description": "High-performance UV purifier with 11W UV lamp and UF membrane for superior bacteria elimination. Suitable for overhead tank water sources.",
    "image": "/images/products/uv-purifiers-kent-ultra-plus-uv-purifier.jpg",
    "gallery": [
      "/images/products/uv-purifiers-kent-ultra-plus-uv-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "11W UV lamp",
      "Spec 2": "UF + UV dual stage",
      "Spec 3": "8L capacity",
      "Spec 4": "Detachable tank",
      "Spec 5": "Auto UV lamp shutoff",
      "Spec 6": "Easy maintenance"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Cartridge Filter",
      "Activated Carbon Block Filter",
      "Active UV Sterilization Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-maxx-uv-water-purifier",
      "kent-smart-uv-water-purifier",
      "kent-ultra-storage-uv-purifier"
    ]
  },
  {
    "slug": "kent-ultra-storage-uv-purifier",
    "name": "Kent Ultra Storage UV Purifier",
    "category": "UV Water Purifiers",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Large-capacity UV storage purifier ideal for homes with intermittent water supply.",
    "description": "Large-capacity UV storage purifier ideal for homes with intermittent water supply. Built-in UV ensures stored water stays bacteria-free.",
    "image": "/images/products/uv-purifiers-kent-ultra-storage-uv-purifier.jpg",
    "gallery": [
      "/images/products/uv-purifiers-kent-ultra-storage-uv-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "15L storage tank",
      "Spec 2": "UV + UF + MF stages",
      "Spec 3": "Gravity + electric mode",
      "Spec 4": "Overflow protection",
      "BPA": "free tank",
      "Spec 6": "Long UV lamp life"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Cartridge Filter",
      "Activated Carbon Block Filter",
      "Active UV Sterilization Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-maxx-uv-water-purifier",
      "kent-smart-uv-water-purifier",
      "kent-ultra-plus-uv-purifier"
    ]
  },
  {
    "slug": "kent-ultra-storage-copper-edition",
    "name": "Kent Ultra Storage Copper Edition",
    "category": "UV Water Purifiers",
    "price": "On Request",
    "tag": "Copper+",
    "tagline": "Premium UV purifier with copper-charged tank for added antimicrobial benefits.",
    "description": "Premium UV purifier with copper-charged tank for added antimicrobial benefits. Combines modern UV technology with ancient copper wellness science.",
    "image": "/images/products/uv-purifiers-kent-ultra-storage-copper-edition.jpg",
    "gallery": [
      "/images/products/uv-purifiers-kent-ultra-storage-copper-edition.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "15L copper": "infused tank",
      "Spec 2": "UV + UF purification",
      "Spec 3": "Copper health benefits",
      "Spec 4": "Auto shutoff",
      "Spec 5": "Easy clean tank",
      "Spec 6": "Premium finish"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Cartridge Filter",
      "Activated Carbon Block Filter",
      "Active UV Sterilization Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-maxx-uv-water-purifier",
      "kent-smart-uv-water-purifier",
      "kent-ultra-plus-uv-purifier"
    ]
  },
  {
    "slug": "kent-maxx-alkaline-uv-purifier",
    "name": "Kent Maxx Alkaline UV Purifier",
    "category": "UV Water Purifiers",
    "price": "On Request",
    "tag": "Alkaline+",
    "tagline": "UV purifier with built-in alkaline filter adding essential minerals and raising pH for healthier, antioxidant-rich drinking water.",
    "description": "UV purifier with built-in alkaline filter adding essential minerals and raising pH for healthier, antioxidant-rich drinking water.",
    "image": "/images/products/uv-purifiers-kent-maxx-alkaline-uv-purifier.jpg",
    "gallery": [
      "/images/products/uv-purifiers-kent-maxx-alkaline-uv-purifier.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "UV + UF + Alkaline",
      "Spec 2": "pH enhancement",
      "Spec 3": "Mineral enrichment",
      "Spec 4": "7L storage",
      "Spec 5": "ORP improvement",
      "Spec 6": "BIS certified"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Cartridge Filter",
      "Activated Carbon Block Filter",
      "Active UV Sterilization Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "kent-maxx-uv-water-purifier",
      "kent-smart-uv-water-purifier",
      "kent-ultra-plus-uv-purifier"
    ]
  },
  {
    "slug": "kent-autosoft-100l-water-softener",
    "name": "Kent AutoSoft 100L Water Softener",
    "category": "Water Softeners",
    "price": "On Request",
    "tag": "Commercial",
    "tagline": "High-capacity fully automatic water softener for large homes and commercial premises.",
    "description": "High-capacity fully automatic water softener for large homes and commercial premises. Eliminates hard water scale to protect appliances, improve skin and hair health.",
    "image": "/images/products/autosoft-kent-autosoft-100l-water-softener.jpg",
    "gallery": [
      "/images/products/autosoft-kent-autosoft-100l-water-softener.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "100L resin capacity",
      "Spec 2": "Fully automatic regeneration",
      "Spec 3": "Digital control valve",
      "Spec 4": "Metered regeneration",
      "Spec 5": "Bypass valve included",
      "Spec 6": "High flow rate"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "water-softeners",
      "org-water-softener-bft",
      "org-bathroom-softener"
    ]
  },
  {
    "slug": "kent-autosoft-40l-water-softener",
    "name": "Kent AutoSoft 40L Water Softener",
    "category": "Water Softeners",
    "price": "On Request",
    "tag": "Popular",
    "tagline": "Mid-range automatic water softener ideal for medium-sized homes and small offices.",
    "description": "Mid-range automatic water softener ideal for medium-sized homes and small offices. Delivers consistently soft water with minimal salt consumption.",
    "image": "/images/products/autosoft-kent-autosoft-40l-water-softener.jpg",
    "gallery": [
      "/images/products/autosoft-kent-autosoft-40l-water-softener.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "5": "year resin life",
      "Spec 1": "40L resin bed",
      "Spec 2": "Auto regeneration",
      "Spec 3": "Timer + meter control",
      "Spec 4": "Compact design",
      "Spec 5": "Salt efficiency mode"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "water-softeners",
      "org-water-softener-bft",
      "org-bathroom-softener"
    ]
  },
  {
    "slug": "kent-autosoft-8l-water-softener",
    "name": "Kent AutoSoft 8L Water Softener",
    "category": "Water Softeners",
    "price": "On Request",
    "tag": "Premium",
    "tagline": "Compact automatic water softener for apartments and small households.",
    "description": "Compact automatic water softener for apartments and small households. Reduces scale buildup in pipes, geysers, and washing machines.",
    "image": "/images/products/autosoft-kent-autosoft-8l-water-softener.jpg",
    "gallery": [
      "/images/products/autosoft-kent-autosoft-8l-water-softener.jpg"
    ],
    "video": "videos/hero background.mp4",
    "features": [
      "Certified authentic components",
      "Engineered for maximum reliability",
      "Undergoes 21-point water safety checks"
    ],
    "specifications": {
      "Spec 1": "8L resin tank",
      "Auto": "regeneration",
      "Compact wall": "mount",
      "Spec 4": "Low salt usage",
      "Spec 5": "No electricity needed",
      "Spec 6": "Easy maintenance"
    },
    "capacity": "Standard Flow",
    "stages": [
      "Sediment Pre-Filter",
      "Primary Active Filtration Chamber"
    ],
    "benefits": [
      "Eliminates biological viruses and bacteria",
      "Provides instant flow rate output without storage waiting time",
      "Keeps all beneficial natural minerals intact"
    ],
    "warranty": "1 Year Comprehensive Warranty",
    "installation": [
      "Technician arrives within 24 hours of purchase approval.",
      "Inlet adapter valve secured directly to primary pipeline.",
      "Filter membranes flushed for 10 minutes.",
      "TDS tester validates final output level."
    ],
    "faq": [
      {
        "q": "How often does this system require filter changes?",
        "a": "Typically between 9 to 12 months depending on inlet water quality and daily usage volume."
      }
    ],
    "relatedSlugs": [
      "water-softeners",
      "org-water-softener-bft",
      "org-bathroom-softener"
    ]
  }
];

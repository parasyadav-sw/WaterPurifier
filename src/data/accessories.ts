export interface Accessory {
  slug: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  compatibility: string;
  lifespan: string;
  specifications: Record<string, string>;
  benefits: string[];
}

export const accessories: Accessory[] = [
  {
    slug: "ro-membrane",
    name: "TFC RO Membrane (80 GPD)",
    price: "₹2,499",
    tagline: "Thin-Film Composite membrane rejects 97% of heavy metals and dissolved solids.",
    description: "The primary reverse osmosis filter core. Utilizes hyper-filtration pores measuring 0.0001 microns to remove dissolved lead, fluoride, nitrates, and hard calcium/magnesium salts.",
    image: "/images/accessories/ro-membrane.jpg",
    features: [
      "80 Gallons Per Day throughput capacity",
      "Thin-Film Composite (TFC) spiral-wound layout",
      "Strains heavy metals, industrial chemicals, and bacteria",
      "Uniform pore sizing maintains high rejection efficiency"
    ],
    compatibility: "Compatible with standard 1812 size RO housings found in all domestic RO brands.",
    lifespan: "12 to 18 Months (approx. 6,000 to 8,000 Litres filtered)",
    specifications: {
      "Pore Rating": "0.0001 Microns",
      "Max Operating Temp": "45°C",
      "Max Operating Pressure": "125 psi",
      "Average Salt Rejection": "97%",
      "Flow Rate": "12 Litres/hr"
    },
    benefits: [
      "Stops plumbing scale, salty taste, and metallic odors",
      "Provides complete biological protection (blocks cysts, viruses)",
      "High-pressure resistance ensures stable performance"
    ]
  },
  {
    slug: "carbon-cartridge",
    name: "Activated Carbon Block Cartridge",
    price: "₹850",
    tagline: "High-grade compressed coconut carbon removes chlorine and organic smell.",
    description: "A secondary cartridge made of compressed activated carbon granules. Adsorbs volatile organic chemicals (VOCs), residual chlorine, and bad tastes/smells, shielding the RO membrane from oxidation.",
    image: "/images/accessories/carbon-cartridge.jpg",
    features: [
      "High adsorption capacity",
      "Blocks chlorine, chlorine compounds (THMs), and pesticides",
      "Coconut shell structure refines water sweetness",
      "Minimal carbon fines wash-out"
    ],
    compatibility: "Standard 10-inch pre-filter and inline housings.",
    lifespan: "6 to 9 Months (approx. 4,000 Litres)",
    specifications: {
      "Micron Rating": "5 Microns",
      "Length": "10 inches",
      "Chamber Material": "Activated Carbon Blocks",
      "Max Flow": "4 Litres/minute"
    },
    benefits: [
      "Eliminates bitter chlorine chemical taste",
      "Protects expensive RO membranes from chlorine degradation",
      "Eco-friendly organic coconut shell media"
    ]
  },
  {
    slug: "sediment-filter",
    name: "Spun Polypropylene Sediment Filter",
    price: "₹450",
    tagline: "Captures sand, clay, mud, and rust scales at the inlet mainline.",
    description: "Constructed of layered spun polypropylene fibers. Traps physical suspended matter like mud, clay, rust flakes, and sand, preventing blockages in subsequent carbon filters.",
    image: "/images/accessories/sediment-filter.jpg",
    features: [
      "Multi-layered density captures particles of varying sizes",
      "High dirt-holding capacity",
      "Zero chemical binders or additives",
      "Low pressure drop"
    ],
    compatibility: "Fits standard 10-inch pre-filter housings installed outside the water purifier.",
    lifespan: "3 to 6 Months (depending on input water mud content)",
    specifications: {
      "Filter Density": "5 Microns",
      "Outer Diameter": "60 mm",
      "Inner Diameter": "28 mm",
      "Material": "100% Polypropylene"
    },
    benefits: [
      "Saves internal inline filters from premature clogging",
      "Reduces water turbidity and cloudiness",
      "Easy visual check (replaces when color changes to dark brown)"
    ]
  },
  {
    slug: "uv-lamp",
    name: "Philips 11W UV Sterilizer Lamp",
    price: "₹1,200",
    tagline: "Philips double-ended germicidal ultraviolet lamp.",
    description: "Exposes passing water to 253.7nm UV light rays. Disrupts pathogen DNA to eliminate bacteria, viruses, and microbial cysts without adding chemical residues.",
    image: "/images/accessories/uv-lamp.jpg",
    features: [
      "Emits shortwave UV radiation with 253.7nm peak",
      "Quartz glass envelope resists high-temp wear",
      "Double-ended connection pins",
      "Eco-low mercury content"
    ],
    compatibility: "Compatible with standard domestic UV chambers and 4-pin electronic ballasts.",
    lifespan: "9,000 burning hours (approx. 12 months continuous usage)",
    specifications: {
      "Wattage": "11 Watts",
      "Lamp Current": "0.33 Amps",
      "Length": "212 mm",
      "UV-C Output": "2.4 Watts"
    },
    benefits: [
      "Neutralizes 99.99% of bacteria and viruses",
      "Chemical-free disinfection preserves taste and mineral profiles",
      "Instant purification action"
    ]
  },
  {
    slug: "booster-pump",
    name: "Heavy-Duty 75 GPD Booster Pump",
    price: "₹2,800",
    tagline: "Quiet, high-pressure pump drives reverse osmosis membrane filtration.",
    description: "A premium diaphragm pump that provides the 80 psi pressure needed to push water through the dense RO membrane pores. Delivers stable pressure with minimal noise and vibrations.",
    image: "/images/accessories/booster-pump.jpg",
    features: [
      "High performance diaphragm layout",
      "Whisper-quiet motor operation",
      "Self-priming suction head",
      "Low power consumption"
    ],
    compatibility: "Fits all domestic RO purifiers running on 24V DC converters.",
    lifespan: "3 to 5 Years",
    specifications: {
      "Voltage": "24 Volts DC",
      "Working Flow": "0.85 Litres/minute",
      "Working Pressure": "80 psi",
      "Max Outlet Pressure": "130 psi",
      "Current Rating": "1.2 Amps"
    },
    benefits: [
      "Ensures optimal salt rejection rates by maintaining steady pressure",
      "Maintains flow even in low pressure or gravity-feed water tanks",
      "Double sealing resists internal chemical corrosion"
    ]
  },
  {
    slug: "tds-controller",
    name: "Precision Needle TDS Controller Valve",
    price: "₹350",
    tagline: "Fine-tune output mineral balance using control valves.",
    description: "Allows manual adjustments to the mineral balance of output water by bypassing a controlled stream of clean carbon-filtered water, raising final mineral levels.",
    image: "/images/accessories/tds-controller.jpg",
    features: [
      "Fine needle valve adjustments",
      "Durable food-grade plastic block",
      "Secured push-fit ports",
      "Leak-free sealing rings"
    ],
    compatibility: "Fits standard 1/4 inch water tubing lines.",
    lifespan: "Indefinite (maintenance-free)",
    specifications: {
      "Fitting Size": "1/4 inch Push Fit",
      "Material": "Food-grade Acetal Copolymer",
      "Max Temp": "60°C",
      "Working Pressure Limit": "150 psi"
    },
    benefits: [
      "Allows taste customization to match mineral preferences",
      "Restores essential electrolytes (calcium/magnesium) bypassed by the RO membrane",
      "Maintains water pH in a neutral range"
    ]
  },
  {
    slug: "storage-tank",
    name: "8 Litre Pressurised Water Tank",
    price: "₹1,800",
    tagline: "Stores purified water under pressure for fast, gravity-independent dispensing.",
    description: "Under-sink storage tank made of food-grade ABS plastic shell with an internal rubber bladder. Stores purified water under pressure for fast, constant dispensing.",
    image: "/images/accessories/storage-tank.jpg",
    features: [
      "Double-walled food-grade plastic storage shell",
      "Premium stainless steel connection thread",
      "Pre-pressurized air chamber",
      "Bacteria-resistant lining"
    ],
    compatibility: "Fits all standard under-sink RO water purifiers.",
    lifespan: "3 to 5 Years",
    specifications: {
      "Storage Volume": "8 Litres (approx. 2.1 gallons)",
      "Connector Thread": "1/4 inch NPT Male",
      "Working Pressure": "7 to 10 psi (empty)",
      "Max Pressure Limit": "100 psi"
    },
    benefits: [
      "Maintains high dispense flow rates even as the tank empties",
      "Prevents dust, insects, and airborne bacteria from entering the clean water",
      "Provides water during power outages"
    ]
  },
  {
    slug: "float-valve",
    name: "Magnetic Automatic Float Switch",
    price: "₹250",
    tagline: "Stops the pump automatically when the storage tank is full.",
    description: "A micro-switch float valve mounted inside the storage tank. Automatically cuts off power to the booster pump when water reaches the top, preventing overflows.",
    image: "/images/accessories/float-valve.jpg",
    features: [
      "Waterproof micro-switch capsule",
      "Corrosion-resistant plastic float ball",
      "Secured trigger response",
      "Durable wiring insulation"
    ],
    compatibility: "Fits standard wall-mounted and countertop storage tanks.",
    lifespan: "2 to 3 Years",
    specifications: {
      "Voltage Rating": "12V - 24V DC / 230V AC",
      "Current Rating": "5 Amps",
      "Housing Material": "Food-grade ABS Plastic",
      "Port Size": "Wall Mount Standard"
    },
    benefits: [
      "Prevents kitchen overflows and water wastage",
      "Protects pump motors from continuous dry running",
      "Low maintenance"
    ]
  },
  {
    slug: "pipe-kit",
    name: "1/4\" and 3/8\" PE Tubing Kit (10m)",
    price: "₹300",
    tagline: "Food-grade LLDPE tubing for leak-free connections.",
    description: "A roll of 10 meters of high-density Linear Low-Density Polyethylene tubing. Provides flexible, leak-free routing for inlet water, drain lines, and faucet loops.",
    image: "/images/accessories/pipe-kit.jpg",
    features: [
      "Food-grade LLDPE structure",
      "Resists cracking, pressure, and chemical corrosion",
      "Uniform outer diameter matches quick-connect fittings",
      "Includes pipe cutters"
    ],
    compatibility: "Compatible with standard 1/4 inch or 3/8 inch quick-connect fittings.",
    lifespan: "2 to 3 Years",
    specifications: {
      "Outer Diameter": "1/4 inch (6.35 mm)",
      "Length": "10 meters",
      "Working Pressure": "120 psi",
      "Burst Pressure Limit": "300 psi"
    },
    benefits: [
      "Prevents micro-leak splits along bent routing paths",
      "Protects against organic algae growth inside the tubes",
      "Maintains clean flow taste"
    ]
  },
  {
    slug: "tap",
    name: "Luxury Gooseneck Faucet (Brushed Chrome)",
    price: "₹1,250",
    tagline: "Elegant lead-free gooseneck faucet for under-sink setups.",
    description: "A premium kitchen faucet mounted directly on the countertop. Features a high-arc gooseneck spout and single-lever dial valve for dispensing purified water.",
    image: "/images/accessories/tap.jpg",
    features: [
      "Lead-free brushed chrome plating",
      "360-degree rotating gooseneck spout",
      "Ceramic disc valve mechanism",
      "Tidy deck flange cover plate"
    ],
    compatibility: "Connects to standard 1/4 inch water supply tubes under kitchen counters.",
    lifespan: "5+ Years",
    specifications: {
      "Material": "Solid Brass Body",
      "Finish": "Brushed Chrome",
      "Port Fitting": "1/4 inch compression",
      "Deck Height": "290 mm"
    },
    benefits: [
      "Aesthetic layout complements premium kitchen counters",
      "Drip-free ceramic valve mechanism",
      "Ensures lead-free water flow"
    ]
  },
  {
    slug: "mineral-cartridge",
    name: "Active Mineralizer Cartridge",
    price: "₹950",
    tagline: "Reintroduces essential calcium, magnesium, and potassium ions.",
    description: "An inline cartridge loaded with natural mineral stones. Restores trace calcium (Ca++), magnesium (Mg++), potassium (K+), and sodium (Na+) ions, balancing pH and improving taste.",
    image: "/images/accessories/mineral-cartridge.jpg",
    features: [
      "Mineral media shell",
      "Restores essential electrolytes",
      "Improves water pH to a healthy alkaline range (7.4 - 8.0)",
      "Quick-connect inline ports"
    ],
    compatibility: "Standard inline replacement filter on all domestic RO systems.",
    lifespan: "9 to 12 Months (approx. 5,000 Litres)",
    specifications: {
      "Fitting Size": "1/4 inch Push Fit",
      "Length": "10 inches",
      "Working Temp Range": "4 - 45°C",
      "pH Change Effect": "+0.5 to +1.0"
    },
    benefits: [
      "Prevents mineral deficiencies associated with pure RO water",
      "Neutralizes acidity, boosting body hydration",
      "Adds a crisp, natural taste"
    ]
  }
];

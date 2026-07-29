export interface Service {
  slug: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  process: string[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "installation",
    name: "Professional Product Installation",
    price: "₹500 (Free with new systems)",
    tagline: "Secure, leak-free wall mounting and line plumbing by verified experts.",
    description: "Our certified technicians ensure your new water purifier is mounted safely, connected securely to inlet and drain pipelines, and calibrated with correct flow rate and TDS outputs.",
    image: "/images/services/installation-service.jpg",
    features: [
      "Secured wall bracket anchoring",
      "Leak-free inlet feed plumbing",
      "Pressure testing and flow calibration",
      "Technician demonstration of app companion features"
    ],
    process: [
      "Select location near electrical sockets and inlet piping.",
      "Anchor brackets using dust-free drills.",
      "Install feed valve adapter on cold water supply.",
      "Fit filters and run pre-flush cycle.",
      "Calibrate outlet flow rate and TDS levels."
    ],
    faq: [
      {
        q: "How long does standard installation take?",
        a: "Typically 45 to 90 minutes, depending on the plumbing setup and wall material."
      },
      {
        q: "Do I need to buy additional pipes?",
        a: "No, new purifiers include a 5-meter PE tubing kit. If your location is further away, we supply extension pipes at nominal fees."
      }
    ]
  },
  {
    slug: "amc",
    name: "Annual Maintenance Contract (AMC)",
    price: "Starts at ₹3,999 / year",
    tagline: "Complete peace of mind. Regular checks and free cartridge swaps.",
    description: "Our AMC packages ensure your system operates at peak filtration efficiency. Covers scheduled checkups, free replacements of sediment and carbon cartridges, and unlimited breakdown visits.",
    image: "/images/services/amc-service.jpg",
    features: [
      "3 Scheduled maintenance checkups yearly",
      "Free replacements of sediment, carbon, and inline filters",
      "Unlimited breakdown emergency callouts",
      "Zero fees for labor or technician visits"
    ],
    process: [
      "Sign up for our AMC package online or via our hotline.",
      "We schedule your first sanitization and cartridge swap visit.",
      "Every 4 months, our system automatically schedules maintenance alerts.",
      "Our technician completes inspections, checks electrical safety, and flushes membranes."
    ],
    faq: [
      {
        q: "Does AMC cover the RO Membrane?",
        a: "Yes, our 'Premium AMC' plan covers the RO Membrane. The 'Basic AMC' covers standard sediment and carbon filters."
      },
      {
        q: "What happens if my system breaks down?",
        a: "With an active AMC, you can book a breakdown service. A technician will arrive within 4 hours to repair the system at no cost."
      }
    ]
  },
  {
    slug: "ro-repair",
    name: "Diagnostics & RO Repair Service",
    price: "₹350 (Diagnostics charge)",
    tagline: "Troubleshoot pump vibrations, sound issues, low flow rates, or taste changes.",
    description: "Is your water tasting different, flowing slowly, or making loud noises? Our technicians run complete checks on booster pumps, auto shut-off valves, adapter power supplies, and membranes to repair the system using original spare parts.",
    image: "/images/services/repair-service.jpg",
    features: [
      "Diagnostics of electrical and pressure faults",
      "Booster pump repair or replacement",
      "Solenoid valve and adapter replacements",
      "100% genuine certified spare parts"
    ],
    process: [
      "Book a diagnostics slot.",
      "Technician inspects pressure pumps, electrical boards, and cartridge health.",
      "Receive a clear repair quote before work starts.",
      "Repairs completed on-site.",
      "Output water tested and certified."
    ],
    faq: [
      {
        q: "Is there a warranty on repaired parts?",
        a: "Yes, all replacement electrical parts (pumps, adapters, solenoid valves) carry a 3-month replacement warranty."
      },
      {
        q: "My purifier is running continuously. What is the issue?",
        a: "This is usually caused by a faulty low-pressure switch, a malfunctioning solenoid valve, or a choked RO membrane. Our technician can troubleshoot this in minutes."
      }
    ]
  },
  {
    slug: "water-testing",
    name: "Laboratory & On-Site Water Testing",
    price: "₹150 (On-site) / ₹1,200 (Lab Analysis)",
    tagline: "Accurate TDS, pH, hardness, and heavy metal testing.",
    description: "Get detailed water quality reports. On-site checks measure TDS and pH levels instantly. Our lab analysis covers heavy metals, chemical runoff, microplastics, and biological contamination.",
    image: "/images/hero/water-testing.jpg",
    features: [
      "Instant TDS, pH, and temperature reports on-site",
      "Detailed lab analysis for lead, arsenic, iron, and fluorides",
      "Biological swab checks for bacteria and E. coli",
      "Professional filtration system recommendation based on water quality"
    ],
    process: [
      "Select either on-site testing or request a lab sample collection box.",
      "Technician collects water samples using sterile containers.",
      "On-site results provided immediately. Lab samples processed within 48 hours.",
      "Receive a digital report detailing contaminant levels and recommended filtration technologies."
    ],
    faq: [
      {
        q: "What is TDS and why does it matter?",
        a: "TDS stands for Total Dissolved Solids, which measures minerals, salts, and metals dissolved in water. High TDS (above 500 ppm) makes water taste bitter and hard, while very high TDS (above 1000 ppm) can indicate contamination."
      },
      {
        q: "How often should I test my water?",
        a: "We recommend checking your input water TDS once a year or whenever you notice changes in taste, color, or scaling on faucets."
      }
    ]
  },
  {
    slug: "filter-replacement",
    name: "Filter Cartridge Replacement Service",
    price: "Starts at ₹850",
    tagline: "Replace worn-out sediment, carbon, and mineral filters.",
    description: "Keep your water tasting fresh and clean. We replace sediment filters, pre-carbon blocks, inline post-carbons, and mineral cartridges with genuine Aquapure parts to maintain filtration efficiency.",
    image: "/images/accessories/sediment-filter.jpg",
    features: [
      "Replacement of external spun pre-filter",
      "Replacement of internal carbon blocks and sediment inline filters",
      "Flushing of RO membrane lines",
      "Post-replacement pressure and flow checks"
    ],
    process: [
      "Technician checks current input and output TDS.",
      "Isolates water line and electrical power.",
      "Swaps old cartridges with fresh, food-grade replacements.",
      "Flushes carbon dust out of the lines.",
      "Secures housings and checks for leaks."
    ],
    faq: [
      {
        q: "Can I replace the filters myself?",
        a: "While external sediment pre-filters are easy to swap, internal inline cartridges require correct pipe routings and leak testing. We recommend using our certified technicians."
      },
      {
        q: "What happens if I delay filter replacement?",
        a: "Delayed swaps allow carbon dust and sediment to bypass cartridges, which can clog the expensive RO membrane, reduce flow rates, and lead to bacterial growth inside the storage tank."
      }
    ]
  },
  {
    slug: "leak-repair",
    name: "Urgent Pipeline & Leak Repair",
    price: "₹299",
    tagline: "Fix drippings, connector leaks, or cracked filter housings.",
    description: "Water dripping from your purifier cabinet can damage wooden under-sink cabinets or clutter kitchen countertops. We patch split PE tubes, replace cracked housings, and fit secure quick-connect ports.",
    image: "/images/services/repair-service.jpg",
    features: [
      "Replacement of split PE tubing",
      "Swapping cracked filter housings or seal rings",
      "Upgrading threaded elbows to secure quick-connect fittings",
      "Secondary pressure leak testing"
    ],
    process: [
      "Turn off feed adapter valve and power supply.",
      "Trace leak source along tubing, joints, and filters.",
      "Replace worn connectors or cracked housings.",
      "Turn on water supply to run pressure tests.",
      "Ensure the system is completely dry and secure."
    ],
    faq: [
      {
        q: "Why is water leaking from the bottom of my RO?",
        a: "This is usually caused by worn-out O-rings inside filter housings, loose tubing connections, or pressure spikes in the mainline supply. It is easily repaired."
      },
      {
        q: "Should I turn off the purifier if it leaks?",
        a: "Yes, immediately turn off the water inlet feed valve and unplug the power cord to prevent water damage and electrical hazards."
      }
    ]
  },
  {
    slug: "commercial-installation",
    name: "Commercial & Office Installation",
    price: "Custom Quote / On-site Survey",
    tagline: "High-capacity filtration setups for offices, clinics, and hotels.",
    description: "We design and install customized high-volume water purification systems for corporate office floors, factories, clinics, and hotel kitchens. Includes plumbing routing and pressure pumps.",
    image: "/images/services/commercial-installation.jpg",
    features: [
      "Custom commercial plumbing layouts",
      "Setup of multi-membrane RO skids",
      "Integration with hot/cold water dispensers",
      "Compliance with commercial safety standards"
    ],
    process: [
      "Complete an on-site survey to map inlet lines and drainage.",
      "Provide a detailed design layout and quote.",
      "Mount commercial filtration units and run stainless steel pipelines.",
      "Connect storage units and pressure pumps.",
      "Conduct training sessions for office facility teams."
    ],
    faq: [
      {
        q: "Do you offer corporate AMC plans?",
        a: "Yes, we provide customized monthly or annual corporate maintenance packages that cover scheduled cartridge replacements, water testing, and priority repair calls."
      },
      {
        q: "Can this system connect to water coolers?",
        a: "Yes, we connect commercial RO systems directly to office water coolers, coffee machines, and ice dispensers."
      }
    ]
  },
  {
    slug: "emergency-service",
    name: "Priority Emergency Repair Service",
    price: "₹599 (Guaranteed 4-hour response)",
    tagline: "Technician visit within 4 hours for breakdowns.",
    description: "Do you have a party planned or a clinic full of patients and need clean water immediately? Our emergency service prioritizes your repair request, sending a technician within 4 hours.",
    image: "/images/services/emergency-service.jpg",
    features: [
      "Guaranteed technician arrival within 4 hours of booking",
      "Immediate troubleshooting of major system faults",
      "Stocked spares on hand for quick repairs",
      "Follow-up satisfaction check"
    ],
    process: [
      "Submit an emergency repair request online or call our priority line.",
      "Our system dispatches the nearest active service expert.",
      "Technician calls to confirm details and arrives within 4 hours.",
      "System repaired and tested."
    ],
    faq: [
      {
        q: "Is this service available at night?",
        a: "Emergency bookings are available daily from 7:00 AM to 10:00 PM."
      },
      {
        q: "What if parts cannot be sourced immediately?",
        a: "Our technicians carry standard booster pumps, filters, and valves. In rare cases where a custom component is needed, we provide a temporary filter loaner unit."
      }
    ]
  }
];

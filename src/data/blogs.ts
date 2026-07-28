export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "understanding-tds-in-drinking-water",
    title: "Understanding TDS in Drinking Water: What is Safe?",
    excerpt: "Learn what Total Dissolved Solids are, how to measure them, and what levels are optimal for healthy drinking water.",
    content: `
      <h2>What is TDS?</h2>
      <p>Total Dissolved Solids (TDS) refer to the combined content of all inorganic and organic substances contained in water. These substances can include minerals, salts, metals, and cations or anions dissolved in water. The most common components of TDS are calcium, magnesium, sodium, potassium, carbonate, hydrogen carbonate, chloride, sulfate, and nitrate.</p>

      <h2>How does TDS enter your tap water?</h2>
      <p>Dissolved solids enter tap water from natural sources, sewage, urban runoff, industrial wastewater, chemical water treatment processes, and the plumbing pipes themselves. As rainwater flows over rocks and soil, it dissolves minerals, carrying them into local rivers and groundwater aquifers.</p>

      <h2>Is high TDS water harmful to health?</h2>
      <p>In most cases, elevated TDS is an aesthetic issue rather than a health hazard. Hard minerals like calcium and magnesium cause heavy scaling in pipelines and kitchen appliances, leave white powder on dishes, and give water a salty or bitter taste. However, if high TDS is caused by toxic heavy metals like lead, arsenic, copper, or agricultural nitrates, it can pose serious health risks.</p>

      <h2>Optimal TDS Level Chart</h2>
      <ul>
        <li><strong>Less than 100 ppm:</strong> Very low mineral content, often tastes flat or slightly acidic. Typical of pure distilled or rainwater.</li>
        <li><strong>100 to 250 ppm:</strong> Excellent drinking water. Retains healthy levels of calcium and magnesium while tasting sweet and clear.</li>
        <li><strong>250 to 500 ppm:</strong> Good, average tap water quality. Minor scaling might occur.</li>
        <li><strong>500 to 900 ppm:</strong> Hard water. Tastes slightly salty or bitter. Causes heavy scale build-up inside plumbing.</li>
        <li><strong>Above 1000 ppm:</strong> Unacceptable and unsafe. High probability of contamination. Requires multi-stage RO purification.</li>
      </ul>

      <h2>How to check and regulate TDS at home</h2>
      <p>You can check your TDS in seconds using a digital TDS pen. If your input water TDS exceeds 300 ppm, we recommend using a multi-stage Reverse Osmosis (RO) water purifier. Aquapure systems feature an adjustable TDS needle controller, allowing you to regulate the mineral content of your output water safely between 30 and 100 ppm to fit your taste and health needs.</p>
    `,
    category: "Water Health",
    date: "July 24, 2026",
    author: "Dr. Ananya Sen, Water Quality Research Lab",
    readTime: "5 min read",
    image: "water-tds-article"
  },
  {
    slug: "reverse-osmosis-vs-uv-disinfection",
    title: "Reverse Osmosis (RO) vs. UV Disinfection: Which is Right for You?",
    excerpt: "Confused between RO and UV filters? We break down the technical differences, benefits, and applications of both purification systems.",
    content: `
      <h2>The Core Differences Explained</h2>
      <p>Choosing the correct water purifier can be confusing. The two most common household purification technologies are Reverse Osmosis (RO) and Ultraviolet (UV) disinfection. While both deliver clean water, they work on completely different scientific principles and target different contaminants.</p>

      <h2>How Reverse Osmosis (RO) Works</h2>
      <p>Reverse Osmosis is a physical filtration technology. Water is pressurized through a semi-permeable thin-film composite membrane with pores measuring 0.0001 microns. This dense barrier rejects dissolved salts (TDS), chemical compounds, heavy metals (lead, arsenic, mercury), fluorides, and pathogens, sending them down the drain line. Only pure water molecules pass through.</p>

      <h2>How Ultraviolet (UV) Disinfection Works</h2>
      <p>Ultraviolet filtration is a sterilization technology. Water passes through a chamber containing a high-intensity UV lamp tube. The ultraviolet rays (UV-C) penetrate the cells of microorganisms, disrupting their DNA. This neutralizes 99.99% of viruses, bacteria, and cysts, rendering them harmless. However, UV does not physically filter out chemicals, mud, or dissolved minerals.</p>

      <h2>Comparison Summary Table</h2>
      <ul>
        <li><strong>Target Contaminants:</strong> RO removes chemicals, heavy metals, salts, mud, and pathogens. UV only sterilizes living pathogens.</li>
        <li><strong>Water TDS Impact:</strong> RO reduces high TDS and salt hardness. UV does not affect TDS or water hardness.</li>
        <li><strong>Electricity Required:</strong> Both require power, but gravity-fed UF/sediment filters do not.</li>
        <li><strong>Water Wastage:</strong> RO generates reject wastewater. UV does not waste water.</li>
      </ul>

      <h2>The Verdict: Which one fits your home?</h2>
      <p>If your tap water TDS is under 200 ppm and comes from municipal sources, it is relatively soft and chemical-free. A sediment pre-filter paired with a UV purifier is sufficient. However, if your water comes from borewells or tanker supply, carries high TDS (above 300 ppm), tastes bitter, and leaves white scaling on pots, a multi-stage RO system is mandatory. Aquapure RO+UV systems combine both technologies to deliver comprehensive safety.</p>
    `,
    category: "Technology Guide",
    date: "June 18, 2026",
    author: "Rajesh Kumar, Chief Design Engineer",
    readTime: "6 min read",
    image: "ro-vs-uv-article"
  },
  {
    slug: "environmental-impact-of-plastic-water-bottles",
    title: "The Massive Environmental Cost of Canned & Bottled Water",
    excerpt: "Discover the carbon footprint and plastic pollution footprint of bottled water deliveries, and how switching to a purifier helps.",
    content: `
      <h2>The Hidden Cost of Convenience</h2>
      <p>Millions of households buy 20-litre water cans or single-use plastic bottles daily, assuming it is the safest and most convenient option. However, bottled water carries huge environmental, health, and financial costs that are often overlooked.</p>

      <h2>Plastic Waste Pollution</h2>
      <p>Single-use plastic bottles take up to 450 years to decompose, breaking down into microplastics that pollute rivers, oceans, and groundwater. Less than 10% of plastic bottles are recycled, with the rest piling up in landfills or polluting marine life.</p>

      <h2>Microplastics inside Bottled Water</h2>
      <p>Recent laboratory studies reveal that bottled water contains thousands of nanoplastic particles per litre, which are shed from the bottle shell during packaging and transport. These microplastics enter our bodies, carrying health concerns.</p>

      <h2>The Carbon Footprint of Water Deliveries</h2>
      <p>Transporting heavy water cans and plastic bottles requires fleets of delivery trucks, generating significant carbon emissions. The manufacturing process of PET bottles also consumes millions of barrels of oil annually.</p>

      <h2>The Sustainable Solution</h2>
      <p>By switching to an on-site water purifier like Aquapure, a family of four can keep up to 2,000 plastic bottles out of oceans and landfills annually. An in-home purifier provides fresh, pure water directly from your tap, saving money and reducing your carbon footprint.</p>
    `,
    category: "Eco-Living",
    date: "May 12, 2026",
    author: "Sarah Jenkins, Environmental Scientist",
    readTime: "4 min read",
    image: "plastic-impact-article"
  },
  {
    slug: "how-hard-water-affects-hair-and-skin",
    title: "How Hard Water Affects Hair and Skin: The Softener Guide",
    excerpt: "Is hard water causing hair fall and dry skin? Learn the science of hard salts and how ion-exchange softeners fix the issue.",
    content: `
      <h2>Why Hard Water Causes Hair and Skin Issues</h2>
      <p>If you experience dry skin, frizzy hair, dandruff, or hair fall, the culprit is likely the water in your shower. Hard water contains high concentrations of calcium and magnesium salts. These minerals form a thin film on your skin and hair, blocking moisture absorption and clogging pores.</p>

      <h2>The Soap Scum Effect</h2>
      <p>Hard minerals react with soap, shampoo, and detergents to form a sticky residue called soap scum. This prevents soaps from lathering easily. As a result, you use more shampoo and soap, which strips natural oils from your scalp and skin, leading to irritation and dryness.</p>

      <h2>Plumbing scale deposits</h2>
      <p>Hard minerals build up inside plumbing pipes and geysers. This restricts water flow, reduces heating efficiency, and causes white scaling on bathroom fixtures, tiles, and utensils.</p>

      <h2>The Solution: Automated Ion-Exchange Softening</h2>
      <p>Our automated water softeners use food-grade resin beads to replace calcium and magnesium minerals with sodium ions. This softens the water, making soaps lather easily, preventing scale build-up, and keeping skin and hair hydrated and healthy.</p>
    `,
    category: "Beauty & Health",
    date: "April 05, 2026",
    author: "Elena Rostova, Dermatological Consultant",
    readTime: "5 min read",
    image: "hardwater-impact-article"
  }
];

/* Aquapure Simulators Script — TDS Simulator, Filtration Explorer & Eco-Calculator */

document.addEventListener('DOMContentLoaded', () => {
  initTdsSimulator();
  initFiltrationExplorer();
  initSavingsCalculator();
});

/* --- 1. TDS SIMULATOR WIDGET --- */
function initTdsSimulator() {
  const sourceSelect = document.getElementById('water-source');
  const tdsSlider = document.getElementById('tds-range');
  const tdsNum = document.getElementById('tds-num');
  const badge = document.getElementById('water-badge');
  const desc = document.getElementById('diagnosis-desc');
  const aquarium = document.getElementById('aquarium');
  const filteredTds = document.getElementById('filtered-tds');
  const recoProduct = document.getElementById('reco-product');

  if (!tdsSlider || !aquarium) return;

  // Particle floating CSS injection
  if (!document.getElementById('particle-animation-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'particle-animation-styles';
    styleSheet.innerHTML = `
      @keyframes floatParticle {
        0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        33% { transform: translateY(-15px) translateX(8px) rotate(120deg); }
        66% { transform: translateY(10px) translateX(-8px) rotate(240deg); }
        100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
  }

  function updateTdsView() {
    const tds = parseInt(tdsSlider.value);
    const source = sourceSelect.value;
    tdsNum.innerText = tds;

    // Calculate Filtered TDS (RO reduces by ~94% to 97%)
    let reductionFactor = 0.05; // 95% reduction
    if (source === 'municipal') reductionFactor = 0.07; // 93%
    if (source === 'borewell') reductionFactor = 0.04; // 96%
    
    const outputValue = Math.max(12, Math.round(tds * reductionFactor + 4));
    filteredTds.innerText = outputValue;

    // Determine water safety status, recommendation, and descriptions
    let statusClass = 'safe-water';
    let statusText = 'Soft Water';
    let diagnosisText = '';
    let recommendation = '';

    if (tds < 200) {
      statusClass = 'safe-water';
      statusText = 'Soft Water';
      recommendation = 'Countertop Pro';
      diagnosisText = source === 'municipal' 
        ? 'Municipal water at this level is relatively soft but often contains heavy chemical chlorine residues and sediment odors.' 
        : 'Low mineral content, but groundwater can still house trace microplastics and pesticide runoffs from local fields.';
    } else if (tds >= 200 && tds < 600) {
      statusClass = 'hard-water';
      statusText = 'Hard Water';
      recommendation = 'Under-Sink Compact';
      diagnosisText = source === 'borewell'
        ? 'Groundwater carries standard hardness (calcium and magnesium carbonate), which forms white scaling on faucets and causes dry skin.'
        : 'Average TDS indicating scaling risk. Municipal pipes often pick up rust sediment and heavy metals along distribution channels.';
    } else if (tds >= 600 && tds < 1000) {
      statusClass = 'unsafe-water';
      statusText = 'Highly Hard';
      recommendation = 'Whole Home RO+UV';
      diagnosisText = 'High dissolved solids causing bitter taste, plumbing corrosion, scale deposits, and reduced efficiency of heating appliances. RO purification is recommended.';
    } else {
      statusClass = 'unsafe-water';
      statusText = 'Unsafe / Toxic';
      recommendation = 'Whole Home RO+UV';
      diagnosisText = 'Dangerous TDS level typical of deep borewells or tanker water. High probability of fluorides, nitrates, arsenic, and lead. Multi-stage RO+UV filtration is mandatory.';
    }

    badge.className = `badge ${statusClass}`;
    badge.innerText = statusText;
    desc.innerText = diagnosisText;
    recoProduct.innerText = recommendation;

    // Highlight recommendation on the page
    highlightProductCard(recommendation);

    // Update aquarium particles
    renderAquariumParticles(tds, statusClass);
  }

  function renderAquariumParticles(tds, statusClass) {
    // Clear old particles (keep clean line)
    const oldParticles = aquarium.querySelectorAll('.particle');
    oldParticles.forEach(p => p.remove());

    // Calculate counts (limit to 60 to prevent browser lag)
    const particleCount = Math.min(65, Math.floor(tds / 18));
    
    // Water clarity styling (adjusting clean line and aquarium tint)
    const cleanLine = aquarium.querySelector('.clean-water-line');
    
    if (statusClass === 'safe-water') {
      aquarium.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(47,143,157,0.1) 100%)';
      if (cleanLine) cleanLine.style.height = '85%';
    } else if (statusClass === 'hard-water') {
      aquarium.style.background = 'linear-gradient(180deg, rgba(201,166,107,0.08) 0%, rgba(47,143,157,0.12) 100%)';
      if (cleanLine) cleanLine.style.height = '65%';
    } else {
      aquarium.style.background = 'linear-gradient(180deg, rgba(201,166,107,0.18) 0%, rgba(74,96,112,0.15) 100%)';
      if (cleanLine) cleanLine.style.height = '40%';
    }

    // Spawn new particles
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      
      // Categorize particles randomly based on TDS severity
      const rand = Math.random();
      if (rand < 0.4) {
        p.className = 'particle heavy-metal';
      } else if (rand < 0.7) {
        p.className = 'particle chemical';
      } else {
        p.className = 'particle microbe';
      }

      // Random position inside the aquarium
      const x = Math.random() * 95; // percent
      const y = Math.random() * 85; // percent (leave some bottom space)
      p.style.left = `${x}%`;
      p.style.top = `${y}%`;

      // Random floating animations
      const duration = 4 + Math.random() * 6; // seconds
      const delay = Math.random() * -5; // negative delay to start immediately
      p.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;

      aquarium.appendChild(p);
    }
  }

  function highlightProductCard(productName) {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      card.classList.remove('featured-product');
      const title = card.querySelector('h3').innerText;
      if (title.toLowerCase() === productName.toLowerCase()) {
        card.classList.add('featured-product');
      }
    });
  }

  // Bind Events
  tdsSlider.addEventListener('input', updateTdsView);
  sourceSelect.addEventListener('change', updateTdsView);
  
  // Initial run
  updateTdsView();
}

/* --- 2. 7-STAGE FILTRATION EXPLORER --- */
const stageData = {
  1: {
    tag: "Stage 01 — Mechanical Filtration",
    title: "Sediment Pre-Filter",
    desc: "As raw water enters the system, it passes through a multi-layered polypropylene wrap. This stage traps larger suspended matter like sand, mud, and rust scales, protecting subsequent sensitive membranes from blockage.",
    removes: ["Rust", "Silt", "Sand", "Coarse Mud"],
    elements: [
      // Rust chunks (large)
      { type: 'circle', cx: 30, cy: 30, r: 4, fill: '#8B5A2B', opacity: 0.8 },
      { type: 'circle', cx: 35, cy: 65, r: 5, fill: '#A0522D', opacity: 0.9 },
      // Silt lines
      { type: 'line', x1: 50, y1: 10, x2: 50, y2: 90, stroke: 'var(--teal)', strokeWidth: 3 },
      { type: 'line', x1: 53, y1: 10, x2: 53, y2: 90, stroke: 'var(--paper)', strokeWidth: 1.5, strokeDasharray: '4 4' },
      // Sand grains blocked
      { type: 'circle', cx: 42, cy: 22, r: 2.5, fill: '#C9A66B' },
      { type: 'circle', cx: 40, cy: 48, r: 3, fill: '#C9A66B' },
      { type: 'circle', cx: 44, cy: 78, r: 2, fill: '#C9A66B' },
      // Clean drops passing
      { type: 'path', d: 'M65 40 Q68 45 65 50 Q62 45 65 40 Z', fill: 'var(--teal)', opacity: 0.6 },
      { type: 'path', d: 'M75 55 Q78 60 75 65 Q72 60 75 55 Z', fill: 'var(--teal)', opacity: 0.8 }
    ]
  },
  2: {
    tag: "Stage 02 — Chemical Adsorption",
    title: "Carbon Block Filter",
    desc: "Made of compressed activated carbon granules, this filter has millions of microscopic pores. It chemically adsorbs chlorine, trihalomethanes (THMs), volatile organic chemicals (VOCs), and pesticides, neutralizing bad chemical tastes and smells.",
    removes: ["Chlorine", "Pesticides", "Odors", "THMs"],
    elements: [
      // Charcoal block pattern
      { type: 'rect', x: 25, y: 25, width: 50, height: 50, fill: '#1E293B', rx: 6 },
      // Pores (small circles inside block)
      { type: 'circle', cx: 35, cy: 35, r: 1.5, fill: 'var(--paper)', opacity: 0.3 },
      { type: 'circle', cx: 45, cy: 55, r: 1.5, fill: 'var(--paper)', opacity: 0.3 },
      { type: 'circle', cx: 65, cy: 45, r: 1.5, fill: 'var(--paper)', opacity: 0.3 },
      { type: 'circle', cx: 55, cy: 65, r: 1.5, fill: 'var(--paper)', opacity: 0.3 },
      // Chlorine molecules binding
      { type: 'circle', cx: 28, cy: 20, r: 3, fill: '#84CC16' }, // Cl (Greenish)
      { type: 'line', x1: 28, y1: 20, x2: 32, y2: 26, stroke: '#84CC16', strokeWidth: 1 },
      { type: 'circle', cx: 72, cy: 75, r: 3, fill: '#84CC16' },
      { type: 'line', x1: 72, y1: 75, x2: 68, y2: 69, stroke: '#84CC16', strokeWidth: 1 }
    ]
  },
  3: {
    tag: "Stage 03 — Micron-Level Polish",
    title: "Sediment Fine Filter",
    desc: "A secondary sediment cartridge with a denser spun structure. It works as a micro-polisher, capturing smaller particles down to 5 microns (like colloidal clay or fine carbon dust) to protect the sensitive RO membrane downstream.",
    removes: ["Colloidal Silt", "Carbon Dust", "Turbidity"],
    elements: [
      // Dense fiber net
      { type: 'line', x1: 45, y1: 15, x2: 45, y2: 85, stroke: 'var(--teal)', strokeWidth: 6 },
      { type: 'line', x1: 52, y1: 15, x2: 52, y2: 85, stroke: 'var(--teal)', strokeWidth: 4, opacity: 0.7 },
      // Tiny trapped carbon particles
      { type: 'circle', cx: 40, cy: 30, r: 1.5, fill: '#0F172A' },
      { type: 'circle', cx: 41, cy: 55, r: 1.2, fill: '#0F172A' },
      { type: 'circle', cx: 38, cy: 70, r: 1, fill: '#0F172A' },
      // Crystal clear output
      { type: 'circle', cx: 68, cy: 35, r: 2.5, fill: 'var(--teal)', opacity: 0.7 },
      { type: 'circle', cx: 72, cy: 60, r: 2, fill: 'var(--teal)', opacity: 0.7 }
    ]
  },
  4: {
    tag: "Stage 04 — Hyper-Filtration Core",
    title: "RO Membrane Core",
    desc: "Water is forced under high pressure through a composite thin-film membrane with pores measuring 0.0001 microns. It rejects 99% of heavy metals (lead, mercury, arsenic), fluorides, nitrates, salts, and radioactive elements, sending them down the drain line.",
    removes: ["Lead", "Arsenic", "Mercury", "Fluoride", "TDS"],
    elements: [
      // Diagonal membrane line
      { type: 'line', x1: 20, y1: 80, x2: 80, y2: 20, stroke: 'var(--teal)', strokeWidth: 4 },
      // Rebounding heavy metals
      { type: 'circle', cx: 25, cy: 38, r: 4, fill: '#475569' }, // Lead (Pb)
      { type: 'path', d: 'M 25 38 L 15 32 M 15 32 L 20 30 M 15 32 L 17 37', stroke: '#475569', strokeWidth: 1 }, // bounce line
      { type: 'circle', cx: 40, cy: 68, r: 3.5, fill: '#64748B' }, // Arsenic (As)
      { type: 'path', d: 'M 40 68 L 30 74 L 32 69 M 30 74 L 35 76', stroke: '#64748B', strokeWidth: 1 },
      // Pure water molecules passing through
      { type: 'circle', cx: 62, cy: 32, r: 2, fill: 'var(--teal)' },
      { type: 'circle', cx: 75, cy: 45, r: 2, fill: 'var(--teal)' }
    ]
  },
  5: {
    tag: "Stage 05 — Taste Refinement",
    title: "Post-Carbon Cartridge",
    desc: "A final polishing filter filled with premium coconut-shell activated carbon. It acts as a safety backup, neutralizing any residual gases or odors that may have accumulated in the storage tank, resulting in a sweet, refreshing taste.",
    removes: ["Residual Gases", "Stale Taste", "Trace Organics"],
    elements: [
      // Sparkling water look
      { type: 'circle', cx: 50, cy: 50, r: 30, fill: 'none', stroke: 'var(--teal)', strokeWidth: 1, strokeDasharray: '2 6' },
      { type: 'circle', cx: 45, cy: 40, r: 3, fill: 'var(--teal)', opacity: 0.4 },
      { type: 'circle', cx: 55, cy: 60, r: 4, fill: 'var(--teal)', opacity: 0.3 },
      // Shiny sparkle stars
      { type: 'path', d: 'M 35 30 L 37 35 L 42 35 L 38 38 L 40 43 L 35 40 L 30 43 L 32 38 L 28 35 L 33 35 Z', fill: 'var(--gold)', opacity: 0.8 },
      { type: 'path', d: 'M 65 65 L 66 68 L 69 68 L 67 70 L 68 73 L 65 71 L 62 73 L 63 70 L 61 68 L 64 68 Z', fill: 'var(--gold)', opacity: 0.8 }
    ]
  },
  6: {
    tag: "Stage 06 — Ultraviolet Sterilization",
    title: "UV Chamber Shield",
    desc: "Equipped with a high-intensity cold-cathode UV lamp. The water is exposed to targeted 254nm ultraviolet light which disrupts the DNA of any remaining microscopic pathogens, viruses, and bacteria, rendering them completely harmless.",
    removes: ["Bacteria", "Viruses", "Protozoa", "Cysts"],
    elements: [
      // UV Violet glow background
      { type: 'circle', cx: 50, cy: 50, r: 40, fill: 'rgba(139, 92, 246, 0.25)' },
      // UV Lamp in center
      { type: 'rect', x: 45, y: 15, width: 10, height: 70, fill: '#C084FC', rx: 3 },
      // Bacteria disintegrating (split circles)
      { type: 'path', d: 'M 25 45 C 20 40 22 30 28 35 C 34 40 30 50 25 45', fill: '#10B981', opacity: 0.4 },
      { type: 'line', x1: 22, y1: 35, x2: 28, y2: 45, stroke: 'var(--danger)', strokeWidth: 1.5 }, // DNA slash
      { type: 'path', d: 'M 72 55 C 68 50 70 42 76 46 C 82 50 78 60 72 55', fill: '#10B981', opacity: 0.3 },
      { type: 'line', x1: 70, y1: 46, x2: 76, y2: 54, stroke: 'var(--danger)', strokeWidth: 1.5 }
    ]
  },
  7: {
    tag: "Stage 07 — Mineralization & pH Balance",
    title: "Active Mineralizer",
    desc: "Since pure RO water can be slightly acidic and stripped of all elements, this cartridge dissolves trace amounts of natural calcium, magnesium, and potassium ions back into the stream. This balances the pH to a healthy alkaline range (7.5-8.0) and adds essential electrolytes.",
    removes: ["Acidic pH", "Mineral Deficiency"],
    elements: [
      // Flowing water streams
      { type: 'path', d: 'M20 40 Q40 30 60 40 T100 40', fill: 'none', stroke: 'var(--teal)', strokeWidth: 2, opacity: 0.5 },
      { type: 'path', d: 'M20 60 Q40 50 60 60 T100 60', fill: 'none', stroke: 'var(--teal)', strokeWidth: 2, opacity: 0.5 },
      // Mineral Ions (Calcium: Ca++, Magnesium: Mg++)
      { type: 'circle', cx: 35, cy: 36, r: 5, fill: 'var(--gold)', opacity: 0.8 }, // Ca++
      { type: 'circle', cx: 55, cy: 62, r: 4.5, fill: 'var(--teal)', opacity: 0.9 }, // Mg++
      { type: 'circle', cx: 75, cy: 34, r: 4, fill: 'var(--gold)', opacity: 0.8 },
      // Mineral label labels
      { type: 'text', x: 35, y: 39, text: 'Ca', fontSize: '5px', fill: '#fff', textAnchor: 'middle', fontWeight: 'bold' },
      { type: 'text', x: 55, y: 65, text: 'Mg', fontSize: '5px', fill: '#fff', textAnchor: 'middle', fontWeight: 'bold' }
    ]
  }
};

function initFiltrationExplorer() {
  const buttons = document.querySelectorAll('.stage-btn');
  const tagEl = document.getElementById('explorer-stage-tag');
  const titleEl = document.getElementById('explorer-stage-title');
  const descEl = document.getElementById('explorer-stage-desc');
  const removesEl = document.getElementById('explorer-stage-removes');
  const svgGroup = document.getElementById('microscope-elements');

  if (!tagEl || !svgGroup) return;

  function renderStage(stageId) {
    const data = stageData[stageId];
    if (!data) return;

    // Update Text Content
    tagEl.innerText = data.tag;
    titleEl.innerText = data.title;
    descEl.innerText = data.desc;

    // Update Removed Tags
    removesEl.innerHTML = '';
    data.removes.forEach(item => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.innerText = item;
      removesEl.appendChild(span);
    });

    // Draw SVG microscope elements
    svgGroup.innerHTML = '';
    data.elements.forEach(elem => {
      let el;
      if (elem.type === 'circle') {
        el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        el.setAttribute('cx', elem.cx);
        el.setAttribute('cy', elem.cy);
        el.setAttribute('r', elem.r);
      } else if (elem.type === 'rect') {
        el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        el.setAttribute('x', elem.x);
        el.setAttribute('y', elem.y);
        el.setAttribute('width', elem.width);
        el.setAttribute('height', elem.height);
        if (elem.rx) el.setAttribute('rx', elem.rx);
      } else if (elem.type === 'line') {
        el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        el.setAttribute('x1', elem.x1);
        el.setAttribute('y1', elem.y1);
        el.setAttribute('x2', elem.x2);
        el.setAttribute('y2', elem.y2);
        if (elem.strokeWidth) el.setAttribute('stroke-width', elem.strokeWidth);
        if (elem.strokeDasharray) el.setAttribute('stroke-dasharray', elem.strokeDasharray);
      } else if (elem.type === 'path') {
        el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        el.setAttribute('d', elem.d);
      } else if (elem.type === 'text') {
        el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        el.setAttribute('x', elem.x);
        el.setAttribute('y', elem.y);
        el.textContent = elem.text;
        if (elem.fontSize) el.setAttribute('font-size', elem.fontSize);
        if (elem.textAnchor) el.setAttribute('text-anchor', elem.textAnchor);
        if (elem.fontWeight) el.setAttribute('font-weight', elem.fontWeight);
      }

      if (el) {
        // Apply attributes
        if (elem.fill) el.setAttribute('fill', elem.fill);
        if (elem.stroke) el.setAttribute('stroke', elem.stroke);
        if (elem.opacity !== undefined) el.setAttribute('opacity', elem.opacity);
        svgGroup.appendChild(el);
      }
    });
  }

  // Bind Click Handlers
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      
      const stageId = parseInt(btn.getAttribute('data-stage'));
      renderStage(stageId);
    });
  });

  // Load first stage by default
  renderStage(1);
}

/* --- 3. ECO SAVINGS CALCULATOR --- */
function initSavingsCalculator() {
  const familySlider = document.getElementById('family-size');
  const usageSlider = document.getElementById('water-usage');
  const familyDisplay = document.getElementById('family-display');
  const usageDisplay = document.getElementById('usage-display');
  const totalDaily = document.getElementById('total-daily-litres');
  const moneySaved = document.getElementById('money-saved');
  const cartridgeLife = document.getElementById('cartridge-life');
  const bottlesSaved = document.getElementById('bottles-saved');

  if (!familySlider || !usageSlider) return;

  function calculateSavings() {
    const familySize = parseInt(familySlider.value);
    const usage = parseFloat(usageSlider.value);

    // Display inputs
    familyDisplay.innerHTML = `<strong>${familySize}</strong> ${familySize === 1 ? 'Person' : 'People'}`;
    usageDisplay.innerHTML = `<strong>${usage.toFixed(1)}</strong> L/day`;

    // Calculated fields
    const dailyLitres = Math.round(familySize * usage);
    totalDaily.innerText = dailyLitres;

    // 1. Financial Savings: assuming bottled water costs ₹15/litre.
    // Daily cost of canned water = dailyLitres * ₹15
    // Monthly canned water cost = dailyLitres * ₹15 * 30 days
    // Aquapure's subscription/amortization cost equivalent is ~₹450/month
    const monthlyBottledCost = dailyLitres * 15 * 30;
    const monthlyAmortization = 450;
    const savingsAmount = Math.max(0, monthlyBottledCost - monthlyAmortization);
    moneySaved.innerText = `₹${savingsAmount.toLocaleString('en-IN')}`;

    // 2. Cartridge Lifespan
    // standard Aquapure cartridge yields ~6000 Litres before efficiency dip
    // lifespan = 6000 / (daily consumption * 30 days)
    const monthlyConsumption = dailyLitres * 30;
    let months = Math.round(6000 / monthlyConsumption);
    // Cap cartridge life between 6 and 18 months for physical safety thresholds
    months = Math.max(6, Math.min(18, months));
    cartridgeLife.innerText = `${months} ${months === 1 ? 'Month' : 'Months'}`;

    // 3. Plastic Bottles saved annually (1 L water = 1 bottle saved)
    const annualBottles = Math.round(dailyLitres * 365);
    bottlesSaved.innerText = annualBottles.toLocaleString('en-IN');
  }

  // Bind Events
  familySlider.addEventListener('input', calculateSavings);
  usageSlider.addEventListener('input', calculateSavings);

  // Run on start
  calculateSavings();
}

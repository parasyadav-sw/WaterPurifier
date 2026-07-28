/* Aquapure Animations Script — Canvas Waves & Interactive SVG Ripples */

document.addEventListener('DOMContentLoaded', () => {
  initHeroWaves();
});

/* --- 1. HERO BACKGROUND CANVAS WAVES --- */
function initHeroWaves() {
  const canvas = document.getElementById('wave-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const parent = canvas.parentElement;
  
  let width = (canvas.width = parent.offsetWidth);
  let height = (canvas.height = parent.offsetHeight);

  // Resize listener
  window.addEventListener('resize', () => {
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
  });

  // Wave color profiles based on theme
  let colors = getWaveColors();
  window.addEventListener('themechanged', () => {
    colors = getWaveColors();
  });

  function getWaveColors() {
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
      return {
        wave1: 'rgba(66, 175, 190, 0.15)', // Light Teal
        wave2: 'rgba(13, 31, 45, 0.25)',  // Deep Mist
        wave3: 'rgba(218, 182, 124, 0.05)' // Gold
      };
    } else {
      return {
        wave1: 'rgba(47, 143, 157, 0.12)',  // Teal
        wave2: 'rgba(211, 227, 233, 0.45)', // Mist Deep
        wave3: 'rgba(201, 166, 107, 0.07)'  // Gold
      };
    }
  }

  // Wave settings (amplitude, frequency, speed, vertical phase offset)
  const waves = [
    { amplitude: 22, frequency: 0.004, speed: 0.02, phase: 0 },
    { amplitude: 14, frequency: 0.007, speed: 0.035, phase: 120 },
    { amplitude: 8, frequency: 0.010, speed: 0.015, phase: 240 }
  ];

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw Wave 2 (Back Layer)
    drawWave(waves[1], colors.wave2);

    // Draw Wave 3 (Middle Gold Accent Layer)
    drawWave(waves[2], colors.wave3);

    // Draw Wave 1 (Front Layer)
    drawWave(waves[0], colors.wave1);

    requestAnimationFrame(animate);
  }

  function drawWave(wave, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    
    // Wave start bottom left
    ctx.moveTo(0, height);
    
    // Base horizontal line of the waves (starts at 75% height)
    const baseLine = height * 0.70;

    for (let x = 0; x <= width; x += 4) {
      // y = sin(x * freq + phase) * amp + baseline
      const y = Math.sin(x * wave.frequency + wave.phase) * wave.amplitude + baseLine;
      ctx.lineTo(x, y);
    }

    // Wrap to bottom right and close shape
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Increment phase offset for scrolling movement
    wave.phase += wave.speed;
  }

  animate();
}


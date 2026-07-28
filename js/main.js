/* Aquapure Global Script — Navigation, Modals & Theme Persistence */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
  initModals();
  initBookingWizard();
});

/* --- MOBILE HAMBURGER MENU OVERLAY --- */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (!menuToggle || !mainNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu if a nav link is clicked
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --- STICKY HEADER INTERACTION --- */
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = 'var(--shadow-sm)';
      header.style.height = '70px';
      header.querySelector('.nav-container').style.height = '70px';
    } else {
      header.style.boxShadow = 'none';
      header.style.height = '80px';
      header.querySelector('.nav-container').style.height = '80px';
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Init on load
}

/* --- MODAL SYSTEM MANAGER --- */
function initModals() {
  const bookingModal = document.getElementById('booking-modal');
  const compareModal = document.getElementById('compare-modal');
  const compareBtn = document.getElementById('compare-btn');
  const triggerButtons = document.querySelectorAll('.trigger-booking');
  const closeButtons = document.querySelectorAll('.close-modal, .close-modal-btn');
  
  // Open Booking Modal (Pre-selecting product if data-reco is available)
  triggerButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Close other modals first
      compareModal.classList.remove('active');
      compareModal.setAttribute('aria-hidden', 'true');
      
      const productReco = btn.getAttribute('data-reco');
      if (productReco) {
        // Set recommended values or pass data to booking state
        const modalSource = document.getElementById('modal-source');
        if (productReco.includes('Countertop') && modalSource) {
          modalSource.value = 'municipal'; // Countertops are best for municipal water
        } else if (productReco.includes('Whole') && modalSource) {
          modalSource.value = 'borewell';
        }
      }
      
      openModal(bookingModal);
    });
  });

  // Open Specs Comparison Modal
  if (compareBtn && compareModal) {
    compareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(compareModal);
    });
  }

  // Generic close bindings
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      closeModal(modal);
    });
  });

  // Close when clicking backdrop
  document.querySelectorAll('.modal').forEach(modal => {
    const backdrop = modal.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => closeModal(modal));
    }
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) closeModal(activeModal);
    }
  });
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Lock background scroll
  
  // Focus management
  const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
  if (focusable.length) {
    setTimeout(() => focusable[0].focus(), 100);
  }
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Release scroll
  
  // Reset Wizard if it is the booking modal
  if (modal.id === 'booking-modal') {
    setTimeout(resetBookingWizard, 400);
  }
}

/* --- MULTI-STEP BOOKING WIZARD FORM CONTROLLER --- */
let currentStep = 1;
const totalSteps = 3; // Success state is step 4

function initBookingWizard() {
  const form = document.getElementById('booking-form');
  const bookingModal = document.getElementById('booking-modal');
  if (!form || !bookingModal) return;

  const nextButtons = form.querySelectorAll('.next-step');
  const prevButtons = form.querySelectorAll('.prev-step');
  
  // Next Step handler
  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        goToStep(currentStep + 1);
      }
    });
  });

  // Previous Step handler
  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(currentStep - 1);
    });
  });

  // Date constraints - restrict visits to today or future dates
  const dateInput = document.getElementById('visit-date');
  if (dateInput) {
    const todayStr = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', todayStr);
    dateInput.value = todayStr; // default to today
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      submitBooking();
    }
  });
}

function goToStep(step) {
  if (step < 1 || step > 4) return;
  
  const steps = document.querySelectorAll('.wizard-step');
  const indicators = document.querySelectorAll('.step-indicator');
  const progressFill = document.getElementById('wizard-progress-bar');
  
  steps.forEach(s => s.classList.remove('active'));
  document.querySelector(`.wizard-step[data-step="${step}"]`).classList.add('active');
  
  // Update step indicators
  indicators.forEach(ind => {
    const indStep = parseInt(ind.getAttribute('data-step'));
    ind.classList.remove('active', 'done');
    
    if (indStep === step) {
      ind.classList.add('active');
    } else if (indStep < step) {
      ind.classList.add('done');
    }
  });

  // Update progress bar fill
  if (progressFill) {
    // Step 1: 33.3%, Step 2: 66.6%, Step 3: 100%, Step 4: hide progress/maintain 100%
    const progressPercent = Math.min((step / totalSteps) * 100, 100);
    progressFill.style.width = `${progressPercent}%`;
  }
  
  currentStep = step;
  
  // Scroll modal content to top on step change
  const modalContent = document.querySelector('#booking-modal .modal-content');
  if (modalContent) modalContent.scrollTop = 0;
}

function validateStep(step) {
  let isValid = true;

  if (step === 1) {
    // Step 1 concerns are radios (always checked by default)
    isValid = true;
  } 
  else if (step === 2) {
    const dateInput = document.getElementById('visit-date');
    if (dateInput) {
      const selectedDate = new Date(dateInput.value);
      const today = new Date();
      today.setHours(0,0,0,0);
      
      // If date is invalid or in the past
      if (!dateInput.value || selectedDate < today) {
        showInputError(dateInput);
        isValid = false;
      } else {
        hideInputError(dateInput);
      }
    }
  } 
  else if (step === 3) {
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const pincodeInput = document.getElementById('cust-pincode');
    
    // Validate Name
    if (!nameInput.value.trim()) {
      showInputError(nameInput);
      isValid = false;
    } else {
      hideInputError(nameInput);
    }

    // Validate Phone (10 digit regex)
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value.trim())) {
      showInputError(phoneInput);
      isValid = false;
    } else {
      hideInputError(phoneInput);
    }

    // Validate Pincode (6 digit regex)
    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeInput.value.trim() || !pincodeRegex.test(pincodeInput.value.trim())) {
      showInputError(pincodeInput);
      isValid = false;
    } else {
      hideInputError(pincodeInput);
    }
  }

  return isValid;
}

function showInputError(input) {
  const group = input.closest('.form-group');
  if (group) group.classList.add('has-error');
}

function hideInputError(input) {
  const group = input.closest('.form-group');
  if (group) group.classList.remove('has-error');
}

function submitBooking() {
  // Capture values to display on success page
  const dateInput = document.getElementById('visit-date').value;
  const timeSelect = document.getElementById('visit-time');
  const timeText = timeSelect.options[timeSelect.selectedIndex].text;
  
  // Format Date for humans
  const dateObj = new Date(dateInput);
  const formattedDate = dateObj.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById('summary-date').innerText = formattedDate;
  document.getElementById('summary-time').innerText = timeText.replace(/\([^)]*\)/g, '').trim();

  // Generate reference number
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let refCode = 'AQ-';
  for (let i = 0; i < 5; i++) {
    refCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById('ref-code').innerText = refCode;

  // Move to Step 4 (Success state)
  goToStep(4);
}

function resetBookingWizard() {
  const form = document.getElementById('booking-form');
  if (form) form.reset();
  
  // Clear any validation error flags
  const errorGroups = document.querySelectorAll('.form-group.has-error');
  errorGroups.forEach(g => g.classList.remove('has-error'));

  // Reset steps
  goToStep(1);
}

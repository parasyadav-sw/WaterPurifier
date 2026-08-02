import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Pin, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const BookingModal: React.FC = () => {
  const { isOpen, bookingProduct, closeBooking } = useBooking();
  
  const [step, setStep] = useState<number>(1);
  const [waterSource, setWaterSource] = useState<string>('municipal');
  const [concern, setConcern] = useState<string>('taste');
  const [visitDate, setVisitDate] = useState<string>('');
  const [visitTime, setVisitTime] = useState<string>('afternoon');
  const [custName, setCustName] = useState<string>('');
  const [custPhone, setCustPhone] = useState<string>('');
  const [custPincode, setCustPincode] = useState<string>('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [refCode, setRefCode] = useState<string>('');
  const [formattedDate, setFormattedDate] = useState<string>('');

  // Set default min date on load to today
  useEffect(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    setVisitDate(todayStr);
  }, []);

  // Pre-select water source based on product context
  useEffect(() => {
    if (bookingProduct) {
      if (bookingProduct.includes('Countertop')) {
        setWaterSource('municipal');
      } else if (bookingProduct.includes('Whole') || bookingProduct.includes('Softener')) {
        setWaterSource('borewell');
      }
    }
  }, [bookingProduct]);

  // Esc key closure
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeBooking();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (currentStep === 2) {
      const selected = new Date(visitDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (!visitDate || selected < today) {
        newErrors.visitDate = "Please pick a valid future date.";
        isValid = false;
      }
    } else if (currentStep === 3) {
      if (!custName.trim()) {
        newErrors.custName = "Please enter your full name.";
        isValid = false;
      }

      const phoneRegex = /^[6-9][0-9]{9}$/;
      if (!custPhone.trim() || !phoneRegex.test(custPhone.trim())) {
        newErrors.custPhone = "Please enter a valid 10-digit mobile number.";
        isValid = false;
      }

      const pincodeRegex = /^[0-9]{6}$/;
      if (!custPincode.trim() || !pincodeRegex.test(custPincode.trim())) {
        newErrors.custPincode = "Please enter a valid 6-digit PIN code.";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Format Date
      const dateObj = new Date(visitDate);
      const formatted = dateObj.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      setFormattedDate(formatted);

      // Generate Reference Code
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = 'AQ-';
      for (let i = 0; i < 5; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setRefCode(code);
      setStep(4);
    }
  };

  const handleModalClose = () => {
    closeBooking();
    setStep(1);
    setCustName('');
    setCustPhone('');
    setCustPincode('');
    setErrors({});
  };

  const timeSlotLabel = {
    morning: "Morning (9:00 AM - 12:00 PM)",
    afternoon: "Afternoon (12:00 PM - 4:00 PM)",
    evening: "Evening (4:00 PM - 7:00 PM)"
  }[visitTime as 'morning' | 'afternoon' | 'evening'] || visitTime;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleModalClose}
        className="absolute inset-0 bg-navy-deep/40 backdrop-blur-[8px]"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative z-10 w-full max-w-[500px] rounded-radius bg-paper/90 border border-line/10 p-5 sm:p-6 md:p-10 shadow-lg backdrop-blur-lg max-h-[90vh] max-h-[90dvh] overflow-y-auto overscroll-contain"
      >
        <button
          onClick={handleModalClose}
          className="absolute top-5 right-5 text-ink-soft hover:text-navy transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5.5 h-5.5" />
        </button>

        {/* Progress Bar (hidden in success state) */}
        {step < 4 && (
          <div className="h-1 bg-mist-deep/40 rounded-full mb-8 relative">
            <div
              className="absolute left-0 top-0 h-full bg-teal rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
            <div className="flex justify-between absolute w-full -top-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold transition-all duration-300 ${
                    step === s
                      ? "bg-teal text-white shadow-sm ring-4 ring-teal/20"
                      : step > s
                      ? "bg-navy text-white"
                      : "bg-mist-deep text-ink-soft"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* STEP 1: Concerns & Water Source */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-2 tracking-tight">
                {bookingProduct ? `Book demo for ${bookingProduct}` : "Tell us about your home"}
              </h2>
              <p className="text-[14px] text-ink-soft mb-6">
                This helps us bring the correct testing equipment and recommendation tools.
              </p>

              <div className="form-group mb-5">
                <label className="block text-[13px] font-bold text-navy mb-2">Primary Water Source</label>
                <select
                  value={waterSource}
                  onChange={(e) => setWaterSource(e.target.value)}
                  className="input-select"
                >
                  <option value="municipal">Municipal / Tap Water</option>
                  <option value="borewell">Borewell / Ground Water</option>
                  <option value="tanker">Private Water Tanker</option>
                </select>
              </div>

              <div className="form-group mb-8">
                <label className="block text-[13px] font-bold text-navy mb-2.5">
                  What's your primary water concern?
                </label>
                <div className="radio-card-grid flex flex-col gap-3">
                  {[
                    { id: "taste", label: "Bad Taste / Smell", desc: "Chlorine, mud, or metallic odor" },
                    { id: "scaling", label: "Scaling / Hardness", desc: "White powder on taps and dishes" },
                    { id: "health", label: "Health / Microbes", desc: "Pathogen safety and lead removal" }
                  ].map((item) => (
                    <label key={item.id} className="radio-card flex cursor-pointer">
                      <input
                        type="radio"
                        name="concern"
                        value={item.id}
                        checked={concern === item.id}
                        onChange={() => setConcern(item.id)}
                        className="hidden"
                      />
                      <div className={`radio-card-content w-full p-4 rounded-radius-sm border-1.5 transition-all duration-300 flex flex-col ${
                        concern === item.id
                          ? "border-teal bg-paper shadow-sm"
                          : "border-line/10 bg-mist/30"
                      }`}>
                        <strong className="text-[14.5px] text-navy">{item.label}</strong>
                        <span className="text-[12px] text-ink-soft mt-1">{item.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" onClick={handleNext} className="btn-primary">
                  Next Step &nbsp;→
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Scheduler */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-2 tracking-tight">Select date and time</h2>
              <p className="text-[14px] text-ink-soft mb-6">
                Choose a time when our technician can visit for your free TDS test and water checkup.
              </p>

              <div className={`form-group mb-5 ${errors.visitDate ? "has-error" : ""}`}>
                <label className="block text-[13px] font-bold text-navy mb-2" htmlFor="visit-date">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="visit-date"
                    value={visitDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="input-text"
                  />
                </div>
                {errors.visitDate && <span className="error-msg">{errors.visitDate}</span>}
              </div>

              <div className="form-group mb-8">
                <label className="block text-[13px] font-bold text-navy mb-2" htmlFor="visit-time">
                  Preferred Time Slot
                </label>
                <select
                  id="visit-time"
                  value={visitTime}
                  onChange={(e) => setVisitTime(e.target.value)}
                  className="input-select"
                >
                  <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                  <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <button type="button" onClick={handlePrev} className="btn-ghost">
                  ← Back
                </button>
                <button type="button" onClick={handleNext} className="btn-primary">
                  Next Step &nbsp;→
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Contact details */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-2 tracking-tight">Enter contact details</h2>
              <p className="text-[14px] text-ink-soft mb-6">
                We will send an SMS confirmation containing your appointment and technician details.
              </p>

              <div className={`form-group mb-4 ${errors.custName ? "has-error" : ""}`}>
                <label className="block text-[13px] font-bold text-navy mb-2" htmlFor="cust-name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="cust-name"
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="input-text"
                />
                {errors.custName && <span className="error-msg">{errors.custName}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className={`form-group mb-0 ${errors.custPhone ? "has-error" : ""}`}>
                  <label className="block text-[13px] font-bold text-navy mb-2" htmlFor="cust-phone">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="cust-phone"
                    value={custPhone}
                    onChange={(e) => setCustPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="input-text"
                  />
                  {errors.custPhone && <span className="error-msg">{errors.custPhone}</span>}
                </div>

                <div className={`form-group mb-0 ${errors.custPincode ? "has-error" : ""}`}>
                  <label className="block text-[13px] font-bold text-navy mb-2" htmlFor="cust-pincode">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    id="cust-pincode"
                    value={custPincode}
                    onChange={(e) => setCustPincode(e.target.value)}
                    placeholder="e.g. 560001"
                    className="input-text"
                  />
                  {errors.custPincode && <span className="error-msg">{errors.custPincode}</span>}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button type="button" onClick={handlePrev} className="btn-ghost">
                  ← Back
                </button>
                <button type="submit" className="btn-primary">
                  Confirm Free Booking
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Success confirmation */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4 flex flex-col items-center"
            >
              <div className="w-20 h-20 relative mb-6">
                <CheckCircle2 className="w-full h-full text-teal animate-bounce" />
              </div>

              <h2 className="text-2xl font-bold text-navy mb-2 tracking-tight">Free Water Test Booked!</h2>
              <p className="text-[14.5px] text-ink-soft mb-5 leading-relaxed max-w-[340px] mx-auto">
                Your appointment is scheduled for <strong className="text-navy">{formattedDate}</strong> during the <strong className="text-navy">{timeSlotLabel}</strong> slot.
              </p>
              
              <div className="bg-mist/35 rounded-radius-sm px-5 py-3 border border-line/10 inline-block mb-6">
                <span className="text-[12px] text-ink-soft font-semibold uppercase tracking-wider block">Reference Code</span>
                <span className="font-mono text-teal-deep text-lg font-extrabold tracking-wide">{refCode}</span>
              </div>

              <p className="text-[13px] text-ink-soft leading-relaxed max-w-[320px] mx-auto mb-6">
                A confirmation SMS has been dispatched. Our local testing expert will contact you 30 minutes prior to arrival.
              </p>

              <button
                type="button"
                onClick={handleModalClose}
                className="btn-primary w-full justify-center"
              >
                Return to Site
              </button>
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

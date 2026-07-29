import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, User, Phone, MapPin, Droplets, Info } from 'lucide-react';

export const BookWaterTest: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [waterSource, setWaterSource] = useState('borewell');
  const [expectedTds, setExpectedTds] = useState('medium');
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Full name is required";
    
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phone.trim() || !phoneRegex.test(phone.trim())) {
      newErrors.phone = "Valid 10-digit mobile number is required";
    }

    if (!address.trim()) newErrors.address = "Visit address is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      
      // Generate Ref Code
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = 'TEST-';
      for (let i = 0; i < 5; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setRefCode(code);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setAddress('');
    setWaterSource('borewell');
    setExpectedTds('medium');
    setErrors({});
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Purity Evaluation</span>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Book a free home water quality test
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Unsure about the dissolved solids or chemical contaminants in your drinking supply? Schedule a visit from our certified tester.
        </p>
      </div>

      <div className="bg-paper border border-line/10 rounded-radius p-6 md:p-10 shadow-sm max-w-2xl mx-auto">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <CheckCircle2 className="w-16 h-16 text-teal mb-5 mx-auto" />
            <h2 className="text-2xl font-bold text-navy mb-2 tracking-tight">TDS Test Scheduled!</h2>
            <p className="text-[14.5px] text-ink-soft mb-6 max-w-md mx-auto leading-relaxed">
              We have scheduled your free home water quality checkup. Our specialist will contact you to confirm the exact time slot.
            </p>

            <div className="bg-mist/35 rounded-radius-sm px-6 py-4 border border-line/10 inline-block mb-8">
              <span className="text-[11px] text-ink-soft font-semibold uppercase tracking-wider block">Test Reference Code</span>
              <span className="font-mono text-teal-deep text-xl font-extrabold tracking-wide">{refCode}</span>
            </div>

            <p className="text-xs text-ink-soft leading-relaxed max-w-sm mx-auto mb-6">
              Our technician will arrive with digital TDS calibrators, pH reagent tubes, and water hardness testers to evaluate your water quality on-site.
            </p>

            <button
              onClick={handleReset}
              className="btn-primary"
            >
              Book Another Test
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            
            <div className={`form-group ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="test-name" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal" /> Full Name
              </label>
              <input
                type="text"
                id="test-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="input-text"
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                <label htmlFor="test-phone" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal" /> Mobile Number
                </label>
                <input
                  type="tel"
                  id="test-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="input-text"
                />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="test-source" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-teal" /> Water Source
                </label>
                <select
                  id="test-source"
                  value={waterSource}
                  onChange={(e) => setWaterSource(e.target.value)}
                  className="input-select"
                >
                  <option value="borewell">Borewell / Ground Water</option>
                  <option value="municipal">Municipal / Tap Water</option>
                  <option value="tanker">Private Tanker Supply</option>
                  <option value="blend">Blend of Municipal & Borewell</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="test-tds" className="block text-xs font-bold text-navy mb-1.5">
                Expected TDS / Hardness Level
              </label>
              <select
                id="test-tds"
                value={expectedTds}
                onChange={(e) => setExpectedTds(e.target.value)}
                className="input-select"
              >
                <option value="low">Low (TDS under 200 ppm - Soft Water)</option>
                <option value="medium">Medium (TDS 200 to 600 ppm - Hard Water)</option>
                <option value="high">High (TDS 600 to 1000 ppm - Heavy Hardness)</option>
                <option value="extreme">Extreme (TDS above 1000 ppm - Bitter/Salty)</option>
              </select>
            </div>

            <div className={`form-group ${errors.address ? "has-error" : ""}`}>
              <label htmlFor="test-address" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal" /> Complete Address for Visit
              </label>
              <textarea
                id="test-address"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter complete building name, apartment number, and street..."
                className="input-text !py-3 resize-none"
              />
              {errors.address && <span className="error-msg">{errors.address}</span>}
            </div>

            <div className="flex gap-2 items-start text-[12.5px] bg-mist/20 border border-line/10 rounded-radius-sm p-4 mt-2">
              <Info className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <p className="text-ink-soft leading-relaxed">
                Our free water testing is a local service currently available across major areas in Bengaluru, Mumbai, Chennai, and Delhi NCR.
              </p>
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center mt-2"
            >
              Book Free TDS Visit
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

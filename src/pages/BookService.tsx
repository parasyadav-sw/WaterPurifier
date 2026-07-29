import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, User, Phone, MapPin, Clipboard } from 'lucide-react';

export const BookService: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [serviceType, setServiceType] = useState('amc');
  const [date, setDate] = useState('');
  const [msg, setMsg] = useState('');

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

    if (!address.trim()) newErrors.address = "Address is required";

    if (!date) {
      newErrors.date = "Please select a date";
    } else {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selected < today) {
        newErrors.date = "Visit date must be in the future";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      
      // Generate Ref Code
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = 'SRV-';
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
    setServiceType('amc');
    setDate('');
    setMsg('');
    setErrors({});
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Service Center</span>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          Book technical support & maintenance
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Schedule AMC sign-ups, replacement filters, leak repairs, or new system installations. Our certified technicians will visit based on your schedule.
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
            <h2 className="text-2xl font-bold text-navy mb-2 tracking-tight">Service Visit Booked!</h2>
            <p className="text-[14.5px] text-ink-soft mb-6 max-w-md mx-auto leading-relaxed">
              We have received your technical support request. A technician will contact you on <strong className="text-navy">{new Date(date).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</strong>.
            </p>

            <div className="bg-mist/35 rounded-radius-sm px-6 py-4 border border-line/10 inline-block mb-8">
              <span className="text-[11px] text-ink-soft font-semibold uppercase tracking-wider block">Service Reference Code</span>
              <span className="font-mono text-teal-deep text-xl font-extrabold tracking-wide">{refCode}</span>
            </div>

            <p className="text-xs text-ink-soft leading-relaxed max-w-sm mx-auto mb-6">
              A support specialist is currently reviewing your details. We will send an SMS confirmation containing your technician's name and contact number shortly.
            </p>

            <button
              onClick={handleReset}
              className="btn-primary"
            >
              Book Another Service
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className={`form-group ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="svc-name" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal" /> Customer Full Name
              </label>
              <input
                type="text"
                id="svc-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="input-text"
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                <label htmlFor="svc-phone" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal" /> Contact Number
                </label>
                <input
                  type="tel"
                  id="svc-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="input-text"
                />
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="svc-type" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                  <Clipboard className="w-3.5 h-3.5 text-teal" /> Service Required
                </label>
                <select
                  id="svc-type"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="input-select"
                >
                  <option value="amc">Annual Maintenance Contract (AMC)</option>
                  <option value="install">Product Installation Setup</option>
                  <option value="repair">Diagnostics & RO Repair</option>
                  <option value="replace">Filter Cartridge Replacement</option>
                  <option value="leak">Urgent Pipeline & Leak Repair</option>
                </select>
              </div>
            </div>

            <div className={`form-group ${errors.address ? "has-error" : ""}`}>
              <label htmlFor="svc-address" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal" /> Delivery / Visit Address
              </label>
              <textarea
                id="svc-address"
                rows={3}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter complete building name, apartment number, and street..."
                className="input-text !py-3 resize-none"
              />
              {errors.address && <span className="error-msg">{errors.address}</span>}
            </div>

            <div className={`form-group ${errors.date ? "has-error" : ""}`}>
              <label htmlFor="svc-date" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-teal" /> Preferred Visit Date
              </label>
              <input
                type="date"
                id="svc-date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="input-text"
              />
              {errors.date && <span className="error-msg">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="svc-msg" className="block text-xs font-bold text-navy mb-1.5">
                Details / Notes (Optional)
              </label>
              <textarea
                id="svc-msg"
                rows={3}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Enter any issues (e.g. vibrating sound, low flow, taste change)..."
                className="input-text !py-3 resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center mt-2"
            >
              Confirm Service Booking
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

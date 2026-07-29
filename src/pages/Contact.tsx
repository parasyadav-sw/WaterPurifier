import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, Send, MapPin, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Name is required";
    
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phone.trim() || !phoneRegex.test(phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!msg.trim()) newErrors.msg = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName('');
        setPhone('');
        setEmail('');
        setMsg('');
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="wrap py-12"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="eyebrow">Help Center</span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy mt-3 mb-4 tracking-tight">
          We are here to assist you
        </h1>
        <p className="text-ink-soft leading-relaxed">
          Have queries about filter compatibility, custom commercial configurations, or scheduling a visit? Reach out via our hotlines or submit our direct form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-5xl mx-auto">
        
        {/* Contact Info (Column 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 bg-mist/20 border border-line/10 rounded-radius p-7 md:p-8">
          <div>
            <h3 className="text-xl font-bold text-navy mb-4">Direct Channels</h3>
            
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-paper border border-line/5 shadow-sm flex items-center justify-center text-teal flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider block">Customer Support</span>
                  <span className="text-base font-bold text-navy mt-0.5">+91 80 4983 2700</span>
                  <span className="text-xs text-ink-soft block mt-0.5">Toll-free / Whatsapp support active</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-paper border border-line/5 shadow-sm flex items-center justify-center text-teal flex-shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider block">Email Support</span>
                  <span className="text-base font-bold text-navy mt-0.5">support@aquapurewater.in</span>
                  <span className="text-xs text-ink-soft block mt-0.5">Response within 24 business hours</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-paper border border-line/5 shadow-sm flex items-center justify-center text-teal flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider block">Headquarters</span>
                  <span className="text-[14px] font-semibold text-navy mt-0.5 leading-relaxed">
                    Aquapure Tower, 4th Block, Koramangala, Bengaluru, KA 560034
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-paper border border-line/5 shadow-sm flex items-center justify-center text-gold flex-shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider block">Business Hours</span>
                  <span className="text-[13.5px] font-semibold text-navy mt-0.5">
                    Monday – Saturday: 9:00 AM – 7:00 PM <br />
                    Sunday Support: 10:00 AM – 4:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map placeholder */}
          <div className="mt-auto border border-line/10 rounded-radius-sm overflow-hidden h-40 bg-mist-deep/30">
            <img 
              src="/images/hero/water-testing.jpg" 
              alt="Aquapure Office Location - Koramangala 4th Block" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contact Form (Column 7) */}
        <div className="lg:col-span-7 bg-paper border border-line/10 rounded-radius p-7 md:p-10 shadow-sm">
          <h3 className="text-xl font-bold text-navy mb-2">Write to us</h3>
          <p className="text-[14px] text-ink-soft mb-6">Have an architectural specification request? Send us a message and we'll reply shortly.</p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-mist/20 border border-line/5 rounded-radius-sm p-4 shadow-sm"
            >
              <Check className="w-12 h-12 text-teal mb-3 bg-teal/10 rounded-full p-2 mx-auto" />
              <h4 className="text-base font-bold text-navy">Message Received!</h4>
              <p className="text-xs text-ink-soft mt-1 leading-relaxed max-w-[280px] mx-auto">
                Thank you for contacting Aquapure. Our support representative has received your request and will follow up shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
              <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                <label htmlFor="contact-name" className="block text-xs font-bold text-navy mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="input-text"
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-navy mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="input-text"
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>

                <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-navy mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@gmail.com"
                    className="input-text"
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className={`form-group ${errors.msg ? "has-error" : ""}`}>
                <label htmlFor="contact-msg" className="block text-xs font-bold text-navy mb-1.5">
                  Message / Concerns
                </label>
                <textarea
                  id="contact-msg"
                  rows={4}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="How can we help you?..."
                  className="input-text !py-3 resize-none"
                />
                {errors.msg && <span className="error-msg">{errors.msg}</span>}
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center mt-2"
              >
                Send Message <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          )}
        </div>

      </div>
    </motion.div>
  );
};

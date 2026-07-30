import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplet, MapPin, Phone, Mail, ArrowRight, 
  Facebook, Twitter, Instagram, Youtube, Linkedin,
  Shield, Award, CheckCircle2, Heart
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      
      {/* Main Footer */}
      <div 
        className="relative pt-16 pb-8"
        style={{
          background: 'linear-gradient(135deg, #03045E 0%, #020345 50%, #0077B6 100%)'
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
        </div>

        <div className="wrap relative z-10">
          {/* Newsletter CTA Section */}
          <div className="mb-14 pb-14 border-b border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Droplet className="w-4 h-4 text-secondary" />
                <span className="text-[12px] font-bold text-white/90 uppercase tracking-wider">Stay Updated</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Get water quality tips & exclusive offers
              </h3>
              <p className="text-[15px] text-white/60 mb-8 max-w-lg mx-auto">
                Join 50,000+ homeowners receiving monthly insights on water purification, maintenance tips, and special discounts.
              </p>
              
              {subscribed ? (
                <div className="inline-flex items-center gap-2 bg-success/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-white font-semibold">Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 text-[14px] font-medium outline-none focus:border-secondary focus:bg-white/15 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-gradient-to-r from-secondary to-primary text-white font-bold text-[14px] hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-2.5 font-heading font-extrabold text-white text-2xl mb-5">
                <span className="logo-mark !border-white/80" aria-hidden="true" />
                Aquapure
              </Link>
              <p className="text-[14px] text-white/50 leading-relaxed mb-6 max-w-[280px]">
                India's most trusted multi-stage water purification systems. Engineered for purity, designed for your home.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Award className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-[11px] font-bold text-white/80">WQA Certified</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Shield className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-[11px] font-bold text-white/80">NSF/ANSI 58</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-[11px] font-bold text-white/80">ISI Approved</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-3 text-[13px] text-white/50">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-secondary transition-colors">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Bengaluru, Karnataka, India</span>
                </a>
                <a href="tel:+918049832700" className="flex items-center gap-2.5 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 80 4983 2700</span>
                </a>
                <a href="mailto:support@aquapurewater.in" className="flex items-center gap-2.5 hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>support@aquapurewater.in</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 mt-6">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Youtube, label: 'YouTube' },
                  { icon: Linkedin, label: 'LinkedIn' }
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-secondary hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Column */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-5 font-heading">Products</h4>
              <div className="flex flex-col gap-3 text-[13.5px]">
                <Link to="/products/countertop-pro" className="text-white/60 hover:text-secondary transition-colors">Countertop Pro</Link>
                <Link to="/products/whole-home" className="text-white/60 hover:text-secondary transition-colors">Whole Home RO+UV</Link>
                <Link to="/products/under-sink-compact" className="text-white/60 hover:text-secondary transition-colors">Under-Sink Compact</Link>
                <Link to="/products/water-softeners" className="text-white/60 hover:text-secondary transition-colors">Water Softeners</Link>
                <Link to="/products" className="text-secondary font-semibold hover:text-white transition-colors inline-flex items-center gap-1 mt-1">
                  View All <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Solutions Column */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-5 font-heading">Solutions</h4>
              <div className="flex flex-col gap-3 text-[13.5px]">
                <Link to="/water-problems" className="text-white/60 hover:text-secondary transition-colors">High TDS Water</Link>
                <Link to="/water-problems" className="text-white/60 hover:text-secondary transition-colors">Hard Ground Water</Link>
                <Link to="/water-problems" className="text-white/60 hover:text-secondary transition-colors">Iron & Rust Issues</Link>
                <Link to="/water-problems" className="text-white/60 hover:text-secondary transition-colors">Bacteria & Pathogens</Link>
                <Link to="/industries" className="text-white/60 hover:text-secondary transition-colors">Industry Solutions</Link>
              </div>
            </div>

            {/* Support Column */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-5 font-heading">Support</h4>
              <div className="flex flex-col gap-3 text-[13.5px]">
                <Link to="/book-water-test" className="text-white/60 hover:text-secondary transition-colors">Free Water Test</Link>
                <Link to="/book-service" className="text-white/60 hover:text-secondary transition-colors">Book Installation</Link>
                <Link to="/book-service" className="text-white/60 hover:text-secondary transition-colors">AMC Plans</Link>
                <Link to="/warranty" className="text-white/60 hover:text-secondary transition-colors">Warranty Info</Link>
                <Link to="/faq" className="text-white/60 hover:text-secondary transition-colors">Help & FAQs</Link>
              </div>
            </div>

            {/* Company Column */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-5 font-heading">Company</h4>
              <div className="flex flex-col gap-3 text-[13.5px]">
                <Link to="/about" className="text-white/60 hover:text-secondary transition-colors">About Us</Link>
                <Link to="/testimonials" className="text-white/60 hover:text-secondary transition-colors">Customer Reviews</Link>
                <Link to="/services" className="text-white/60 hover:text-secondary transition-colors">Our Services</Link>
                <Link to="/contact" className="text-white/60 hover:text-secondary transition-colors">Contact Us</Link>
              </div>
            </div>

          </div>

          {/* Footer Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[12px] text-white/40 text-center md:text-left">
                © {new Date().getFullYear()} Aquapure Water Systems Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-[12px] text-white/40">
                <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                <Link to="/terms-conditions" className="hover:text-secondary transition-colors">Terms of Service</Link>
                <Link to="/warranty" className="hover:text-secondary transition-colors">Warranty Policy</Link>
              </div>
            </div>
            
            {/* Made with love */}
            <div className="mt-6 text-center">
              <p className="text-[11px] text-white/30 flex items-center justify-center gap-1">
                Crafted with <Heart className="w-3 h-3 text-secondary/60 fill-secondary/60" /> for pure water access across India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

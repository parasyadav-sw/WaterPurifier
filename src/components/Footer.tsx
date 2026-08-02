import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplet, MapPin, Phone, Mail, ArrowRight, 
  Facebook, Twitter, Instagram, Youtube, Linkedin,
  ShieldCheck, Settings, Wrench, Calendar, Zap,
  ChevronDown, ChevronUp, ArrowUp, Clock, ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Monitor scroll height for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const productLinks = [
    { label: "Domestic RO Purifiers", path: "/products?filter=domestic" },
    { label: "Commercial RO Systems", path: "/products?filter=commercial" },
    { label: "UV Water Purifiers", path: "/products?filter=uv" },
    { label: "UF Gravity Filters", path: "/products?filter=uf" },
    { label: "Alkaline Water Boosters", path: "/products?filter=alkaline" },
    { label: "Industrial RO Plants", path: "/products?filter=industrial" },
    { label: "Water Softeners", path: "/products?filter=ss" },
  ];

  const supportLinks = [
    { label: "Book Free Water Test", path: "/book-water-test" },
    { label: "Request Installation", path: "/book-service" },
    { label: "Annual Care AMC Plans", path: "/services/amc" },
    { label: "RO Filter Replacement", path: "/services/filter-replacement" },
    { label: "Warranty Information", path: "/warranty" },
    { label: "Help & Support FAQs", path: "/faq" },
  ];

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Products Catalog", path: "/products" },
    { label: "Our Services", path: "/services" },
    { label: "Water Problem Guide", path: "/water-problems" },
    { label: "Industries We Serve", path: "/industries" },
    { label: "About Aquapure", path: "/about" },
    { label: "Customer Testimonials", path: "/testimonials" },
    { label: "Contact Us Support", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      {/* 1. LAYERED WATER WAVES TRANSITION */}
      <div className="relative w-full h-16 overflow-hidden select-none pointer-events-none" style={{ backgroundColor: 'transparent' }}>
        <svg 
          className="absolute bottom-0 left-0 w-full h-16 text-navy fill-current" 
          viewBox="0 0 1440 74" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,70 480,70 720,48 C960,26 1200,-18 1440,8 L1440,74 L0,74 Z" opacity="0.4" fill="#03045E"/>
          <path d="M0,48 C240,10 480,82 720,54 C960,26 1200,48 1440,32 L1440,74 L0,74 Z" fill="#000814"/>
        </svg>
      </div>

      <div 
        className="relative pt-6 pb-8 px-4 sm:px-6 lg:px-8"
        style={{
          background: 'linear-gradient(180deg, #000814 0%, #020345 50%, #03045E 100%)'
        }}
      >
        {/* Background glow graphics */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-30 -right-30 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* 2. HELP CONSULTATION CTA */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/15 to-primary/5 border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative z-10 max-w-2xl text-left">
              <span className="text-xs font-extrabold uppercase text-secondary tracking-widest">Expert Advice</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">Need Help Choosing a Water Purifier?</h3>
              <p className="text-[13.5px] sm:text-[14.5px] text-white/70 leading-relaxed">
                Unsure about your water's TDS or contamination level? Get a free water analysis and recommendation from our certified water specialists.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-3.5 flex-shrink-0 w-full sm:w-auto">
              <Link to="/book-water-test" className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white text-[13.5px] font-bold rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 min-h-[44px] flex items-center justify-center">
                Book Free Consultation
              </Link>
              <a href="tel:+918049832700" className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/15 text-white text-[13.5px] font-bold rounded-full border border-white/10 hover:border-white/20 transition-all min-h-[44px] flex items-center justify-center">
                Call Specialist
              </a>
            </div>
          </div>

          {/* 3. TRUST ELEMENTS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-12 border-b border-white/10 pb-10">
            {[
              { icon: ShieldCheck, title: "Certified Products", desc: "WQA & NSF Standard 58 compliant systems" },
              { icon: Settings, title: "Genuine Spare Parts", desc: "100% original filters & high-grade membranes" },
              { icon: Wrench, title: "Expert Setup", desc: "Professional installation by certified technicians" },
              { icon: Calendar, title: "AMC & Care Plans", desc: "Comprehensive maintenance & timely filter checks" },
              { icon: Zap, title: "Fast 24h Resolution", desc: "Express support for active AMC subscribers" }
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3.5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                  <badge.icon className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-[13px] font-bold text-white mb-1 tracking-tight">{badge.title}</h4>
                <p className="text-[11px] text-white/55 leading-relaxed max-w-[150px]">{badge.desc}</p>
              </div>
            ))}
          </div>

          {/* 4. MAIN FOOTER CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            
            {/* Column 1: Company Information */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <Link to="/" className="inline-flex items-center gap-2.5 font-heading font-extrabold text-white text-xl sm:text-2xl mb-4 min-h-[44px]">
                <span className="logo-mark !border-white/80" aria-hidden="true" />
                Aquapure
              </Link>
              <p className="text-[13px] sm:text-[14px] text-white/60 leading-relaxed mb-6 max-w-sm">
                India's premier multi-stage water purification brand. Engineered for standard tap, borewell, and tankers to provide pure, healthy drinking water.
              </p>

              {/* Business Hours */}
              <div className="flex gap-2.5 items-start text-[12.5px] text-white/70 mb-6 bg-white/5 border border-white/10 p-4 rounded-2xl w-full max-w-sm">
                <Clock className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white text-[13px] mb-1">Service & Support Hours</h5>
                  <p className="mb-0.5">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sun: 10:00 AM - 4:00 PM (Emergency AMC support)</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-2.5">
                {[
                  { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
                  { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
                  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
                  { icon: Youtube, label: 'YouTube', url: 'https://youtube.com' },
                  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-secondary hover:text-white hover:border-secondary hover:scale-105 transition-all duration-300"
                  >
                    <social.icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation Links (Responsively collapses into accordions on mobile) */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left">
              
              {/* DESKTOP VIEW LAYOUT */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-4 font-heading">Products</h4>
                  <ul className="flex flex-col gap-2.5 text-[12.5px]">
                    {productLinks.map((link) => (
                      <li key={link.label}>
                        <Link to={link.path} className="text-white/70 hover:text-secondary transition-colors py-0.5 block">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-4 font-heading">Support & Care</h4>
                  <ul className="flex flex-col gap-2.5 text-[12.5px]">
                    {supportLinks.map((link) => (
                      <li key={link.label}>
                        <Link to={link.path} className="text-white/70 hover:text-secondary transition-colors py-0.5 block">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-4 font-heading">Quick Links</h4>
                  <ul className="flex flex-col gap-2.5 text-[12.5px]">
                    {quickLinks.map((link) => (
                      <li key={link.label}>
                        <Link to={link.path} className="text-white/70 hover:text-secondary transition-colors py-0.5 block">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* MOBILE VIEW ACCORDION LAYOUT */}
              <div className="md:hidden flex flex-col gap-2">
                {[
                  { title: "Product Categories", id: "products", links: productLinks },
                  { title: "Support & Services", id: "support", links: supportLinks },
                  { title: "Quick Links", id: "quick", links: quickLinks }
                ].map((section) => (
                  <div key={section.id} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between text-[14px] font-bold text-white hover:bg-white/5 transition-colors"
                    >
                      <span>{section.title}</span>
                      {openSection === section.id ? (
                        <ChevronDown className="w-4 h-4 text-secondary rotate-180 transition-transform" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/60 transition-transform" />
                      )}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {openSection === section.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden border-t border-white/5 bg-black/10"
                        >
                          <ul className="py-3 px-5 flex flex-col gap-3 text-[13px]">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <Link 
                                  to={link.path} 
                                  onClick={() => setOpenSection(null)} 
                                  className="text-white/70 hover:text-secondary block py-0.5"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Newsletter & Direct Contact */}
            <div className="lg:col-span-3 flex flex-col gap-6 text-left">
              <div>
                <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-3.5 font-heading">Subscribe</h4>
                <p className="text-[12.5px] text-white/60 leading-relaxed mb-4">
                  Stay updated with healthy water tips, filter replacement reminders, and special discount offers.
                </p>
                {subscribed ? (
                  <div className="bg-success/15 border border-success/30 px-4 py-3 rounded-2xl text-success font-semibold text-[13px] text-center">
                    Thank you! Subscribed successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="flex-1 min-w-0 px-4 py-2.5 text-[13px] text-white placeholder-white/40 bg-white/5 border border-white/10 rounded-xl focus:border-secondary outline-none transition-colors"
                    />
                    <button 
                      type="submit"
                      className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-primary text-white rounded-xl hover:shadow-lg hover:shadow-secondary/25 transition-all"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4.5 h-4.5" />
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Address & Map Link */}
              <div>
                <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-3 font-heading">Address</h4>
                <div className="flex flex-col gap-2.5 text-[12.5px] text-white/70">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Plot No. 42, Sector-4, HSR Layout, Bengaluru, Karnataka - 560102
                    </p>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Aquapure+Water+Systems+Bengaluru" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-secondary hover:text-primary transition-colors font-semibold self-start"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* 5. BOTTOM BAR (PAYMENT METHODS & LEGAL) */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="flex flex-col items-center md:items-start gap-1.5 text-[12px] text-white/40">
              <p>© {new Date().getFullYear()} Aquapure Water Systems Pvt. Ltd. All rights reserved.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
                <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                <Link to="/terms-conditions" className="hover:text-secondary transition-colors">Terms of Service</Link>
                <a href="#" className="hover:text-secondary transition-colors">Shipping Policy</a>
                <a href="#" className="hover:text-secondary transition-colors">Return Policy</a>
                <a href="#" className="hover:text-secondary transition-colors">Sitemap</a>
              </div>
            </div>

            {/* Payment Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 border border-white/5 bg-white/5 px-4 py-2 rounded-2xl">
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-wider mr-1.5">Secure Payments:</span>
              <div className="flex gap-2">
                <span className="text-[9.5px] font-bold text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded">UPI</span>
                <span className="text-[9.5px] font-bold text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Visa</span>
                <span className="text-[9.5px] font-bold text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Mastercard</span>
                <span className="text-[9.5px] font-bold text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded">RuPay</span>
                <span className="text-[9.5px] font-bold text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded">Net Banking</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 6. FLOATING BACK TO TOP BUTTON */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg hover:shadow-primary/35 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5.5 h-5.5" />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
};

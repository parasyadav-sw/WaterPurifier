import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-navy-deep/40 pt-16 pb-8 text-slate-300 font-sans">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 font-heading font-extrabold text-white text-xl">
              <span className="logo-mark" aria-hidden="true" />
              Aquapure
            </Link>
            <p className="text-[14px] text-slate-400 leading-relaxed max-w-[240px]">
              Multi-stage water purification systems engineered for modern Indian households, offices, and heavy industrial plants.
            </p>
            <div className="mt-2 text-[13px] text-slate-400 flex flex-col gap-1.5 font-medium">
              <span>📍 Bengaluru, Karnataka, India</span>
              <span>📞 +91 80 4983 2700</span>
              <span>✉️ support@aquapurewater.in</span>
            </div>
          </div>

          {/* Systems Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-heading">Systems</h4>
            <div className="flex flex-col gap-3 text-[14px] text-slate-300 font-medium">
              <Link to="/products/countertop-pro" className="hover:text-secondary transition-colors duration-150">Countertop Pro</Link>
              <Link to="/products/whole-home" className="hover:text-secondary transition-colors duration-150">Whole Home RO+UV</Link>
              <Link to="/products/under-sink-compact" className="hover:text-secondary transition-colors duration-150">Under-Sink Compact</Link>
              <Link to="/products/water-softeners" className="hover:text-secondary transition-colors duration-150">Water Softeners</Link>
              <Link to="/products" className="hover:text-secondary font-semibold transition-colors duration-150">View All Products →</Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-heading">Solutions</h4>
            <div className="flex flex-col gap-3 text-[14px] text-slate-300 font-medium">
              <Link to="/water-problems" className="hover:text-secondary transition-colors duration-150">High TDS Levels</Link>
              <Link to="/water-problems" className="hover:text-secondary transition-colors duration-150">Hard Ground Water</Link>
              <Link to="/water-problems" className="hover:text-secondary transition-colors duration-150">Iron & Rust Mud</Link>
              <Link to="/water-problems" className="hover:text-secondary transition-colors duration-150">Bacteria / Pathogens</Link>
              <Link to="/water-problems" className="hover:text-secondary font-semibold transition-colors duration-150">Water Issues Guide →</Link>
            </div>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-heading">Support</h4>
            <div className="flex flex-col gap-3 text-[14px] text-slate-300 font-medium">
              <Link to="/book-water-test" className="hover:text-secondary transition-colors duration-150">Book Free Water Test</Link>
              <Link to="/book-service" className="hover:text-secondary transition-colors duration-150">Schedule Installation</Link>
              <Link to="/book-service" className="hover:text-secondary transition-colors duration-150">Register AMC Plan</Link>
              <Link to="/warranty" className="hover:text-secondary transition-colors duration-150">Warranty Registration</Link>
              <Link to="/contact" className="hover:text-secondary transition-colors duration-150">Help Center & Contact</Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-slate-500 font-medium">
          <span>© 2026 Aquapure Water Systems Private Limited. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-secondary hover:underline transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-secondary hover:underline transition-colors">Terms of Service</Link>
            <Link to="/warranty" className="hover:text-secondary hover:underline transition-colors">Warranty Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

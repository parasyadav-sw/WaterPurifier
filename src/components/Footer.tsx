import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t border-line/10 pt-16 pb-8 transition-colors duration-500">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-line/10">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 font-bold text-navy text-xl">
              <span className="logo-mark" aria-hidden="true" />
              Aquapure
            </Link>
            <p className="text-[14px] text-ink-soft leading-relaxed max-w-[240px]">
              Multi-stage water purification systems engineered for modern Indian households, offices, and heavy industrial plants.
            </p>
            <div className="mt-2 text-[13.5px] text-ink-soft flex flex-col gap-1.5">
              <span>📍 Bengaluru, Karnataka, India</span>
              <span>📞 +91 80 4983 2700</span>
              <span>✉️ support@aquapurewater.in</span>
            </div>
          </div>

          {/* Systems Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-bold text-ink-soft uppercase tracking-wider">Systems</h4>
            <div className="flex flex-col gap-3 text-[14.5px] text-navy">
              <Link to="/products/countertop-pro" className="hover:text-teal transition-colors">Countertop Pro</Link>
              <Link to="/products/whole-home" className="hover:text-teal transition-colors">Whole Home RO+UV</Link>
              <Link to="/products/under-sink-compact" className="hover:text-teal transition-colors">Under-Sink Compact</Link>
              <Link to="/products/water-softeners" className="hover:text-teal transition-colors">Water Softeners</Link>
              <Link to="/products" className="hover:text-teal transition-colors">View All Products →</Link>
            </div>
          </div>

          {/* Tech Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-bold text-ink-soft uppercase tracking-wider">Technology</h4>
            <div className="flex flex-col gap-3 text-[14.5px] text-navy">
              <Link to="/technologies/ro" className="hover:text-teal transition-colors">Reverse Osmosis (RO)</Link>
              <Link to="/technologies/uv" className="hover:text-teal transition-colors">Ultraviolet (UV)</Link>
              <Link to="/technologies/uf" className="hover:text-teal transition-colors">Ultra Filtration (UF)</Link>
              <Link to="/technologies/mineral-cartridge" className="hover:text-teal transition-colors">Alkaline Minerals</Link>
              <Link to="/technologies" className="hover:text-teal transition-colors">Our Science →</Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-bold text-ink-soft uppercase tracking-wider">Solutions</h4>
            <div className="flex flex-col gap-3 text-[14.5px] text-navy">
              <Link to="/water-problems" className="hover:text-teal transition-colors">High TDS Levels</Link>
              <Link to="/water-problems" className="hover:text-teal transition-colors">Hard Ground Water</Link>
              <Link to="/water-problems" className="hover:text-teal transition-colors">Iron & Rust Mud</Link>
              <Link to="/water-problems" className="hover:text-teal transition-colors">Bacteria / Pathogens</Link>
              <Link to="/water-problems" className="hover:text-teal transition-colors">Water Issues Guide →</Link>
            </div>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[12px] font-bold text-ink-soft uppercase tracking-wider">Support</h4>
            <div className="flex flex-col gap-3 text-[14.5px] text-navy">
              <Link to="/book-water-test" className="hover:text-teal transition-colors">Book Free Water Test</Link>
              <Link to="/book-service" className="hover:text-teal transition-colors">Schedule Installation</Link>
              <Link to="/book-service" className="hover:text-teal transition-colors">Register AMC Plan</Link>
              <Link to="/warranty" className="hover:text-teal transition-colors">Warranty Registration</Link>
              <Link to="/contact" className="hover:text-teal transition-colors">Help Center & Contact</Link>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12.5px] text-ink-soft">
          <span>© 2026 Aquapure Water Systems Private Limited. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:underline">Terms of Service</Link>
            <Link to="/warranty" className="hover:underline">Warranty Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

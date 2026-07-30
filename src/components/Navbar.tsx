import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone, Droplet } from 'lucide-react';

interface NavItem {
  label: string;
  path?: string;
  dropdown?: { label: string; path: string }[];
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    {
      label: "Products",
      path: "/products",
      dropdown: [
        { label: "Countertop Pro", path: "/products/countertop-pro" },
        { label: "Whole Home RO+UV", path: "/products/whole-home" },
        { label: "Under-Sink Compact", path: "/products/under-sink-compact" },
        { label: "Commercial Filters", path: "/products/commercial-filters" },
        { label: "Industrial RO Plants", path: "/products/industrial-filters" },
        { label: "Water Softeners", path: "/products/water-softeners" }
      ]
    },
    {
      label: "Accessories",
      path: "/accessories",
      dropdown: [
        { label: "RO Membrane", path: "/accessories/ro-membrane" },
        { label: "Carbon Cartridge", path: "/accessories/carbon-cartridge" },
        { label: "Sediment Filter", path: "/accessories/sediment-filter" },
        { label: "UV Lamp", path: "/accessories/uv-lamp" },
        { label: "Booster Pump", path: "/accessories/booster-pump" }
      ]
    },
    {
      label: "Services",
      path: "/services",
      dropdown: [
        { label: "Installation Setup", path: "/services/installation" },
        { label: "AMC Packages", path: "/services/amc" },
        { label: "RO Repair", path: "/services/ro-repair" },
        { label: "Water Testing", path: "/services/water-testing" },
        { label: "Filter Replacement", path: "/services/filter-replacement" }
      ]
    },
    { label: "Industries", path: "/industries" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: '72px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(3,4,94,0.06)',
          boxShadow: scrolled ? '0 4px 20px rgba(3,4,94,0.08)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-5 lg:px-8">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-navy tracking-tight z-50">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Droplet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl">Aquapure</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.path && !item.dropdown ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-[13.5px] font-semibold rounded-lg transition-all duration-200 ${
                        isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-ink-soft hover:text-navy hover:bg-mist"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    className={`px-4 py-2 text-[13.5px] font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-200 ${
                      activeDropdown === item.label 
                        ? "text-primary bg-primary/10" 
                        : "text-ink-soft hover:text-navy hover:bg-mist"
                    }`}
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}

                {/* DESKTOP DROPDOWN */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                      >
                        <div className="w-64 bg-white rounded-2xl border border-line/10 shadow-xl overflow-hidden py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.path}
                              className="block px-5 py-3 text-[13.5px] font-medium text-ink-soft hover:text-navy hover:bg-mist/50 transition-colors mx-2 rounded-lg"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+918049832700" className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-navy hover:bg-mist rounded-lg transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 80 4983 2700</span>
            </a>
            <Link to="/book-water-test" className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-[13px] font-bold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Free Water Test
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-11 h-11 rounded-xl flex items-center justify-center text-navy hover:bg-mist transition-colors z-50"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span 
                className="w-full h-0.5 bg-navy rounded-full transition-all duration-300 origin-center"
                style={{
                  transform: isOpen ? 'rotate(45deg) translateY(7.5px)' : 'none'
                }}
              />
              <span 
                className="w-full h-0.5 bg-navy rounded-full transition-all duration-300"
                style={{
                  opacity: isOpen ? 0 : 1,
                  transform: isOpen ? 'scaleX(0)' : 'none'
                }}
              />
              <span 
                className="w-full h-0.5 bg-navy rounded-full transition-all duration-300 origin-center"
                style={{
                  transform: isOpen ? 'rotate(-45deg) translateY(-7.5px)' : 'none'
                }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-navy-deep/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white z-50 lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="h-full flex flex-col">
              {/* Mobile Header */}
              <div className="h-[72px] flex items-center justify-between px-5 border-b border-line/10">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 font-heading font-extrabold text-navy">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Droplet className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">Aquapure</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-xl bg-mist flex items-center justify-center text-navy"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="flex-1 overflow-y-auto py-4 px-5">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.path && !item.dropdown ? (
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center py-3.5 text-[16px] font-semibold text-navy hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                            className="flex items-center justify-between w-full py-3.5 text-[16px] font-semibold text-navy hover:text-primary transition-colors"
                          >
                            {item.label}
                            <ChevronDown
                              className="w-5 h-5 text-ink-soft transition-transform duration-300"
                              style={{
                                transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)'
                              }}
                            />
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.label && item.dropdown && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-2 border-l-2 border-primary/20 flex flex-col gap-1 mb-2">
                                  <Link
                                    to={item.path!}
                                    onClick={() => setIsOpen(false)}
                                    className="py-2.5 px-3 text-[14px] font-semibold text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                  >
                                    View All {item.label}
                                  </Link>
                                  {item.dropdown.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      to={subItem.path}
                                      onClick={() => setIsOpen(false)}
                                      className="py-2.5 px-3 text-[14px] font-medium text-ink-soft hover:text-navy hover:bg-mist rounded-lg transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Mobile Footer CTA */}
              <div className="p-5 border-t border-line/10 bg-mist/30">
                <a 
                  href="tel:+918049832700" 
                  className="flex items-center justify-center gap-2 w-full py-3 mb-3 bg-white rounded-xl border border-line/10 text-navy font-semibold text-[14px] hover:bg-mist transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 80 4983 2700
                </a>
                <Link
                  to="/book-water-test"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-bold text-[14px] rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  Book Free Water Test
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Droplet } from 'lucide-react';

interface NavItem {
  label: string;
  path?: string;
  dropdown?: { label: string; path: string }[];
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    {
      label: "Products",
      path: "/products",
      dropdown: [
        { label: "Domestic RO+UV", path: "/products/domestic-filters" },
        { label: "Commercial Filters", path: "/products/commercial-filters" },
        { label: "Industrial RO Plants", path: "/products/industrial-filters" },
        { label: "RO Systems", path: "/products?filter=ro" },
        { label: "UV Purifiers", path: "/products?filter=uv" },
        { label: "UF Gravity Filters", path: "/products?filter=uf" },
        { label: "Countertop Models", path: "/products/countertop-pro" },
        { label: "Wall Mounted", path: "/products/wall-mounted-filters" },
        { label: "Whole House Systems", path: "/products/whole-home" },
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
        { label: "Booster Pump", path: "/accessories/booster-pump" },
        { label: "TDS Controller", path: "/accessories/tds-controller" },
        { label: "Storage Tank", path: "/accessories/storage-tank" },
        { label: "Mineralizer Cartridge", path: "/accessories/mineral-cartridge" }
      ]
    },
    {
      label: "Services",
      path: "/services",
      dropdown: [
        { label: "Installation Setup", path: "/services/installation" },
        { label: "AMC Packages", path: "/services/amc" },
        { label: "RO Diagnostics/Repair", path: "/services/ro-repair" },
        { label: "Water Testing", path: "/services/water-testing" },
        { label: "Cartridge Replacement", path: "/services/filter-replacement" },
        { label: "Leak Repairs", path: "/services/leak-repair" }
      ]
    },
    {
      label: "Industries",
      path: "/industries",
      dropdown: [
        { label: "Apartments & Homes", path: "/industries/home" },
        { label: "Offices & Pantries", path: "/industries/office" },
        { label: "Hospitals & Clinics", path: "/industries/hospital" },
        { label: "Restaurants & Cafes", path: "/industries/restaurant" },
        { label: "Hotels & Stays", path: "/industries/hotel" },
        { label: "Schools & Colleges", path: "/industries/school" },
        { label: "Factories & Warehouses", path: "/industries/factory" }
      ]
    },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-paper/85 backdrop-blur-md border-b border-line/10 transition-all duration-300">
      <div className="wrap h-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2.5 font-heading font-extrabold text-navy text-xl tracking-tight">
          <span className="logo-mark" aria-hidden="true" />
          Aquapure
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group py-2"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.path && !item.dropdown ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[14px] font-medium text-ink-soft hover:text-navy transition-colors duration-150 ${
                      isActive ? "text-navy font-semibold border-b-2 border-primary pb-1" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  className={`text-[14px] font-medium text-ink-soft hover:text-navy flex items-center gap-1 transition-colors duration-150 ${
                    activeDropdown === item.label ? "text-navy" : ""
                  }`}
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              )}

              {/* DROPDOWN MENU */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-radius-sm bg-paper/95 border border-line/10 shadow-md backdrop-blur-lg overflow-hidden py-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          className="block px-5 py-2.5 text-[13.5px] font-semibold text-ink-soft hover:text-navy hover:bg-mist/30 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA ACTIONS */}
        <div className="flex items-center gap-3">
          <Link to="/book-water-test" className="hidden sm:inline-flex btn-primary btn-compact">
            Free Water Test
          </Link>
          <Link to="/book-service" className="hidden md:inline-flex btn-secondary btn-compact">
            Book Service
          </Link>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 rounded-full border border-line/10 flex items-center justify-center text-navy hover:bg-mist"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 bg-paper z-40 lg:hidden overflow-y-auto px-6 py-8"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-line/10 pb-4">
                  {item.path && !item.dropdown ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-bold text-navy"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="text-xl font-bold text-navy flex items-center justify-between w-full"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown Sub-links */}
                      {activeDropdown === item.label && item.dropdown && (
                        <div className="mt-3 pl-4 flex flex-col gap-3.5 border-l border-teal/20">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="text-[15px] font-semibold text-ink-soft hover:text-navy"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Call-to-actions inside mobile menu */}
              <div className="flex flex-col gap-3 mt-4">
                <Link
                  to="/book-water-test"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Book Free Water Test
                </Link>
                <Link
                  to="/book-service"
                  onClick={() => setIsOpen(false)}
                  className="btn-secondary w-full justify-center"
                >
                  Book Professional Service
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

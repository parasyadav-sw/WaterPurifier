import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Droplet, ArrowRight, ShieldCheck, HelpCircle, Star, Users, Leaf, Hourglass } from 'lucide-react';
import { TdsSimulator } from '../components/TdsSimulator';
import { FiltrationExplorer } from '../components/FiltrationExplorer';
import { SavingsCalculator } from '../components/SavingsCalculator';
import { SpecsCompareModal } from '../components/SpecsCompareModal';
import { useBooking } from '../context/BookingContext';

export const Home: React.FC = () => {
  const { openBooking } = useBooking();
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [faqActive, setFaqActive] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqActive(faqActive === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-10"
    >
      {/* 1. HERO BANNER */}
      <section className="wrap pt-6 pb-12">
        <div className="hero-frame relative rounded-radius-lg overflow-hidden bg-mist p-6 md:p-14 lg:p-20 min-h-[500px] md:min-h-[580px] flex items-center shadow-sm">
          {/* Autoplay Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="videos/hero background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to keep text legible */}
          <div className="hero-video-overlay absolute inset-0 z-20 pointer-events-none" />

          {/* Text content */}
          <div className="relative z-30 max-w-2xl flex flex-col items-start">
            <span className="hero-badge inline-flex items-center gap-2 bg-paper/60 backdrop-blur-md border border-paper/40 text-teal-deep text-[13px] font-bold py-1.5 px-4 rounded-full mb-6">
              <Droplet className="w-3.5 h-3.5" />
              Lab-Verified, 99.9% Pure
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight mb-5">
              Turn ordinary tap <br />
              into liquid clarity
            </h1>
            <p className="text-base md:text-lg text-ink-soft leading-relaxed mb-8 max-w-lg">
              Aquapure's seven-stage RO and UV system strips out lead, microplastics, and arsenic — while keeping the vital minerals your body needs to thrive.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link to="/products" className="btn-primary">
                Shop Systems <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#tds-section" className="btn-ghost">
                Analyze Your Water
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS OVERVIEW */}
      <section className="wrap py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 border-line/10 divide-y sm:divide-y-0 sm:divide-x divide-line/10">
          {[
            { value: "3.6M+", label: "Litres Purified Daily" },
            { value: "99.9%", label: "Contaminants Removed" },
            { value: "50,000+", label: "Homes Fitted" },
            { value: "< 2 hrs", label: "Standard Install Time" }
          ].map((stat, idx) => (
            <div key={idx} className="stat-card p-6 flex flex-col gap-2 border-l border-line/15 first:border-l-0">
              <span className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">{stat.value}</span>
              <span className="text-[11.5px] font-bold text-ink-soft uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE TDS SIMULATOR */}
      <section id="tds-section" className="section bg-mist/10 border-y border-line/5 my-10">
        <div className="wrap">
          <div className="section-head mb-12">
            <div>
              <span className="eyebrow">Interactive Diagnostics</span>
              <h2 className="text-3xl font-bold text-navy mt-2">See what's in your tap water</h2>
            </div>
            <p className="text-ink-soft max-w-md">
              Select your water source and adjust the TDS (Total Dissolved Solids) level to visualize impurities and view the recommended filtration outcome.
            </p>
          </div>
          <TdsSimulator />
        </div>
      </section>

      {/* 4. 7-STAGE FILTRATION EXPLORER */}
      <section className="section my-10">
        <div className="wrap">
          <div className="section-head mb-12">
            <div>
              <span className="eyebrow">Engineering</span>
              <h2 className="text-3xl font-bold text-navy mt-2">Architected for genuinely clean water</h2>
            </div>
            <p className="text-ink-soft max-w-md">
              Every unit is built around one core idea: strip out everything that harms you, leave in exactly what helps you.
            </p>
          </div>
          <FiltrationExplorer />
          <div className="text-center mt-10">
            <Link to="/technologies" className="link-arrow">
              Learn about our filtration science →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS SHOWCASE */}
      <section className="section bg-mist/10 border-y border-line/5 my-10">
        <div className="wrap">
          <div className="section-head mb-12">
            <div>
              <span className="eyebrow">Product Range</span>
              <h2 className="text-3xl font-bold text-navy mt-2">Find the right system for your home</h2>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button
                onClick={() => setIsCompareOpen(true)}
                className="link-arrow font-bold"
              >
                Compare specifications side-by-side
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.article variants={cardVariants} className="product-card bg-mist/35 border border-line/10 rounded-radius overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="product-badge absolute top-4 left-4 bg-paper/90 border border-line/10 text-navy text-[11px] font-bold py-1 px-3 rounded-radius-sm">
                Zero Setup
              </div>
              <div className="h-48 bg-mist-deep/40 flex items-center justify-center p-6">
                <svg viewBox="0 0 200 200" fill="none" className="h-full">
                  <rect x="65" y="40" width="70" height="120" rx="8" fill="var(--mist-deep)" stroke="var(--teal)" strokeWidth="2" />
                  <rect x="75" y="55" width="50" height="40" rx="4" fill="var(--paper)" />
                  <circle cx="100" cy="75" r="10" fill="var(--teal)" opacity="0.3" />
                  <circle cx="100" cy="75" r="5" fill="var(--teal)" />
                  <path d="M100 120 C100 130 115 130 115 140" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="card-tag text-xs font-bold text-teal-deep">Compact</span>
                <h3 className="text-lg font-bold text-navy mt-1 mb-2">Countertop Pro</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed mb-6 flex-grow">
                  No plumber needed. Sits gracefully on your kitchen counter, offering instant purified water with single-touch dispense controls.
                </p>
                <div className="flex justify-between items-center border-t border-line/10 pt-4 mt-auto">
                  <span className="text-lg font-bold text-navy">₹6,999</span>
                  <button onClick={() => openBooking("Countertop Pro")} className="btn-primary btn-compact">
                    Book Demo
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Card 2 - FEATURED */}
            <motion.article variants={cardVariants} className="product-card featured-product bg-paper border-2 border-teal rounded-radius overflow-hidden flex flex-col justify-between shadow-md hover:shadow-lg transition-all duration-300">
              <div className="product-badge absolute top-4 left-4 bg-teal text-white text-[11px] font-bold py-1 px-3 rounded-radius-sm">
                Best Seller
              </div>
              <div className="h-48 bg-mist/30 flex items-center justify-center p-6">
                <svg viewBox="0 0 200 200" fill="none" className="h-full">
                  <rect x="55" y="30" width="90" height="140" rx="12" fill="var(--mist)" stroke="var(--teal)" strokeWidth="2.5" />
                  <line x1="55" y1="75" x2="145" y2="75" stroke="var(--teal)" strokeWidth="2" />
                  <circle cx="75" cy="52" r="8" fill="var(--gold)" opacity="0.8" />
                  <circle cx="100" cy="52" r="8" fill="var(--teal)" opacity="0.8" />
                  <circle cx="125" cy="52" r="8" fill="var(--navy)" opacity="0.8" />
                  <rect x="75" y="90" width="50" height="60" rx="6" fill="var(--paper)" />
                </svg>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="card-tag text-xs font-bold text-teal-deep">Complete Security</span>
                <h3 className="text-lg font-bold text-navy mt-1 mb-2">Whole Home RO+UV</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed mb-6 flex-grow">
                  Connects directly to your primary overhead supply line. Purifies every single tap in the house, from showers to kitchen taps.
                </p>
                <div className="flex justify-between items-center border-t border-line/10 pt-4 mt-auto">
                  <span className="text-lg font-bold text-navy">₹14,499</span>
                  <button onClick={() => openBooking("Whole Home RO+UV")} className="btn-primary btn-compact">
                    Book Demo
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Card 3 */}
            <motion.article variants={cardVariants} className="product-card bg-mist/35 border border-line/10 rounded-radius overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="product-badge absolute top-4 left-4 bg-paper/90 border border-line/10 text-navy text-[11px] font-bold py-1 px-3 rounded-radius-sm">
                Out of Sight
              </div>
              <div className="h-48 bg-mist-deep/40 flex items-center justify-center p-6">
                <svg viewBox="0 0 200 200" fill="none" className="h-full">
                  <rect x="70" y="50" width="60" height="100" rx="6" fill="var(--mist-deep)" stroke="var(--line)" strokeWidth="2" />
                  <path d="M120 70 H135 V90" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="100" cy="85" r="15" fill="var(--paper)" />
                </svg>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="card-tag text-xs font-bold text-teal-deep">Hidden Fit</span>
                <h3 className="text-lg font-bold text-navy mt-1 mb-2">Under-Sink Compact</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed mb-6 flex-grow">
                  Tucks away neatly inside your cabinet. Paired with a premium brushed-metal faucet mounted beside your main sink faucet.
                </p>
                <div className="flex justify-between items-center border-t border-line/10 pt-4 mt-auto">
                  <span className="text-lg font-bold text-navy">₹9,299</span>
                  <button onClick={() => openBooking("Under-Sink Compact")} className="btn-primary btn-compact">
                    Book Demo
                  </button>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ECO SAVINGS CALCULATOR */}
      <section className="section my-10">
        <div className="wrap">
          <div className="section-head mb-12">
            <div>
              <span className="eyebrow">Eco-Impact Calculator</span>
              <h2 className="text-3xl font-bold text-navy mt-2">Good for your body, better for the earth</h2>
            </div>
            <p className="text-ink-soft max-w-md">
              See how much you save on filter refills, single-use plastics, and money by switching from plastic bottled water to Aquapure.
            </p>
          </div>
          <SavingsCalculator />
          <div className="text-center mt-10">
            <Link to="/water-problems" className="link-arrow">
              Diagnose your local water issues →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US - ACCREDITATIONS */}
      <section className="section bg-mist/5 my-10">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow">Why Aquapure</span>
            <h2 className="text-3xl font-bold text-navy mt-2">Engineered for purity, trusted by thousands</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-paper border border-line/10 rounded-radius flex flex-col gap-4 text-center items-center shadow-sm">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center text-teal">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy">Lab-Verified Purity</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                Independently tested against 60+ contaminants, verifying a 99.9% elimination efficiency for heavy metals and biological pathogens.
              </p>
            </div>
            <div className="p-8 bg-paper border border-line/10 rounded-radius flex flex-col gap-4 text-center items-center shadow-sm">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Hourglass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy">Proactive Filter Shipments</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                Our smart alert systems predict replacement intervals, shipping new cartridges before old ones degrade, ensuring constant safety.
              </p>
            </div>
            <div className="p-8 bg-paper border border-line/10 rounded-radius flex flex-col gap-4 text-center items-center shadow-sm">
              <div className="w-12 h-12 bg-success-bg rounded-full flex items-center justify-center text-success">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-navy">Eco-Friendly Hydration</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">
                Say goodbye to single-use water cans and bottles. We help you reduce plastic waste and save up to ₹20,000 annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CARE PLANS BANNER */}
      <section className="wrap my-14">
        <div className="cta-banner rounded-radius-lg p-8 md:p-14 lg:p-20 text-white flex flex-col items-start">
          <span className="eyebrow !text-white/80">Care Plans</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 max-w-xl">
            Never think about your filter again
          </h2>
          <p className="text-white/80 max-w-lg mb-8 text-[15px] leading-relaxed">
            Subscribe to auto-refills and get priority servicing — cartridges arrive at your door before they're due, accompanied by free technician installations.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => openBooking("Care Plan Subscription")} className="btn-light">
              Start a Care Plan
            </button>
            <Link to="/services" className="btn-outline-white">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL PREVIEW */}
      <section className="section bg-mist/10 border-y border-line/5 my-10">
        <div className="wrap">
          <div className="section-head mb-12">
            <div>
              <span className="eyebrow">User Reviews</span>
              <h2 className="text-3xl font-bold text-navy mt-2">What our customers say</h2>
            </div>
            <Link to="/testimonials" className="link-arrow">
              View all reviews
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Deshmukh", city: "Bengaluru", text: "The Whole Home filter solved our tiles staining and hair fall issues completely. Highly recommend their professional installation team.", rating: 5 },
              { name: "Priya Nair", city: "Mumbai", text: "Countertop Pro is so portable and convenient. Perfect for rental apartments. The TDS levels dropped from 480 to 22 ppm instantly.", rating: 5 },
              { name: "Vikram Sen", city: "Delhi", text: "We subscribed to their annual maintenance contract (AMC). The filters arrive on time and their service technicians are extremely helpful.", rating: 5 }
            ].map((test, idx) => (
              <div key={idx} className="p-6 bg-paper border border-line/10 rounded-radius shadow-sm flex flex-col justify-between">
                <p className="text-[14px] text-ink-soft italic leading-relaxed mb-6">"{test.text}"</p>
                <div className="flex items-center justify-between border-t border-line/5 pt-4 mt-auto">
                  <div className="flex flex-col">
                    <span className="font-bold text-navy text-[14px]">{test.name}</span>
                    <span className="text-[11.5px] text-ink-soft">{test.city}</span>
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQS PREVIEW */}
      <section className="section my-10">
        <div className="wrap max-w-4xl">
          <div className="text-center mb-12">
            <span className="eyebrow">Common Queries</span>
            <h2 className="text-3xl font-bold text-navy mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { q: "Which water purifier is best for borewell water?", a: "For borewell water, we recommend our Whole Home RO+UV or Under-Sink RO systems. Borewell water typically has high TDS (above 500 ppm) and heavy metal hardness, which can only be filtered down safely using an RO membrane." },
              { q: "Do you offer free installations?", a: "Yes, professional installation is free with every new purifier system purchased. Our technician will arrive within 2 hours of product delivery to mount and calibrate the system." },
              { q: "How does the active mineralizer cartridge work?", a: "Standard RO systems can lower water pH, stripping beneficial minerals. Our Active Mineralizer reintroduces controlled quantities of natural calcium and magnesium, restoring the pH balance to a healthy alkaline range (7.5 - 8.0) and enhancing the taste." },
              { q: "What is your AMC contract?", a: "Our Annual Maintenance Contract (AMC) is a yearly plan starting at ₹3,999. It covers three scheduled cartridge replacement visits, sanitizations, and unlimited breakdown repair requests, including all parts and labor costs." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-line/10 rounded-radius-sm overflow-hidden bg-mist/10">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-navy hover:bg-mist/30 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-teal font-normal text-xl">{faqActive === idx ? "−" : "+"}</span>
                </button>
                {faqActive === idx && (
                  <div className="p-5 border-t border-line/10 text-[14.5px] text-ink-soft leading-relaxed bg-paper">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/faq" className="link-arrow">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Specs Comparison Modal */}
      <SpecsCompareModal isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
    </motion.div>
  );
};

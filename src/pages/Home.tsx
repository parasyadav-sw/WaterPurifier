import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Droplet, ArrowRight, ShieldCheck, HelpCircle, Star, Users, Leaf, Hourglass, 
  Check, X, Info, Award, Shield, Sparkles, Zap, CheckCircle2 
} from 'lucide-react';
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
      className="pb-10 bg-mist min-h-screen text-ink font-sans"
    >
      {/* 1. FULL-WIDTH HERO VIDEO SECTION */}
      <section className="relative w-full h-[90vh] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Autoplay Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/herobanner/watermark-removed-Create_an_ultra_realistic_D_c.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle dark overlay for text readability (45% opacity) */}
        <div className="absolute inset-0 bg-slate-950/45 z-10 pointer-events-none" />

        {/* Content Container with smooth fade-in animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center text-white"
        >
          <span className="hero-badge inline-flex items-center gap-2 bg-success/15 border border-success/30 text-success text-[12.5px] font-bold py-2 px-5 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-ping" />
            Lab-Verified, 99.9% Contaminant Removal
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-sm">
            Pure water, <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              engineered for life
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-200/95 leading-relaxed mb-10 max-w-3xl font-medium font-accent drop-shadow-sm">
            Aquapure's intelligent seven-stage RO and UV system strips out lead, microplastics, and arsenic — while restoring the vital alkaline minerals your body needs to thrive.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/products" className="btn-primary flex items-center gap-2 text-sm sm:text-base px-6 py-3">
              Shop Systems <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#tds-section" className="btn-outline-white text-sm sm:text-base px-6 py-3">
              Analyze Water Quality
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. TRUST BAR & STATS */}
      <section className="wrap pb-14 pt-4">
        <div className="bg-paper border border-line rounded-radius p-6 md:p-10 shadow-sm">
          {/* Accreditation Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 border-b border-line pb-8 mb-8 opacity-90">
            <span className="text-[12px] font-bold text-ink-soft uppercase tracking-wider">Certified by standards:</span>
            
            <div className="flex items-center gap-2 text-navy font-bold text-[14px]">
              <Award className="w-5 h-5 text-success" />
              <span>WQA Gold Seal</span>
            </div>
            <div className="flex items-center gap-2 text-navy font-bold text-[14px]">
              <ShieldCheck className="w-5 h-5 text-success" />
              <span>NSF/ANSI 58</span>
            </div>
            <div className="flex items-center gap-2 text-navy font-bold text-[14px]">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>ISI Certified</span>
            </div>
          </div>

          {/* Core metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-line">
            {[
              { value: "3.6M+", label: "Liters Purified Daily" },
              { value: "99.9%", label: "Contaminants Removed" },
              { value: "50,000+", label: "Homes Protected" },
              { value: "5-Year", label: "Gold AMC Warranty" }
            ].map((stat, idx) => (
              <div key={idx} className="stat-card p-4 md:p-6 flex flex-col gap-2 border-l border-line first:border-l-0 text-center">
                <span className="text-3xl md:text-4xl font-heading font-extrabold text-navy tracking-tight">{stat.value}</span>
                <span className="text-[11.5px] font-bold text-ink-soft uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TDS SIMULATOR */}
      <section id="tds-section" className="section border-y border-line/5 bg-paper/30 my-10">
        <div className="wrap">
          <div className="section-head mb-12">
            <div>
              <span className="eyebrow text-primary">Interactive Diagnostics</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mt-2">See what's in your tap water</h2>
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
              <span className="eyebrow text-primary">Engineering Purity</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mt-2">Architected for genuinely clean water</h2>
            </div>
            <p className="text-ink-soft max-w-md font-medium">
              Every unit is built around one core idea: strip out everything that harms you, restoring natural alkaline mineral hydration.
            </p>
          </div>
          <FiltrationExplorer />
        </div>
      </section>

      {/* 5. SPECIFICATION COMPARISON MATRIX */}
      <section className="section border-y border-line/5 bg-paper/30 my-10">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow text-primary">Water Quality Standards</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mt-2">How Aquapure Compares</h2>
            <p className="text-ink-soft max-w-md mx-auto mt-2 text-[15px]">
              A side-by-side technical breakdown of contaminants, mineral preservation, and smart diagnostic support.
            </p>
          </div>
          
          <div className="comparison-scroll shadow-sm bg-paper rounded-radius overflow-hidden border border-line">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="font-heading">Purity Metric</th>
                  <th className="font-heading">Raw Tap / Borewell</th>
                  <th className="font-heading">Traditional RO Systems</th>
                  <th className="highlight-col font-heading text-primary bg-primary/5">Aquapure Smart Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Lead & Heavy Metals</strong></td>
                  <td className="text-danger flex items-center gap-2"><X className="w-4 h-4" /> Unfiltered (Toxic Risk)</td>
                  <td>90% filtration (Acidic residue)</td>
                  <td className="highlight-col bg-primary/5 text-success font-semibold">99.9% filtration (Verified)</td>
                </tr>
                <tr>
                  <td><strong>Microplastics & PFAS</strong></td>
                  <td className="text-danger"><X className="w-4 h-4 inline mr-2" /> Present in pipes</td>
                  <td>Partial removal</td>
                  <td className="highlight-col bg-primary/5 text-success font-semibold">100% removal (0.0001µm mesh)</td>
                </tr>
                <tr>
                  <td><strong>Essential Minerals</strong></td>
                  <td>Hard scaling (CaCO3 build-up)</td>
                  <td className="text-danger"><X className="w-4 h-4 inline mr-2" /> Fully Stripped (Demineralized)</td>
                  <td className="highlight-col bg-primary/5 text-success font-semibold">Restored Ca/Mg (pH 7.5 - 8.0)</td>
                </tr>
                <tr>
                  <td><strong>Water Waste Ratio</strong></td>
                  <td>0% waste (No filtering)</td>
                  <td>High waste (Up to 3:1 ratio)</td>
                  <td className="highlight-col bg-primary/5 text-navy font-semibold">Eco-recovery (1:1 ratio)</td>
                </tr>
                <tr>
                  <td><strong>Diagnostics & Alerts</strong></td>
                  <td>None</td>
                  <td>Manual calendar reminders</td>
                  <td className="highlight-col bg-primary/5 text-navy font-semibold">Smart prediction + Auto-ship</td>
                </tr>
                <tr>
                  <td><strong>Annual Maintenance Cost</strong></td>
                  <td>₹0 (High medical risk)</td>
                  <td>₹6,000+ (Markup parts + labor)</td>
                  <td className="highlight-col bg-primary/5 text-primary font-bold">₹3,999 (Subscription covers all)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. PRICING & SUBSCRIPTIONS */}
      <section className="section my-10">
        <div className="wrap">
          <div className="text-center mb-12">
            <span className="eyebrow text-primary">Pricing Plans</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mt-2">Transparent pricing for peace of mind</h2>
            <p className="text-ink-soft max-w-md mx-auto mt-2 text-[15px]">
              Select a system configuration or secure your home with our predictable annual care plan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1 */}
            <div className="p-8 bg-paper border border-line rounded-radius flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="text-xs font-bold text-teal-deep uppercase tracking-wider font-heading">Countertop Model</span>
                <h3 className="text-xl font-bold text-navy mt-2 mb-1">Countertop Pro</h3>
                <p className="text-sm text-ink-soft mb-6 leading-relaxed">Perfect for rental apartments, couples, and small kitchens.</p>
                <div className="text-3xl font-heading font-extrabold text-navy mb-6">₹6,999 <span className="text-xs font-normal text-ink-soft">one-time</span></div>
                
                <ul className="flex flex-col gap-3 text-[14px] text-ink-soft mb-8">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Zero plumbing setup needed</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Real-time TDS digital screen</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> 4L clean storage capacity</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> 1-year comprehensive warranty</li>
                </ul>
              </div>
              <button onClick={() => openBooking("Countertop Pro")} className="btn-secondary w-full">Book Free Demo</button>
            </div>

            {/* Plan 2 - Featured */}
            <div className="p-8 bg-paper border-2 border-primary rounded-radius flex flex-col justify-between shadow-md relative hover:shadow-lg transition-all duration-200">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-[11px] font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                Best Seller
              </div>
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider font-heading">Whole House Security</span>
                <h3 className="text-xl font-bold text-navy mt-2 mb-1">Whole Home RO+UV</h3>
                <p className="text-sm text-ink-soft mb-6 leading-relaxed">Pure water supply tapped directly to every faucet in the house.</p>
                <div className="text-3xl font-heading font-extrabold text-navy mb-6">₹14,499 <span className="text-xs font-normal text-ink-soft">one-time</span></div>
                
                <ul className="flex flex-col gap-3 text-[14px] text-ink-soft mb-8">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Connects to primary overhead tank</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Purifies all faucets, showers & taps</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> High-speed 15L/hr filtration output</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Eco-water recovery system</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Free professional installation</li>
                </ul>
              </div>
              <button onClick={() => openBooking("Whole Home RO+UV")} className="btn-primary w-full">Book Free Demo</button>
            </div>

            {/* Plan 3 */}
            <div className="p-8 bg-paper border border-line rounded-radius flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200">
              <div>
                <span className="text-xs font-bold text-gold-deep uppercase tracking-wider font-heading">Auto-Refill AMC Plan</span>
                <h3 className="text-xl font-bold text-navy mt-2 mb-1">Annual Care AMC</h3>
                <p className="text-sm text-ink-soft mb-6 leading-relaxed">Predictive filter shipments and free certified engineering visits.</p>
                <div className="text-3xl font-heading font-extrabold text-navy mb-6">₹3,999 <span className="text-xs font-normal text-ink-soft">/ year</span></div>
                
                <ul className="flex flex-col gap-3 text-[14px] text-ink-soft mb-8">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Replacement filters auto-shipped</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> 2 scheduled health-audit visits</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> 100% parts & membrane coverage</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-success" /> Priority 2-hour technician repairs</li>
                </ul>
              </div>
              <button onClick={() => openBooking("Annual AMC Subscription")} className="btn-secondary w-full">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ECO SAVINGS CALCULATOR */}
      <section className="section bg-paper/30 border-y border-line/5 my-10">
        <div className="wrap">
          <div className="section-head mb-12">
            <div>
              <span className="eyebrow text-primary">Eco-Impact Calculator</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mt-2">Good for your health, better for the earth</h2>
            </div>
            <p className="text-ink-soft max-w-md">
              Calculate how much you save on filter refills, single-use plastic bottles, and money by switching from canned water to Aquapure.
            </p>
          </div>
          <SavingsCalculator />
        </div>
      </section>

      {/* 8. CARE PLANS CALL TO ACTION */}
      <section className="wrap my-14">
        <div className="cta-banner rounded-radius-lg p-8 md:p-14 lg:p-16 text-white bg-gradient-to-br from-navy to-navy-deep border border-navy-deep shadow-lg flex flex-col items-start relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero/cta-banner-bg.jpg" 
              alt="" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl pointer-events-none z-10" />
          <span className="eyebrow !text-secondary font-bold relative z-20">Annual Care Subscription</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white mt-4 mb-4 max-w-xl relative z-20">
            Never think about your water filter again.
          </h2>
          <p className="text-slate-400 max-w-lg mb-8 text-[15px] leading-relaxed relative z-20">
            Subscribe to auto-refills and get priority servicing — cartridges arrive at your door before they're due, accompanied by free technician installations.
          </p>
          <div className="flex flex-wrap gap-4 relative z-20">
            <button onClick={() => openBooking("Care Plan Subscription")} className="btn-light">
              Start a Care Plan
            </button>
            <Link to="/services" className="btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL PREVIEW */}
      <section className="section border-y border-line/5 bg-paper/30 my-10">
        <div className="wrap">
          <div className="section-head mb-12">
            <div>
              <span className="eyebrow text-primary">User Reviews</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mt-2">What our customers say</h2>
            </div>
            <Link to="/testimonials" className="link-arrow text-primary">
              View all reviews
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Deshmukh", city: "Bengaluru", text: "The Whole Home filter solved our tiles staining and hair fall issues completely. Highly recommend their professional installation team.", rating: 5 },
              { name: "Priya Nair", city: "Mumbai", text: "Countertop Pro is so portable and convenient. Perfect for rental apartments. The TDS levels dropped from 480 to 22 ppm instantly.", rating: 5 },
              { name: "Vikram Sen", city: "Delhi", text: "We subscribed to their annual maintenance contract (AMC). The filters arrive on time and their service technicians are extremely helpful.", rating: 5 }
            ].map((test, idx) => (
              <div key={idx} className="p-6 bg-paper border border-line rounded-radius shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <p className="text-[14px] text-ink-soft italic leading-relaxed mb-6 font-medium">"{test.text}"</p>
                <div className="flex items-center justify-between border-t border-line pt-4 mt-auto">
                  <div className="flex flex-col">
                    <span className="font-bold text-navy text-[14px]">{test.name}</span>
                    <span className="text-[11.5px] text-ink-soft">{test.city}</span>
                  </div>
                  <div className="flex gap-0.5 text-secondary">
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
            <span className="eyebrow text-primary">Common Queries</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { q: "Which water purifier is best for borewell water?", a: "For borewell water, we recommend our Whole Home RO+UV or Under-Sink RO systems. Borewell water typically has high TDS (above 500 ppm) and heavy metal hardness, which can only be filtered down safely using an RO membrane." },
              { q: "Do you offer free installations?", a: "Yes, professional installation is free with every new purifier system purchased. Our technician will arrive within 2 hours of product delivery to mount and calibrate the system." },
              { q: "How does the active mineralizer cartridge work?", a: "Standard RO systems can lower water pH, stripping beneficial minerals. Our Active Mineralizer reintroduces controlled quantities of natural calcium and magnesium, restoring the pH balance to a healthy alkaline range (7.5 - 8.0) and enhancing the taste." },
              { q: "What is your AMC contract?", a: "Our Annual Maintenance Contract (AMC) is a yearly plan starting at ₹3,999. It covers three scheduled cartridge replacement visits, sanitizations, and unlimited breakdown repair requests, including all parts and labor costs." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-line rounded-radius-sm overflow-hidden bg-paper shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-navy hover:bg-mist transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-primary font-normal text-xl">{faqActive === idx ? "−" : "+"}</span>
                </button>
                {faqActive === idx && (
                  <div className="p-5 border-t border-line text-[14.5px] text-ink-soft leading-relaxed bg-mist/35 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/faq" className="link-arrow text-primary">
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

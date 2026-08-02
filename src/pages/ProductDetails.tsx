import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, Product } from '../data/products';
import { useBooking } from '../context/BookingContext';
import { ShieldCheck, Info, Check, HelpCircle, User, Phone, Mail, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openBooking } = useBooking();

  const [faqActive, setFaqActive] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [showAllSpecs, setShowAllSpecs] = useState(false);
  
  // Enquiry form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const product = useMemo(() => {
    return products.find((p) => p.slug === slug);
  }, [slug]);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setShowAllSpecs(false);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="wrap py-24 text-center">
        <h1 className="text-3xl font-bold text-navy mb-4">Product Not Found</h1>
        <p className="text-ink-soft mb-8">The requested water purification model could not be found in our database.</p>
        <Link to="/products" className="btn-primary">
          Back to Products Catalog
        </Link>
      </div>
    );
  }

  // Find related products
  const relatedProducts = products.filter((p) => product.relatedSlugs.includes(p.slug));

  const handleEnquirySubmit = (e: React.FormEvent) => {
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
      className="pb-16"
    >
      {/* Product Hero Details Section */}
      <section className="wrap py-8 sm:py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Gallery & Video (Left Column) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Main Product Image */}
            <div className="bg-white border border-line/10 rounded-radius overflow-hidden flex items-center justify-center min-h-[280px] sm:min-h-[340px] md:min-h-[420px] p-6 shadow-sm">
              <img 
                src={activeImage || product.image} 
                alt={product.name}
                className="max-h-[380px] md:max-h-[440px] max-w-full object-contain"
              />
            </div>

            {/* Gallery thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 hide-scrollbar">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`bg-white border-2 rounded-radius-sm h-16 w-16 sm:h-20 sm:w-20 overflow-hidden flex-shrink-0 cursor-pointer transition-all p-1 flex items-center justify-center ${
                      activeImage === img ? 'border-teal shadow-sm scale-95' : 'border-line/10 hover:border-teal/50'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${idx + 1}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Product Video Panel */}
            <div className="mt-3 sm:mt-4 rounded-radius overflow-hidden bg-mist relative min-h-[180px] sm:min-h-[220px] flex items-center shadow-inner">
              <video
                className="absolute inset-0 w-full h-full object-cover z-10 opacity-75 pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={`/${product.video}`} type="video/mp4" />
              </video>
              <div className="absolute inset-0 z-20 bg-navy/20" />
              <div className="relative z-30 p-8 text-white max-w-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-teal/80 px-2.5 py-1 rounded-full">Engineering Demo</span>
                <h4 className="text-lg font-bold text-white mt-2 mb-1">Watch purification in action</h4>
                <p className="text-xs text-white/80 leading-relaxed">See how our seven-stage chemical rejection filter isolates molecules.</p>
              </div>
            </div>
          </div>

          {/* Details & Action Panel (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="card-tag text-xs font-bold text-teal-deep uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy mt-2 mb-3 tracking-tight">
                {product.name}
              </h1>
              <p className="text-[14.5px] font-semibold text-teal-deep italic mb-4">
                "{product.tagline}"
              </p>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Card */}
            <div className="bg-mist/30 border border-line/10 rounded-radius p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-ink-soft uppercase tracking-wider">MRP (Inclusive of all taxes)</span>
                <span className="text-3xl font-extrabold text-navy mt-1">{product.price}</span>
              </div>
              <button
                onClick={() => openBooking(product.name)}
                className="btn-primary w-full justify-center"
              >
                Book Free Demo
              </button>
            </div>

            {/* Key Specs bullet box */}
            <div className="border border-line/10 rounded-radius p-6 bg-paper shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-navy mb-4">Core Specifications</h4>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-[14px] border-b border-line/5 pb-2">
                  <span className="text-ink-soft font-medium">Flow Capacity</span>
                  <span className="text-navy font-bold">{product.capacity}</span>
                </div>
                <div className="flex justify-between text-[14px] border-b border-line/5 pb-2">
                  <span className="text-ink-soft font-medium">Warranty Period</span>
                  <span className="text-navy font-bold">{product.warranty}</span>
                </div>
                <div className="flex justify-between text-[14px]">
                  <span className="text-ink-soft font-medium">TDS Tolerance Range</span>
                  <span className="text-navy font-bold">
                    {product.specifications["Input Water TDS Range"] || 
                     product.specifications["Recommended for TDS"] || 
                     product.specifications["TDS Range"] || 
                     product.specifications["Input TDS Tolerated"] || 
                     "Upto 2000 ppm"}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Variants (if any) */}
            {product.variants && product.variants.length > 0 && (
              <div className="border border-line/10 rounded-radius p-6 bg-paper shadow-sm">
                <h4 className="text-sm font-bold uppercase tracking-wider text-navy mb-3">Available Variants</h4>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => {
                    const isCurrent = v.slug === product.slug;
                    return (
                      <Link
                        key={v.materialId}
                        to={`/products/${v.slug}`}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          isCurrent
                            ? 'bg-navy text-white border-navy shadow-sm'
                            : 'bg-mist/10 text-ink-soft border-line/10 hover:bg-mist/25 hover:text-navy'
                        }`}
                      >
                        {v.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Features lists */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-navy mb-1">Product Features</h4>
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start text-[14.5px]">
                  <span className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center text-teal flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-ink-soft leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Specifications & Process Tabs */}
      <section className="wrap py-10 border-t border-line/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Full Specifications */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-navy mb-2">Technical Specifications</h3>
            <div className="border border-line/10 rounded-radius-sm overflow-hidden bg-paper">
              {Object.entries(product.specifications)
                .slice(0, showAllSpecs ? undefined : 8)
                .map(([key, val], idx) => (
                  <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 p-4 text-[14px] border-b border-line/5 last:border-b-0 hover:bg-mist/10 transition-colors gap-1 sm:gap-0">
                    <span className="text-ink-soft font-medium">{key}</span>
                    <span className="text-navy font-bold">{val}</span>
                  </div>
                ))}
            </div>
            {Object.keys(product.specifications).length > 8 && (
              <button
                type="button"
                onClick={() => setShowAllSpecs(!showAllSpecs)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-bold text-teal border border-teal/20 rounded-radius hover:bg-teal/5 transition-all w-full sm:w-auto self-start mt-2"
              >
                {showAllSpecs ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show All {Object.keys(product.specifications).length} Specifications <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Right Column: Purification Stages */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-navy mb-2">Purification Stages</h3>
            <div className="flex flex-col gap-3.5">
              {product.stages.map((stage, idx) => (
                <div key={idx} className="flex gap-3 items-start text-[14px]">
                  <span className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center text-gold font-mono font-bold text-[11px] flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-ink-soft leading-relaxed">{stage}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Benefits, Warranty & Installation Info */}
      <section className="section bg-mist/15 border-y border-line/5 my-8 sm:my-10">
        <div className="wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Benefits */}
          <div className="p-6 bg-paper border border-line/10 rounded-radius shadow-sm flex flex-col gap-3">
            <span className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-2">
              <ShieldCheck className="w-5.5 h-5.5" />
            </span>
            <h4 className="text-base font-bold text-navy">Health Benefits</h4>
            <ul className="flex flex-col gap-2 text-[13.5px] text-ink-soft list-disc pl-4">
              {product.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          {/* Installation process */}
          <div className="p-6 bg-paper border border-line/10 rounded-radius shadow-sm flex flex-col gap-3">
            <span className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
              <Info className="w-5.5 h-5.5" />
            </span>
            <h4 className="text-base font-bold text-navy">Installation Process</h4>
            <ol className="flex flex-col gap-2 text-[13.5px] text-ink-soft list-decimal pl-4">
              {product.installation.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>

          {/* Warranty */}
          <div className="p-6 bg-paper border border-line/10 rounded-radius shadow-sm flex flex-col gap-3">
            <span className="w-10 h-10 rounded-full bg-success-bg flex items-center justify-center text-success mb-2">
              <ShieldCheck className="w-5.5 h-5.5" />
            </span>
            <h4 className="text-base font-bold text-navy">Warranty Details</h4>
            <p className="text-[13.5px] text-ink-soft leading-relaxed">
              {product.warranty}
            </p>
            <p className="text-[12px] text-ink-soft italic border-t border-line/5 pt-3 mt-2">
              Covers spare parts, filters, pump adapters, and electrical faults. Excludes damage caused by plumbing accidents.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form & FAQ */}
      <section className="wrap py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* FAQs (Left Column) */}
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">Product FAQs</h3>
            <div className="flex flex-col gap-3">
              {product.faq.map((item, idx) => (
                <div key={idx} className="border border-line/10 rounded-radius-sm overflow-hidden bg-mist/5">
                  <button
                    onClick={() => setFaqActive(faqActive === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-navy hover:bg-mist/20 transition-colors"
                  >
                    <span>{item.q}</span>
                    <span className="text-teal font-normal text-lg">{faqActive === idx ? "−" : "+"}</span>
                  </button>
                  {faqActive === idx && (
                    <div className="p-4 border-t border-line/10 text-[14px] text-ink-soft leading-relaxed bg-paper">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry Form (Right Column) */}
          <div className="lg:col-span-5 bg-mist/20 border border-line/10 rounded-radius p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-navy mb-2">Instant Product Enquiry</h3>
            <p className="text-[13.5px] text-ink-soft mb-6">Need a custom quote or setup analysis? Submit your details and our expert will call back within 1 hour.</p>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 bg-paper border border-line/5 rounded-radius-sm p-4 shadow-sm"
              >
                <CheckCircleSuccess />
              </motion.div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="flex flex-col gap-4">
                
                <div className={`form-group ${errors.name ? "has-error" : ""}`}>
                  <label htmlFor="enq-name" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-teal" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="enq-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="input-text"
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>

                <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
                  <label htmlFor="enq-phone" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-teal" /> Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="enq-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="input-text"
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>

                <div className={`form-group ${errors.email ? "has-error" : ""}`}>
                  <label htmlFor="enq-email" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-teal" /> Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="enq-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@gmail.com"
                    className="input-text"
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="enq-msg" className="block text-xs font-bold text-navy mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-teal" /> Message / Requirements
                  </label>
                  <textarea
                    id="enq-msg"
                    rows={3}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Tell us about your source water or daily requirements..."
                    className="input-text !py-3 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-2"
                >
                  Send Enquiry Request
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="wrap py-8 sm:py-10 border-t border-line/10">
          <h3 className="text-lg sm:text-xl font-bold text-navy mb-5 sm:mb-6">Related Purification Systems</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {relatedProducts.map((rel) => (
              <div key={rel.slug} className="bg-mist/35 border border-line/10 rounded-radius p-6 flex flex-col justify-between hover:shadow-sm transition-all duration-300">
                <div>
                  {rel.image && (
                    <div className="h-32 rounded-radius-sm overflow-hidden mb-3">
                      <img src={rel.image} alt={rel.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <span className="card-tag text-[10px] font-bold text-teal-deep uppercase tracking-wider">{rel.tag}</span>
                  <h4 className="text-[16px] font-bold text-navy mt-1 mb-2 hover:text-teal transition-colors">
                    <Link to={`/products/${rel.slug}`}>{rel.name}</Link>
                  </h4>
                  <p className="text-[13px] text-ink-soft leading-relaxed mb-4">
                    {rel.tagline}
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-line/5 pt-4 mt-auto">
                  <span className="text-base font-extrabold text-navy">{rel.price}</span>
                  <Link to={`/products/${rel.slug}`} className="btn-ghost">
                    Configure Specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </motion.div>
  );
};

const CheckCircleSuccess: React.FC = () => (
  <div className="flex flex-col items-center py-4">
    <Check className="w-12 h-12 text-teal mb-3 bg-teal/10 rounded-full p-2" />
    <h4 className="text-base font-bold text-navy">Enquiry Submitted!</h4>
    <p className="text-xs text-ink-soft mt-1 leading-relaxed max-w-[240px]">
      Your request has been logged. An engineering representative will contact you shortly.
    </p>
  </div>
);

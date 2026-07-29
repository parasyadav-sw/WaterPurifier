import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { BookingProvider } from './context/BookingContext';
import { BookingModal } from './components/BookingModal';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { Accessories } from './pages/Accessories';
import { Services } from './pages/Services';
import { WaterProblems } from './pages/WaterProblems';
import { Industries } from './pages/Industries';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { BookService } from './pages/BookService';
import { BookWaterTest } from './pages/BookWaterTest';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { Warranty } from './pages/Warranty';
import { FAQ } from './pages/FAQ';
import { Testimonials } from './pages/Testimonials';

// Scroll to Top helper on route transitions
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <BookingProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/:slug" element={<Accessories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/water-problems" element={<WaterProblems />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<Industries />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-service" element={<BookService />} />
          <Route path="/book-water-test" element={<BookWaterTest />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      <BookingModal />
    </BookingProvider>
  );
};

import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Subtle overlay for content readability over background image */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: 0 
        }} 
      />
      <Navbar />
      {/* Offsetting the fixed header height of 80px (pt-20) */}
      <main className="flex-grow pt-20 relative" style={{ zIndex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

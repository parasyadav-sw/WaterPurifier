import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Subtle overlay for content readability over background image */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: 0 
        }} 
      />
      <Navbar />
      {/* Navbar height is 72px, so pt-[72px] */}
      <main className="flex-grow pt-[72px] relative w-full max-w-full" style={{ zIndex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

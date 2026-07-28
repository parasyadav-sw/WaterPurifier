import React, { createContext, useContext, useState } from 'react';

interface BookingContextType {
  isOpen: boolean;
  bookingProduct: string | null;
  openBooking: (product?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingProduct, setBookingProduct] = useState<string | null>(null);

  const openBooking = (product?: string) => {
    setBookingProduct(product || null);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setBookingProduct(null);
  };

  return (
    <BookingContext.Provider value={{ isOpen, bookingProduct, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

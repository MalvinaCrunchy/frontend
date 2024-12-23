import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const ScrollContext = createContext<boolean>(false);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Show sticky navigation only after scrolling more than 200px
      if (scrollPosition > 200) {
        setIsStickyVisible(true);
      } else {
        setIsStickyVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <ScrollContext.Provider value={isStickyVisible}>{children}</ScrollContext.Provider>;
};

// Custom hook to consume scroll context
export const useScroll = () => useContext(ScrollContext);

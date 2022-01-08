import { useEffect, useState } from 'react';

export interface WindowSizeType {
  width: number;
  height: number;
}

// Hook
export const useWindowSize = (): WindowSizeType => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: typeof window !== 'undefined' ? window?.innerWidth : 400,
    height: typeof window !== 'undefined' ? window?.innerHeight : 400
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};


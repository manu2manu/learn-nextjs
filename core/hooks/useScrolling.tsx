import { useEffect, useState } from "react";

export default function useScrolling(threshold = 0) {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = (e: any) => {
      e.preventDefault();
      setScrolling(window.scrollY > threshold);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);
  return scrolling;
}


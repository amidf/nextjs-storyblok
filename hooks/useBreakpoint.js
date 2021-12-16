import { useState, useEffect } from "react";

const useBreakpoint = (breakpoint = 0) => {
  const [isReached, setIsReached] = useState(false);
  useEffect(() => setIsReached(window.innerWidth <= breakpoint), []);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth <= breakpoint) {
        setIsReached(true);
      } else {
        setIsReached(false);
      }
    };

    handler();

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [setIsReached, breakpoint]);

  return isReached;
};

export default useBreakpoint;

import { useState, useEffect } from "react";

/**
 * Custom hook to check if the current viewport width is considered mobile.
 * @param {number} [breakpoint=768] - The maximum width to consider as mobile.
 * @returns {boolean} - True if the viewport width is mobile, false otherwise.
 */
const useMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useMobile;

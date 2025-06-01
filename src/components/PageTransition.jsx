import React, { useRef, useEffect, useState } from "react";

export default function PageTransition({ children, triggerKey }) {
  const [animateOut, setAnimateOut] = useState(false);
  const containerRef = useRef();

  // Listen for navigation away (triggerKey changes)
  useEffect(() => {
    setAnimateOut(false); // Reset on new page
  }, [triggerKey]);

  // Listen for custom event to trigger outro
  useEffect(() => {
    const handleAnimateOut = () => setAnimateOut(true);
    window.addEventListener("page-animate-out", handleAnimateOut);
    return () =>
      window.removeEventListener("page-animate-out", handleAnimateOut);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`page-transition${animateOut ? " animate-out" : ""}`}
    >
      {children}
    </div>
  );
}

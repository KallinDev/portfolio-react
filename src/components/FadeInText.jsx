import React, { useEffect, useRef } from "react";

export default function FadeInText({
  children,
  className = "home-description",
  delay = 400,
  ...props
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (containerRef.current)
        containerRef.current.classList.add("fade-in-visible");
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return (
    <div
      className={`${className} fade-in-hidden`}
      ref={containerRef}
      {...props}
    >
      {children}
    </div>
  );
}

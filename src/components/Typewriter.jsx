import React, { useState, useEffect } from "react";

const Typewriter = ({
  text,
  speed = 50,
  className = "",
  cursor = true,
  ...props
}) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // Reset on text change
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (i < text.length) {
          const next = prev + text[i];
          i++;
          return next;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} {...props}>
      {displayed}
      {cursor && <span className="cursor" />}
    </span>
  );
};

export default Typewriter;

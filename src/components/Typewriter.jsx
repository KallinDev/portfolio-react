import React, { useEffect, useRef, useState } from "react";

export default function Typewriter({ text, showSubtitleAndButton }) {
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  // Keep track of our current character index
  const indexRef = useRef(0);
  // Store the interval ID so we can clear it
  const intervalRef = useRef(null);

  useEffect(() => {
    // Reset state & index on text change
    setTypedText("");
    setTypingDone(false);
    indexRef.current = 0;

    // Start typing
    intervalRef.current = setInterval(() => {
      const i = indexRef.current;
      if (i < text.length) {
        setTypedText((prev) => prev + text.charAt(i));
        indexRef.current = i + 1;
      } else {
        clearInterval(intervalRef.current);
        setTypingDone(true);
      }
    }, 100);

    // Cleanup on unmount or text change
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <div className="typewriter-container">
      <span className="typed-text">
        {typedText}
        <span className="cursor"></span>
      </span>

      {typingDone && showSubtitleAndButton && (
        <>
        </>
      )}
    </div>
  );
}
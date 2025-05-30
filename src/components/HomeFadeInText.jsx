import React, { useEffect, useRef } from "react";

export default function HomeFadeInText() {
  const descriptionRef = useRef(null);
  const coverPhotoRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (descriptionRef.current) descriptionRef.current.classList.add("fade-in-visible");
      if (coverPhotoRef.current) coverPhotoRef.current.classList.add("fade-in-visible");
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="home-description fade-in-hidden" ref={descriptionRef}>
        <div className="">Full-Stack Developer based in Västerås</div>
        <a href="/projects"><button
            id="button"
            className="fade-in-visible presentation-button">
              See Portfolio
        </button></a>
      </div>
    </>
  );
}

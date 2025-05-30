import { useEffect } from "react";

export function useSlideInAnimation() {
  useEffect(() => {
    const leftBoxes = document.querySelectorAll(".slide-in-left");
    const rightBoxes = document.querySelectorAll(".slide-in-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("slide-in-left")) {
              entry.target.classList.add("animate-left");
            } else if (entry.target.classList.contains("slide-in-right")) {
              entry.target.classList.add("animate-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    leftBoxes.forEach((box) => observer.observe(box));
    rightBoxes.forEach((box) => observer.observe(box));

    return () => observer.disconnect();
  }, []);
}

import React, { useEffect, useRef } from "react";
import coverPhoto from "../assets/cover-photo.webp"; // <-- import here

export default function AboutFadeInText() {
  const descriptionRef = useRef(null);
  const coverPhotoRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (descriptionRef.current)
        descriptionRef.current.classList.add("fade-in-visible");
      if (coverPhotoRef.current)
        coverPhotoRef.current.classList.add("fade-in-visible");
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <img
        src={coverPhoto} // <-- use imported variable here
        alt="Cover"
        className="cover-photo fade-in-hidden"
        ref={coverPhotoRef}
      />
      <div className="about-description fade-in-hidden" ref={descriptionRef}>
        Hi, I’m Gustav Kallin, a 23-year-old Full-Stack Developer based in
        Västerås, Sweden. Ever since I wrote my first line of code, I’ve been
        fascinated by the way technology can bring ideas to life.
        <br />
        I specialize in building modern, responsive web applications with clean
        design and efficient functionality. My journey started with curiosity
        and late-night problem-solving, and it quickly turned into a full-blown
        passion.
        <br />
        Whether I’m working on front-end interfaces or back-end logic, I’m
        always focused on writing code that’s both readable and scalable.
        <br />
        Outside of coding, I enjoy making music, working out, and constantly
        learning new things to improve both personally and professionally.
        <br />
        I’m currently open to new challenges where I can grow, collaborate, and
        create impactful digital experiences.
      </div>
    </>
  );
}

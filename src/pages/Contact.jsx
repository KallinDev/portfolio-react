import React, { useEffect } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Typewriter from "../components/Typewriter";
import FadeInText from "../components/FadeInText";
import PageTransition from "../components/PageTransition";
import "../index.css";

export default function Contact() {
  useEffect(() => {
    // Add .animated after animation ends for smooth hover
    document.querySelectorAll(".contact-link").forEach((link) => {
      const handler = () => link.classList.add("animated");
      link.addEventListener("animationend", handler, { once: true });
    });
  }, []);

  return (
    <>
      <Header />
      <PageTransition triggerKey="contact">
        <main>
          <section className="contact-container">
            <h2 className="typewriter-title">
              <Typewriter text="Contact" speed={100} />
            </h2>
            <FadeInText className="contact-description">
              <div>
                Interested in working together, have a question, or just want to
                connect?
                <br />
                Feel free to reach out via email or connect with me on social
                media!
              </div>
            </FadeInText>
            <div className="contact-links">
              <a
                href="mailto:gustav.kallin@live.se"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gustavkallin/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/KallinDev"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://x.com/KallinDev"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </section>
        </main>
      </PageTransition>
      <Socials />
    </>
  );
}

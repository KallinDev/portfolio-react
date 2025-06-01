import React from "react";
import BackgroundEffect from "../components/BackgroundEffect";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Typewriter from "../components/Typewriter";
import FadeInText from "../components/FadeInText";
import "../index.css";

export default function Contact() {
  return (
    <>
      <BackgroundEffect />
      <Header />
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
              href="https://github.com/yasariz"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
      </main>
      <Socials />
    </>
  );
}

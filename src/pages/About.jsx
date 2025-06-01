import React from "react";
import BackgroundEffect from "../components/BackgroundEffect";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import Header from "../components/Header";
import Socials from "../components/Socials";
import FadeInText from "../components/AboutFadeInText";
import Typewriter from "../components/Typewriter";

export default function About() {
  return (
    <>
      <BackgroundEffect />

      <Header />

      <main className="about-container">
        <div className="text-content">
          <div className="typewriter-container">
            <section>
              <h2 className="typewriter-title">
                <Typewriter text="About Me" speed={100} />
              </h2>
            </section>
            <FadeInText></FadeInText>
          </div>
        </div>
      </main>

      <Socials />
    </>
  );
}

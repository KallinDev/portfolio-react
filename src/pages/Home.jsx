import React from "react";
import BackgroundEffect from "../components/BackgroundEffect";
import AboutFadeInText from "../components/AboutFadeInText";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import Header from "../components/Header";
import Socials from "../components/Socials";
import FadeInText from "../components/FadeInText";
import Typewriter from "../components/Typewriter";

export default function Home() {
  return (
    <>
      <BackgroundEffect />

      <Header />

      <main className="presentation">
        <section className="home-container">
          <h2 className="typewriter-title">
            <Typewriter text="Hello World, I'm Gustav👋" speed={100} />
          </h2>
        </section>

        {/* Add subtitle and button here if Typewriter doesn't render them */}
        <FadeInText>
          <div>Full-Stack Developer based in Västerås</div>
          <a href="/projects">
            <button className="presentation-button">See Portfolio</button>
          </a>
        </FadeInText>
      </main>

      <Socials />
    </>
  );
}

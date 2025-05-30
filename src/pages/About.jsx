import React from "react";
import BackgroundEffect from "../components/BackgroundEffect";
import Typewriter from "../components/Typewriter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';
import Header from "../components/Header";
import Socials from "../components/Socials";
import FadeInText from "../components/AboutFadeInText";

export default function About() {
  return (
    <>
      <BackgroundEffect />

      <Header />

      <main className="about-container">


        <div className="text-content">
          <div className="typewriter-container">
            <Typewriter text="About Me" showSubtitleAndButton={false} />
            <FadeInText></FadeInText>
          </div>
        </div>

      </main>

      <Socials />
    </>
  );
}

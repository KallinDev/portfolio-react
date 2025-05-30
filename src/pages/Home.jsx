import React from "react";
import BackgroundEffect from "../components/BackgroundEffect";
import Typewriter from "../components/Typewriter";
import AboutFadeInText from "../components/AboutFadeInText";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';
import Header from "../components/Header";
import Socials from "../components/Socials";
import HomeFadeInText from "../components/HomeFadeInText";

export default function Home() {
  return (
    <>
      <BackgroundEffect />

      <Header />

      <main className="presentation">
        <Typewriter text="Hello World, I'm Gustav👋" showSubtitleAndButton={true} />

        {/* Add subtitle and button here if Typewriter doesn't render them */}
        <HomeFadeInText />

      </main>
      
      <Socials />
    </>
  );
}

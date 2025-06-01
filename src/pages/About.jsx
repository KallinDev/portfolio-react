import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import Header from "../components/Header";
import Socials from "../components/Socials";
import FadeInText from "../components/AboutFadeInText";
import Typewriter from "../components/Typewriter";
import PageTransition from "../components/PageTransition";

export default function About() {
  return (
    <>
      <Header />

      <PageTransition triggerKey="about">
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
      </PageTransition>

      <Socials />
    </>
  );
}

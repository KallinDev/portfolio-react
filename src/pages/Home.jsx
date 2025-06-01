import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import Header from "../components/Header";
import Socials from "../components/Socials";
import FadeInText from "../components/FadeInText";
import Typewriter from "../components/Typewriter";
import PageTransition from "../components/PageTransition";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />

      <PageTransition triggerKey="home">
        <main className="presentation">
          <section className="home-container">
            <h2 className="typewriter-title">
              <Typewriter text="Hello World, I'm Gustav👋" speed={100} />
            </h2>
          </section>

          <FadeInText>
            <div>Full-Stack Developer based in Västerås</div>
            <Link to="/projects">
              <button className="presentation-button">See Portfolio</button>
            </Link>
          </FadeInText>
        </main>
      </PageTransition>

      <Socials />
    </>
  );
}

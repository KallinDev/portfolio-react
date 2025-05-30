import React from "react";
import BackgroundEffect from "../components/BackgroundEffect";
import Typewriter from "../components/Typewriter";
import AboutFadeInText from "../components/AboutFadeInText";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import Header from "../components/Header";
import Socials from "../components/Socials";
import HomeFadeInText from "../components/HomeFadeInText";
import { useSlideInAnimation } from "../components/ProjectsFadeIn";
import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"

export default function Projects() {
  useSlideInAnimation(); // ✅ Make sure to use the hook

  return (
    <>
      <BackgroundEffect />
      <Header />

      <main>
        <section class="projects">
        <h2 class="typewriter-title">
            <span class="typewriter">Projects</span><span class="cursor"></span>
        </h2>
    </section>

        <section className="projects">
          <div className="project-wrapper slide-in-right">
            <div className="project-box">
              <a
                href="https://simple-weather-app-12.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-link"
                aria-label="Go to Simple Weather App"
              >
                <img src={project1} alt="Project 1" />
                <span className="redirect-icon">
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </span>
              </a>

              <div className="project-info">
                <h3>Simple Weather App</h3>
                <p>
                  A very simple Weather App based on a Weather API to showcase accurate weather information in your city or country.
                  <br />Simply made with HTML, CSS and a bit of JavaScript.
                </p>
              </div>
            </div>
          </div>

          <div className="project-wrapper slide-in-left">
            <div className="project-box">
              <a
                href="https://freakyfashion.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-link"
                aria-label="Go to FreakyFashion"
              >
                <img src={project2} alt="Project 2" />
                <span className="redirect-icon">
                  <i className="fa fa-external-link" aria-hidden="true"></i>
                </span>
              </a>

              <div className="project-info">
                <h3>FreakyFashion</h3>
                <p>
                  An E-Commerce Website built with Node.js, Angular & Express.
                  <br />
                  It has a full-on working backend with a database that stores product data and loads it dynamically. (Please allow Backend to boot after visiting)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Socials />
    </>
  );
}

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";
import Header from "../components/Header";
import Socials from "../components/Socials";
import FadeInText from "../components/FadeInText";
import { useSlideInAnimation } from "../components/FadeIn";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import Typewriter from "../components/Typewriter";
import PageTransition from "../components/PageTransition"; // <-- import this

const projects = [
  {
    title: "Simple Weather App",
    image: project1,
    link: "https://simple-weather-app-12.netlify.app/",
    description: (
      <>
        A very simple Weather App based on a Weather API to showcase accurate
        weather information in your city or country.
        <br />
        Simply made with HTML, CSS and a bit of JavaScript.
      </>
    ),
  },
  {
    title: "FreakyFashion",
    image: project2,
    link: "https://freakyfashion.netlify.app/",
    description: (
      <>
        An E-Commerce Website built with <br />
        Node.js & Angular. <br />
        It has a full-on working backend with a database that stores product
        data and loads it dynamically. <br />
        (Backend takes a while to boot)
      </>
    ),
  },
  // Add more projects here!
];

export default function Projects() {
  useSlideInAnimation();

  return (
    <>
      <Header />

      <PageTransition triggerKey="projects">
        <main>
          <section className="projects">
            <h2 className="typewriter-title">
              <Typewriter text="Projects" speed={100} />
            </h2>

            <FadeInText className="projects-description">
              <div>
                Explore a selection of my web development projects, showcasing
                my skills in both frontend and backend technologies. Each
                project highlights my passion for building modern, responsive,
                and user-friendly applications. <br />
                Click any project to learn more or view it live!
              </div>
            </FadeInText>

            <div className="projects-grid">
              {projects.map((project, idx) => (
                <div
                  className={`project-wrapper ${
                    idx % 2 === 0 ? "slide-in-left" : "slide-in-right"
                  }`}
                  key={project.title}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-box image-link"
                    aria-label={`Go to ${project.title}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="project-image-wrapper">
                      <img src={project.image} alt={project.title} />
                      <span className="redirect-icon">
                        <i
                          className="fa fa-external-link"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                    <div className="project-info">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </main>
      </PageTransition>

      <Socials />
    </>
  );
}

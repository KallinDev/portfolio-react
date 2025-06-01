import React, { useRef, useEffect } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import BackgroundEffect from "../components/BackgroundEffect";
import Typewriter from "../components/Typewriter";
import FadeInText from "../components/FadeInText";
import PageTransition from "../components/PageTransition";

const skills = [
  { name: "HTML5", icon: <i className="fab fa-html5"></i> },
  { name: "CSS3", icon: <i className="fab fa-css3-alt"></i> },
  { name: "JavaScript", icon: <i className="fab fa-js-square"></i> },
  { name: "React", icon: <i className="fab fa-react"></i> },
  { name: "Angular", icon: <i className="fab fa-angular"></i> },
  { name: "Node.js", icon: <i className="fab fa-node-js"></i> },
  { name: "Git", icon: <i className="fab fa-git-alt"></i> },
  { name: "Tailwind", icon: <i className="fas fa-wind"></i> },
  { name: "Bootstrap", icon: <i className="fab fa-bootstrap"></i> },
  // Add more skills as needed
];

const Skills = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      if (ref) {
        ref.addEventListener(
          "animationend",
          () => {
            ref.classList.add("animated");
          },
          { once: true }
        );
      }
    });
  }, []);

  return (
    <>
      <Header />
      <PageTransition triggerKey="skills">
        <main>
          <section className="skills-container">
            <h2 className="typewriter-title">
              <Typewriter text="Skills" speed={100} />
            </h2>
            <FadeInText className="skills-description">
              <div>
                I enjoy building modern web applications using a variety of
                technologies. My skill set spans between both frontend and
                backend development, and I’m always eager to learn new tools and
                frameworks to create better user experiences.
              </div>
            </FadeInText>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div
                  className="skill-card"
                  key={skill.name}
                  ref={(el) => (cardRefs.current[i] = el)}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </PageTransition>
      <Socials />
    </>
  );
};

export default Skills;

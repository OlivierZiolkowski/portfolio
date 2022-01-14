import React, { useState } from "react";
import styles from "./index.module.css";
import gitIcon from "../../../static/img/icons8-github-24.png";
import appIcon from "../../../static/img/icons8-web-24.png";
import BTTBDesktop from "../../../static/img/projects/BTTB-desktop.png";
import WITWDesktop from "../../../static/img/projects/WITW-desktop.png";

const projectsList = [
  {
    name: "Back to the blog !",
    desc: "Projet réalisé pour concrétiser l'apprentissage du framework Next.js ainsi que l'usage de Firebase pour l'authentification, la base de données NoSQL et le stockage de médias",
    technos: ["React.js", "Next.js", "Firebase", "SASS"],
    links: {
      app: "https://back-to-the-blog.vercel.app/",
      git: "https://github.com/OlivierZiolkowski/back-to-the-blog",
    },
    picture: BTTBDesktop,
  },
  {
    name: "Where in the world ?",
    desc: "Challenge proposé par frontend-mentor dont le but était de créer une app comprenant des infos provenant de l'API restcountries.com.",
    technos: ["React.js", "JS async/await", "API", "Styled-components"],
    links: {
      app: "https://oz-rest-countries-api.surge.sh/",
      git: "https://github.com/OlivierZiolkowski/React-rest-countries-api",
    },
    picture: WITWDesktop,
  },
];

export default function Projects() {
  return (
    <section>
      <h2>Projets</h2>
      {projectsList.map((project, index) => (
        <article key={index} className={styles.article}>
          <div
            className={styles.projectImg}
            style={{
              background: `top/cover no-repeat url(${project.picture})`,
            }}
          />
          <div className={styles.projectContent}>
            <h3>{project.name}</h3>
            <p className={styles.projectDesc}>{project.desc}</p>
            <ul>
              {project.technos.map((tech, index) => (
                <li>{tech}</li>
              ))}
            </ul>
            <ul className={styles.projectLinks}>
              {project.links.app && (
                <li>
                  <a href={project.links.app} className={styles.projectLink}>
                    <img src={appIcon} alt="Voir l'application" />
                  </a>
                </li>
              )}
              {project.links.git && (
                <li>
                  <a href={project.links.git} className={styles.projectLink}>
                    <img src={gitIcon} alt="Aller sur le dépôt GitHub" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

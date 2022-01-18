import React from "react";
import styles from "./index.module.css";
import gitIcon from "../../../static/img/icons8-github-24.png";
import appIcon from "../../../static/img/icons8-web-24.png";
import BTTBDesktop from "../../../static/img/projects/BTTB-desktop.jpg";
import WITWDesktop from "../../../static/img/projects/WITW-desktop.jpg";
import VEEDesktop from "../../../static/img/projects/VEE.jpg";
import Portfolio from "../../../static/img/projects/portfolio.jpg";

const projectsList = [
  {
    name: "Vivre en équilibre",
    desc: "Projet développé pour le compte d'une naturopathe qui souhaitait avoir un site Internet regroupant une présentation de son métier, la prise de rendez-vous et un blog. Ce site a été réalisé durant un stage de 2 mois en autonomie complète de A à Z.",
    technos: ["WordPress", "PHP", "SASS"],
    links: {
      app: "",
      git: "",
    },
    picture: VEEDesktop,
  },
  {
    name: "Back to the blog !",
    desc: "Faux-blox développé pour concrétiser l'apprentissage du framework Next.js ainsi que l'usage de Firebase pour l'authentification, la base de données NoSQL et le stockage de médias. Ce projet m'a permis de découvrir comment utiliser Next.js et son sytème de Server-Side Rendering. Retrouvez plus d'infos sur le dépôt GitHub.",
    technos: ["React.js", "Next.js", "Firebase", "SASS"],
    links: {
      app: "https://back-to-the-blog.vercel.app/",
      git: "https://github.com/OlivierZiolkowski/back-to-the-blog",
    },
    picture: BTTBDesktop,
  },
  {
    name: "Portfolio",
    desc: "FPortfolio personnel permettant de me présenter, de faire découvrir mon parcours et mes projets récents. J'ai utilisé Docusaurus pour me permettre d'utiliser le blog intégré avec des fichiers Markdown tout en créant des pages basé sur React.js.",
    technos: ["React.js", "Docusaurus", "Markdown"],
    links: {
      app: "https://olivierziol.fr/",
      git: "https://github.com/OlivierZiolkowski/portfolio",
    },
    picture: Portfolio,
  },
  {
    name: "Where in the world ?",
    desc: "Challenge proposé par frontend-mentor dont le but était de créer une app comprenant des infos provenant de l'API restcountries.com. Ce challenge a pour but d'afficher 2 pages : l'ensmble des pays remontés par l'API puis une page avec l'information du pays sélectionné par l'utilisateur. Plus d'infos sur le dépôt GitHub.",
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
                <li key={index}>{tech}</li>
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

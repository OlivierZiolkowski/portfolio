import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import ReactLogo from "../../../static/img/icons8-react-48.png";
import JSLogo from "../../../static/img/icons8-javascript-48.png";
import HTMLLogo from "../../../static/img/icons8-html-5-48.png";
import CSSLogo from "../../../static/img/icons8-css3-48.png";
import GitHubLogo from "../../../static/img/icons8-github-48.png";
import FirebaseLogo from "../../../static/img/icons8-google-firebase-console-48.png";

// List of technologies to be underlight
const primaryTech = [
  {
    name: "React.js",
    logo: ReactLogo,
    alt: "Logo React.js",
  },
  {
    name: "JavaScript",
    logo: JSLogo,
    alt: "Logo JavaScript",
  },
  {
    name: "HTML 5",
    logo: HTMLLogo,
    alt: "Logo HTML 5",
  },
  {
    name: "CSS 3",
    logo: CSSLogo,
    alt: "Logo CSS 3",
  },
  {
    name: "GitHub",
    logo: GitHubLogo,
    alt: "Logo GitHub",
  },
  {
    name: "Firebase",
    logo: FirebaseLogo,
    alt: "Logo Google Firebase",
  },
];

// Names of secondary technologies
const secondaryTech = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Redux",
  "SASS",
  "Styled Components",
  "PHP",
  "MySQL",
  "MongoDB",
  "WordPress",
  "Markdown",
];

export default function Technologies() {
  return (
    <section className={styles.section}>
      <h2>Technologies</h2>
      <div className={clsx("icons", styles.icons)}>
        {primaryTech.map((technology, index) => (
          <div className={styles.icon} key={index}>
            <img
              src={technology.logo}
              className="shadow--lg"
              alt={technology.alt}
            />
            <h3>{technology.name}</h3>
          </div>
        ))}
      </div>
      <p>
        Mais aussi :{" "}
        {secondaryTech.map((technology) =>
          secondaryTech.indexOf(technology) !== secondaryTech.length - 1
            ? technology + " - "
            : technology
        )}
      </p>
    </section>
  );
}

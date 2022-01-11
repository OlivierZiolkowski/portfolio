import React from "react";
import avatar from "../../../static/img/avatar.png";
import styles from "./index.module.css";
import clsx from "clsx";

const informations = {
  surtitle: "Bonjour, je m'apelle",
  title: "Olivier Ziolkowski",
  subtitle: "et je suis développeur web !",
  firstPar:
    "Développeur web front-end depuis 2020 avec un passé dans différents métiers du numérique. Intéressé par l'expérience utilisateur, j'aime apprendre et transmettre mes acquis !",
  scndPar:
    "Vous voulez en savoir plus ? Ça se passe juste en dessous 👇 mais aussi sur mon blog 🖨 !",
  cta: "Passez me dire bonjour ! 👋",
};

export default function Header() {
  return (
    <header className="padding--md row">
      <div className={clsx("col margin-bottom--lg", styles.avatar)}>
        <img src={avatar} alt="avatar de l'auteur" />
      </div>
      <div className={clsx("col", styles.infos)}>
        <p className={styles.subtitle}>{informations.surtitle}</p>
        <h1>{informations.title}</h1>
        <p className={styles.subtitle}>{informations.subtitle}</p>
        <p>{informations.firstPar}</p>
        <p>{informations.scndPar}</p>
        <button className="button button--primary">{informations.cta}</button>
      </div>
    </header>
  );
}

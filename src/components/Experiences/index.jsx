import React, { useState } from "react";
import styles from "./index.module.css";
import clsx from "clsx";

// Experiences array
const experiences = [
  {
    position: "Développeur front-end",
    sub: "Dev front-end",
    company: "indépendant",
    startDate: "Actuellement",
    endDate: "",
    desc: {
      1: "Participation à Data For Good depuis Janvier 2022",
      2: "Montée en compétences sur TypeScript / Node.js - Express - MongoDB (décembre 2021)",
      3: "Montée en compétences sur Next.js & Firebase - Projet Back to the blog ! (octobre 2021)",
    },
  },
  {
    position: "Développeur fullstack",
    sub: "Dev fullstack",
    company: "Vivre en équilibre",
    startDate: "Mai 2021",
    endDate: "Juillet 2021",
    desc: {
      1: "Création d'un site vitrine en autonomie from scratch",
      2: "Création du thème graphique complet avec SASS",
      3: "Hébergement & sécurité (Entêtes HTTP, CORS, HTTPS, ...)",
      4: "Référencement SEO via Yoast & accessibilité",
      5: "Veille technologique WordPress Core (Loops, taxonomies, ...)",
    },
  },
  {
    position: "Développeur front-end",
    sub: "Dev front-end",
    company: "Projet de fin d'études",
    startDate: "Février 2021",
    endDate: "Mars 2021",
    desc: {
      1: "Création d'une interface utilisateur e-commerce en binôme",
      2: "Utilisation de React.js + Redux pour la gestion du state",
      3: "Product Owner du projet - Méthode Agile",
      4: "Création d'un thème via SASS",
      5: "Hébergement AWS (back-end) + Surge.sh (front-end)",
    },
  },
  {
    position: "Développeur fullstack",
    sub: "Dev fullstack",
    company: "O'Clock",
    startDate: "Septebmre 2020",
    endDate: "Janvier 2020",
    desc: {
      1: "Langages appris : HTML5 / CSS3 / PHP / JavaScript / MySQL / MarkDown",
      2: "Concepts et technologies : Git / GitHub / POO / AJAX / API / WordPress",
      3: "Spécialisation : React.js + Redux (1 mois)",
      4: "1 mois de projet de fin d'études en collaboration sur un projet proposé",
      5: "Obtention du titre professionnel sur présentation de soutenance face à un jury composé de professionnels du web",
    },
  },
  {
    position: "Chargé de mission numérique éducatif",
    sub: "Chargé de mission",
    company: "Département du Pas-de-Calais",
    startDate: "Juin 2017",
    endDate: "Juillet 2020",
    desc: {
      1: "Gestion des appels à projets des besoins numériques dans les collèges publics du territoire",
      2: "Consultation des besoins matériels et propositions d'équipements adaptés à l'environnement",
      3: "Développement de stratégies d'usage des matériels déployés dans les collèges publics",
      4: "Animation du projet WR62 - la radio des collégiens du Pas-de-Calais",
      5: "Création de supports média papier et numérique via suite Adobe (inDesign, Illustrator)",
    },
  },
  {
    position: "Référent TICE - Support technique",
    sub: "Référent TICE",
    company: "Collège Paul Verlaine Saint-Nicolas-lez-Arras",
    startDate: "Septembre 2013",
    endDate: "Mai 2017",
    desc: {
      1: "Support technique de niveau 1",
      2: "Gestion et maintenance du parc informatique",
      3: "Formation auprès des utilisateurs aux outils",
      4: "Animation du portail web de l'établissement",
    },
  },
];

export default function Experiences() {
  const [value, setValue] = useState(0);
  const { position, company, startDate, endDate, desc } = experiences[value];

  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>Expériences</h2>
      <ul className={clsx("pills", styles.section__pills)}>
        {experiences.map((experience, index) => (
          <li
            key={index}
            className={`pills__item ${
              index === value && "pills__item--active"
            }`}
            onClick={() => setValue(index)}
          >
            {experience.sub}
          </li>
        ))}
      </ul>
      <article className={styles.experience}>
        <h3>
          {position} - {company}
        </h3>
        <p className={styles.experience__date}>
          {startDate}
          {endDate && ` - ${endDate}`}
        </p>
        <ul>
          {Object.keys(desc).map((key, index) => {
            return <li key={index}>{desc[key]}</li>;
          })}
        </ul>
      </article>
    </section>
  );
}

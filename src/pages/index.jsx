import React from "react";
import Layout from "@theme/Layout";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Head from "@docusaurus/Head";
import avatar from "../../static/img/avatar.png";

export default function Home() {
  return (
    <Layout
      title={`Olivier Ziolkowski, développeur web front-end`}
      description="Bienvenue sur mon portfolio qui comprend un résumé de mes projets, mes expériences ainsi qu'un blog sur des sujets qui me passe par la tête."
    >
      <Head>
        <meta
          property="og:title"
          content="Olivier Ziolkowski, développeur web front-end"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://olivierziol.fr" />
        <meta property="og:image" content={avatar} />
        <meta
          property="og:description"
          content="Bienvenue sur mon portfolio qui comprend un résumé de mes projets, mes expériences ainsi qu'un blog sur des sujets qui me passe par la tête."
        />
      </Head>
      <div className="container">
        <Header />
        <main>
          <Technologies />
          <Experiences />
          <Projects />
        </main>
      </div>
    </Layout>
  );
}

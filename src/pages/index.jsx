import React from "react";
import Layout from "@theme/Layout";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Head from "@docusaurus/Head";
import metaImage from "../../static/img/metaImage.jpg";

export default function Home() {
  return (
    <Layout
      title={`Accueil`}
      description="Bienvenue sur mon portfolio qui comprend un résumé de mes projets, mes expériences ainsi qu'un blog sur des sujets qui me passe par la tête."
    >
      <Head>
        <meta property="og:image" content={metaImage} />
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

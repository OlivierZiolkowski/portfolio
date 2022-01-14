import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Portfolio d'Olivier Ziolkowski, développeur web front-end"
    >
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

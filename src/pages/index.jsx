import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Header from "../components/Header";
import Technologies from "../components/Technologies";
import Experiences from "../components/Experiences";

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
        </main>
      </div>
    </Layout>
  );
}

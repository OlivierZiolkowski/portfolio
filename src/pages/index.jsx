import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Header from '../components/Header';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Portfolio d'Olivier Ziolkowski, développeur web front-end">
      <div className='container'>
        <Header />
        <main />
      </div>
    </Layout>
  );
}

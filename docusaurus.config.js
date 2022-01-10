// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Olivier Ziolkowski',
  tagline: 'Développeur font-end',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'OlivierZiolkowski', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Olivier Ziolkowski',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.linkedin.com/in/olivier-ziolkowski/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/OlivierZiolkowski',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Retrouvez-moi',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/OlivierZiolkowski',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/olivier-ziolkowski/',
              },
              {
                label: 'We❤Devs.com',
                href: 'https://welovedevs.com/app/fr/developer/olivier-developpeur-reactif',
              },
            ],
          },
          {
            title: 'Liens',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/OlivierZiolkowski',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Olivier Ziolkowski. Built with Docusaurus 🦖.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Olivier Ziolkowski - Développeur front-end",
  tagline: "Développeur front-end",
  url: "https://olivierziol.fr",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "OlivierZiolkowski", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Olivier Ziolkowski",
        logo: {
          alt: "Logo du site",
          src: "img/avatar.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://www.linkedin.com/in/olivier-ziolkowski/",
            label: "LinkedIn",
            position: "right",
          },
          {
            href: "https://github.com/OlivierZiolkowski",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Retrouvez-moi",
            items: [
              {
                html: `
                    <a href="https://github.com/OlivierZiolkowski" target="_blank" rel="noreferrer noopener" aria-label="Page GitHub">
                      <img src="img/footer-github-50.png" alt="Page GitHub" />
                    </a>
                  `,
              },
              {
                html: `
                    <a href="https://www.linkedin.com/in/olivier-ziolkowski/" target="_blank" rel="noreferrer noopener" aria-label="Page LinkedIn">
                      <img src="img/footer-linkedin-50.png" alt="Page LinkedIn" />
                    </a>
                  `,
              },
              {
                html: `
                    <a href="https://welovedevs.com/app/fr/developer/olivier-developpeur-reactif" target="_blank" rel="noreferrer noopener" aria-label="Page WeLoveDevs.com">
                      <img src="img/footer-aimer-50.png" alt="Page WeLoveDevs.com" />
                    </a>
                  `,
              },
            ],
          },
          {
            title: "Liens",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Olivier Ziolkowski. Built with Docusaurus. Illustrations : icons8 & themeisle.com`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

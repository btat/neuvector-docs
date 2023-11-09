// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NeuVecor',
  tagline: '',
  favicon: '/img/favicon.ico',
  url: 'https://open-docs.neuvector.com',
  baseUrl: '/',
  organizationName: 'neuvector',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/neuvector/docs/edit/main/',
          routeBasePath: '/', 
          showLastUpdateTime: true,
          lastVersion: 'current',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'NeuVector logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Quick Links',
            position: 'right',
            items: [
              {
                href: 'https://github.com/neuvector/neuvector',
                label: 'GitHub',
              },
              {
                href: 'https://github.com/neuvector/docs',
                label: 'Docs GitHub',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'More from SUSE',
            position: 'right',
            items: [
              {
                href: 'https://www.rancher.com',
                label: 'Rancher',
                className: 'navbar__icon navbar__rancher'
              },
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://elemental.docs.rancher.com/',
                label: 'Elemental',
                className: 'navbar__icon navbar__elemental'
              },
              {
                href: 'https://epinio.io/',
                label: 'Epinio',
                className: 'navbar__icon navbar__epinio'
              },
              {
                href: 'https://fleet.rancher.io/',
                label: 'Fleet',
                className: 'navbar__icon navbar__fleet'
              },
              {
                href: 'https://harvesterhci.io',
                label: 'Harvester',
                className: 'navbar__icon navbar__harvester'
              },
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://opensource.suse.com',
                label: 'More Projects...',
                className: 'navbar__icon navbar__suse'
              },
            ]
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/neuvector',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/neuvector',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.suse.com/c/blog/?product=4549',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NeuVector by SUSE.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

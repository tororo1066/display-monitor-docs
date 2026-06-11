import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {

  title: 'DisplayMonitor Wiki',
  tagline: 'Let\'s learn how to use DisplayMonitor',
  favicon: 'img/tororo_1066.ico',

  // Set the production url of your site here
  url: 'https://tororo1066.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/display-monitor-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tororo1066', // Usually your GitHub org/user name.
  projectName: 'display-monitor-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DisplayMonitor',
      logo: {
        alt: 'tororo_1066!',
        src: 'img/tororo_1066.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
        },
        {to: '/reference', label: 'Reference', position: 'left'},
        {
          href: 'https://tororo1066.github.io/DisplayMonitor',
          label: 'Javadoc',
          position: 'left',
        },
        {
          href: 'https://github.com/tororo1066/DisplayMonitor',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guide',
              to: '/docs/get-started',
            },
            {
              label: 'Reference',
              to: '/reference',
            },
            {
              label: 'Javadoc',
              href: 'https://tororo1066.github.io/DisplayMonitor',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tororo1066/DisplayMonitor',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'java',
        'gradle'
      ],
      magicComments: [
        {
          className: 'code-block-lime-line',
          line: 'lime-next-line',
          block: {start: 'lime-start', end: 'lime-end'}
        },
        {
          className: 'code-block-white-blue-line',
          line: 'white-blue-next-line',
          block: {start: 'white-blue-start', end: 'white-blue-end'}
        }
      ]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

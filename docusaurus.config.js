// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suraj Srivastav',
  tagline: 'Engineering leader building scalable systems and AI platforms',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://surajsrivastav.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'surajsrivastav',
  projectName: 'suraj-site',
  deploymentBranch: 'gh-pages',

  trailingSlash: true,
  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/surajsrivastav/suraj-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/surajsrivastav/suraj-site/tree/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Suraj Srivastav`,
            language: 'en',
          },
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 5,
          blogTitle: 'Blog',
          postsPerPage: 10,
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Suraj',
        logo: {
          alt: 'Suraj Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Writing', position: 'left' },
          {
            href: 'https://github.com/surajsrivastav',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Writing',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Tags',
                to: '/blog/tags',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'X (Twitter)',
                href: 'https://x.com/surajsrivastav',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/surajsrivastav',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/surajsrivastav',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Email',
                href: 'mailto:suraj.ssrivastav@gmail.com',
              },
            ],
          },
        ],
        copyright: `Distributed systems engineering and technical leadership. © ${new Date().getFullYear()} Suraj Srivastav`,
      },
      prism: {
        theme: themes.oneDark,
        darkTheme: themes.oneDark,
        additionalLanguages: ['bash', 'typescript', 'javascript', 'python', 'go'],
      },
    }),
};

module.exports = config;

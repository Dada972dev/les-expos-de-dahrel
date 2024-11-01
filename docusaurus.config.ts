import { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import sidebars from './sidebars'; // Make sure this path is correct

const config: Config = {
  title: 'Nationsglory Bedrock Wiki Salvador',
  tagline: 'Bienvenue',
  favicon: 'img/favicon.ico',
  url: 'https://wiki-nationsglory-salvador.vercel.app/',
  baseUrl: '/',
  organizationName: 'Dada972Dev',
  projectName: 'wikisalvador',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars'),
          editUrl: 'https://github.com/Dadadou972/wiki-ngbe/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Dadadou972/wiki-ngbe/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          to: 'blog',
          label: 'News',
          position: 'left',
        },
        {
          href: 'https://discord.gg/S59PsPvV9v',
          label: 'Discord Salvador',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Nos réseaux',
          items: [
            {
              label: 'Discord Salvador',
              href: 'https://discord.gg/S59PsPvV9v',
            },
            {
              label: 'Twitch Dada972',
              href: 'https://www.twitch.tv/dada97ii',
            },
          ],
        },
        {
          title: 'Discord serveurs Nationsglory bedrock',
          items: [
            {
              label: 'Nationsglory Officiel',
              href: 'https://discord.gg/nationsglory',
            },
            {
              label: 'Nationsglory Alpha',
              href: 'https://discord.gg/aFMuuNMkaA',
            },
            {
              label: 'Nationsglory Oméga',
              href: 'https://discord.gg/Ykk6KyFrnh',
            },
            {
              label: 'Nationsglory Sigma',
              href: 'https://discord.gg/5KDfg7PTup',
            },
            {
              label: 'Nationsglory Delta',
              href: 'https://discord.gg/nationsglory-delta-948880111753625642',
            },
            {
              label: 'Nationsglory Epsilon',
              href: 'https://discord.gg/CtBGAW8Rtd',
            },
          ],
        },
        {
          title: 'Nos partenaires',
          items: [
            {
              label: 'Mystock',
              href: 'https://discord.gg/MqdHpAzBCg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wiki Salvador.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

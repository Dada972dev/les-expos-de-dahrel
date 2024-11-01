import { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import sidebars from './sidebars'; // Assurez-vous que ce chemin est correct

const config: Config = {
  title: 'Nationsglory Bedrock wiki salvador',
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
          href: 'https://discord.gg/S59PsPvV9v',
          label: 'discord salvador',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // Insérez vos liens de footer ici
        {
          title: 'Nos résaux',
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
          items: [],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wiki salvador.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};


export default config;

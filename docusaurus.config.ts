import { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import sidebars from './sidebars'; // Assurez-vous que ce chemin est correct

const config: Config = {
  title: 'Nationsglory Bedrock wiki salvador',
  tagline: 'Bienvenue',
  favicon: 'img/ng.ico',
  url: 'https://www.wikisalvador.fr',
  baseUrl: '/',
  organizationName: 'Dahrel',
  projectName: 'newsrb',
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
          href: 'https://discord.gg/aFB3QW3Hfx',
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
              href: 'https://discord.gg/aFB3QW3Hfx',
            },
            {
              label: 'Youtube salvador',
              href: 'https://discord.gg/aFB3QW3Hfx',
            },
            {
              label: 'Twitch Dada972',
              href: 'https://discord.gg/aFB3QW3Hfx',
            },
          ],
        },
        {
          title: 'Discord serveurs Nationsglory bedrock',
          items: [
            {
              label: 'Nationsglory officiel',
              href: 'https://discord.gg/nationsglory',
            },
            {
              label: 'Nationsglory alpha',
              href: 'https://discord.gg/aFMuuNMkaA',
            },
            {
              label: 'Nationsglory oméga',
              href: 'https://discord.gg/Ykk6KyFrnh',
            },
            {
              label: 'Nationsglory sigma',
              href: 'https://discord.gg/5KDfg7PTup',
            },
            {
              label: 'Nationsglory delta',
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

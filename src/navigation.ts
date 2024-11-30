import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Associazione',
      href: getPermalink('/associazione'),
    },
    {
      text: 'La Scuola',
      href: getPermalink('/scuola'),
    },
    {
      text: 'Progetti',
      href: getPermalink('/progetti'),
    },
    {
      text: 'Gallery',
      href: getPermalink('/gallery'),
    },
    {
      text: 'Eventi',
      href: getPermalink('/eventi'),
    },
    {
      text: 'Donazioni',
      href: getPermalink('/donazioni'),
    },
  ],
  actions: [{ text: 'Dona', href: getPermalink('/donazioni') }],
};

export const footerData = {
  links: [
    {
      title: 'Siti amici',
      links: [
        { text: 'Fondazione Petrucco', href: 'https://www.fondazionepetrucco.it/', target: '_blank' },
        { text: 'Vecchio sito', href: 'http://www.sudin.org/tool/home.php', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'Mail', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; 2024 Sudin.org
  `,
};

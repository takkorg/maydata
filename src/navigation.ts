import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'ホーム',
      href: getPermalink('/'),
    },
    {
      text: '事業内容',
      href: getPermalink('/#services'),
    },
    {
      text: '会社概要',
      href: getPermalink('/about'),
    },
    {
      text: '代表プロフィール',
      href: getPermalink('/founder'),
    },
    {
      text: 'お問い合わせ',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '事業内容',
      links: [
        { text: 'ニーズベースR&D', href: getPermalink('/#services') },
        { text: 'シーズベースR&D', href: getPermalink('/#services') },
        { text: '不動産事業', href: getPermalink('/#services') },
      ],
    },
    {
      title: '会社情報',
      links: [
        { text: '会社概要', href: getPermalink('/about') },
        { text: '代表プロフィール', href: getPermalink('/founder') },
        { text: 'お問い合わせ', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'プライバシーポリシー', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/takkorg' },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} 株式会社メイデータ (MayDATA Inc.) All rights reserved.
  `,
};

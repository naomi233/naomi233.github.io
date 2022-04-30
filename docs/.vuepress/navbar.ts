import { defineNavbarConfig } from 'vuepress-theme-hope'

export default defineNavbarConfig([
  '/',
  { text: '主题指南', icon: 'creative', link: '/guide/', activeMatch: '^/guide' },
  {
    text: 'Naomi 相册',
    icon: 'pic',
    link: 'https://ghs.naomi.pub',
  },
  {
    text: 'Gitea',
    icon: 'discover',
    link: 'https://git.naomi.pub',
  },
])

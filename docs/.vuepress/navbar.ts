import { defineNavbarConfig } from 'vuepress-theme-hope'

export default defineNavbarConfig([
  '/',
  { text: '代码笔记', icon: 'blog', link: '/code/java/' },
  { text: '随想笔记', icon: 'alias', link: '/life/' },
  { text: '主题指南', icon: 'creative', link: '/guide/' },
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

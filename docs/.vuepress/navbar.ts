import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  { text: '技术笔记', icon: 'blog', link: '/code/' },
  { text: '生活随想', icon: 'alias', link: '/life/' },
  {
    text: 'Naomi 相册',
    icon: 'pic',
    link: 'https://ghs.naomi.plus',
  },
  {
    text: 'Gitea',
    icon: 'discover',
    link: 'https://git.naomi.plus',
  },
])

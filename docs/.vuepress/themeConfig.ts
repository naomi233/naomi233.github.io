import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  logo: '/logo.png',
  hostname: 'https://www.naomi.plus',

  author: {
    name: 'Naomi',
    url: 'https://www.naomi.plus',
  },

  blog: {
    intro: '/about',
    roundAvatar: true,
    avatar: '/avatar.png',
    sidebarDisplay: 'mobile',
    medias: {
      Email: 'mailto:mangogo.naomi@qq.com',
      GitHub: 'https://github.com/Henvy-Mango',
      Gitee: 'https://gitee.com/Henvy-Mango',
    },
  },

  iconAssets: 'iconfont',

  docsDir: 'docs',
  docsBranch: 'master',
  repo: 'naomi233/naomi233.github.io',

  displayFooter: true,
  footer: 'MIT Licensed',

  navbar,
  sidebar,
  pageInfo: ['Author', 'Date', 'Word', 'ReadingTime', 'Category', 'Tag'],

  encrypt: {
    config: {
      '/life/encrypt.html': ['1234'],
    },
  },

  plugins: {
    autoCatalog: true,

    blog: true,

    mdEnhance: {
      sub: true,
      sup: true,
      mark: true,
      echarts: true,
      mermaid: true,
      footnote: true,
      tasklist: true,
      container: true,
      imgLazyload: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },
  },
})

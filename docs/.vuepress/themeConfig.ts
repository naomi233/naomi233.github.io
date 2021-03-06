import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  logo: '/logo.png',
  hostname: 'https://naomi.pub',

  author: {
    name: 'Naomi',
    url: 'https://naomi.pub',
  },

  blog: {
    intro: '/about',
    roundAvatar: true,
    avatar: '/avatar.png',
    sidebarDisplay: 'mobile',
    medias: {
      Email: 'mailto:mangogo.naomi@qq.com',
      GitHub: 'https://github.com/Henvy-Mango',
    },
  },

  iconAssets: 'iconfont',

  docsDir: 'docs',
  docsBranch: 'master',
  repo: 'naomi233/naomi233.github.io',

  displayFooter: true,
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备19151060号</a>',

  navbar,
  sidebar,
  pageInfo: ['Author', 'Category', 'Tag', 'Date', 'Original', 'Word'],

  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234'],
      '/life/encrypt.html': ['1234'],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },

    comment: {
      provider: 'Giscus',
      repo: 'naomi233/naomi233.github.io',
      repoId: 'R_kgDOHROM7A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHROM7M4CO91k',
    },

    pwa: {
      update: 'hint',
      favicon: '/favicon.ico',
      appendBase: true,
    },
  },
})

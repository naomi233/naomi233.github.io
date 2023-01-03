import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default hopeTheme({
  logo: '/logo.png',
  hostname: 'https://naomi.plus',

  author: {
    name: 'Naomi',
    url: 'https://naomi.plus',
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
  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备19151060号-2</a>',

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

    comment: {
      provider: 'Giscus',
      repo: 'naomi233/naomi233.github.io',
      repoId: 'R_kgDOHuvYyA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOHuvYyM4CQew7',
    },

    pwa: {
      update: 'hint',
      favicon: '/favicon.ico',

      // 部署到子目录才开启
      // appendBase: true,
    },
  },
})

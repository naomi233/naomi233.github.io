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

  pure: true,
  iconPrefix: 'iconfont icon-',

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
      '/life/': ['1234'],
    },
  },

  plugins: {
    copyCode: {},

    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },

    search: {
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      maxSuggestions: 10,
      hotKeys: ['s', '/'],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    },
  },
})

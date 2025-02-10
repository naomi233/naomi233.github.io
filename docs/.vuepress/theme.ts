import { hopeTheme } from "vuepress-theme-hope"
import navbar from "./navbar"
import sidebar from "./sidebar"

export default hopeTheme({
  logo: "/logo.png",
  hostname: "https://naomi233.github.io",

  author: {
    name: "Naomi",
    url: "https://naomi233.github.io",
  },

  blog: {
    intro: "/about",
    avatar: "/assets/images/avatar.png",
    sidebarDisplay: "mobile",
    medias: {
      Telegram: "https://t.me/naomi233_bot",
      GitHub: "https://github.com/Henvy-Mango",
      RSS: "https://naomi233.github.io/rss.xml",
    },
    articleInfo: ["Author", "Date", "Word", "Category", "Tag"],
  },

  docsDir: "docs",
  docsBranch: "master",
  repo: "naomi233/naomi233.github.io",

  displayFooter: true,
  footer: "MIT Licensed",

  navbar,
  sidebar,

  pageInfo: ["Author", "Date", "Word", "ReadingTime", "Category", "Tag"],

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown: {
    sub: true,
    sup: true,
    mark: true,
    footnote: true,
    tasklist: true,
  },

  plugins: {
    catalog: true,

    blog: {
      excerptLength: 30,
    },

    feed: {
      rss: true,
    },

    slimsearch: {
      // 索引全部内容
      indexContent: true,
    },
  },
})

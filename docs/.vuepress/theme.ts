import { hopeTheme } from "vuepress-theme-hope"
import navbar from "./navbar"
import sidebar from "./sidebar"

export default hopeTheme({
  logo: "/logo.png",
  hostname: "https://www.naomi.plus",

  author: {
    name: "Naomi",
    url: "https://www.naomi.plus",
  },

  blog: {
    intro: "/about",
    roundAvatar: true,
    avatar: "/assets/images/avatar.png",
    sidebarDisplay: "mobile",
    medias: {
      Telegram: "https://t.me/naomi233_bot",
      GitHub: "https://github.com/Henvy-Mango",
      RSS: "https://www.naomi.plus/rss.xml",
    },
    articleInfo: ["Author", "Date", "Word", "Category", "Tag"],
  },

  iconAssets: "iconfont",

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

  plugins: {
    autoCatalog: true,

    blog: {
      excerptLength: 30,
    },

    mdEnhance: {
      sub: true,
      sup: true,
      mark: true,
      // echarts: true,
      // mermaid: true,
      footnote: true,
      tasklist: true,
      container: true,
      imgLazyload: true,
    },

    feed: {
      rss: true,
    },
  },
})

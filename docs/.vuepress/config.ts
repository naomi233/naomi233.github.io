import { defineUserConfig } from "vuepress"
import theme from "./theme"

export default defineUserConfig({
  lang: "zh-CN",
  dest: "./dist",
  title: "Naomi樱花庄",
  description: "Naomi樱花庄",
  head: [
    ["script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-37N7CLH1B1" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-37N7CLH1B1');`,
    ],
  ],
  theme,
})

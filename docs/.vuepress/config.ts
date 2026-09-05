import { defineUserConfig } from "vuepress"
import theme from "./theme.js"

export default defineUserConfig({
  lang: "zh-CN",
  dest: "./dist",
  title: "Naomi樱花庄",
  description: "Naomi樱花庄",
  head: [
    ["script", { charset: "UTF-8", id: "LA_COLLECT", src: "//sdk.51.la/js-sdk-pro.min.js" }],
    ["script", {}, "LA.init({id:'3R6XmoEALv1KIi6i',ck:'3R6XmoEALv1KIi6i'})"],
    ["script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-X1V1VJF5XQ" }],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-X1V1VJF5XQ');",
    ],
  ],
  theme,
})

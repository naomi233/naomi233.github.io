import { defineClientConfig } from "vuepress/client"
import Blog from "./layouts/Blog.vue"

import "vuepress-theme-hope/presets/bounce-icon.scss"
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
  layouts: { Blog },
})

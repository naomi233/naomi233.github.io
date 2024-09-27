import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  { text: "技术笔记", icon: "mdi:rocket-launch-outline", link: "/code/" },
  { text: "生活随想", icon: "mdi:notebook-edit-outline", link: "/life/" },
  {
    text: "Naomi 相册",
    icon: "mdi:image-outline",
    link: "https://ghs.naomi.plus",
  },
  {
    text: "Gitea",
    icon: "mdi:source-repository",
    link: "https://git.naomi.plus",
  },
])

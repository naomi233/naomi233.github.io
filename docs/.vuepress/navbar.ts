import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  { text: "技术笔记", icon: "mdi:rocket-launch-outline", link: "/code/" },
  { text: "DIY 记录", icon: "mdi:creation", link: "/diy/" },
  { text: "生活随想", icon: "mdi:notebook-edit-outline", link: "/life/" },
  { text: "Gitea", icon: "mdi:source-repository", link: "https://git.naomi.plus" },
])

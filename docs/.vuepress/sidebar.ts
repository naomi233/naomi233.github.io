import { defineSidebarConfig } from 'vuepress-theme-hope'

export default defineSidebarConfig([
  '/',
  {
    text: '使用教程',
    icon: 'creative',
    prefix: '/guide/',
    link: '/guide/',
    collapsable: true,
    children: 'structure',
  },
])

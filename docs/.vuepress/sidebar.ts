import { defineSidebarConfig } from 'vuepress-theme-hope'

export default defineSidebarConfig({
  '/code/': 'structure',
  '/life/': 'structure',
  '/guide/': [
    {
      text: '主题教程',
      icon: 'creative',
      prefix: '',
      link: '',
      children: 'structure',
    },
  ],
})

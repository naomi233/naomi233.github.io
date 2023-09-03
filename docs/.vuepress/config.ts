import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './theme'

export default defineUserConfig({
  lang: 'zh-CN',
  dest: './dist',
  title: 'Naomi樱花庄',
  description: 'Naomi樱花庄',
  head: [
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-37N7CLH1B1' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-37N7CLH1B1');`,
    ],
  ],
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          name: 'category',
          getter: (page) => page.frontmatter.category,
          formatter: '分类：$content',
        },
        {
          name: 'tag',
          getter: (page) => page.frontmatter.tag,
          formatter: '标签：$content',
        },
      ],
    }),
  ],
  theme,
})

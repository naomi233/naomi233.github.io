import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './themeConfig'

export default defineUserConfig({
  lang: 'zh-CN',
  dest: './dist',
  title: 'Naomi の 樱花庄',
  description: 'Naomi の 樱花庄',
  shouldPrefetch: false,
  head: [
    [
      'script',
      {},
      `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?c738fb34dd6a4a2943ee1b4623a6ed49";
      var s = document.getElementsByTagName("script")[0]; 
        var s = document.getElementsByTagName("script")[0]; 
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`,
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

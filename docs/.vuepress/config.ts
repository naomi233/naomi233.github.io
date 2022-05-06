import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from './themeConfig'

export default defineUserConfig({
  lang: 'zh-CN',
  dest: './dist',
  title: 'Naomi の 樱花庄',
  description: 'Naomi の 樱花庄',
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
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
  ],
  plugins: [
    searchPlugin({
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      maxSuggestions: 10,
      hotKeys: ['s', '/'],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  theme,
})

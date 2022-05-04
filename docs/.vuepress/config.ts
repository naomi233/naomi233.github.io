import { defineUserConfig } from 'vuepress'
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
  theme,
})

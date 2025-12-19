import { defineConfig } from 'vitepress'
import decapCms from 'vite-plugin-decap-cms'
export default defineConfig({
  title: "可乐加冰，百毒不侵！",   // 浏览器标签页标题
  description: "记录学习 · 分享成长",

  themeConfig: {
    logo: '/logo.png',  // 可选：以后放个小头像

    nav: [                  // 顶部导航栏
      { text: '首页', link: '/' },
      { text: '所有文章', link: '/articles/' },
      { text: '关于我', link: '/about' },
    ],

    sidebar: {
      '/articles/': [
        {
          text: '学习记录',
          collapsed: false,  // 默认展开
          items: [
            { text: '我的第一篇博客文章', link: '/articles/first' },
            // 新写文章会自动出现在这里，或手动添加
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/baidubuqing' }  // 改成你的
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2025 百毒不侵'
    }
  }
})
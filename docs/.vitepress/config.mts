import { defineConfig } from 'vitepress'
// 路由表
import {SE, Juc ,Designpattern} from './router/java.mjs'
import { Kubernetes,Docker,DevopsGitlabJenkins } from './router/cloudnative.mjs'
import { WordsDaily } from './router/vocabulary.mjs'
import { Redis,MongoDB } from './router/database.mjs'
import {  linuxmts } from './router/linux.mjs'
// import { mq } from './router/mq.mjs'
 
export default defineConfig({
  title: "English Pie",
  description: "English Pie",






  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/7306435_cookies_food_cooking_restaurant_sweet_icon.png' }],
  ],



  themeConfig: {


    logo: { src: '/7306435_cookies_food_cooking_restaurant_sweet_icon.png', width: 24, height: 24 },

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Vocabulary',
        items: [
          { text: 'Ten Words Daily', link: '/course/1.Vocabulary/1.202403/1.20240317.md' },
        ]
      },
      {
        text: 'Grammar',
        items: [
          { text: 'Tense', link: '/course/6.database/3.Redis/1.安装步骤.md' },

        ]
      },
      {
        text: 'Conversation',
        items: [
          { text: 'Test Case', link: '/course/2.Linux/Shell/1._Shell概述.md' },
        ]
      }
    ],
    sidebar: {
      '/course/1.Vocabulary/1.202403': WordsDaily,



 



    },
     // 在 sidebar 后添加
     outlineTitle: '本页目录',
     darkModeSwitchLabel: '切换主题',
     sidebarMenuLabel: '菜单',
     returnToTopLabel: '回到顶部',
     docFooter: {
       prev: '上一页',
       next: '下一页'
     },
     footer: {
      message: 'Power by Vercel and Cloudflare.',
      copyright: 'Copyright © 2023-present kwfruit.'
    },
    search: {
      provider: 'local',
    },

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '2A9HHOINBG',
    //     apiKey: '99dc5fdc2171c5c37cc5259d83ee72b8',
    //     indexName: 'note box',
    //     locales: {
    //       root: {
    //         placeholder: '搜索文档',
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //             buttonAriaLabel: '搜索文档'
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: '清除查询条件',
    //               resetButtonAriaLabel: '清除查询条件',
    //               cancelButtonText: '取消',
    //               cancelButtonAriaLabel: '取消'
    //             },
    //             startScreen: {
    //               recentSearchesTitle: '搜索历史',
    //               noRecentSearchesText: '没有搜索历史',
    //               saveRecentSearchButtonTitle: '保存至搜索历史',
    //               removeRecentSearchButtonTitle: '从搜索历史中移除',
    //               favoriteSearchesTitle: '收藏',
    //               removeFavoriteSearchButtonTitle: '从收藏中移除'
    //             },
    //             errorScreen: {
    //               titleText: '无法获取结果',
    //               helpText: '你可能需要检查你的网络连接'
    //             },
    //             footer: {
    //               selectText: '选择',
    //               navigateText: '切换',
    //               closeText: '关闭',
    //               searchByText: '搜索提供者'
    //             },
    //             noResultsScreen: {
    //               noResultsText: '无法找到相关结果',
    //               suggestedQueryText: '你可以尝试查询',
    //               reportMissingResultsText: '你认为该查询应该有结果？',
    //               reportMissingResultsLinkText: '点击反馈'
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // },

  //     // 编辑链接配置 
  // editLink: {
  //   pattern: 'https://github.com/KwFruit/knowledge-base-website/edit/master/docs/:path',
  //   text: '在 Github 上编辑此页'
  // },
      // 导航栏右侧社交链接配置
  socialLinks: [
    {
      icon: {
        svg: `<svg t="1710578543639" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3753" width="32" height="32"><path d="M758.23104 403.3536l-124.86656-73.19552a20.48 20.48 0 0 1 0-35.328l111.06304-65.10592a81.92 81.92 0 0 1 82.82112 0l94.80192 55.5008A81.92 81.92 0 0 1 962.56 355.9424v312.15616a81.92 81.92 0 0 1-40.50944 70.67648l-92.50816 54.19008A20.48 20.48 0 0 1 798.72 775.2704v-301.2608a81.92 81.92 0 0 0-40.48896-70.656z m-194.1504 545.09568a103.17824 103.17824 0 0 1-104.18176 0l-91.70944-53.73952A81.92 81.92 0 0 1 327.68 824.03328V520.97024a81.92 81.92 0 0 1 40.48896-70.67648l112.64-66.02752a81.92 81.92 0 0 1 82.86208 0l112.64 66.02752A81.92 81.92 0 0 1 716.8 520.94976V812.032a81.92 81.92 0 0 1-40.50944 70.69696l-112.18944 65.72032z m-349.16352-143.52384l-112.96768-66.1504A81.92 81.92 0 0 1 61.44 668.0576V355.92192a81.92 81.92 0 0 1 40.50944-70.67648l105.04192-61.52192a81.92 81.92 0 0 1 82.82112 0l121.28256 71.10656a20.48 20.48 0 0 1 0 35.328l-124.84608 73.19552A81.92 81.92 0 0 0 245.76 474.0096v313.26208a20.48 20.48 0 0 1-30.84288 17.65376zM359.58784 134.3488l100.31104-58.7776a103.17824 103.17824 0 0 1 104.20224 0l110.55104 64.77824a20.48 20.48 0 0 1 0 35.328l-111.0016 65.06496a81.92 81.92 0 0 1-82.8416 0l-121.2416-71.0656a20.48 20.48 0 0 1 0-35.328z" p-id="3754" fill="#FFB8D2"></path></svg>`
      },
      link: 'https://docs.kwfruit.cn/'
    },
    {
      icon: {
        svg: `<svg t="1700567795085" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2396" width="64" height="64"><path d="M851.40363594 172.59636406c-187.46181844-187.46181844-491.34545437-187.46181844-678.80727188 0-187.46181844 187.46181844-187.46181844 491.34545437 0 678.80727188 187.46181844 187.46181844 491.34545437 187.46181844 678.80727188 0 187.46181844-187.46181844 187.46181844-491.34545437 0-678.80727188zM387.33090875 728.08727281a47.08363594 47.08363594 0 1 1-66.63272719-66.50181843 47.08363594 47.08363594 0 0 1 66.63272719 66.50181843z m205.52727281 1.39636313a38.74909125 38.74909125 0 0 1-76.62545437-11.52h-0.04363594a6.54545437 6.54545437 0 0 0-0.04363688 0.30545531v-0.34909125c0.30545438-2.61818156 2.05090875-20.72727281-2.96727281-44.98909125a174.24 174.24 0 0 0-48.56727281-89.28 172.10181844 172.10181844 0 0 0-88.8-48.30545438 156.69818156 156.69818156 0 0 0-42.45818156-2.92363593 38.66181844 38.66181844 0 0 1-35.38909125-65.32363688 38.61818156 38.61818156 0 0 1 21.12-10.8218175v-0.2181825c4.45090875-0.74181844 111.14181844-16.45090875 200.33454562 72.74181844 89.01818156 89.01818156 74.18181844 196.14545438 73.44 200.72727281z m175.2 7.59272812a38.74909125 38.74909125 0 0 1-65.67272719 21.3818175 39.49090875 39.49090875 0 0 1-11.65090875-33.73090875c0.08727281-0.34909125 5.10545437-37.48363594-5.06181843-88.97454562-13.30909125-67.37454562-45.29454563-126.89454563-94.95272719-176.90181844-50.00727281-49.70181844-109.52727281-81.64363594-176.94545438-94.95272719-51.49090875-10.16727281-88.58181844-5.19272719-89.01818156-5.14909031h0.21818156-0.04363687a39.92727281 39.92727281 0 0 1-44.68363594-32.90181844 38.83636406 38.83636406 0 0 1 32.20363594-44.37818156c1.92-0.30545438 47.86909125-7.33090875 111.27272719 4.36363594a411.75272719 411.75272719 0 0 1 106.25454562 34.95272718 425.76 425.76 0 0 1 114.63272719 82.25454563l0.91636406 0.96 0.96 0.87272719a425.89090875 425.89090875 0 0 1 82.25454563 114.72c16.40727281 33.6 28.14545437 69.29454562 34.99636312 106.21090875 11.65090875 63.40363594 4.66909125 109.35272719 4.32 111.27272812z" fill="#FFB8D2" p-id="2397"></path></svg>`
      },
      link: 'https://www.cnblogs.com/mangoubiubiu'
    },
    {
      icon: {
        svg: `<svg t="1702870939824" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6637" id="mx_n_1702870939825" width="64" height="64"><path d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m226.06 277.73L517.54 809.14c-3.18 7.28-13.72 7.08-17.21-0.41L410.4 616.57a5.966 5.966 0 0 0-2.97-2.97L215.6 523.58c-7.58-3.49-7.79-14.05-0.41-17.23l508.74-220.76c8.91-3.91 18.03 5.22 14.13 14.14z" fill="#FFB8D2" p-id="6638"></path></svg>`
      },
      link: 'https://navs.kwfruit.cn/'
    }
  ],
  }
})
/**
 * 基础的配置文件
 */
import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({
    /**
     * 网站语言
     */
    lang: 'zh-CN',
    /**
     * 网站标题
     */
    title: 'Vuepress-Doc',

    /**
     * 网站叙述
     * description 等同于 README.md 中的 tagline: 【如果两个同时存在，README.md文件中的优先于config.ts】
     */
    // description: '这是我的第一个 VuePress 站点',

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        /**
         * 网站logo [注意：图片需要存放在public下]
         */
        ['link', {rel: 'icon', href: 'images/logo.png'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],

    /**
     * 排除文件访问路径
     */
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
    /**
     * 默认主题配置
     */
    theme: defaultTheme({
        /**
         * 导航栏logo [注意：图片需要存放在public下]
         */
        logo: 'images/logo.png',

        /**
         * 导航
         */
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '指南',
                link: '/guide/', // 以"/"结束 默认读取 README.md
            },
            {
                text: '配置',
                link: '/config/', // 以"/"结束 默认读取 README.md
            },
            {
                text: '赞助',
                link: '/sponsor/', // 以"/"结束 默认读取 README.md
            },
            {
                text: '问答',
                link: '/questions/', // 以"/"结束 默认读取 README.md
            },
            {
                text: '介绍',
                link: '/intro/',
            },
            {
                text: '更多',
                children: [
                    {text: 'Java', link: '/more/java/'}, // 可以不写md
                    {text: 'HTML', link: '/more/html/'},
                    {text: 'Node', link: '/more/node/'}
                ]
            }
        ],
    }),

})
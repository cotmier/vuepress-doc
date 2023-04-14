export const data = JSON.parse("{\"key\":\"v-1d2b2493\",\"path\":\"/blog/test.html\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/test.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

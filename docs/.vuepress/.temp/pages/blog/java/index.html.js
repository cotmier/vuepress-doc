export const data = JSON.parse("{\"key\":\"v-eae3c54e\",\"path\":\"/blog/java/\",\"title\":\"首页的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"首页的标题\",\"description\":\"页面的描述\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/java/README.md\"}")

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

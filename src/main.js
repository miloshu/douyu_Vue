// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import store from './store'
import router from './router'

// router.beforeEach((transition) => {
//   if (transition.to.path !== '/page/0') {
//     transition.next()
//   } else {
//     transition.abort()
//   }
// })
// 引入vue - websocket
// import VueWebsocket from "vue-websocket";
// 安装
// Vue.use(VueWebsocket, "ws://otherserver:8080");

// 引入http服务
import Axios from 'axios'
Vue.prototype.$http = Axios
// 全剧默认设置
// Axios.defaults.baseURL = 'xxxxxx'

// 引入通用样式并执行
import './assets/css/common.css'
import './assets/css/iconfont.css'
import './assets/css/ico-font.css'
import './assets/font/fontSize.js'  // 字体大小

// 引入mint-ui  图片懒加载组件
import { Lazyload, Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Lazyload)
Vue.use(Indicator)
// 拦截器
Axios.interceptors.request.use( config => {
  // 发起请求之前显示loading
  Indicator.open('加载中...')
  return config
})
Axios.interceptors.response.use(config => {
  // 显示回来之后隐藏loading
  Indicator.close()
  return config
})
// 引入mint-ui 部分组件
import { Header, Swipe, SwipeItem, Search, Navbar, TabItem } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Search.name, Search)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)

// 引入子组件对象
import HeaderGray from './components/Header-gray'
import HeaderLive from './components/HeaderLive'
import SideMenu from './components/SideMenu'
import FooterBar from './components/FooterBar'
// 声明全局组件
Vue.component('HeaderGray', HeaderGray)
Vue.component('HeaderLive', HeaderLive)
Vue.component('SideMenu', SideMenu)
Vue.component('FooterBar', FooterBar)
// import { Navbar, TabItem } from 'mint-ui';
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// vue-preview  图片预览
// import VuePreview from 'vue-preview'
// Vue.use(VuePreview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

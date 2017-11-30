import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = resolve => require(['../pages/Home.vue'], resolve)
const Search = resolve => require(['../pages/Search.vue'], resolve)
const CategoryDetails = resolve => require(['../pages/CategoryDetails.vue'], resolve)
const RoomList = resolve => require(['../pages/RoomList.vue'], resolve)
const NotFound = resolve => require(['../pages/NotFound.vue'], resolve)
// 挂载属性 安装插件
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: "is-active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryDetails
    }, 
    {
      path: '/roomlist/:id',
      name: 'roomlist',
      component: RoomList
    }, 
    {
      path: '/',  // 默认进入首页
      redirect: {name: 'home'}  //重定向
    },
    // 以上都无法匹配到, 则跳转到404页面
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})

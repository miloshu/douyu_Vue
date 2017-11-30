<template>
  <div class="layout-nav" v-show="slideMenuBol">
    <div class="nav-header">
      <span :title="item.cate1Name" class="items" v-for="(item, index) in list.cate1Info" :key="item.cate1Id" 
        :class="{active: activeIndex===index}" @click="changeIndex(index, item.cate1Id)">
        {{item.cate1Name}}
        <b :class="{active: activeIndex===index}" @click="changeIndex(index, item)"></b>
      </span>
    </div>
    <div class="nav-content">
      <!-- :to="{name: 'roomlist', params: {id: item.cate1Id} }" -->
      <router-link :to="{name: 'roomlist', params: {id: item.cate1Id} }" v-for="(item, index) in newList" 
        :key="item.cate2Id" :class="{active: activeIndex===index}">
        <div class="nav-item" @click="changeMenuBol(item)">
          <img v-lazy="item.pic" :title="item.cate2Name" :alt="item.cate2Name"><br>
          {{item.cate2Name}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

  export default{
    data () {
      return {
        activeIndex: 0,
        // shortName: ''
        activeId: 0,
        
      }
    },
    created () {
      // 获取路由参数
      // vue-router中挂载2个对象的属性  $route(只读,信息数据)  $router(功能函数数据)
      //  this.$router.go(n)  前进,后退  ;  this.$router.push('/') 直接跳转到某个页面
      this.id = this.$route.params.id
      console.log(this.$route)
    },
    methods: {
      changeIndex (index, id) {
        // console.log(id)
        this.activeIndex = index
        this.activeId = id
        // this.shortName = item.shortName
      },
      changeMenuBol (item) {
        // console.log(item)
        this.$store.commit("TOGGLE_MENU")
        this.$store.commit("ACTIVE_ITEMS", item)
        this.$store.commit("TAB_NAME_BOL", true)
      }
    },
    computed: {
    // 提取slidemenu的数据
      list () {
        let cateList = this.$store.state.cateList
        // 阻止报错
        if (cateList.cate2Info === undefined) {
          return {
            cate2Info: []
          }
        }
        return cateList
      },
      newList () {
        let arr = this.list.cate2Info
        let newArr = []
        // console.log(arr)
        for (let i = 0; i < arr.length; i++) {
          if(this.activeId === arr[i].cate1Id) {
            newArr.push(arr[i])
          }
        }
        if (this.activeIndex === 0) {
          return arr
        } else {
          console.log(newArr)
          return newArr
        }
        
      },
      // 获取home页的游戏区域的数据
    // setMixList () {
    //   return this.$store.state.tabNameBol
    // }
      slideMenuBol () {
        return this.$store.state.isShow
      }
    }
  }
</script>
<style scoped>
  /* .side-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background-color: rgba(0,0,0,.8);
  } */
    /* 蒙版遮罩 */
  .layout-nav {
    position: fixed;
    top: 3.55rem;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background-color: rgba(0,0,0,.3);
    /* width: 100%; */
    /* height: 30.25rem; */
  }
  .nav-header {
    width: 100%;
    height: 3.75rem;
    line-height: 3.75rem;
    background-color: #fff;
    overflow-x: auto;
    overflow-y: hidden;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
  }
  .nav-header > .items {
    position: relative;
    display: inline-block;
    white-space: nowrap;
    border-right: .5rem solid transparent;
    border-left: .5rem solid transparent;
    font-size: 1.3rem;
    color: #676767;
    line-height: 3.75rem;
  }
  .nav-header > span.active {
    color: #fa7122;
    font-weight: 700;
  }
  .nav-header > .items > b {
    position: absolute;
    left: 0;
    bottom: .85rem;
    width: 100%;
    display: block;
  }
  .nav-header > .items > b.active {
    height: .2rem;
    background-color: #fa7122;
  }
  .nav-content {
    width: 100%;
    height: 27.68rem;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-flow: row wrap;
    overflow-y: auto;
    background-color: #f4f4f4;
  }
  .nav-content > a {
    color: #000;
    font-size: 1rem;
    width: 33.2%;
    height: 33.2%;
  }
  .nav-content > a.active {
    display: none;
  }
  .nav-content > a > .nav-item {
    float: left;
    width: 100%;
    height: 100%;
    border-right: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    overflow: hidden;
    text-align: center;
  }
  .nav-content .nav-item > img {
    width: 50%;
    height: 50%;
    margin: 1.78rem 0 .35rem 0;
    border-radius: 50%;
  }
</style>

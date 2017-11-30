<template>
  <!-- <div class="container"> -->
    <div class="layout-header">
      <div class="header">
        <div class="logo" @click="BackHome"></div>
        <div class="btns">
          <router-link class="search" :to="{path:'/search'}">
            <i class="iconfont">&#xe60b;</i>
            搜索
          </router-link>
          <span class="split"></span>
          <span class="classes" @click="ShowSideMenu()">
            <i class="iconfont">&#xe600;</i>
            分类
          </span>
        </div>
      </div>
    <!-- </div> -->
   <!-- 引入菜单组件 -->
    <!-- <side-menu></side-menu> -->
  </div>
</template>
<script>

export default {
  methods: {
    ShowSideMenu () {
      // this.$store.dispatch('ShowSideMenu')
      this.$store.commit('TOGGLE_MENU')
    },
    // 点击斗鱼logo图标的时候让跳转到home页
    BackHome () {
      // alert("嗨!你真的要离开了吗?")
      this.$router.push("/")
    }
  }
}
</script>
<style scoped>
  .layout-header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 3.55rem;
    background-color: #eee;
  }
  .header {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .header > .logo {
    float: left;
    margin: .5rem 0 0 .6rem;
    width: 6rem;
    height: 2.8rem;
    background: url('../assets/img/logo.jpg') no-repeat;
    background-size: 5.76rem 3.23rem;
  }
  .header > .btns {
    float: right;
    display: flex;
    height: 100%;
    margin-right: .4rem;
    -webkit-box-align: center;
    align-items: center;
    color: #999;
    font-size: 1.2rem;
  }
  .header > .btns > .search {
    color: #999;
    margin-right: .8rem;
  }
  .split {
    display: inline-block;
    width: 1px;
    height: 1rem;
    margin: .5rem;
    background-color: #ddd;
  }
  .classes {
    margin: .28rem .3rem;
  }
</style>



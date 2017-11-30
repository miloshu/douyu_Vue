<template>
  <!-- <div class="container"> -->
    <div class="layout-header">
      <div class="header">
        <div class="logo" @click="BackHome()"></div>
        <div class="btns">
          <span class="classes" @click="toggleMenu()">
            直播分类
            <i class="iconfont mr">&#xe600;</i>
          </span>
        </div>
      </div>
  </div>
</template>
<script>

export default {
  // data () {
  //   return {}
  // },
  // methods: {
  //   sideHide () {

  //   }
  // },
  // components: {
  //   SideMenu
  // }
  methods: {
    toggleMenu () {
      this.$store.dispatch('toggleMenu')
    },
    // 点击斗鱼logo图标的时候让跳转到home页
    BackHome () {
      this.$router.push('/')
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
    font-size: 1.3rem;
    font-weight: 700;
  }
  .classes {
    margin: .28rem .3rem;
  }
  .iconfont.mr {
    margin-left: .5rem;
    vertical-align: top;
    font-size: 1.3rem;
  }
</style>



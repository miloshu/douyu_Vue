<template>
<!-- 这里的内容将来会替换index.html里面的id="app"的内容 -->
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    // 在created函数中调用ajax获取页面初始化所需的数据。
    // 初始化操作,首页的banner数据和分类 实现自执行
    this.$store.dispatch('setData')
    this.$store.dispatch('setList')
    // this.$store.dispatch('setYzList')
  // 发起后台操作请求
    // this.$store.dispatch('action中的方法名' , '参数');
  }
  // App主组件内的子组件
  // components: {}
}
</script>

<style>
#app {
  position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

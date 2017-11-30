<template>
  <div class="fault">
    <p @click="goBackHome">很遗憾! 您访问的页面去旅行了......</p>
  </div>
</template>
<script>
export default {
  methods: {
    goBackHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .fault {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("images/404.jpg") no-repeat;
    background-size: 100% 100%;
  }
   .fault > p {
     margin: 50% auto;
     font-size: 2rem;
     color: #58e;
   }
</style>




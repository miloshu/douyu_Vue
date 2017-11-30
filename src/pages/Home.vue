<template>
  <div class="home" id="back">
    <!-- 引入头部组件 -->
    <header-gray></header-gray>
    <!-- 引入头部菜单组件 -->
    <!-- <side-menu v-show="SideMenuToggle"></side-menu> -->
    <side-menu></side-menu>
    <div class="main">
      <!-- 轮播图 -->
      <div class="bannar">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="imgs" to="/" v-for="(img, index) in live.banner" :key="index">
            <img v-lazy="img.pic_url" :title="img.title">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 主内容模块-最热 -->
      <div class="layout-rooms hot">
        <div class="title">
          <h3><i class="iconfont f75">&#xe603;</i>最热</h3>
          <span class="change" @click="RandomSort()">换一换 <i class="iconfont ml">&#xe604;</i></span>
        </div>
        <div class="content">
          <div class="c-room-item" v-for="item in live.hotList" :key="item.cate2_id">
            <router-link :to="{name: 'category', params:{id: item.data[index].room_id} }">
              <div class="room-show">
                <img v-lazy="item.data[index].room_src" alt="">
                <span class="room-online"><i class="iconfont fontSize">&#xe621;</i>{{item.data[index].online}}</span>
                <span class="room-nickname"><i class="iconfont fontSize">&#xe63f;</i>{{item.data[index].nickname}}</span>
              </div>
              <div class="room-des">{{item.data[index].room_name}}</div>
            </router-link>
          </div>
        </div>
      </div>
       <!-- 正在直播区 -->
      <div class="layout-rooms live">
        <a href="javascript:;">
          <div class="title">
            <h3><i class="iconfont f75">&#xe661;</i>正在直播</h3>
            <span class="live-online">当前<var>{{live.liveCount}}</var>个直播<i class="iconfont ml">&#xe602;</i></span>
          </div>
        </a>
        <div class="content">
          <div class="c-room-item" v-for="item in live.liveList" :key="item.cate2_id">
            <router-link :to="'/category/'+ item.room_id">
              <div class="room-show">
                <img v-lazy="item.room_src" alt="">
                <span class="room-online"><i class="iconfont fontSize">&#xe621;</i>{{item.online}}</span>
                <span class="room-nickname"><i class="iconfont fontSize">&#xe63f;</i>{{item.nickname}}</span>
              </div>
              <div class="room-des">{{item.room_name}}</div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 美女颜值区 -->
      <div class="layout-rooms FaceScore">
        <a href="javascript:;">
          <div class="title">
            <h3><i class="iconfont f75">&#xe60f;</i>颜值</h3>
            <span class="live-online">更多<i class="iconfont ml">&#xe602;</i></span>
          </div>
        </a>
        <div class="content">
          <div class="c-room-item" v-for="item in live.yzList" :key="item.cate1_id">
            <router-link :to="'/category/'+ item.room_id">
              <div class="girl_show">
                <img v-lazy="item.vertical_src" alt="item.room_name">
                <span class="room-online"><i class="iconfont fontSize">&#xe621;</i>{{item.online}}</span>
              </div>
              <div class="userInfo">
                <span class="user_name"><i class="iconfont fontSize">&#xe63f;</i>{{item.nickname}}</span>
                <span class="location_info"><i class="iconfont fontSize">&#xe614;</i>{{item.anchorCity}}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 游戏专区 -->
      <div class="layout-rooms mixList" v-for="(items, index) in live.mixList" :key="index">
        <a href="javascript:;">
          <div class="title">
            <h3 class="wzry"><img class="f75 small-icon" :src="items.icon" alt="">{{items.tabName}}</h3>
            <span class="center_content">
              <router-link :to="'/roomlist/'+ item.cate1Id"  v-for="(item, key, index) in items.cate2Info" 
                :key="index" v-if="index<2">
                <span @click="activeItems(items)">{{item.cate2Name}}</span>
              </router-link>
            </span>
            <!-- .shortName -->
            <span class="live-online" @click.stop="more(items)">更多<i class="iconfont ml">&#xe602;</i></span>
          </div>
        </a>
        <div class="content">
          <div class="c-room-item" v-for="(item, index) in items.data" :key="item.room_id">
            <router-link :to="{name: 'category', params:{id: item.room_id} }">
            <!-- :to="{name: 'category', params:{id: item.room_id} }" -->
              <div class="room-show">
                <img v-lazy="item.room_src" alt="">
                <span class="room-online"><i class="iconfont fontSize">&#xe621;</i>{{item.online}}</span>
                <span class="room-nickname"><i class="iconfont fontSize">&#xe63f;</i>{{item.nickname}}</span>
              </div>
              <div class="room-des">{{item.room_name}}</div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- footer -->
      <div class="footer">
        <a class="go2Top" href="#back">
          <span><i class="iconfont" style="vertical-align: middle">&#xe60d;</i>&nbsp;返回顶部</span>
        </a>
        <a target="parent" href="https://www.douyu.com/client?platform=0">
          <div class="download">
            下载客户端
          </div>
        </a>
        <p>
          <span>客服热线：027-65026248</span>
          <span>武汉斗鱼网络科技有限公司</span>
          <span>湖北省武汉市东湖开发区光谷软件园F4栋8楼</span>
          <span>版权所有 © www.douyu.com 鄂ICP备15011961号-1</span>
        </p>
      </div> 
    </div>
    <div class="layout-ball">
      <a href="https://www.douyu.com/client?platform=0"></a>
    </div>
  </div>
</template>
<script>
// var winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
// if (winScroll > 800 && winScroll < 1000) { console.log("......")} 
export default {
  created(){
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      index: 0,
      classItemId:'',
    }
  },
  methods: {
    RandomSort () {
      // window.location.reload()
      // this.$store.dispatch("setHot")
      this.index++
      let index = this.index
      this.index = index > 3 ? 0 : index
    },
    more (items) {
      let obj = items.cate2Info
      for(let key in obj){
        this.classItemId=obj[key].cate1Id
        // console.log(this.classItemId)
        break
      }
      this.$router.push('/roomlist/' + this.classItemId)
      this.$store.commit('ACTIVE_ITEMS', items)
      this.$store.commit('TAB_NAME_BOL', false)
    },
    // 点击按钮进入roomlist页对应的分类
    activeItems (item) {
      // console.log(item)
      this.$store.commit('ACTIVE_ITEMS', item)
      this.$store.commit('TAB_NAME_BOL', true)
    },
    // 监听滚动事件
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
    },
  },
  computed: {
    // 获取live对象  游戏区域的数据
    live () {
      // console.log(this.$store.state.data)
      return this.$store.state.data
    },
    // 是否显示下拉菜单栏组件
    SideMenuToggle () {
      return this.$store.state.bol
    }
  }
}
</script>
<style scoped>
  .home {
    /* min-height: 100%;
    width: 100%; */
    position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
    /* overflow-x: hidden;
    overflow-y: auto; */
  }
	.main {
		position: absolute;
		top: 4rem;
		left: 0;
		right: 0;
		bottom: 0;
    z-index: 2;
		/* overflow-y: scroll;
		overflow-x: hidden; */
	}
  .bannar{
    width: 100%;
    height: 10.33rem;
	}
  .bannar a{
		display: block;
	}
	.bannar a img {
    width: 100%;
    height: 10.33rem;
  }
  .layout-rooms {
    background-color: #fff;
    margin-top: .8rem;
  }
  .layout-rooms .title {
    width: 100%;
    height: 3rem;
    padding: 0 .5rem;
    overflow: visible;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3, .title > span {
    color: #333;
    font-size: 1.3rem;
    line-height: 3rem;
  }
  .change {
    color: #999;
    font-size: 1.2rem;
  }
  .f75 {
    color:#f75d2e; 
    margin-right: .5rem;
  }
  .small-icon {
    width: 1.333rem;
    height: 1.42rem;
    vertical-align: text-bottom;
  }
  .ml {
    margin-left: .2rem;
  }
  .fontSize {
    font-size: .7rem;
  }
  .layout-rooms > .content {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .c-room-item {
    width: 48%;
    margin-left: .35rem;
    margin-bottom: .4rem;
    /* background-color:pink; */
  }
  .c-room-item:nth-child(2n) {
    margin-right: .35rem;
  }
  .c-room-item .room-show {
    position: relative;
    width: 100%;
    height: 7.25rem;
    border-radius: .5rem;
    overflow: hidden;
  }
  .c-room-item .room-show > img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    overflow: hidden;
  }
  .room-online, .room-nickname {
    position: absolute;
    z-index: 2;
    color: #fff;
    font-size: .8rem;
  }
  .room-online {
    top: .5rem;
    right: .5rem;
  }
  .room-nickname {
    bottom: .5rem;
    left: .5rem;
  }
  .room-des {
    width: 12.83rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    color: #333;
    overflow: hidden;
    /* word-break: break-all; */
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
  .live .title{
    position: relative;
  }
  .live-online {
    position: absolute;
    right: .5rem;
  }
  var {
    color: #f70;
  }
  .girl_show {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /* padding-bottom: .45rem; */
    overflow-x: hidden;
    /* background-color:pink; */
  }
  .girl_show > img{
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: block;  
    border-radius: .5rem;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  .userInfo {
    height: 2rem;
    line-height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .imgs > img {
    width: 100%;
    height: 100%;
  }
  .center_content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: .29333rem;
    color: #f70;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    overflow: hidden;
  }
  .center_content span {
    float: left;
    line-height: 1.1rem;
    white-space: nowrap;
    margin: .5rem .3rem;
    padding: .4rem;
    border: 1px solid #f70;
    color: #f70;
    border-radius: .9rem;
    overflow: hidden;
  }
  .footer .go2Top{
    text-align: center;
    font-size: .85rem;
    color: #666;
    padding: 1.4rem 0;
    transition: all 1s;
  }
  .download {
    margin: 0 auto;
    text-align: center;
    width: 22.68rem;
    line-height: 3.5rem;
    height: 3.5rem;
    background-color: #f70;
    color: #fff;
    font-size: .85rem;
    border-radius: .5rem;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }
  .footer p {
    text-align: center;
    color: #999;
    font-size: .85rem;
    padding-bottom: 4rem;
    line-height: 1.3rem;
  }
  .footer p > span, .go2Top {
    display: block;
  }
  .layout-ball {
    position: fixed;
    z-index: 10;
    bottom: 5rem;
    right: 0;
    width: 6rem;
    height: 5rem;
    background: url(images/sideBar.png) no-repeat;
    background-size: 100% 100%;
  }
  .layout-ball > a {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
</style>

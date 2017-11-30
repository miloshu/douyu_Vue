<template>
  <div class="roomlist">
    <!-- 引入头部 -->
    <header-live></header-live>
     <!-- 引入头部菜单组件 -->
    <side-menu></side-menu>
    <!-- <side-menu v-show="ToggleMenu"></side-menu> -->
    <!-- 内容区域 -->
    <section class="live-area">
      <!-- 标题 -->
      <div class="title">
        <i class="iconfont wz">&#xe661;</i>
        <!-- <span v-show="tabNameBol">{{activeItems.tabName}}</span> -->
        <span v-show="tabNameBol">{{tabName}}</span>
        <span class="bdr" v-for="(item, key, index) in activeItems.cate2Info" v-show="whichActiveItems" v-if="index<1"
          :key="index">{{item.cate2Name}}</span>
        <span class="bdr" v-show="!whichActiveItems">{{activeItems.cate2Name}}</span>
      </div>
      <!-- 图片区域 -->
      <div class="live-list">
        <!--  去哪里 ?id=1  -->
        <router-link :to="{name: 'category', params:{id: item.shortName} }" class="live" 
          v-for="(item, index) in activeRoomList" :key="item.cate2Id" v-if="index<count">
          <img v-lazy="item.pic" alt="" class="live-feature">
          <div class="live-title">{{item.cate2Name}}</div>
          <div class="live-info">
            <span class="room-name">{{item.shortName}}</span>
            <span class="viewer"><i class="iconfont tx">&#xe63f;</i>{{item.count}}万</span>
          </div>
        </router-link>
      </div>
      <div class="loadmore" @click="loadMore">加载更多...</div>
    </section>
    <!-- 引入footer组件 -->
    <footer-bar></footer-bar>
  </div>
</template>
<script>

export default {
  data () {
    return {
      count: 8,
      whichActiveItems: true,
      tabName: ''
      // roomList: {},
      // activeId: ''
    }
  },
  created () {
    // 获取路由参数
    // this.roomList = this.$store.state.roomList
    // this.activeId = this.$route.params.id
  },
  computed: {
     // 获取路由参数
    activeId () {
      return this.$route.params.id
    },
    list () {
      return this.$store.state.cateList
    },
    // ToggleMenu () {
    //   return this.$store.state.isShow
    // },
    roomList () {
      let cateList =  this.$store.state.cateList
      // console.log(cateList)
      // 阻止报错
        if (cateList.cate2Info === undefined) {
          return {
            cate2Info: {}
          }
        }
        return cateList
    },
    activeRoomList () {
      let arr = this.roomList.cate2Info
      let id = this.activeId
      let newArr = []
      for(let i = 0; i<arr.length; i++){
        if(arr[i].cate1Id == id){
          newArr.push(arr[i])
        }
      }
      return newArr
    },
    // 获取home页传过去给state里面的activeItems对象
    activeItems () {
      let activeItems = this.$store.state.activeItems
      if (activeItems.cate2Info) {
        this.tabName = activeItems.tabName
        this.whichActiveItems = true
      } else {
        let cate1Info = this.$store.state.cateList.cate1Info
        for (let i = 0; i < cate1Info.length; i++) {
          if (cate1Info[i].cate1Id === activeItems.cate1Id) {
            this.tabName = cate1Info[i].cate1Name
            break
          }
        }
        this.whichActiveItems = false
      }
      return activeItems
    },
    tabNameBol () {
      return this.$store.state.tabNameBol
    }

  },
  methods: {
    loadMore () {
      // 加载更多数据
      // console.log(this.count)
      this.count += 8
      
    }
  }
}
</script>
<style scoped>
  .roomlist {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .iconfont.wz {
    margin-right: .5rem;
    color: red;
    font-size: .45rem;
  }
  .iconfont.tx {
     font-size: .45rem;
  }
  .live-area {
    position: relative;
    top: 3.6rem;
    box-sizing: border-box;
    width: 100%;
    /* 暂时给个高度 最后移除*/
    /* height: 40rem; */
    padding: 0 .5rem .5rem;
    text-align: left;
    font-size: 1.3rem;
    border-top: .05rem solid #CCC;
    background-color: #fff;
  }
  .live-area > .title {
    width: 100%;
    height: 2.5rem;
    color: #424242;
    line-height: 2.5rem;
  }
  .live-area > .title > .bdr {
    margin-left: .8rem;
    padding: .2rem .35rem;
    color: #FA7122;
    background-color: #F4F4F4;
    border-radius: .5rem;
  }
  .live-list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-flow: row wrap;
    box-sizing: border-box;
    margin-bottom: 1rem;
  }
  .live-list > .live {
    position: relative;
    /* display: block; */
    top: 0;
    width: 49.3%;
    height: 9rem;
    margin: .35rem .35rem .35rem 0;
    color: #333;
    overflow: hidden;
    /* background-color: pink; */
  }
  .live-list > .live:nth-child(2n) {
    margin-right: 0;
  }
  .live-feature {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 7.25rem;
    border-radius: .5rem;
  }
  .live-list  .live-title {
    position: absolute;
    bottom: -.5rem;
    left: 0;
    width: 100%;
    height: 2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #000;
    text-indent: .5rem;
    line-height: 2rem;
  }
  .live-list .live-info {
    position: absolute;
    bottom: 2rem;
    left: 0;
    z-index: 5;
    width: 100%;
    color: #fff;
    padding: .5rem 0;
    font-size: .85rem;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    box-shadow: 0 0 .05rem #000;
    background: rgba(0,0,0,.5);
  }
  .live-info > .room-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 6.75rem;
    display: inline-block;
    padding-left: .2rem;
  }
  .live-info > .viewer {
    float: right;
    padding-right: .5rem;
  }
  .loadmore {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    border: 1px solid #DDD;
    font-size: .85rem;
    color: #7A7A7A;
    border-radius: .5rem;
  }
</style>

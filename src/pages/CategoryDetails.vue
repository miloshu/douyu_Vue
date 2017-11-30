<template>
  <div class="room">
		<div class="video">
			<div class="video-inner">
				<!-- 通过ref 获取dom -->
				<video class="videoPlay" ref="videoPlay" loop poster="https://rpic.douyucdn.cn/acrpic/171030/3486031_1015.jpg">
				 	<source src="./mov_bbb.mp4" type="video/mp4">
  				<source src="./mov_bbb.mp4" type="video/ogg">
					您的手机版本，网页版暂未能支持！
					Your browser does not support the video tag.
				</video>
				<div v-show="isShow" class="control" @click="play">
					<img src="./images/play.png" alt="">
					<span class="time">1:20</span>
				</div>
			</div>
		</div>
		<div class="list">
			<ul>
				<li v-for="(item,index) in content" :key="index">
					{{item}}
				</li>
			</ul>
			<div class="chat-tip">
				<span class="warnInfo">系统消息: 斗鱼官方倡导绿色直播，对直播内容进行24小时在线巡查</span>
				<p class="chat-content">
					<span>王一博大帅：</span> 好惨的元素
				</p>
				<p class="chat-content">
					<span>哦哟厉害哦：</span> 可怜了
				</p>
				<p class="chat-content">
					<span>那一年我们时光正好：</span> 好残忍
				</p>
				<p class="chat-content">
					<span>小雨初情: </span> 暴打小萝莉
				</p>
				<p class="chat-content">
					<span>咕咚派：</span> 趁热
				</p>
			</div>
		</div>

	</div>
</template>
<script>
// 1. 引入通用的footer组件
export default {
  created () {
		// 获取路由参数
		console.log(this.$route)
		this.id = this.$route.params.id
	},
	data () {
		return {
			id: 0,
			isShow: true,
			content: ["聊天","主播","相关直播"]
		}
	},
	// 引入子组件
	components: {},
	computed: {
	},
	methods: {
		// 点击按钮视频播放
		play () {
			// console.log(this.$refs.videoPlay)
			if (this.$refs.videoPlay.readyState === 4) {
				this.isShow = false
				this.$refs.videoPlay.play()
				this.$refs.videoPlay.setAttribute('controls', true)
			}
		},
		// https://github.com/icebob/vue-websocket
		// add() {
		// 				// Emit the server side
		// 				this.$socket.emit("add", { a: 5, b: 3 });    
		// 	},
		// get() {
		//   		this.$socket.emit("get", { id: 12 }, (response) => {
					
		// 	});    
		// },
		// socket: {
		// 	// Prefix for event names
		// 	// prefix: "/counter/",
			
		// 	// If you set `namespace`, it will create a new socket connection to the namespace instead of `/`
		// 	// namespace: "/counter",

		// 	events: {
		// 		// Similar as this.$socket.on("changed", (msg) => { ... });
		// 		// If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
		// 		//
		// 		changed(msg) {
		// 			console.log("Something changed: " + msg);
		// 		}
				
		// 		/* common socket.io events
		// 		connect() {
		// 			console.log("Websocket connected to " + this.$socket.nsp);
		// 		},

		// 		disconnect() {
		// 			console.log("Websocket disconnected from " + this.$socket.nsp);
		// 		},

		// 		error(err) {
		// 			console.error("Websocket error!", err);
		// 		}
		// 		*/

		// 	}
		// }
	}
}
</script>
<style scoped>
	.room {
		position: relative;
		left: 0;
    top: 0;
		width: 100%;
		height: 100%;
    overflow: hidden;
	}
	.video {
		position: fixed;
		width: 100%;
		height: 14.65rem;
		overflow: hidden;
		background-color: #000;
    z-index: 2;
	}
	.video-inner {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.video-inner > .videoPlay {
		position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
	}
	.control {
		position: absolute;
		left: 50%;
		top: 50%;
		z-index: 5;
		width: 5rem;
		height: 5rem;
		transform: translate(-50%,-50%);
	}
	.control > img {
		width: 100%;
		height: 100%;
	}
	.list {
		margin-top: 14.65rem;
		height: 3rem;
		background: #e58;
	}
	.list > ul > li {
		float: left;
		width: 33.3333%;
		height: 100%;
		line-height: 3rem;
	}
	.warnInfo {
		display: inline-block;
		margin: .5rem 0;
    padding: .5rem 1rem;
    color: #333;
		line-height: 2;
		background-color: #eee;
		white-space: normal;
		text-align: left;
	}
	.chat-tip > .chat-content {
		margin-bottom: .9rem;
    padding: .5rem 1rem;
		white-space: normal;
		text-align: left;
    line-height: 1.2;
    font-size: .85rem;
    color: #666;
	}
	.chat-tip > .chat-content > span {
    color: #999;
	}
</style>

<template>
  <div class="search">
		<div class="search-box">
			<mt-search v-model="value" cancel-text="搜索" placeholder="搜索房间/主播/分类"></mt-search>
		</div>
    <!-- <mt-search v-model="value">
      <mt-cell v-for="(item, index) in result" :key="index" :title="item.title" :value="item.value"></mt-cell>
    </mt-search> -->
		<div class="layout-content">
			<h3 class="hot-title">最近热搜</h3>
			<div class="hot-content">
				<div class="left-block">
					<span data-text="王者荣耀"><i class="iconfont" style="background: red; color: #fff">&#xe61d;</i>王者荣耀</span>
					<span data-text="牛小蘑菇"><i class="iconfont" style="background: #f37; color: #fff">&#xe61f;</i>牛小蘑菇</span>
					<span data-text="绝地求生"><i class="iconfont" style="background: orange; color: #fff">&#xe626;</i>绝地求生</span>
					<span data-text="渡边麻友"><i class="iconfont">&#xe61e;</i>渡边麻友</span>
					<span data-text="冒险岛2"><i class="iconfont">&#xe61c;</i>冒险岛2</span>
				</div>
				<div class="right-block">
					<span data-text="传奇"><i class="iconfont">&#xe627;</i>传奇</span>
					<span data-text="十三姨"><i class="iconfont">&#xe623;</i>十三姨</span>
					<span data-text="荒野行动"><i class="iconfont">&#xe625;</i>荒野行动</span>
					<span data-text="命运2"><i class="iconfont">&#xe624;</i>命运2</span>
					<span data-text="小米枪战"><i class="iconfont" style="background: #fff; color: #999">&#xe6a0;</i>小米枪战</span>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ""
    }
	}
	// https://segmentfault.com/a/1190000009919769
	// this.axios.get('https://easy-mock.com/mock/593f72288ac26d795ff1e570/search/results')
  //         .then((res) => {
	// let result = res.data
	// console.log(result)
	// for( let i in result){
	// 	let item = i
	// 	console.log(item.indexOf(this.keywords))
	// 	if(item.indexOf(this.keywords) !== -1){
	// 			this.items = result[item]
	// 	}
	// }
}
</script>
<style scoped>
	.search-box {
		width: 100%;
		height: 3rem;
		background-color: #fff !important;
	}
	.layout-content {
		background-color: #fff;
	}
	.hot-title {
		padding-left: .5rem;
		padding-top: 8px;
    line-height: 4rem;
    font-size: .8rem;
		color: #333;
		text-align: left;
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
	}
	.iconfont {
		font-size: .85rem;
		margin-right: .5rem;
	}
	.hot-content {
		width: 100%;
    font-size: 1rem;
    color: #333;
		overflow: hidden;
		text-align: left;
	}
	.left-block, .right-block {
		float: left;
		width: 50%;
		overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
	}
	.hot-content > .right-block {
		float: right;
	}
	.hot-content span {
		display: block;
    height: 3.15rem;
    line-height: 3.15rem;
    padding-left: .7rem;
    /* overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis; */
	}
</style>


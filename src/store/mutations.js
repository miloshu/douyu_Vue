export default {
	SET_DATA (state, data) {
		state.data = data
		// console.log(data)
	},
	// SET_HOT(state, data) {
	// 	state.hotList = data.hotList
	// 	console.log(data.hotList)
	// },
		// 获取SideMenu组件的nav-header数据,并添加一个数据
	SET_LIST (state, data) {
		state.cateList = data
		// 观察数组的变异方法，所以它们也将会触发视图更新
		// let obj = {
		// 	unshift: Array.prototype.unshift
		// }
		// state.cateList = obj
		// console.log(state.cateList.unshift)
		state.cateList.cate1Info.unshift({
			cate1Id: 0,
			cate1Name: '全部'
		})
	},
	// 获取颜值数据
	// SET_YZ_LIST(state, data) {
	// 	state.yzlist = data
	// 	console.log(data)
	// },
	SHOW_SIDE_MENU (state) {
		state.bol = !state.bol
	},
	TOGGLE_MENU (state) {
		state.isShow = !state.isShow
	},
	ROOM_LIST (state, data) {
		state.roomList = data
		// console.log(state.roomList)
	},
	ACTIVE_ITEMS (state, items) {
		state.activeItems = items
		console.log(state.activeItems)
	},
	TAB_NAME_BOL (state, bol) {
		state.tabNameBol = bol
	},
	TOGG_SLIDE_MENU (state) {
		state.isShow = false		
	}

}
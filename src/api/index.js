export default {
  // https://m.douyu.com/index/getHomeData
  // room: 'https://m.douyu.com/category?type=',
  host: '/api/index/getHomeData/',
  cateURL: '/api/category?type=',  //将shortName拼接以后获取该类型的视频数据
  chat: '/api/room/getBarrageList?rid=94525&t=0&count=100'
  // Barraeglist(聊天): https://m.douyu.com/room/getBarrageList?rid=94525&t=0&count=100,
  // 主播: https://m.douyu.com/video/getList?rid=94525,
  // 相关直播: https://m.douyu.com/room/getSimilarList?rid=94525,
  // 搜索首页: https://m.douyu.com/search/getTodayTopData?limit=10&isAjax=1,
  // 搜素二级页面全部: https://m.douyu.com/search/getData?sk=%E5%B0%8F%E9%B1%BC%E6%98%9F%E7%B
}

import http from 'axios'
import api from '@/api'
export default {
  setData ({commit}) {
    let url = api.host
    http.get(url)
      .then(res => {
        commit('SET_DATA', res.data)
        // console.table(res.data)
      })
  }, 
  setList ({commit}) {
    let url = api.cateURL
    http.get(url)
      .then(res => {
        // console.log(res.data)
        commit('SET_LIST', res.data)
      })
  },
  // 颜值
  // setYzList ({commit}) {
  //   http.get("http://localhost:8081/results")
  //     .then(res => {
  //       commit('SET_YZ_LIST', res.data)
  //       console.log(res.data)
  //     })
  // },
  ShowSideMenu ({commit}) {
    commit('SHOW_SIDE_MENU')
  },
  toggleMenu ({commit}) {
    commit('TOGGLE_MENU')
  },

}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userName: '未登录',
  userRole: '未设置',
  selectId: 0,
  isLoading: false,
  direction: 'forward'
}
export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    },
    UPDATE_NUMBER (state, selectid) {
      state.selectId = selectid
    },
    UPDATE_USERNAME (state, username) {
      state.userName = username
    },
    UPDATE_USERROLE (state, userrole) {
      state.userRole = userrole
    }
  }
})

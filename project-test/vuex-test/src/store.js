import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  changableNum: 0,
  constant: 99,
  footerView: true
}

const getters = {
  getChangeNum () {
    return state.changableNum
  },
  isShow (state) {
    return state.footerView
  }
}

const actions = {
  addNum (context, num) {
    setTimeout(() => {
      context.commit('addNum', num)
    }, 500)
  }
}

const mutations = {
  addNum (state, num) {
    state.changableNum += num
  },
  hideFooter (state) {
    state.footerView = false
  },
  showFooter (state) {
    state.footerView = true
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store

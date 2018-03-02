// import Vue from 'vue';
import * as types from '../types'
import webCache from '../../utils/cacheHelper'

const loginStore = {
  state: {
    token: webCache.getItem(types.USER_TOKEN) || ''
  },
  mutations: {
    [types.USER_TOKEN](state, token) {
      state.token = token
      webCache.setItem(types.USER_TOKEN, token)
    }
  },
  actions: {
    login({ commit }, token) {
      commit(types.USER_TOKEN, token)
    },
    logout({ commit }) {
      commit(types.USER_TOKEN, '')
    }
  }
}
export default loginStore

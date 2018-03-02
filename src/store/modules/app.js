import Vue from 'vue'
import * as types from '../types'
import webCache from '../../utils/cacheHelper'

const appStore = {
  state: {
    applicationInfo: webCache.getItem(types.APPLICATION_INFO) || {},
    messageCount: 0
  },
  mutations: {
    [types.APPLICATION_INFO](state, applicationInfo) {
      let info = {
        siteTitle: applicationInfo.siteTitle
      }
      state.applicationInfo = { ...state.applicationInfo, ...info }
      // Object.assign(state.applicationInfo, info);
      webCache.setItem(types.APPLICATION_INFO, state.applicationInfo)
      // 对象需强制更新视图
      Vue.set(state, 'applicationInfo', info)
    },
    [types.MESSAGE_COUNT](state, messageCount) {
      state.messageCount = messageCount
    }
  },
  actions: {}
}
export default appStore

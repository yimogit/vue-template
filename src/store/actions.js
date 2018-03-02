import * as types from './types'
// 调用 this.$store.dispatch('setApplication',{})
// 模块内
/* eslint-disable */
export const setApplication = ({ commit, state }, applicatonInfo) => {
  console.log(applicatonInfo)
  commit(types.APPLICATION_INFO, applicatonInfo)
}

export const setMessageCount = ({ commit }, msgCount) => {
  commit(types.MESSAGE_COUNT, msgCount)
}

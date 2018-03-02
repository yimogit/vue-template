/*eslint-disable */
export const applicationInfo = state => state.app.applicationInfo

export const messageCount = state => state.app.messageCount

export const isLogin = state => !!(state.auth && state.auth.token)

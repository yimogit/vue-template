import fetch from '../utils/fetch'

export default {
  hi() {
    return fetch({
      url: '/Account/Hi',
      method: 'GET'
    })
  },
  login() {
    return fetch({
      url: '/Account/Login',
      method: 'POST'
    })
  }
}

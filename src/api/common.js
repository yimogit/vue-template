import fetch from '../utils/fetch'
export function getWxSdkConfig(url) {
  return fetch({
    url: 'http://localhost:10001/api/wechat/oauth/jssdk',
    params: { url },
    method: 'GET'
  })
}

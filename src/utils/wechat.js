import { getWxSdkConfig } from '@/api/common'

export function loadWxJs() {
  return new Promise((resolve, reject) => {
    if (window.WeChat_IsLoad_SDK === true) return resolve()
    window.WeChat_IsLoad_SDK = false
    dynamicLoadJs('https://res.wx.qq.com/open/js/jweixin-1.3.2.js', () => {
      window.WeChat_IsLoad_SDK = true
      resolve()
    })
  })
}

export function loadWxSdkConfig() {
  return new Promise((resolve, reject) => {
    const currentUrl = location.href.replace(location.hash, '')
    if (
      window.WeChat_Default_Key === currentUrl &&
      window.WeChat_Default_Config
    ) {
      return resolve(window.WeChat_Default_Config)
    }
    getWxSdkConfig(currentUrl)
      .then(res => {
        window.WeChat_Default_Key = currentUrl
        window.WeChat_Default_Config = res.data
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
const defaultWxConfig = {
  debug: false,
  jsApiList: [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'hideMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'showMenuItems',
    'getLocation',
    'openLocation'
  ]
}

export function isMiniProgram() {
  return window.__wxjs_environment === 'miniprogram'
}
export const isWechat = () =>
  navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1
/**
 * 分享信息设置
 * @param {Object} shareData 分享信息
 * @param {Function} callback  自定义分享按钮设置
 */
export function shareConfig(shareData, callback) {
  if (!isWechat()) return
  loadWxJs()
    .then(e => {
      loadWxSdkConfig()
        .then(wxConfig => {
          if (wxConfig != null && wxConfig.shareTitle != null) {
            shareData = Object.assign(
              {
                title: wxConfig.shareTitle || document.title,
                desc: wxConfig.shareContent || document.title,
                link: location.href,
                imgUrl: wxConfig.shareIcon,
                success(r) {
                  console.log(`success:${r}`)
                },
                cancel(r) {
                  console.log(`cancel:${r}`)
                }
              },
              shareData
            )
          }
          if (isMiniProgram()) {
            wx.miniProgram.postMessage({ data: shareData })
            return
          }
          window.wx.config({ ...defaultWxConfig, ...wxConfig })
          window.wx.error(res1 => {
            console.log('设置分享失败')
          })
          // 自定义分享回调
          if (typeof callback === 'function') {
            // https://mp.weixin.qq.com/wiki?action=doc&id=mp1421141115&t=0.28884458814849423#64
            return callback && callback(window.wx, shareData)
          }
          window.wx.ready(() => {
            window.wx.showAllNonBaseMenuItem()
            window.wx.onMenuShareTimeline(shareData)
            window.wx.onMenuShareAppMessage(shareData)
            window.wx.onMenuShareQQ(shareData)
            window.wx.onMenuShareQZone(shareData)
          })
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
}
function dynamicLoadJs(url, callback) {
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  if (typeof callback === 'function') {
    script.onload = script.onreadystatechange = function() {
      if (
        !this.readyState ||
        this.readyState === 'loaded' ||
        this.readyState === 'complete'
      ) {
        callback()
        script.onload = script.onreadystatechange = null
      }
    }
  }
  head.appendChild(script)
}

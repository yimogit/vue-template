export default {
  /**
   * 生成Guid
   */
  genGuid(splitStr) {
    /* eslint-disable */
    splitStr = splitStr || ''
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return (
      S4() +
      S4() +
      splitStr +
      S4() +
      splitStr +
      S4().substr(0, 3) +
      splitStr +
      S4() +
      splitStr +
      S4() +
      S4() +
      S4()
    ).toLowerCase()
    /* eslint-enable */
  },
  /**
   * 游客标记
   */
  getGuestToken() {
    const key = 'guest_token'
    if (window.guest_token) {
      return window.guest_token
    }
    try {
      window.guest_token = localStorage.getItem(key)
      if (window.guest_token) {
        return window.guest_token
      }
      window.guest_token = this.genGuid('')
      localStorage.setItem(key, window.guest_token)
      return window.guest_token
    } catch (e) {
      window.guest_token = this.genGuid('')
      return window.guest_token
    }
  },
  dataURItoBlob(dataURI) {
    // 图片转成Buffer
    let byteString = atob(dataURI.split(',')[1])
    let mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0]
    let ab = new ArrayBuffer(byteString.length)
    let ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], { type: mimeString })
  }
}

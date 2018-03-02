import WebStorageCache from '../assets/js/web-storage-cache'

const CACHE_KEY_PREFIX = 'cache_'
const wsCache = new WebStorageCache({
  stoage: 'localStorage',
  exp: Infinity
})

export default {
  getItem(key) {
    return wsCache.get(CACHE_KEY_PREFIX + key)
  },
  setItem(key, data, exp) {
    wsCache.set(CACHE_KEY_PREFIX + key, data, exp || Infinity)
  },
  clear(keyPrefix) {
    let cacheKeys = []
    let cacheKeyPrefix = keyPrefix
      ? CACHE_KEY_PREFIX + keyPrefix
      : CACHE_KEY_PREFIX
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      if (key.indexOf(cacheKeyPrefix) === 0) {
        cacheKeys.push(key)
      }
    }
    cacheKeys.forEach(value => {
      wsCache.delete(value)
    })
  },
  getSize(type) {
    let size = 0
    let regex = new RegExp(/[^\x00-\xff]/gi)
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      if (key.indexOf(CACHE_KEY_PREFIX) === 0) {
        size += localStorage.getItem(key).replace(regex, 'xx').length
      }
    }
    if (type === 'm') {
      return Math.round(size / 1024 / 1024 * 100) * 0.01
    }
    return size
  }
}

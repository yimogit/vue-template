import Vue from 'vue'
import toastVue from './Toast'

const ToastConstructor = Vue.extend(toastVue)

let instance = null
const getInstance = () => {
  if (instance != null) {
    return instance
  }
  instance = new ToastConstructor({
    el: document.createElement('div')
  })

  document.body.appendChild(instance.$el)
  return instance
}

const $toast = {
  show(opt) {
    getInstance().show(opt)
  },
  info(msg, time) {
    this.show({ msg, time, type: 'info' })
  },
  warn(msg, time) {
    this.show({ msg, time, type: 'warn' })
  },
  error(msg, time) {
    this.show({ msg, time, type: 'error' })
  }
}
export default $toast

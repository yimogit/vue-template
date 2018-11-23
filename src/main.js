import Vue from 'vue'
import App from './App'
import router from './router'
import directives from './directives'
import components from './components'
import filters from './filters'
import store from './store'
import $toast from './components/toast/service'

Vue.config.productionTip = false

Vue.prototype.$toast = $toast

// 注册指令，过滤器，组件
Object.keys(directives).forEach(e => Vue.directive(e, directives[e]))
Object.keys(filters).forEach(e => Vue.filter(e, filters[e]))
Object.keys(components).forEach(e => Vue.component(e, components[e]))

window.__currentApp = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

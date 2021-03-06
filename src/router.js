import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  { path: '', redirect: { name: 'index' } },
  {
    path: '/index',
    component: () => import('@/views/home/index'),
    name: 'index'
  },
  {
    path: '/comps/loadmore',
    component: () => import('@/views/comps/loadmore'),
    name: 'loadmore'
  },
  {
    path: '/comps/vuex',
    component: () => import('@/views/comps/vuex'),
    name: 'vuex'
  },
  {
    path: '/comps/croppeer',
    component: () => import('@/views/comps/croppeer'),
    name: 'croppeer'
  },
  {
    path: '/comps/previewer',
    component: () => import('@/views/comps/previewer'),
    name: 'previewer'
  },
  {
    path: '/comps/loading',
    component: () => import('@/views/comps/loading'),
    name: 'loading'
  },
  {
    path: '/comps/popup',
    component: () => import('@/views/comps/popup'),
    name: 'popup'
  },
  {
    path: '/comps/toast',
    component: () => import('@/views/comps/toast'),
    name: 'toast'
  },
  {
    path: '/comps/wechat',
    component: () => import('@/views/comps/wechat'),
    name: 'wechat'
  }
]
const router = new Router({
  //   mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    position.x = 0
    position.y = 0
    return position
  },
  routes
})
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(route => {
  console.log(route)
})

export default router

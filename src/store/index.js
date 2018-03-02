import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import app from './modules/app'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    app
  },
  strict: process.env.NODE_ENV !== 'production'
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    password: ''
  },
  mutations: {
    togglePassword (state) {
      state.password = document.getElementById('password')
      if (state.password.type === 'password') {
        state.password.type = 'text'
      } else {
        state.password.type = 'password'
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

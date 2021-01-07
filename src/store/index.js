import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import Swal from 'sweetalert2'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    password: '',
    users: []
  },
  mutations: {
    togglePassword (state) {
      state.password = document.getElementById('password')
      if (state.password.type === 'password') {
        state.password.type = 'text'
      } else {
        state.password.type = 'password'
      }
    },
    set_user (state, payload) {
      state.user = payload
    }
  },
  actions: {
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_BACKEND}/users/register`, payload)
          .then(res => {
            context.commit('set_user', res.data.message)
            resolve(res)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        if (response.data.status === 'Success') {
          if (response.data.message === 'Register success') {
            Swal.fire({
              icon: 'success',
              title: 'Success register',
              showConfirmButton: false,
              timer: 2000
            })
            router.push('/auth/login')
          }
        }
        return response
      }, function (error) {
        if (error.response.data.status === 'Failed') {
          if (error.response.data.message === 'email already exists') {
            Swal.fire({
              icon: 'error',
              title: 'Email already exists',
              showConfirmButton: false,
              timer: 2000
            })
          } else if (error.response.data.message === 'Internal server error!') {
            Swal.fire({
              icon: 'error',
              title: 'Internal server error!',
              showConfirmButton: false,
              timer: 2000
            })
          }
        }
        return Promise.reject(error)
      })
    }
  },
  modules: {
  }
})

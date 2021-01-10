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
    users: [],
    id: null || localStorage.getItem('id'),
    token: null || localStorage.getItem('token'),
    role: null,
    schedule: [],
    schedules: [],
    userProfile: {}
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
      state.users = payload
      state.id = payload.id
      state.token = payload.token
    },
    set_schedule (state, payload) {
      state.schedule = payload
    },
    set_schedules (state, payload) {
      state.schedules = payload
    },
    set_role (state, payload) {
      state.role = payload
    },
    remove (state) {
      state.users = []
      state.id = null
      state.token = null
    },
    SET_USER_BY_ID (state, payload) {
      state.userProfile = payload
      state.schedule = []
      state.role = null
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
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_BACKEND}/users/login`, payload)
          .then(res => {
            const result = res.data.data
            console.log(result)
            localStorage.setItem('id', result.id)
            localStorage.setItem('token', result.token)
            localStorage.setItem('role', result.role)
            context.commit('set_user', result)
            context.commit('set_role', result.role)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    updateProfile (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_URL_BACKEND}/users/${payload.id}`, payload)
          .then(res => {
            console.log(payload)
            Swal.fire({
              icon: 'success',
              title: 'Profile has been updated',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Failed to update profile',
              showConfirmButton: false,
              timer: 1500
            })
            reject(err)
          })
      })
    },
    updateAvatar (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_URL_BACKEND}/users/${payload.id}`, payload.formData)
          .then(res => {
            console.log(payload)
            Swal.fire({
              icon: 'success',
              title: 'Your picture has been updated',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: 'Failed to update picture',
              showConfirmButton: false,
              timer: 1500
            })
            reject(err)
          })
      })
    },
    logout (context) {
      context.commit('remove')
      localStorage.removeItem('id')
      localStorage.removeItem('token')
      localStorage.removeItem('role')
    },
    addSchedule (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_BACKEND}/schedules/create`, payload)
          .then(res => {
            const result = res.data.message
            context.commit('set_schedule', result)
            resolve(result)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    getUserById (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_BACKEND}/users/${localStorage.id}`)
          .then(res => {
            const result = res.data.data
            context.commit('SET_USER_BY_ID', result)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getSchedules (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_BACKEND}/schedules?transit=${payload.transit || ''}&facility=${payload.facility || ''}&airline=${payload.airline || ''}&keyword=${payload.keyword || ''}`)
          .then(res => {
            const result = res.data.schedules
            context.commit('set_schedules', result)
            resolve(res)
          })
          .catch(err => {
            reject(err.response.data)
          })
      })
    },
    interceptorRequest () {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse () {
      axios.interceptors.response.use(function (response) {
        console.log(response.data)
        if (response.data.status === 'Success') {
          if (response.data.message === 'Register success') {
            Swal.fire({
              icon: 'success',
              title: 'Success register',
              showConfirmButton: false,
              timer: 2000
            })
            router.push('/auth/login')
          } else if (response.data.message === 'Create schedule success!') {
            Swal.fire({
              icon: 'success',
              title: 'Create schedule success!',
              showConfirmButton: false,
              timer: 2000
            })
          }
        } else {
          if (response.data.message === 'Email not found') {
            Swal.fire({
              icon: 'error',
              title: 'Email not found',
              showConfirmButton: false,
              timer: 2000
            })
          }
        }
        return response
      }, function (error) {
        console.log(error.response)
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
          } else if (error.response.data.message === 'Password Wrong') {
            Swal.fire({
              icon: 'error',
              title: 'Password Wrong',
              showConfirmButton: false,
              timer: 2000
            })
          } else if (error.response.data.message === 'Invalid token') {
            Swal.fire({
              icon: 'error',
              title: 'Invalid token',
              showConfirmButton: false,
              timer: 2000
            })
          }
        }
        return Promise.reject(error)
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    userProfile (state) {
      return state.userProfile
    },
    isAdmin (state) {
      if (state.role === 'Admin') {
        return 'Admin'
      } else {
        return 'Admin'
      }
    },
    schedules (state) {
      return state.schedules
    }
  },
  modules: {
  }
})

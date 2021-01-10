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
    userProfile: {},
    schedules: [],
    scheduleById: [],
    ticket: {},
    detailTicket: {}
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
    set_role (state, payload) {
      state.role = payload
    },
    set_ticket (state, payload) {
      state.ticket = payload
    },
    set_detail_ticket (state, payload) {
      state.detailTicket = payload
    },
    SET_USER_BY_ID (state, payload) {
      state.userProfile = payload
      state.schedule = []
      state.role = null
    },
    SET_SCHEDULES (state, payload) {
      state.schedules = payload
    },
    SET_SCHEDULE_BY_ID (state, payload) {
      state.scheduleById = payload
    },
    remove (state) {
      state.users = []
      state.id = null
      state.token = null
      state.ticket = {}
      state.schedule = []
      state.role = null
      state.userProfile = {}
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
            console.log(err.response)
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
    createTicket (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_URL_BACKEND}/tickets`, payload)
          .then(res => {
            const result = res.data
            console.log(result)
            Swal.fire({
              icon: 'success',
              title: 'Success',
              showConfirmButton: false,
              timer: 1500
            })
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getTicket (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_BACKEND}/tickets/my-booking/${payload}`)
          .then(res => {
            const result = res.data.myBookings.tickets
            console.log('isi get ticket', result)
            context.commit('set_ticket', result)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getSchedules (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_BACKEND}/schedules`)
          .then(res => {
            const result = res.data.schedules
            context.commit('SET_SCHEDULES', result)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getSchedulesById (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_BACKEND}/schedules/${payload.id}`)
          .then(res => {
            const result = res.data.schedule
            context.commit('SET_SCHEDULE_BY_ID', result)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getDetailTicket (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_URL_BACKEND}/tickets/booking-detail/${payload}`)
          .then(res => {
            const result = res.data.booking
            context.commit('set_detail_ticket', result)
            resolve(result)
          })
          .catch(err => {
            reject(err)
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
          } else if (error.response.data.message === 'Bookings not found!') {
            Swal.fire({
              icon: 'error',
              title: 'you have not bought the ticket yet',
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
    },
    scheduleById (state) {
      return state.scheduleById
    },
    ticket (state) {
      return state.ticket
    },
    detailTicket (state) {
      return state.detailTicket
    }
  },
  modules: {
  }
})

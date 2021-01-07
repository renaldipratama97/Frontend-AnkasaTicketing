import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/auth/Auth.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Main from '../views/main/Main.vue'
import SearchResult from '../views/main/SearchResult.vue'
import BookingDetail from '../views/main/BookingDetail.vue'
import Profile from '../views/main/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/customer',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'search-result',
        name: 'SearchResult',
        component: SearchResult
      },
      {
        path: 'booking-detail',
        name: 'BookingDetail',
        component: BookingDetail
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

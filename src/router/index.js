import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Auth from '../views/auth/Auth.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Main from '../views/main/Main.vue'
import MyBooking from '../views/main/MyBooking.vue'
import SearchResult from '../views/main/SearchResult.vue'
import BookingDetail from '../views/main/BookingDetail.vue'
import Profile from '../views/main/Profile.vue'
import FlightDetail from '../views/main/FlightDetail.vue'
import AddSchedule from '../views/main/AddSchedule.vue'
import History from '../views/main/History.vue'

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
        component: Login,
        meta: { requiresVisitor: true }
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: { requiresVisitor: true }
      }
    ]
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'search-result',
        name: 'SearchResult',
        component: SearchResult,
        meta: { requiresAuth: true }
      },
      {
        path: 'booking-detail',
        name: 'BookingDetail',
        component: BookingDetail,
        meta: { requiresAuth: true }
      },
      {
        path: 'admin/add-schedule',
        name: 'AddSchedule',
        component: AddSchedule,
        meta: { requiresAuth: true }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true }
      },
      {
        path: 'my-booking',
        name: 'MyBooking',
        component: MyBooking,
        meta: { requiresAuth: true }
      },
      {
        path: 'flight-detail/:idschedule',
        name: 'FlightDetail',
        component: FlightDetail,
        meta: { requiresAuth: true }
      },
      {
        path: 'history',
        name: 'History',
        component: History,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      console.log('?')
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/main/profile'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

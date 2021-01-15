import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import datePicker from 'vue-bootstrap-datetimepicker'
import VueSplide from '@splidejs/vue-splide'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(datePicker)
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueSplide)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filter/date.filter'
import currencyFilter from '@/filter/currency.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: 'AIzaSyAQ8OblDGPakS0hX3hGr-z4h_LR7A4R1Tk',
  authDomain: 'crm-vue-den.firebaseapp.com',
  databaseURL: 'https://crm-vue-den.firebaseio.com',
  projectId: 'crm-vue-den',
  storageBucket: 'crm-vue-den.appspot.com',
  messagingSenderId: '58576128964',
  appId: '1:58576128964:web:30bf9a0d790765f00db291',
  measurementId: 'G-1B0P5K7QQ7'
}
firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

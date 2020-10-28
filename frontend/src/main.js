import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

import VueThermometer from 'vuejs-thermometer'

Vue.config.productionTip = false

// css
import "@/assets/css/styles.css";

// libraries
Vue.use(VueThermometer)

new Vue({
  render: h => h(App),
}).$mount('#app')

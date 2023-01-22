import Vue from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.use(VueApexCharts)
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('apexchart', VueApexCharts)

new Vue({
  render: h => h(App),
}).$mount('#app')

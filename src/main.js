import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics';
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')


Vue.use(VueAnalytics, {
  id: 'UA-177238874-1',
  router
});
Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease"
})
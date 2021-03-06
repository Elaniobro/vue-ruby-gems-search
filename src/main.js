import Vue from 'vue';
import './plugins/vuetify';
import Vuex from 'vuex';
import App from './App';
import store from './store';

Vue.use(Vuex)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app');

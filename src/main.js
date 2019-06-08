import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import createConfig from './store';

import BootstrapVue from 'bootstrap-vue';

Vue.use(Vuex);
Vue.use(BootstrapVue);

const storeConfig = createConfig();
const store = new Vuex.Store(storeConfig);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

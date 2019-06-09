import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import createConfig from './store';

import BootstrapVue from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheck);
library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.use(Vuex);
Vue.use(BootstrapVue);

const storeConfig = createConfig();
const store = new Vuex.Store(storeConfig);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

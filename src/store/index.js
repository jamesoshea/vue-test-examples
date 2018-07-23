import Vue from 'vue';
import Vuex from 'vuex';

import BasketModule from './basket';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    basket: BasketModule
  }
});

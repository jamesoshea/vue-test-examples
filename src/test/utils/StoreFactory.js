import Vue from 'vue';
import Vuex from 'vuex';

import MockCountries from './MockCountries.json';

Vue.use(Vuex);

export default (getters, actions) =>
  new Vuex.Store({
    modules: {
      basket: {
        namespaced: true,
        actions,
        getters: {
          projectId: () => getters.basket.currentTotal || null,
          currentTotal: () => getters.basket.currentTotal || null
        }
      }
    }
  });

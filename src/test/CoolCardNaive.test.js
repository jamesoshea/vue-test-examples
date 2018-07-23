import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CoolCard from '../components/CoolCard.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  incrementTotal: jest.fn()
};

describe('CoolCardNaive', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        basket: {
          namespaced: true,
          actions,
          getters: {
            currentTotal: () => 789
          }
        }
      }
    });
  });
  test('card should show correct total', () => {
    const wrapper = mount(CoolCard, { store, localVue });
    expect(wrapper.vm.currentTotal).toEqual(789);
  });
});

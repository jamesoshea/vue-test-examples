import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CoolCard from '../components/CoolCard.vue';
import StoreFactory from './utils/StoreFactory';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
  incrementTotal: jest.fn()
};

describe('CoolCard', () => {
  let store;
  beforeEach(() => {
    store = StoreFactory(
      {
        basket: { currentTotal: 567 }
      },
      actions
    );
  });
  test('should render content correctly', () => {
    const wrapper = mount(CoolCard, { store, localVue });
    expect(wrapper.find('[data-test="cool-card-div"]').text()).toEqual(
      'hello I am a card :)'
    );
  });
  test('someMethod should add numbers together', () => {
    const wrapper = mount(CoolCard, { store, localVue });
    expect(wrapper.vm.someMethod(1, 2)).toEqual(3);
  });
  test('someComputedProperty should evaluate buzzwords correctly', () => {
    const wrapper = mount(CoolCard, {
      store,
      localVue,
      propsData: {
        wow: 'wow'
      }
    });
    wrapper.setData({
      buzzword: 'Big Data'
    });
    expect(wrapper.vm.someComputedProperty).toEqual('Big Data is very big');
  });
  test('card should show correct total', () => {
    const wrapper = mount(CoolCard, { store, localVue });
    expect(wrapper.vm.currentTotal).toEqual(567);
  });
});

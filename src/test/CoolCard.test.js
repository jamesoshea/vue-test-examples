import { mount } from '@vue/test-utils';
import CoolCard from '../components/CoolCard.vue';

describe('CoolCard', () => {
  test('should render content correctly', () => {
    const wrapper = mount(CoolCard);
    expect(wrapper.find('[data-test="cool-card-div"]').text()).toEqual(
      'hello I am a card :)'
    );
  });
  test('someMethod should add numbers together', () => {
    const wrapper = mount(CoolCard);
    expect(wrapper.vm.someMethod(1, 2)).toEqual(3);
  });
  test('someComputedProperty should evaluate buzzwords correctly', () => {
    const wrapper = mount(CoolCard, {
      propsData: {
        wow: 'wow'
      }
    });
    wrapper.setData({
      buzzword: 'Big Data'
    });
    expect(wrapper.vm.someComputedProperty).toEqual('Big Data is very big');
  });
});

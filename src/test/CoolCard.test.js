import { mount } from '@vue/test-utils';
import CoolCard from '../components/CoolCard.vue';

describe('CoolCard', () => {
  test('should render content correctly', () => {
    const wrapper = mount(CoolCard);
    expect(wrapper.find('[data-test="cool-card-div"]').text()).toEqual(
      'hello I am a card :)'
    );
  });
});

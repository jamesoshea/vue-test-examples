import { mount } from '@vue/test-utils';
import FakeComponent from '../components/FakeComponent.vue';

describe('FakeComponent', () => {
  test('it should display the right number of table rows', () => {
    const wrapper = mount(FakeComponent);
    expect(
      wrapper.findAll('[data-test="fake-table-row"]').wrappers.length
    ).toBe(2);
  });
});

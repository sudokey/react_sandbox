import * as React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
  test('should display a signle title', () => {
    const wrapper = shallow(<Header description="test description" title="test title" />);
    const title = wrapper.find('[data-test="title"]');

    expect(title).toHaveLength(1);
    expect(title.text()).toBe('test title');
  });
});

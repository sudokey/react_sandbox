import * as React from 'react';
import { shallow } from 'enzyme';
import { Component } from './index';
import Header from '../../../components/header';

describe('Main route', () => {
  test('should have a header', () => {
    const wrapper = shallow(<Component services={{}} />);

    expect(wrapper.find(Header)).toHaveLength(1);
  });
});

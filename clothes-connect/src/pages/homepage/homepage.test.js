import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import HomePage from './homepage.component';

it('should render HomePage coponent', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper).toMatchSnapshot();
})

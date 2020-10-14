import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

it.skip("should render App component", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
});

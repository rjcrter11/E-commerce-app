import React from 'react';
import { create } from 'react-test-renderer';

import CustomButton from './custom-button.component';

it('should render CustomButton component', () => {
    const wrapper = create(<CustomButton />)
    expect(wrapper.toJSON()).toMatchSnapshot()
})
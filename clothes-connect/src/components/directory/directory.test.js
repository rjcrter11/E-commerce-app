import React from 'react';
import { create } from 'react-test-renderer'

import { Directory } from './directory.component'

it('should render Directory component', () => {
    const wrapper = create(<Directory sections={[]} />)
    expect(wrapper.toJSON()).toMatchSnapshot();
})
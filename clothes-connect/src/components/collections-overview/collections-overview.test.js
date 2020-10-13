import React from 'react';
import { create } from 'react-test-renderer';


import CollectionsOverview from './collections-overview.component';

it.skip('should render CollectionsOverview component', () => {
    const wrapper = create(<CollectionsOverview collections={[]} />)

    expect(wrapper.toJSON()).toMatchSnapshot()
})
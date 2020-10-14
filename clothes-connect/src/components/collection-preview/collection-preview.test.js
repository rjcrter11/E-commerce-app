import React from 'react';

import { create } from 'react-test-renderer';

import CollectionPreview from './collection-preview.component';

describe('CollectionPreview component', () => {
    let wrapper;

    const mockProps = {
        title: 'hats',
        items: []
    }
    wrapper = create(<CollectionPreview {...mockProps} />)

    it('should render CollectionPreview component', () => {
        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})
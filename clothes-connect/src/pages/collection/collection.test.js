import React from 'react';

import { shallow } from 'enzyme';

import { CollectionPage } from './collection.component'
//import * as collectionItem from '../../components/collection-item'
describe('CollectionPage component', () => {
    let enzymeWrapper;
    let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

    beforeEach(() => {
        const mockCollection = {
            items: mockItems,
            title: 'test'
        };


        enzymeWrapper = shallow(<CollectionPage collection={mockCollection} />)

    })

    it('should render CollectionPage component', () => {
        expect(enzymeWrapper).toMatchSnapshot()
    })
})
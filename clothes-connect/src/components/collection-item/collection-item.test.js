import React from 'react';

import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { CollectionItem } from './collection-item.component'


describe('CollectionItem component', () => {
    let wrapper;
    let enzymeWrapper;
    let mockAddItem;
    const imageUrl = 'www.testImg.com';
    const mockName = 'black hat';
    const mockPrice = 10;

    beforeEach(() => {
        mockAddItem = jest.fn()

        const mockProps = {
            item: {
                imageUrl: imageUrl,
                price: mockPrice,
                name: mockName
            },
            addItem: mockAddItem
        };

        wrapper = create(<CollectionItem  {...mockProps} />)
        enzymeWrapper = shallow(<CollectionItem {...mockProps} />)
    });

    it('should render CollectionItem component', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should call addItem when AddButton is clicked', () => {
        enzymeWrapper.find('[data-testid="add-button"]').simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    });
    it.skip('should render image as a prop on BackgroundImage', () => {
        expect(enzymeWrapper.find('[data-testid="background-image"]').prop('imageUrl')).toBe(imageUrl)
    })
    it('should render name prop in span', () => {
        expect(enzymeWrapper.find('[data-testid="name"]').text()).toBe(" black hat ")
    })
    it('should render price prop in span', () => {
        const price = parseInt(enzymeWrapper.find('[data-testid="price"]').text());
        expect(price).toBe(mockPrice);
    })
})
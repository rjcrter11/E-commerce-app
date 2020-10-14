import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import { CheckoutItem } from './checkout-item.component';


describe('CheckoutItem Component', () => {
    let wrapper;
    let enzymeWrapper
    let mockClearItem;
    let mockAddItem;
    let mockRemoveItem;

    beforeEach(() => {
        mockClearItem = jest.fn();
        mockAddItem = jest.fn();
        mockRemoveItem = jest.fn();

        const mockProps = {
            cartItem: {
                imageUrl: 'www.testimg.com',
                price: 10,
                name: 'hats',
                quantity: 2
            },
            clearItem: mockClearItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem
        };

        wrapper = create(<CheckoutItem {...mockProps} />);
        enzymeWrapper = shallow(<CheckoutItem {...mockProps} />)
    });

    it('should render CheckoutItem component', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('should call clearItem when remove button is clicked', () => {

        enzymeWrapper.find('[data-testid="remove-button"]').simulate('click')
        expect(mockClearItem).toHaveBeenCalled();
    })
    it('should call removeItem when left arrow is clicked', () => {
        enzymeWrapper.find('[data-testid="arrow-remove"]').simulate('click');
        expect(mockRemoveItem).toHaveBeenCalled();
    })
    it('should call addItem when right arrow is clicked', () => {
        enzymeWrapper.find('[data-testid="arrow-add"]').simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    })

})


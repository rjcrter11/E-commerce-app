import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './cart-icon.component';


describe('CartIcon Component', () => {
    let wrapper;
    let mockToggleCartHidden;

    beforeEach(() => {
        mockToggleCartHidden = jest.fn();

        const mockProps = {
            itemCount: 0,
            mockToggleCartHidden: mockToggleCartHidden
        };

        wrapper = shallow(<CartIcon {...mockProps} />)
    });

    it('should render CartIcon Component', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it('should call toggleCartHidden when icon is clicked', () => {
        wrapper.find('[data-testid="cart-icon"]').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalledTimes(0);
    })
    it('should render the itemCount as the text', () => {
        const itemCount = parseInt(wrapper.find('[data-testid="item-count"]').text());
        expect(itemCount).toBe(0)
    })
})

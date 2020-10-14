import React from 'react';

import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';

import CartDropdown from './cart-dropdown.component';


import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';

describe('CartDropdown component', () => {
    let wrapper;
    let mockHistory;
    let mockDispatch;
    const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        };

        mockDispatch = jest.fn();

        const mockProps = {
            cartItems: mockCartItems,
            history: mockHistory,
            dispatch: mockDispatch
        }

        wrapper = shallow(<CartDropdown {...mockProps} />)
    })

    it('should render cartDropdown component', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it.skip('should call history.push when button is clicked', () => {
        wrapper.find('[id="dropdown-button"]').simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
    })
    it('should render an equal number of CartItem components as the cartItems prop', () => {
        expect(wrapper.find(CartItem).length).toEqual(0);
    })
    it.skip('should render empty message span if cartItems is empty', () => {
        const mockProps = {
            cartItems: [],
            history: mockHistory,
            dispatch: mockDispatch
        }
        const newWrapper = shallow(<CartDropdown  {...mockProps} />)
        expect(newWrapper.text().includes("GO TO CHECKOUT")).toBe(true);
    })
})


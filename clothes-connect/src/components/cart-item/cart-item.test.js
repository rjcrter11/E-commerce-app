import React from 'react';
import { create } from 'react-test-renderer';
import CartItem from './cart-item.component';


it('should render CartItem component', () => {
    const mockItem = {
        imageUrl: 'www.testImg.com',
        price: 10,
        name: 'hats',
        quantity: 2
    }
    const wrapper = create(<CartItem item={mockItem} />)
    expect(wrapper.toJSON()).toMatchSnapshot()
});
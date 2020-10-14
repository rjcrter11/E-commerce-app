import React from 'react';
import { create } from 'react-test-renderer';
import { CheckoutPage } from './checkout.component';


let wrapper;

beforeEach(() => {
    const mockProps = {
        cartItems: [],
        total: 100
    };
    wrapper = create(<CheckoutPage {...mockProps} />)
});

it('should render CheckoutPage component', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
})


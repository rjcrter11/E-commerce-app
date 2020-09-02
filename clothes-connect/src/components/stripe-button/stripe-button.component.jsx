import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HMxyHEJaOlEsFDU7M6FFw0ZoYlmcOhk4OGoydj6wbZEsnfgZ3zx3ZhTvDcIogiClvmMquOolBqlVmHCwn5h6sdZ0097LkMmQh'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothes Connect'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/PFF.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton; 
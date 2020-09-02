import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown' >
        <div className={`${cartItems.length > 3 ? 'overflow' : ''} cart-items`} >
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />
                ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItemsCount
})

export default connect(mapStateToProps)(CartDropdown); 
import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import './header.styles.scss';

export const Header = ({ currentUser, hidden }) => (
    <div className='header' >
        <Link className='logo-container' to='/' >
            <img src={require('../../assets/logo.png')} alt='logo' />
        </Link>

        <div className='options'  >
            <CartIcon />
            {
                hidden ? null : <CartDropdown />
            }
            <Link data-testid="shop-link" to='/shop' className='option' >SHOP</Link>
            {
                currentUser ?
                    <a href='/' data-testid="signout-link" className='option sign-in-link ' onClick={() => auth.signOut()} >SIGN OUT</a>
                    :
                    <Link data-testid="signin-link" className='option sign-in-link' to='/signin' >SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
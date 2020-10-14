import CartActionTypes from './cart.types';

import {
    toggleCartHidden,
    addItem,
    removeItem,
    clearItemFromCart,
} from './cart.actions'

describe('toggleCartHidden action', () => {
    it('should create the toggleHidden action', () => {
        expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN)
    })
})

describe('addItem action', () => {
    it('should create addItem action', () => {
        expect(addItem().type).toEqual(CartActionTypes.ADD_ITEM)
    })
})

describe('removeItem action', () => {
    it('should create remove action', () => {
        expect(removeItem().type).toEqual(CartActionTypes.REMOVE_ITEM)
    })
})

describe('clearItemsFromCart action', () => {
    it('should create clearItemFromCart action', () => {
        expect(clearItemFromCart().type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART)
    })
})
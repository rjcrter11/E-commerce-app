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
    });
});

describe('addItem action', () => {
    it('should create addItem action', () => {
        const mockItem = {
            id: 1
        };

        const action = addItem(mockItem)
        expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
        expect(action.payload).toEqual(mockItem);

    });
});

describe('removeItem action', () => {
    it('should create remove action', () => {
        const mockItem = {
            id: 1
        };

        const action = removeItem(mockItem);

        expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
        expect(action.payload).toEqual(mockItem);
    });
});

describe('clearItemsFromCart action', () => {
    it('should create clearItemFromCart action', () => {
        const mockItem = {
            id: 1
        };
        const action = clearItemFromCart(mockItem);

        expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
        expect(action.payload).toEqual(mockItem)
    });
});
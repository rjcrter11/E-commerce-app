import { UserActionTypes } from './user.types';

import userReducer from './user.reducer';

const initialState = {
    currentUser: null

};

describe('userReducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    it('should set currentUser to payload on signInSuccess action', () => {
        const mockUser = {
            id: 1,
            displayName: 'Bobbo'
        };
        expect(
            userReducer(initialState, {
                type: UserActionTypes.SET_CURRENT_USER,
                payload: mockUser
            }).currentUser
        ).toBe(mockUser)
    })
});
import { UserActionTypes } from './user.types';

import { setCurrentUser } from './user.actions';

it('should create the setCurrentUser action', () => {

    const mockUser = {
        user: 'Bobbo'
    }
    const action = setCurrentUser(mockUser)
    expect(action.type).toEqual(
        UserActionTypes.SET_CURRENT_USER
    );
    expect(action.payload).toBe(mockUser)
})
import React from 'react';
import { create } from 'react-test-renderer';

import SignInAndSignUpPage from './sign-in-and-sign-up.component';

it('should render SignIn/SignUpPage component', () => {
    const wrapper = create(<SignInAndSignUpPage />);
    expect(wrapper.toJSON()).toMatchSnapshot();
})
import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { Header } from './header.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

describe('Header component', () => {
    let wrapper;
    let enzymeWrapper;
    let mockSignOutStart;

    beforeEach(() => {
        mockSignOutStart = jest.fn();

        const mockProps = {
            hidden: true,
            currentUser: {
                uuid: '123'
            },
            signOutStart: mockSignOutStart
        };
        //wrapper = create(<Header {...mockProps} />)
        enzymeWrapper = shallow(<Header {...mockProps} />)
    })

    it.skip('should render Header component', () => {
        expect(wrapper.toJSON()).toMatchSnapshot()
    })


    describe('If current user is present', () => {
        it('should render sign out link,', () => {
            expect(enzymeWrapper.find('[data-testid="signout-link"]').text()).toBe('SIGN OUT')
        })
        it.skip('should call signOutStart method when link is clicked,', () => {
            enzymeWrapper.find('[data-testid="signout-link"]').simulate('click')
            expect(mockSignOutStart).toHaveBeenCalled();
        })
    })
    describe('If current user is null', () => {
        it('should render sign-in link', () => {
            const mockProps = {
                hidden: true,
                currentUser: null,
                signOutStart: mockSignOutStart
            };

            const newWrapper = shallow(<Header {...mockProps} />);

            expect(newWrapper.find('[data-testid="signin-link"]').text()).toBe('SIGN IN')
        })
    })

    describe('If hidden is true', () => {
        it('should not render cartDropdown', () => {
            expect(enzymeWrapper.exists(CartDropdown)).toBe(false)
        })
    })

    describe('If current user is null', () => {
        it('should render CartDropdown', () => {
            const mockProps = {
                hidden: false,
                currentUser: null,
                signOutStart: mockSignOutStart
            };

            const newWrapper = shallow(<Header {...mockProps} />);

            expect(newWrapper.exists(CartDropdown)).toBe(true)
        })
    })

});


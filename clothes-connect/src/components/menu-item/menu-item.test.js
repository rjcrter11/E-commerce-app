import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import { MenuItem } from './menu-item.component'

describe("MenuItem component", () => {
    let wrapper;
    let enzymeWrapper;
    let mockMatch;
    let mockHistory;
    const linkUrl = '/hats';
    const size = 'large';
    const imageUrl = 'testImage';

    beforeEach(() => {
        mockMatch = {
            url: '/shop'
        };

        mockHistory = {
            push: jest.fn()
        };

        const mockProps = {
            match: mockMatch,
            history: mockHistory,
            linkUrl,
            size,
            title: 'hats',
            imageUrl
        };
        wrapper = create(<MenuItem {...mockProps} />)
        enzymeWrapper = shallow(<MenuItem {...mockProps} />)
    });

    it('should render MenuItem component', () => {
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    it('should call history.push with the right string when MenuItemContainer is clicked', () => {
        enzymeWrapper.find('[data-testid="menu-item-container"]').simulate('click');

        expect(mockHistory.push).toHaveBeenCalled()
        expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
    })
    it.skip('should pass size to MenuItemContainer as the prop size', () => {
        expect(enzymeWrapper.find('[data-testid="menu-item-container"]').prop('size')).toBe(size)
    })
    it.skip('should pass imageUrl to backgroundImageContainer as the prop imageUrl', () => {
        expect(enzymeWrapper.find('[data-testid="background-image-container"]').prop('imageUrl')).toBe(imageUrl)
    })
})
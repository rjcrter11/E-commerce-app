import React from 'react';

import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import FormInput from './form-input.component';

describe('FormInput component', () => {
    let wrapper;
    let enzymeWrapper;
    let mockHandleChange;

    beforeEach(() => {
        mockHandleChange = jest.fn()

        const mockProps = {
            label: 'email',
            value: 'test@gmail.com',
            handleChange: mockHandleChange
        };

        wrapper = create(<FormInput {...mockProps} />)
        enzymeWrapper = shallow(<FormInput  {...mockProps} />)
    });

    it('should render FormInput component', () => {
        expect(wrapper.toJSON()).toMatchSnapshot()
    });
    it('should call handleChange method when input changes', () => {
        enzymeWrapper.find('[data-testid="form-input"]').simulate('change');
        expect(mockHandleChange).toHaveBeenCalled();
    })
    it('should render form input label if there is a label', () => {
        expect(enzymeWrapper.exists('[data-testid="input-label"]')).toBe(true)
    });

    it('should not render form input label if there is no label', () => {
        const mockNewProps = {
            label: '',
            value: 'test@gmail.com',
            handleChange: mockHandleChange
        };
        const newWrapper = shallow(<FormInput {...mockNewProps} />);
        expect(newWrapper.exists('[data-testid="input-label"]')).toBe(false)
    })
})
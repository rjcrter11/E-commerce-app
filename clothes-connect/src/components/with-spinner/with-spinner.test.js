import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import WithSpinner from './with-spinner.component'

describe('WithSpinner HOC', () => {
    const TestComponent = () => <div className='test' />;
    const WrappedComponent = WithSpinner(TestComponent);


    describe('if loading is true', () => {
        it('should render Spinner component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={true} />)
            expect(wrapper.exists('[data-testid="spinner"]')).toBe(true)
        });

        it('should not render component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={true} />)
            expect(wrapper.exists(TestComponent)).toBe(false)
        })
    })

    describe('if loading is false', () => {
        it('should render component', () => {
            const wrapper = shallow(<WrappedComponent isLoading={false} />)
            expect(wrapper.exists(TestComponent)).toBe(true)
        })
        it('should not render spinner', () => {
            const wrapper = shallow(<WrappedComponent isLoading={false} />)
            expect(wrapper.exists('[data-testid="spinner"]')).toBe(false)
        })
    })
})
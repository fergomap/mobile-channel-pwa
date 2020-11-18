import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputComponent from './input.component';

describe('InputComponent', () => {
    it('should render an input, an error when it is defined and call to register with the passed rules', () => {
        const register = jest.fn();

        const { container } = render(<InputComponent label="label" type="text" rules={{}} field="name" register={register} error="error" />);

        expect(register).toHaveBeenCalled();
        expect(container.getElementsByClassName('error').length).toEqual(1);
    });

    it('should not render an error when no error is passed', () => {
        const { container } = render(<InputComponent label="label" type="text" rules={{}} field="name" register={jest.fn()} error="" />);

        expect(container.getElementsByClassName('error').length).toEqual(0);
    });
});

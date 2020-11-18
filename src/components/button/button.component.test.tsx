import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonComponent from './button.component';

describe('ButtonComponent', () => {
    it('should render a button with the passed label and call to onClick when the button is clicked and the function is defined', () => {
        const onClick = jest.fn();

        const { container, getByTestId } = render(<ButtonComponent label="label" type="button" onClick={onClick}/>);

        fireEvent.click(getByTestId('button'));

        expect(onClick).toHaveBeenCalled();
        expect(container.getElementsByTagName('button')[0].textContent).toEqual('label');
    });
});

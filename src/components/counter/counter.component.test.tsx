import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterComponent from './counter.component';

describe('CounterComponent', () => {
    it('should render the passed label and the counter with at least two digits', () => {
        const { container } = render(<CounterComponent label="label" count={1} />);

        expect(container.getElementsByTagName('p')[0].textContent).toEqual('01');
        expect(container.getElementsByTagName('p')[1].textContent).toEqual('label');
    });
});

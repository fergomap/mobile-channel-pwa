import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import LogInComponent from './log-in.component';
import { mockAuthService } from 'services/auth.service.mock';
import * as authService from 'services/auth.service';
import { SynchronousPromise } from 'synchronous-promise';

describe('LogInComponent', () => {

    beforeEach(() => {
        mockAuthService(authService);
    });

    it('should call to firebaseLogIn when the form is submitted, render a loading spinner while the promise is not resolved, hide it when it is resolved and do not show an error when the promise works', async() => {
        const unresolvedPromise = SynchronousPromise.unresolved();
        (authService.firebaseLogIn as jest.Mock).mockReturnValue(unresolvedPromise);

        const { container, getAllByTestId, getByTestId } = render(<LogInComponent/>);

        await act(async() => {
            fireEvent.change(getAllByTestId('input')[0], { target: { value: 'mail@mail.com' }});
            fireEvent.change(getAllByTestId('input')[1], { target: { value: 'password' }});
            fireEvent.submit(getByTestId('form'));
        });

        expect(container.getElementsByClassName('loader-container').length).toEqual(1);

        act(() => {
            unresolvedPromise.resolve();
        });

        expect(container.getElementsByClassName('loader-container').length).toEqual(0);
        expect(container.getElementsByClassName('auth-error').length).toEqual(0);
        expect(authService.firebaseLogIn).toHaveBeenCalled();
    });

    it('should call to firebaseLogIn when the form is submitted and show an error when the promise fails', async() => {
        (authService.firebaseLogIn as jest.Mock).mockReturnValue(SynchronousPromise.reject({ message: 'error' }));

        const { container, getAllByTestId, getByTestId } = render(<LogInComponent/>);

        await act(async() => {
            fireEvent.change(getAllByTestId('input')[0], { target: { value: 'mail@mail.com' }});
            fireEvent.change(getAllByTestId('input')[1], { target: { value: 'password' }});
            fireEvent.submit(getByTestId('form'));
        });

        expect(container.getElementsByClassName('auth-error').length).toEqual(1);
        expect(authService.firebaseLogIn).toHaveBeenCalled();
    });
});

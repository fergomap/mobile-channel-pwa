import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import {SynchronousPromise} from 'synchronous-promise';
import {render} from '@testing-library/react';
import App from 'App';

jest.mock('views/home/home.component', () => () => <div data-testid="home"/>);
jest.mock('views/log-in/log-in.component', () => () => <div data-testid="log-in"/>);

describe('App', () => {

	beforeEach(() => {
		initFirebaseModules();
	});

	afterAll(() => {
		jest.resetModules();
	});

	describe('render', () => {
		it('should render the first spinner when data is not loaded yet', () => {
			const { container, debug } = render(<App />);
            
			expect(container.getElementsByClassName('loader-container').length).toEqual(1);
		});

		it('should render a router when data is loaded and route to LOGIN when user is null', () => {
			app.auth().onAuthStateChanged = jest.fn().mockImplementation((method) => method(null));

			const { getByTestId } = render(<App />);

			expect(getByTestId('log-in')).toBeTruthy();
		});

		it('should render home when data is loaded and the user is defined', () => {
			app.auth().onAuthStateChanged = jest.fn().mockImplementation((method) => method({ email: 'user@mail.com' }));

			const { getByTestId } = render(<App />);
		
			expect(getByTestId('home')).toBeTruthy();
		});
	});
});

const initFirebaseModules = (): void => {
	app.auth = jest.fn().mockReturnValue({
		onAuthStateChanged: jest.fn().mockReturnValue(SynchronousPromise.resolve())
	}) as any;
};

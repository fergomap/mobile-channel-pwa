import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import HomeComponent from './home.component';
import { mockUtilsService } from 'services/utils.service.mock';
import * as utilsService from 'services/utils.service';
import { mockAuthService } from 'services/auth.service.mock';
import * as authService from 'services/auth.service';
import app from 'firebase/app';
import 'firebase/auth';

describe('HomeComponent', () => {

    beforeEach(() => {
        initFirebaseAuthModule();
        mockUtilsService(utilsService);
        mockAuthService(authService);
    });

	afterAll(() => {
		// @ts-ignore -> Error from firebase, it will be fixed in the next release according to the github issue thread
		app.delete();
		jest.resetModules();
	});

    it('should call to calcDateDiff each second, call to firebaseLogOut when the logOut button is clicked and to clearInterval when the component is unmounted', () => {
        const { getByTestId, unmount } = render(<HomeComponent/>);
        
        act(() => {
            jest.runOnlyPendingTimers();
        });

        fireEvent.click(getByTestId('button'));

        expect(utilsService.calcDateDiff).toHaveBeenCalled();
        expect(authService.firebaseLogOut).toHaveBeenCalled();

        unmount();

        expect(clearInterval).toHaveBeenCalled();
    });
});

const initFirebaseAuthModule = (): void => {
	jest.spyOn(app, 'auth').mockImplementation(() => {
		return {
			currentUser: { metadata: { lastSignInTime: '' } }
		} as any;
	});
};

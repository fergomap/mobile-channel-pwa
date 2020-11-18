import { firebaseLogIn, firebaseLogOut } from './auth.service';
import app from 'firebase/app';
import 'firebase/auth';
import { SynchronousPromise } from 'synchronous-promise';

describe('AuthService', () => {

    beforeEach(() => {
        initFirebaseAuthModule();
    });

    describe('firebaseLogIn', () => {
        it('should call to signInWithEmailAndPassword', () => {
            return firebaseLogIn('', '').then(() => {
                expect(app.auth().signInWithEmailAndPassword).toHaveBeenCalled();
            });
        });
    }); 

    describe('firebaseLogOut', () => {
        it('should call to signOut', () => {
            return firebaseLogOut().then(() => {
                expect(app.auth().signOut).toHaveBeenCalled();
            });
        });
    });
});

const initFirebaseAuthModule = (): void => {
	jest.spyOn(app, 'auth').mockImplementation(() => {
		return {
			signInWithEmailAndPassword: jest.fn().mockReturnValue(SynchronousPromise.resolve()),
			signOut: jest.fn().mockReturnValue(SynchronousPromise.resolve())
		} as any;
	});
};

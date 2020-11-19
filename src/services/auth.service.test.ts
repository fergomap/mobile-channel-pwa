import { firebaseLogIn, firebaseLogOut } from './auth.service';
import app from 'firebase/app';
import 'firebase/auth';

describe('AuthService', () => {

    beforeEach(() => {
        (app.auth as any) = jest.fn().mockReturnValue({
            signInWithEmailAndPassword: jest.fn().mockReturnValue(Promise.resolve()),
            signOut: jest.fn().mockReturnValue(Promise.resolve())
        });
    });

	afterAll(() => {
		// @ts-ignore -> Error from firebase, it will be fixed in the next release according to the github issue thread
		app.delete();
		jest.resetModules();
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

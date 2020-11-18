/* istanbul ignore file */
import { SynchronousPromise } from 'synchronous-promise';

export const mockAuthService = (service: any): void => {
    service.firebaseLogIn = jest.fn().mockReturnValue(SynchronousPromise.resolve());
    service.firebaseLogOut = jest.fn().mockReturnValue(SynchronousPromise.resolve());
};

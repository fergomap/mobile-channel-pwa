import app from 'firebase/app';

export const firebaseLogIn = (email: string, password: string): Promise<app.auth.UserCredential> => {
    return app.auth().signInWithEmailAndPassword(email, password);
}

export const firebaseLogOut = (): Promise<void> => {
    return app.auth().signOut();
}

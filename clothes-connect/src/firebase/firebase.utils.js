import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAHXAlVx4i79cQVxRr2i8OH24u7ne5RBzI",
    authDomain: "clothes-connect.firebaseapp.com",
    databaseURL: "https://clothes-connect.firebaseio.com",
    projectId: "clothes-connect",
    storageBucket: "clothes-connect.appspot.com",
    messagingSenderId: "185005982601",
    appId: "1:185005982601:web:b003b2ceee409f1cc1d758",
    measurementId: "G-EVJREJMZBS"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
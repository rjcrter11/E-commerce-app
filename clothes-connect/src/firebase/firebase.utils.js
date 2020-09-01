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


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyASr0FMiG3AXIlPU19XAeCeVSWSB5wYF_4",
    authDomain: "crwn-db-2d61d.firebaseapp.com",
    projectId: "crwn-db-2d61d",
    storageBucket: "crwn-db-2d61d.appspot.com",
    messagingSenderId: "273329841558",
    appId: "1:273329841558:web:c615f509d3409d78f8e9b7",
    measurementId: "${config.measurementId}"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

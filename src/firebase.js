import firebase from "firebase/app";
import "firebase/auth";


export const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.envREACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  export const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };



    class Firebase {
        constructor() {
            firebase.initializeApp(firebaseConfig);
        
            this.auth = firebase.auth();
        }

        doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

        doSignOut = () => {
            console.log('hi');
            return this.auth.signOut();
        }

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

        doPasswordUpdate = password =>
            this.auth.currentUser.updatePassword(password);
    }

    export default Firebase;

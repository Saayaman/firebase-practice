import React from 'react';
import logo from './logo.svg';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig }  from './firebase';
import withFirebaseAuth from 'react-with-firebase-auth';

import { firebaseAppAuth, providers } from './firebase';

import './App.css';

class App extends React.Component {

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          user 
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </header>
    </div>
    );
  }
}

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();

// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);


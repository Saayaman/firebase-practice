import React from 'react';
import { withFirebase } from '../firebaseContext';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const SignOutButton = ({ firebase, history }) => (
  <button type="button" onClick={() => firebase.doSignOut().then(() => {
    history.push("/")
  }).catch(err => console.log(err))}>
    Sign Out
  </button>
);

export default compose(
    withFirebase,
    withRouter,
)(SignOutButton);
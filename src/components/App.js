import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import HomePage from './Home';

import SignUpContainer from '../containers/SignUpContainer';

// import { withFirebase } from '../firebaseContext';

import * as ROUTES from '../constants/routes';

class App extends React.Component {
  // state = {
  //   authUser: null,
  // }
  // componentDidMount() {
  //   this.props.firebase.auth.onAuthStateChanged(authUser => {
  //     authUser
  //       ? this.setState({ authUser })
  //       : this.setState({ authUser: null });
  //   });
  // }
  render() {
    return (
      <>
        <div>
            <Navigation />
    
            <hr />
    
            <Switch>
                <Route path={ROUTES.HOME} component={HomePage} />
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpContainer} />
                {/* <Route path={ROUTES.SIGN_IN} component={SignInPage} /> */}
            </Switch>
        </div>
      </>
    );
  }
}


export default App;
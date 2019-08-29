import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';

import * as ROUTES from '../constants/routes';



const Navigation = () => (
    <div><NavigationNonAuth /></div>
  );
  
  const NavigationAuth = () => (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  );
  
  const NavigationNonAuth = () => (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign up</Link>
      </li>
    </ul>
  );

export default Navigation;
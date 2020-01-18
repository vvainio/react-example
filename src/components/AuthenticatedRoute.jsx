import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import AuthService from '../services/AuthService';

const AuthenticatedRoute = ({ children, ...rest }) => {
  // eslint-disable-next-line react/prop-types
  const render = ({ location }) => (
    AuthService.isAuthenticated
      ? children
      : <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );

  return (
    <Route
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
      render={render}
    />
  );
};

AuthenticatedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticatedRoute;

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useAuth();

  // eslint-disable-next-line react/prop-types
  const render = ({ location }) => (
    auth.isAuthenticated
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

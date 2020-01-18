import React from 'react';
import { useHistory, useLocation, Redirect } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const defaultState = { from: { pathname: '/' } };
  const { from } = location.state || defaultState;

  if (auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  const login = () => {
    auth
      .signin()
      .then(() => history.replace(from))
      .catch(() => {}); // noop
  };

  return (
    <div>
      <button
        type="submit"
        onClick={login}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginPage;

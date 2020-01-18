import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import AuthService from '../services/AuthService';

const LoginPage = () => {
  const history = useHistory();
  const location = useLocation();
  const defaultState = { from: { pathname: '/' } };
  const { from } = location.state || defaultState;

  const login = () => {
    AuthService
      .authenticate()
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

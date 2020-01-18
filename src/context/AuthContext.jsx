import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import AuthService from '../services/AuthService';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();
const LOCAL_STORAGE_KEY = 'auth';

const AuthProvider = (props) => {
  const [data, setData] = useLocalStorage(LOCAL_STORAGE_KEY);
  const [error, setError] = useState();
  const isAuthenticated = !!data;
  const isError = !!error;

  const signin = () => (
    AuthService
      .signin()
      .then((response) => setData(response))
      .catch((err) => setError(err))
  );

  const signout = () => (
    AuthService
      .signout()
      .then(() => setData())
  );

  return (
    <AuthContext.Provider
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      value={{
        data, error, isAuthenticated, isError, signin, signout,
      }}
    />
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook for child components (providers the auth object and auto-updates)
const useAuth = () => useContext(AuthContext);

export {
  AuthProvider,
  useAuth,
};

import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import AuthService from '../services/AuthService';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();
const LOCAL_STORAGE_KEY = 'auth';

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useLocalStorage(LOCAL_STORAGE_KEY);
  const isAuthenticated = !!currentUser;

  const signin = (data) => (
    AuthService
      .signin(data)
      .then((response) => setCurrentUser(response))
  );

  const signout = () => (
    AuthService
      .signout()
      .then(() => setCurrentUser())
  );

  return (
    <AuthContext.Provider
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      value={{
        currentUser, isAuthenticated, signin, signout,
      }}
    />
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// The hook to be used in components. Returns the `value` prop set in the `AuthProvider`.
// The component(s) will automatically re-render when the context value changes.
const useAuth = () => useContext(AuthContext);

export {
  AuthProvider,
  useAuth,
};

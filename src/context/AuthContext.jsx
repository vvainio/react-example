import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import AuthService from '../services/AuthService';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext();
const LOCAL_STORAGE_KEY = 'auth';

const AuthProvider = (props) => {
  const [data, setData] = useLocalStorage(LOCAL_STORAGE_KEY);
  const isAuthenticated = !!data;

  const authenticate = (params) => (
    AuthService
      .authenticateSession(params)
      .then((response) => setData(response.data))
  );

  const invalidate = () => (
    AuthService
      .invalidateSession(data.id)
      .then(() => setData())
  );

  return (
    <AuthContext.Provider
      {...props} // eslint-disable-line react/jsx-props-no-spreading
      value={{
        data, isAuthenticated, authenticate, invalidate,
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

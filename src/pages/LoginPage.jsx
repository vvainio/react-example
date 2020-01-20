import React from 'react';
import { useHistory, useLocation, Redirect } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

  if (auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  const handleLogin = (data) => {
    const redirectTo = location.state ? location.state.from : '/';

    return auth
      .authenticate(data)
      .then(() => history.replace(redirectTo));
  };

  return (
    <LoginForm onSubmit={handleLogin} />
  );
};

export default LoginPage;

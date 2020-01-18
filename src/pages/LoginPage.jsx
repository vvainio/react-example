import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();

  const login = () => {
    history.replace('/');
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

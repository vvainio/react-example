import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    if (isLoading) return false;

    event.preventDefault();

    setIsError(false);
    setIsLoading(true);

    return onSubmit({ username, password })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  const renderError = () => (
    <div>Something went wrong, please try again.</div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {isError && renderError()}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" disabled={isLoading}>Log in</button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;

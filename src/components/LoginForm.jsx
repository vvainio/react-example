import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FORM_FIELDS = {
  username: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(FORM_FIELDS);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: [event.target.value],
    });
  };

  const handleSubmit = (event) => {
    if (isLoading) return false;

    event.preventDefault();

    setIsError(false);
    setIsLoading(true);

    return onSubmit(formData)
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
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
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

import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const Header = () => {
  const auth = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    auth
      .invalidate()
      .then(() => history.push('/login'));
  };

  // Avoid rendering the header for unauthorized users
  if (!auth.isAuthenticated) {
    return null;
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <button type="submit" onClick={handleLogout}>Log out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

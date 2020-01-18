import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import AuthService from '../services/AuthService';

const Header = () => {
  const history = useHistory();

  const invalidateSession = () => {
    AuthService
      .signout()
      .then(() => history.push('/login'));
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/advancedsearch">Advanced search</Link>
        </li>
        <li>
          <button type="submit" onClick={invalidateSession}>Log out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <SearchPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
